import os
import json
import tempfile
import sys
import pytest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from utilities.multithreaded_scraper import MultithreadedScraper, HTMLParser, DataExporter



SAMPLE_HTML = """
<!DOCTYPE html>
<html>
<head>
    <title>Test Page Title</title>
    <meta name="description" content="This is a test description." />
</head>
<body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <a href="/about">About Us</a>
    <a href="https://example.com/contact">Contact</a>
</body>
</html>
"""


def test_html_parser():
    parser = HTMLParser("https://example.com/test")
    res = parser.parse(SAMPLE_HTML)

    assert res["title"] == "Test Page Title"
    assert res["meta_description"] == "This is a test description."
    assert "Heading 1" in res["headings"]
    assert "Heading 2" in res["headings"]
    assert "https://example.com/about" in res["links"]
    assert "https://example.com/contact" in res["links"]


def test_exporter_json_and_csv():
    data = [{
        "url": "https://example.com",
        "title": "Example",
        "meta_description": "Desc",
        "headings": ["H1"],
        "links": ["https://example.com/1"]
    }]

    exporter = DataExporter()

    with tempfile.TemporaryDirectory() as tmpdir:
        json_file = os.path.join(tmpdir, "out.json")
        csv_file = os.path.join(tmpdir, "out.csv")

        exporter.export_json(data, json_file)
        assert os.path.exists(json_file)
        with open(json_file, 'r', encoding='utf-8') as f:
            read_json = json.load(f)
            assert len(read_json) == 1
            assert read_json[0]["title"] == "Example"

        exporter.export_csv(data, csv_file)
        assert os.path.exists(csv_file)


def test_scraper_mock_fetch(monkeypatch):
    def mock_fetch(self, url):
        return SAMPLE_HTML

    monkeypatch.setattr(MultithreadedScraper, "_fetch_url", mock_fetch)

    scraper = MultithreadedScraper(
        start_urls=["https://example.com"],
        max_workers=2,
        max_depth=1,
        delay=0
    )

    results = scraper.run()
    assert len(results) == 1
    assert results[0]["title"] == "Test Page Title"
