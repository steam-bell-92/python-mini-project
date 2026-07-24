"""
High-Performance Multithreaded Web Scraper Engine using ThreadPoolExecutor.
"""

import time
import queue
import urllib.request
import urllib.error
import random
from typing import List, Dict, Set, Any, Optional
from concurrent.futures import ThreadPoolExecutor, as_completed

from utilities.multithreaded_scraper.parser import HTMLParser
from utilities.multithreaded_scraper.exporter import DataExporter


USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0",
]


class MultithreadedScraper:
    def __init__(
        self,
        start_urls: List[str],
        max_workers: int = 5,
        max_depth: int = 1,
        timeout: int = 10,
        delay: float = 0.5,
    ):
        self.start_urls = start_urls
        self.max_workers = max_workers
        self.max_depth = max_depth
        self.timeout = timeout
        self.delay = delay

        self.visited_urls: Set[str] = set()
        self.scraped_data: List[Dict[str, Any]] = []
        self.failed_urls: List[Dict[str, str]] = []

    def _fetch_url(self, url: str) -> Optional[str]:
        """Fetch content from a single URL with custom headers and error handling."""
        headers = {"User-Agent": random.choice(USER_AGENTS)}
        req = urllib.request.Request(url, headers=headers)

        try:
            if self.delay > 0:
                time.sleep(self.delay)

            with urllib.request.urlopen(req, timeout=self.timeout) as response:
                content_type = response.info().get_content_type()
                if "text/html" in content_type:
                    charset = response.info().get_param("charset") or "utf-8"
                    return response.read().decode(charset, errors="ignore")
        except Exception as e:
            self.failed_urls.append({"url": url, "error": str(e)})

        return None

    def _scrape_page(self, url: str, depth: int) -> Optional[Dict[str, Any]]:
        """Fetch and parse page content."""
        html = self._fetch_url(url)
        if not html:
            return None

        parser = HTMLParser(url)
        result = parser.parse(html)
        result["depth"] = depth
        return result

    def run(self) -> List[Dict[str, Any]]:
        """Run the multithreaded scraper pipeline across depths."""
        current_queue: List[str] = list(self.start_urls)

        for depth in range(self.max_depth):
            if not current_queue:
                break

            next_queue: List[str] = []
            urls_to_scrape = [u for u in current_queue if u not in self.visited_urls]

            for u in urls_to_scrape:
                self.visited_urls.add(u)

            if not urls_to_scrape:
                break

            with ThreadPoolExecutor(max_workers=self.max_workers) as executor:
                future_to_url = {
                    executor.submit(self._scrape_page, url, depth): url
                    for url in urls_to_scrape
                }

                for future in as_completed(future_to_url):
                    data = future.result()
                    if data:
                        self.scraped_data.append(data)
                        # Collect new links for next depth
                        for link in data.get("links", []):
                            if link not in self.visited_urls:
                                next_queue.append(link)

            current_queue = next_queue

        return self.scraped_data
