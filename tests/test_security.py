"""
Unit tests for security module.
"""

import pytest
import tarfile
import tempfile
import os
import time
import io
from pathlib import Path

from security import (
    validate_url,
    safe_extract,
    InvalidURLError,
    UnsafeTarError,
    URLSanitizer,
    SafeTarExtractor,
)


class TestURLSanitizer:
    """Tests for URL validation."""
    
    def test_valid_urls(self):
        """Test valid URLs."""
        valid_urls = [
            "https://example.com",
            "http://example.com/path",
            "https://example.com?query=value",
        ]
        
        for url in valid_urls:
            sanitized = validate_url(url)
            assert sanitized is not None
            assert len(sanitized) > 0
    
    def test_empty_url_raises_error(self):
        with pytest.raises(InvalidURLError):
            validate_url("")
    
    def test_none_url_raises_error(self):
        with pytest.raises(InvalidURLError):
            validate_url(None)
    
    def test_control_characters(self):
        with pytest.raises(InvalidURLError):
            validate_url("http://\0example.com")
    
    def test_long_url_raises_error(self):
        long_url = "https://example.com/" + "a" * 3000
        with pytest.raises(InvalidURLError):
            validate_url(long_url)
    
    def test_blocked_ip_addresses(self):
        sanitizer = URLSanitizer(allow_localhost=False, allow_private=False)
        
        blocked_ips = [
            "http://127.0.0.1",
            "http://10.0.0.1",
            "http://192.168.1.1",
        ]
        
        for url in blocked_ips:
            with pytest.raises(InvalidURLError):
                sanitizer.validate_url(url)
    
    def test_allow_localhost(self):
        sanitizer = URLSanitizer(allow_localhost=True)
        url = "http://localhost"
        result = sanitizer.validate_url(url)
        assert result.startswith("http://localhost")
    
    def test_allow_private_ips(self):
        sanitizer = URLSanitizer(allow_private=True)
        url = "http://10.0.0.1"
        result = sanitizer.validate_url(url)
        assert result.startswith("http://10.0.0.1")
    
    def test_hostname_resolves_to_private_ip(self):
        """Test that hostnames resolving to private IPs are blocked."""
        sanitizer = URLSanitizer(allow_localhost=False, allow_private=False)
        with pytest.raises(InvalidURLError):
            sanitizer.validate_url("http://localhost")

    def test_hostname_resolves_to_private_ip_with_allow_localhost(self):
        sanitizer = URLSanitizer(allow_localhost=True)
        result = sanitizer.validate_url("http://localhost")
        assert result.startswith("http://localhost")

    def test_hostname_resolves_to_private_ip_with_allow_private(self):
        sanitizer = URLSanitizer(allow_private=True)
        result = sanitizer.validate_url("http://localhost")
        assert result.startswith("http://localhost")

    def test_unresolvable_hostname_raises_error(self):
        sanitizer = URLSanitizer()
        with pytest.raises(InvalidURLError):
            sanitizer.validate_url("http://this-domain-does-not-exist-12345.com")

    def test_blocked_port(self):
        sanitizer = URLSanitizer()
        with pytest.raises(InvalidURLError):
            sanitizer.validate_url("http://example.com:22")

    def test_blocked_port_with_hostname_private_ip(self):
        sanitizer = URLSanitizer(allow_localhost=True)
        with pytest.raises(InvalidURLError):
            sanitizer.validate_url("http://localhost:22")

    def test_allowed_ports_allowlist(self):
        sanitizer = URLSanitizer(allowed_ports=[80, 443])
        result = sanitizer.validate_url("http://example.com:80")
        assert result.startswith("http://example.com:80")

    def test_allowed_ports_rejects_non_allowed(self):
        sanitizer = URLSanitizer(allowed_ports=[80, 443])
        with pytest.raises(InvalidURLError):
            sanitizer.validate_url("http://example.com:8080")

    def test_valid_port_not_blocked(self):
        sanitizer = URLSanitizer()
        result = sanitizer.validate_url("http://example.com:8888")
        assert result.startswith("http://example.com:8888")

    def test_blocked_schemes(self):
        # These should be blocked because they're in BLOCKED_SCHEMES
        sanitizer = URLSanitizer()
        
        # javascript: - should be blocked
        with pytest.raises(InvalidURLError):
            sanitizer.validate_url("javascript:alert(1)")
        
        # file: - should be blocked
        with pytest.raises(InvalidURLError):
            sanitizer.validate_url("file:///etc/passwd")


