"""
CLI Entry point for High-Performance Multithreaded Web Scraper.
"""

import sys
import argparse
from typing import List
from utilities.multithreaded_scraper import MultithreadedScraper, DataExporter


def main():
    parser = argparse.ArgumentParser(description="High-Performance Multithreaded Web Scraper")
    parser.add_argument("urls", nargs="*", help="Target URL(s) to scrape")
    parser.add_argument("-w", "--workers", type=int, default=5, help="Number of concurrent worker threads (default: 5)")
    parser.add_argument("-d", "--depth", type=int, default=1, help="Max recursion depth (default: 1)")
    parser.add_argument("-o", "--output", type=str, default="scraped_output.json", help="Output file path")
    parser.add_argument("--format", choices=["json", "csv"], default="json", help="Output format (json/csv)")
    parser.add_argument("--delay", type=float, default=0.2, help="Delay between requests in seconds")

    args = parser.parse_args()

    target_urls = args.urls
    if not target_urls:
        print("No target URLs provided. Running interactive mode.")
        url_input = input("Enter target URL(s) separated by space: ").strip()
        if not url_input:
            print("No URLs entered. Exiting.")
            sys.exit(0)
        target_urls = url_input.split()

    print("=" * 60)
    print(f"Starting Multithreaded Scraper with {args.workers} workers...")
    print(f"Target URLs: {target_urls}")
    print(f"Depth: {args.depth} | Delay: {args.delay}s")
    print("=" * 60)

    scraper = MultithreadedScraper(
        start_urls=target_urls,
        max_workers=args.workers,
        max_depth=args.depth,
        delay=args.delay
    )

    results = scraper.run()
    print(f"\nScraping complete! Successfully processed {len(results)} pages.")

    if scraper.failed_urls:
        print(f"Failed URLs: {len(scraper.failed_urls)}")

    exporter = DataExporter()
    if args.format == "csv":
        exporter.export_csv(results, args.output)
    else:
        exporter.export_json(results, args.output)

    print(f"Exported scraped data to: {args.output}")


if __name__ == "__main__":
    main()
