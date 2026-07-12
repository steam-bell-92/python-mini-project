"""
URL sanitization and validation wrapper.

Addresses CVE-2025-0938 (urllib.parse)
"""

import re
import socket
from urllib.parse import urlparse, urlunparse
from typing import Optional, List, Set
from ipaddress import ip_address, ip_network
import warnings

from .exceptions import InvalidURLError, SecurityWarning


class URLSanitizer:
    """
    Secure URL validation and sanitization.
    """
    
    BLOCKED_NETWORKS: Set[str] = {
        "0.0.0.0/8", "10.0.0.0/8", "127.0.0.0/8",
        "169.254.0.0/16", "172.16.0.0/12", "192.168.0.0/16",
        "224.0.0.0/4", "240.0.0.0/4",
        "::1/128", "fc00::/7", "fe80::/10", "ff00::/8",
    }
    
    BLOCKED_SCHEMES: Set[str] = {
        "file", "gopher", "data", "javascript", "vbscript",
        "about", "view-source", "ws", "wss"
    }

    BLOCKED_PORTS: Set[int] = {
        7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42,
        43, 53, 77, 79, 87, 95, 101, 102, 103, 104, 109, 110,
        111, 113, 115, 117, 119, 123, 135, 139, 143, 179, 389,
        443, 445, 465, 512, 513, 514, 515, 526, 530, 531, 532,
        540, 548, 554, 556, 563, 587, 601, 636, 993, 995,
        1433, 1434, 1521, 2049, 2375, 2376, 3128, 3306, 3389,
        4333, 5432, 5900, 5901, 6000, 6001, 6379, 6666, 6667,
        6668, 6669, 7001, 7002, 8000, 8080, 8081, 8443, 9000,
        9001, 9090, 9200, 9300, 11211, 27017, 27018, 27019,
    }

    def __init__(
        self,
        allowed_schemes: Optional[List[str]] = None,
        allow_localhost: bool = False,
        allow_private: bool = False,
        max_length: int = 2048,
        allowed_ports: Optional[List[int]] = None,
    ):
        self.allowed_schemes = allowed_schemes or ['http', 'https']
        self.allow_localhost = allow_localhost
        self.allow_private = allow_private
        self.max_length = max_length
        self.allowed_ports = allowed_ports
        self._blocked_networks = [ip_network(net) for net in self.BLOCKED_NETWORKS]
    
    def validate_url(self, url: str) -> str:
        """Validate and sanitize a URL."""
        if not url or not isinstance(url, str):
            raise InvalidURLError("URL must be a non-empty string")
        
        if len(url) > self.max_length:
            raise InvalidURLError(f"URL exceeds maximum length of {self.max_length}")
        
        url = url.strip()
        
        # Check if URL has a valid scheme
        if not re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*://', url):
            # For security, only add http:// if the URL looks like a domain/path
            # Don't add http:// to javascript:, data:, etc.
            blocked_prefixes = ['javascript:', 'data:', 'vbscript:', 'about:', 'gopher:', 'file:']
            if not any(url.lower().startswith(bad) for bad in blocked_prefixes):
                url = f"http://{url}"
        
        try:
            parsed = urlparse(url)
        except Exception as e:
            raise InvalidURLError(f"Failed to parse URL: {str(e)}")
        
        # Check for blocked schemes
        if parsed.scheme.lower() in self.BLOCKED_SCHEMES:
            raise InvalidURLError(f"Blocked scheme: {parsed.scheme}")
        
        if parsed.scheme.lower() not in self.allowed_schemes:
            raise InvalidURLError(
                f"Invalid scheme '{parsed.scheme}'. "
                f"Allowed: {', '.join(self.allowed_schemes)}"
            )
        
        host = parsed.hostname
        if not host:
            raise InvalidURLError("URL must have a valid hostname")

        self._validate_port(parsed.port)
        self._validate_ip_address(host)
        self._validate_characters(url)
        
        sanitized = urlunparse((
            parsed.scheme,
            parsed.netloc,
            parsed.path or '/',
            parsed.params,
            parsed.query,
            parsed.fragment
        ))
        
        return sanitized
    
    def _validate_ip_address(self, host: str) -> None:
        """Validate IP address against blocked networks, resolving hostnames via DNS."""
        try:
            ip = ip_address(host)
            self._check_blocked_ip(ip, host)
            return
        except ValueError:
            pass

        try:
            addrinfo = socket.getaddrinfo(host, None)
        except socket.gaierror:
            raise InvalidURLError(f"Failed to resolve hostname: {host}")

        seen = set()
        for _, _, _, _, sockaddr in addrinfo:
            ip = ip_address(sockaddr[0])
            if ip in seen:
                continue
            seen.add(ip)
            self._check_blocked_ip(ip, host)

    def _check_blocked_ip(self, ip, host):
        """Check a single IP against blocked networks."""
        for network in self._blocked_networks:
            if ip in network:
                if not (self.allow_localhost and ip.is_loopback):
                    if not (self.allow_private and ip.is_private):
                        raise InvalidURLError(f"Blocked IP address: {host}")

    def _validate_port(self, port: Optional[int]) -> None:
        """Validate port number against allowed/blocked lists."""
        if port is None:
            return
        if port < 1 or port > 65535:
            raise InvalidURLError(f"Invalid port number: {port}")
        if self.allowed_ports is not None:
            if port not in self.allowed_ports:
                raise InvalidURLError(
                    f"Port {port} is not allowed. "
                    f"Allowed ports: {', '.join(str(p) for p in self.allowed_ports)}"
                )
        elif port in self.BLOCKED_PORTS:
            raise InvalidURLError(f"Blocked port: {port}")
    
    def _validate_port(self, port: Optional[int]) -> None:
        """Validate port number against allowed/blocked lists."""
        if port is None:
            return
        if port < 1 or port > 65535:
            raise InvalidURLError(f"Invalid port number: {port}")
        if self.allowed_ports is not None:
            if port not in self.allowed_ports:
                raise InvalidURLError(
                    f"Port {port} is not allowed. "
                    f"Allowed ports: {', '.join(str(p) for p in self.allowed_ports)}"
                )
        elif port in self.BLOCKED_PORTS:
            raise InvalidURLError(f"Blocked port: {port}")

    def _validate_characters(self, url: str) -> None:
        """Check for unsafe or malicious characters."""
        if '\0' in url:
            raise InvalidURLError("URL contains null byte")
        
        if any(ord(c) < 32 for c in url):
            raise InvalidURLError("URL contains control characters")
        
        if '..' in url:
            warnings.warn(
                "URL contains '..' - potential path traversal",
                SecurityWarning,
                stacklevel=2
            )
    
    def is_safe_url(self, url: str) -> bool:
        """Check if URL is safe without raising exceptions."""
        try:
            self.validate_url(url)
            return True
        except InvalidURLError:
            return False


def validate_url(
    url: str,
    allowed_schemes: Optional[List[str]] = None,
    allowed_ports: Optional[List[int]] = None,
    **kwargs
) -> str:
    """Convenience function to validate a URL."""
    sanitizer = URLSanitizer(
        allowed_schemes=allowed_schemes,
        allowed_ports=allowed_ports,
        **kwargs
    )
    return sanitizer.validate_url(url)