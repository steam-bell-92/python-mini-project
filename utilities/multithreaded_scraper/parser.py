"""
HTML Parsing module for multithreaded web scraper.
Extracts title, meta descriptions, headings, paragraphs, and links from HTML content.
"""

import re
from typing import Dict, List, Any
from urllib.parse import urljoin, urlparse


class HTMLParser:
    def __init__(self, base_url: str):
        self.base_url = base_url

    def parse(self, html_content: str) -> Dict[str, Any]:
        """Extract metadata, text contents, and links from raw HTML."""
        title = self._extract_title(html_content)
        meta_description = self._extract_meta(html_content, "description")
        headings = self._extract_headings(html_content)
        links = self._extract_links(html_content)

        return {
            "url": self.base_url,
            "title": title,
            "meta_description": meta_description,
            "headings": headings,
            "links": links,
        }

    def _extract_title(self, html: str) -> str:
        match = re.search(r'<title[^>]*>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
        if match:
            return self._strip_tags(match.group(1)).strip()
        return ""

    def _extract_meta(self, html: str, name: str) -> str:
        pattern = rf'<meta[^>]+name=["\']?{name}["\']?[^>]+content=["\']([^"\']*)["\']'
        match = re.search(pattern, html, re.IGNORECASE)
        if not match:
            pattern = rf'<meta[^>]+content=["\']([^"\']*)["\'][^>]+name=["\']?{name}["\']?'
            match = re.search(pattern, html, re.IGNORECASE)
        if match:
            return match.group(1).strip()
        return ""


    def _extract_headings(self, html: str) -> List[str]:
        headings = []
        matches = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html, re.IGNORECASE | re.DOTALL)
        for m in matches:
            clean = self._strip_tags(m).strip()
            if clean:
                headings.append(clean)
        return headings

    def _extract_links(self, html: str) -> List[str]:
        links = set()
        matches = re.findall(r'<a[^>]+href=["\']?(.*?)["\']?[\s>]', html, re.IGNORECASE)
        for href in matches:
            href = href.split('#')[0].strip()
            if not href or href.startswith(('javascript:', 'mailto:', 'tel:')):
                continue

            full_url = urljoin(self.base_url, href)
            parsed = urlparse(full_url)
            if parsed.scheme in ('http', 'https'):
                links.add(full_url)

        return sorted(list(links))

    @staticmethod
    def _strip_tags(text: str) -> str:
        clean = re.sub(r'<[^>]+>', ' ', text)
        return ' '.join(clean.split())