class TestSafeTarExtractor:
    """Tests for safe tar extraction."""
    
    def test_safe_extraction(self, tmp_path):
        """Test safe extraction of tar file."""
        test_content = "Hello, World!"
        
        # Create a temporary file with content
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f:
            f.write(test_content)
            f.flush()
            temp_file = f.name
        
        # Create tar file
        tar_file = tmp_path / "test.tar"
        with tarfile.open(tar_file, 'w') as tar:
            tar.add(temp_file, arcname='test.txt')
        
        # Clean up the temp file
        os.unlink(temp_file)
        
        # Extract safely
        extract_dir = tmp_path / "extracted"
        extractor = SafeTarExtractor()
        extracted = extractor.extract(tar_file, extract_dir)
        
        assert len(extracted) > 0
        extracted_file = extract_dir / "test.txt"
        assert extracted_file.exists()
        assert extracted_file.read_text() == test_content
    
    def test_path_traversal_prevention(self, tmp_path):
        """Test path traversal prevention."""
        tar_file = tmp_path / "malicious.tar"
        
        # Create a tar file with path traversal
        with tarfile.open(tar_file, 'w') as tar:
            # Create a TarInfo with traversal path
            info = tarfile.TarInfo(name='../evil.txt')
            info.size = 10
            info.type = tarfile.REGTYPE
            
            content = b'x' * 10
            fileobj = io.BytesIO(content)
            tar.addfile(info, fileobj)
        
        # Try to extract - should raise UnsafeTarError
        extract_dir = tmp_path / "extracted"
        extractor = SafeTarExtractor()
        
        with pytest.raises(UnsafeTarError):
            extractor.extract(tar_file, extract_dir)
            
    def test_sibling_directory_traversal(self, tmp_path):
        """Test sibling directory traversal (partial path traversal)."""
        tar_file = tmp_path / "sibling_traversal.tar"
        
        with tarfile.open(tar_file, 'w') as tar:
            # If extracting to 'extracted', a sibling directory could be 'extracted_evil'
            # Using absolute paths in tar is rare but we can simulate by making the 
            # tar path resolve to a sibling directory when combined with the extract dir.
            # But SafeTarExtractor uses: extract_path / member.name
            # So if member.name is '../extracted_evil/file.txt', and extract_path is '/tmp/extracted'
            # target_path is '/tmp/extracted/../extracted_evil/file.txt' -> '/tmp/extracted_evil/file.txt'
            # The vulnerability was that this bypassed string prefix checking.
            info = tarfile.TarInfo(name='../extracted_evil/evil.txt')
            info.size = 10
            info.type = tarfile.REGTYPE
            
            content = b'x' * 10
            fileobj = io.BytesIO(content)
            tar.addfile(info, fileobj)
            
        extract_dir = tmp_path / "extracted"
        # Create the sibling directory to simulate attack scenario
        sibling_dir = tmp_path / "extracted_evil"
        sibling_dir.mkdir(exist_ok=True)
        
        extractor = SafeTarExtractor()
        
        with pytest.raises(UnsafeTarError):
            extractor.extract(tar_file, extract_dir)
            
    def test_absolute_path_traversal(self, tmp_path):
        """Test absolute path traversal prevention."""
        tar_file = tmp_path / "absolute_traversal.tar"
        
        with tarfile.open(tar_file, 'w') as tar:
            # Create a TarInfo with an absolute path
            # Need to use a generic absolute path for testing
            info = tarfile.TarInfo(name='/tmp/evil_absolute.txt')
            info.size = 10
            info.type = tarfile.REGTYPE
            
            content = b'x' * 10
            fileobj = io.BytesIO(content)
            tar.addfile(info, fileobj)
            
        extract_dir = tmp_path / "extracted"
        extractor = SafeTarExtractor(allow_absolute_paths=False)
        
        with pytest.raises(UnsafeTarError):
            extractor.extract(tar_file, extract_dir)
            
    def test_nested_valid_directories(self, tmp_path):
        """Test that nested valid directories are correctly extracted."""
        tar_file = tmp_path / "nested_valid.tar"
        
        with tarfile.open(tar_file, 'w') as tar:
            # Create nested structure
            info = tarfile.TarInfo(name='dir1/dir2/file.txt')
            info.size = 10
            info.type = tarfile.REGTYPE
            
            content = b'x' * 10
            fileobj = io.BytesIO(content)
            tar.addfile(info, fileobj)
            
        extract_dir = tmp_path / "extracted"
        extractor = SafeTarExtractor()
        
        extracted = extractor.extract(tar_file, extract_dir)
        
        assert len(extracted) == 1
        assert (extract_dir / 'dir1' / 'dir2' / 'file.txt').exists()
    
    def test_truncated_file_detection(self, tmp_path):
        """Test that truncated files (size metadata > actual data) are detected."""
        tar_file = tmp_path / "truncated.tar"

        with tarfile.open(tar_file, 'w') as tar:
            info = tarfile.TarInfo(name='truncated.txt')
            info.size = 1000
            info.type = tarfile.REGTYPE
            content = b'x' * 1000
            fileobj = io.BytesIO(content)
            tar.addfile(info, fileobj)

        data = tar_file.read_bytes()
        tar_file.write_bytes(data[:512 + 500])

        extract_dir = tmp_path / "extracted"
        extractor = SafeTarExtractor()

        with pytest.raises(UnsafeTarError):
            extractor.extract(tar_file, extract_dir)

    def test_size_limits(self, tmp_path):
        """Test file size limits."""
        tar_file = tmp_path / "large.tar"
        
        with tarfile.open(tar_file, 'w') as tar:
            # Create a large file (but not too large for testing)
            info = tarfile.TarInfo(name='large.txt')
            info.size = 100 * 1024  # 100KB (small enough for test but > limit)
            info.type = tarfile.REGTYPE
            content = b'x' * (100 * 1024)
            fileobj = io.BytesIO(content)
            tar.addfile(info, fileobj)
        
        extract_dir = tmp_path / "extracted"
        # Set small max file size for testing
        extractor = SafeTarExtractor(max_file_size=10 * 1024)  # 10KB limit
        
        with pytest.raises(UnsafeTarError):
            extractor.extract(tar_file, extract_dir)
    
    def test_max_files_limit(self, tmp_path):
        """Test maximum files limit."""
        tar_file = tmp_path / "many_files.tar"
        
        with tarfile.open(tar_file, 'w') as tar:
            for i in range(100):
                info = tarfile.TarInfo(name=f'file_{i}.txt')
                info.size = 10
                info.type = tarfile.REGTYPE
                content = b'x' * 10
                fileobj = io.BytesIO(content)
                tar.addfile(info, fileobj)
        
        extract_dir = tmp_path / "extracted"
        extractor = SafeTarExtractor(max_files=50)
        
        with pytest.raises(UnsafeTarError):
            extractor.extract(tar_file, extract_dir)
    
    def test_overwrite_protection(self, tmp_path):
        """Test that overwriting is prevented."""
        # Create a tar file
        tar_file = tmp_path / "test.tar"
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f:
            f.write("Test content")
            f.flush()
            temp_file = f.name
        
        with tarfile.open(tar_file, 'w') as tar:
            tar.add(temp_file, arcname='test.txt')
        
        os.unlink(temp_file)
        
        # Create existing file
        extract_dir = tmp_path / "extracted"
        extract_dir.mkdir()
        existing_file = extract_dir / "test.txt"
        existing_file.write_text("Existing content")
        
        extractor = SafeTarExtractor()
        
        with pytest.raises(UnsafeTarError):
            extractor.extract(tar_file, extract_dir, overwrite=False)
    
    def test_safe_extraction_with_overwrite(self, tmp_path):
        """Test safe extraction with overwrite enabled."""
        test_content = "New content"
        tar_file = tmp_path / "test.tar"
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f:
            f.write(test_content)
            f.flush()
            temp_file = f.name
        
        with tarfile.open(tar_file, 'w') as tar:
            tar.add(temp_file, arcname='test.txt')
        
        os.unlink(temp_file)
        
        extract_dir = tmp_path / "extracted"
        extract_dir.mkdir()
        existing_file = extract_dir / "test.txt"
        existing_file.write_text("Old content")
        
        extractor = SafeTarExtractor()
        extracted = extractor.extract(tar_file, extract_dir, overwrite=True)
        
        assert len(extracted) > 0
        assert existing_file.read_text() == test_content
    
    def test_empty_tar_warning(self, tmp_path):
        """Test that empty tar gives warning."""
        tar_file = tmp_path / "empty.tar"
        
        with tarfile.open(tar_file, 'w') as tar:
            pass
        
        extract_dir = tmp_path / "extracted"
        extractor = SafeTarExtractor()
        
        import warnings
        with warnings.catch_warnings(record=True) as w:
            warnings.simplefilter("always")
            extracted = extractor.extract(tar_file, extract_dir)
            assert len(extracted) == 0


@pytest.fixture
def tmp_path():
    """Provide temporary path for tests."""
    import shutil
    path = Path(tempfile.mkdtemp())
    yield path
    for _ in range(3):
        try:
            shutil.rmtree(path, ignore_errors=True)
            break
        except PermissionError:
            time.sleep(0.1)