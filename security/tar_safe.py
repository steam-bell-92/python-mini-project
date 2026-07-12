"""
Safe tar file extraction wrapper.

Addresses CVE-2025-4435 (tarfile)
"""

import tarfile
import os
import tempfile
from pathlib import Path
from typing import Optional, Union, List

from .exceptions import UnsafeTarError, SecurityWarning
import warnings


class SafeTarExtractor:
    """Safe tar file extractor with security protections."""
    
    DEFAULT_MAX_FILE_SIZE = 100 * 1024 * 1024  # 100MB
    DEFAULT_MAX_FILES = 1000
    
    def __init__(
        self,
        max_file_size: int = DEFAULT_MAX_FILE_SIZE,
        max_files: int = DEFAULT_MAX_FILES,
        preserve_permissions: bool = False,
        allow_absolute_paths: bool = False,
        block_devices: bool = True,
    ):
        self.max_file_size = max_file_size
        self.max_files = max_files
        self.preserve_permissions = preserve_permissions
        self.allow_absolute_paths = allow_absolute_paths
        self.block_devices = block_devices
        
        self.blocked_types = set()
        if block_devices:
            self.blocked_types.update({
                tarfile.BLKTYPE,
                tarfile.CHRTYPE,
                tarfile.FIFOTYPE,
            })
    
    def extract(
        self,
        tar_path: Union[str, Path],
        extract_path: Union[str, Path],
        overwrite: bool = False,
    ) -> List[Path]:
        """Safely extract a tar file."""
        tar_path = Path(tar_path)
        extract_path = Path(extract_path)
        
        if not tar_path.exists():
            raise FileNotFoundError(f"Tar file not found: {tar_path}")
        
        extract_path.mkdir(parents=True, exist_ok=True)
        
        extracted_files = []
        file_count = 0
        
        try:
            with tarfile.open(tar_path, 'r:*') as tar:
                self._validate_tar_header(tar)
                
                for member in tar.getmembers():
                    file_count += 1
                    if file_count > self.max_files:
                        raise UnsafeTarError(
                            f"Too many files in archive (>{self.max_files})"
                        )
                    
                    self._validate_member(member, extract_path, overwrite)
                    
                    if member.size > self.max_file_size:
                        raise UnsafeTarError(
                            f"File {member.name} exceeds size limit "
                            f"({member.size} > {self.max_file_size})"
                        )
                    
                    target_path = self._get_safe_path(member, extract_path)
                    
                    try:
                        if member.isfile():
                            self._extract_file(tar, member, target_path)
                        elif member.isdir():
                            target_path.mkdir(parents=True, exist_ok=True)
                        elif member.issym() or member.islnk():
                            self._extract_symlink(member, target_path)
                        else:
                            self._extract_other(member, target_path)
                        
                        extracted_files.append(target_path)
                        
                        if self.preserve_permissions:
                            self._preserve_metadata(member, target_path)
                            
                    except Exception as e:
                        raise UnsafeTarError(f"Failed to extract {member.name}: {str(e)}")
                        
        except tarfile.TarError as e:
            raise UnsafeTarError(f"Invalid tar file: {str(e)}")
        
        return extracted_files
    
    def _validate_tar_header(self, tar: tarfile.TarFile) -> None:
        """Validate tar file header."""
        try:
            if not tar.getmembers():
                warnings.warn(
                    "Tar file appears to be empty",
                    SecurityWarning,
                    stacklevel=2
                )
        except (tarfile.TarError, EOFError) as e:
            raise UnsafeTarError(f"Invalid tar header: {str(e)}")
    
    def _validate_member(
        self,
        member: tarfile.TarInfo,
        extract_path: Path,
        overwrite: bool
    ) -> None:
        """Validate a tar member for safety."""
        if not self.allow_absolute_paths and member.path.startswith('/'):
            raise UnsafeTarError(
                f"Absolute path not allowed: {member.name}"
            )
        
        target_path = self._get_safe_path(member, extract_path)
        
        # Check for path traversal
        try:
            target_abs = target_path.resolve()
            extract_abs = extract_path.resolve()
            if os.path.commonpath([str(target_abs), str(extract_abs)]) != str(extract_abs):
                raise UnsafeTarError(
                    f"Path traversal detected: {member.name} -> {target_path}"
                )
        except (OSError, RuntimeError):
            target_str = str(target_path.absolute())
            extract_str = str(extract_path.absolute())
            try:
                if os.path.commonpath([target_str, extract_str]) != extract_str:
                    raise UnsafeTarError(
                        f"Path traversal detected: {member.name} -> {target_path}"
                    )
            except ValueError:
                raise UnsafeTarError(
                    f"Path traversal detected (different drives): {member.name} -> {target_path}"
                )
        except ValueError:
            # os.path.commonpath raises ValueError on Windows for different drives
            raise UnsafeTarError(
                f"Path traversal detected (different drives): {member.name} -> {target_path}"
            )
        
        if target_path.exists() and not overwrite:
            raise UnsafeTarError(
                f"File already exists and overwrite=False: {target_path}"
            )
        
        if member.type in self.blocked_types:
            raise UnsafeTarError(
                f"Blocked file type for {member.name}: {member.type}"
            )
    
    def _get_safe_path(self, member: tarfile.TarInfo, extract_path: Path) -> Path:
        """Get safe path for extraction."""
        path = os.path.normpath(member.name)
        if path.startswith('/'):
            path = path[1:] if not self.allow_absolute_paths else path
        return extract_path / path
    
    def _extract_file(
        self,
        tar: tarfile.TarFile,
        member: tarfile.TarInfo,
        target_path: Path
    ) -> None:
        """Extract a regular file."""
        target_path.parent.mkdir(parents=True, exist_ok=True)
        
        with tempfile.NamedTemporaryFile(
            dir=target_path.parent,
            prefix='.tmp_',
            delete=False
        ) as tmp:
            try:
                src = tar.extractfile(member)
                if src is None:
                    raise UnsafeTarError(f"Could not extract file: {member.name}")
                
                bytes_copied = 0
                chunk_size = 8192
                while bytes_copied < member.size:
                    chunk = src.read(min(chunk_size, member.size - bytes_copied))
                    if not chunk:
                        raise UnsafeTarError(
                            f"Truncated file: {member.name} - expected {member.size} bytes, "
                            f"got {bytes_copied}"
                        )
                    bytes_copied += len(chunk)
                    tmp.write(chunk)
                
                src.close()
                tmp.close()
                
                if target_path.exists():
                    target_path.unlink()
                os.rename(tmp.name, target_path)
                
            except Exception:
                if os.path.exists(tmp.name):
                    os.unlink(tmp.name)
                raise
    
    def _extract_symlink(self, member: tarfile.TarInfo, target_path: Path) -> None:
        """Extract a symlink."""
        if member.linkpath:
            target = Path(member.linkpath)
            if target.is_absolute() and not self.allow_absolute_paths:
                raise UnsafeTarError(
                    f"Absolute symlink target not allowed: {member.linkpath}"
                )
        
        target_path.parent.mkdir(parents=True, exist_ok=True)
        if target_path.exists() or target_path.is_symlink():
            target_path.unlink()
        
        target_path.symlink_to(member.linkpath)
    
    def _extract_other(self, member: tarfile.TarInfo, target_path: Path) -> None:
        """Extract other file types."""
        target_path.parent.mkdir(parents=True, exist_ok=True)
        target_path.touch()
        warnings.warn(
            f"Unsupported file type {member.type} for {member.name}",
            SecurityWarning,
            stacklevel=2
        )
    
    def _preserve_metadata(self, member: tarfile.TarInfo, target_path: Path) -> None:
        """Preserve file metadata."""
        try:
            if target_path.exists():
                if member.mtime:
                    os.utime(target_path, times=(member.mtime, member.mtime))
                if member.mode:
                    os.chmod(target_path, member.mode)
        except (OSError, PermissionError) as e:
            warnings.warn(
                f"Could not preserve metadata for {target_path}: {str(e)}",
                SecurityWarning,
                stacklevel=2
            )


def safe_extract(
    tar_path: Union[str, Path],
    extract_path: Union[str, Path],
    **kwargs
) -> List[Path]:
    """Convenience function to safely extract a tar file."""
    extractor = SafeTarExtractor(**kwargs)
    return extractor.extract(tar_path, extract_path)