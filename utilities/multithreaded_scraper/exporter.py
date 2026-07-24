"""
Thread-safe Data Exporter module for JSON and CSV file formats.
"""

import json
import csv
import threading
from typing import List, Dict, Any


class DataExporter:
    def __init__(self):
        self._lock = threading.Lock()

    def export_json(self, data: List[Dict[str, Any]], filepath: str):
        """Export scraped results list to a formatted JSON file."""
        with self._lock:
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)

    def export_csv(self, data: List[Dict[str, Any]], filepath: str):
        """Export scraped results list to a CSV file."""
        if not data:
            return

        with self._lock:
            fieldnames = ["url", "title", "meta_description", "headings_count", "links_count"]
            with open(filepath, 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=fieldnames)
                writer.writeheader()
                for item in data:
                    writer.writerow({
                        "url": item.get("url", ""),
                        "title": item.get("title", ""),
                        "meta_description": item.get("meta_description", ""),
                        "headings_count": len(item.get("headings", [])),
                        "links_count": len(item.get("links", []))
                    })
