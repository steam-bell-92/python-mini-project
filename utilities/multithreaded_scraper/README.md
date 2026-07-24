# High-Performance Multithreaded Web Scraper

A Python utility for concurrent web scraping with rate limiting, URL discovery, HTML meta extraction, and export options.

## Features

- **Multithreaded Architecture**: Utilizes Python's `concurrent.futures.ThreadPoolExecutor` for concurrent HTTP fetching.
- **HTML Content Extractor**: Extracts page title, meta description, heading tags (`h1`-`h6`), and structured hyperlinks.
- **Rate-Limiting & Rotation**: Supports request delay throttling and random User-Agent header rotation.
- **Export Options**: Thread-safe exporter supporting both JSON and CSV output formats.

## Usage

### CLI Execution

```bash
python utilities/multithreaded_scraper/main.py https://example.com -w 5 -d 1 -o results.json
```

### Options

- `-w`, `--workers`: Number of worker threads (default: 5).
- `-d`, `--depth`: Crawling recursion depth (default: 1).
- `-o`, `--output`: Output file path (default: `scraped_output.json`).
- `--format`: Format of exported file (`json` or `csv`).
