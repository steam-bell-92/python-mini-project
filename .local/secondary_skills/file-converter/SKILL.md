---
name: file-converter
description: Convert, merge, split, and compress files across formats — documents, images, audio, and more.
---

# File Converter

Convert between data, document, image, audio formats, and ZIP archives. One-liners for each conversion pair.

## Tool Map

| Domain | Tool | Install |

|---|---|---|

| CSV/JSON/Excel/Parquet | `pandas` | `pip install pandas openpyxl pyarrow` |

| YAML | `pyyaml` | `pip install pyyaml` |

| XML ↔ dict | `xmltodict` | `pip install xmltodict` |

| Any doc format ↔ any | **pandoc** (CLI) | `apt install pandoc` or `pip install pypandoc_binary` |

| Markdown → HTML | `markdown` | `pip install markdown` |

| HTML → Markdown | `markdownify` | `pip install markdownify` |

| .docx read/write | `python-docx` | `pip install python-docx` |

| PDF → text/tables | `pdfplumber` | `pip install pdfplumber` |

| PDF → images | `pdf2image` | `pip install pdf2image` + `apt install poppler-utils` |

| PDF manipulation | `pypdf` | `pip install pypdf` |

| Images | `Pillow` | `pip install Pillow` |

| SVG → PNG | `cairosvg` | `pip install cairosvg` |

| HEIC → JPG | `pillow-heif` | `pip install pillow-heif` |

| Audio formats | `pydub` | `pip install pydub` + `apt install ffmpeg` |

| EPUB ↔ other | **pandoc** or `ebooklib` | `pip install ebooklib` |

| HTML → PDF | `weasyprint` | `pip install weasyprint` |

| GIF creation | `Pillow` or `imageio` | `pip install imageio[ffmpeg]` |

| PDF → SVG | `pdf2image` + `potrace` or `pymupdf` | `pip install pymupdf` |

| ZIP archives | `zipfile` (stdlib) | built-in, no install needed |

## File Input Handling

When a user wants to convert a file that can't be attached directly in the chat (e.g., `.heic`, `.flac`, `.epub`, `.psd`, `.m4a`, `.wma`, `.parquet`), ask them to upload it to the project's file system. Uploaded files typically appear in `attached_assets/` or the project root. Always check both locations. If the file isn't found, ask the user where they saved it.

Common unsupported-in-chat but convertible formats: `.heic`, `.avif`, `.webp`, `.flac`, `.ogg`, `.m4a`, `.wma`, `.aiff`, `.epub`, `.parquet`, `.psd`, `.svg`, `.zip`

## Data Formats

```python

import pandas as pd, json, yaml, xmltodict

# --- CSV ↔ JSON ---

pd.read_csv("in.csv").to_json("out.json", orient="records", indent=2)

pd.read_json("in.json").to_csv("out.csv", index=False)

# --- CSV → Excel / Excel → CSV ---

pd.read_csv("in.csv").to_excel("out.xlsx", index=False, engine="openpyxl")

pd.read_excel("in.xlsx", sheet_name="Sheet1").to_csv("out.csv", index=False)

# All sheets: pd.read_excel("in.xlsx", sheet_name=None) → dict of DataFrames

# --- CSV → Parquet (columnar, compressed) ---

pd.read_csv("in.csv").to_parquet("out.parquet", engine="pyarrow", compression="snappy")

# --- YAML ↔ JSON ---

data = yaml.safe_load(open("in.yaml")) \# ALWAYS safe_load, never load()

json.dump(data, open("out.json", "w"), indent=2)

yaml.safe_dump(json.load(open("in.json")), open("out.yaml", "w"), sort_keys=False)

# --- XML ↔ JSON ---

data = xmltodict.parse(open("in.xml").read())

json.dump(data, open("out.json", "w"), indent=2)

open("out.xml", "w").write(xmltodict.unparse(data, pretty=True))

# --- JSONL (one JSON object per line) ---

pd.read_json("in.jsonl", lines=True).to_csv("out.csv", index=False)

```

**Encoding gotchas:**

- `pd.read_csv("f.csv", encoding="utf-8-sig")` strips the BOM that Excel inserts
- Auto-detect: `import chardet; enc = chardet.detect(open("f.csv","rb").read())["encoding"]`

- CSV delimiter sniffing: `pd.read_csv("f.csv", sep=None, engine="python")`

**Nested JSON → flat CSV:**

```python

pd.json_normalize(data, sep=".").to_csv("out.csv", index=False) \# {"a":{"b":1}} → column "a.b"

```

## Document Formats — pandoc is the Swiss Army knife

```bash

# Markdown → PDF (requires LaTeX: apt install texlive-xetex)

pandoc input.md -o output.pdf --pdf-engine=xelatex

# Markdown → DOCX

pandoc input.md -o output.docx

# DOCX → Markdown (extracts images to ./media/)

pandoc input.docx -o output.md --extract-media=.

# HTML → Markdown

pandoc input.html -o output.md -t gfm

# Any → Any (pandoc supports ~40 formats)

pandoc -f docx -t rst input.docx -o output.rst

```

```python

# From Python

import pypandoc

pypandoc.convert_file("in.md", "docx", outputfile="out.docx")

```

**Without pandoc (pure Python):**

```python

# Markdown → HTML

import markdown

html = markdown.markdown(open("in.md").read(), extensions=["tables", "fenced_code", "toc"])

# HTML → Markdown

from markdownify import markdownify

md = markdownify(html, heading_style="ATX") \# ATX = \# headers, not underlines

```

## PDF Operations

```python

# --- Extract text + tables ---

import pdfplumber

with pdfplumber.open("in.pdf") as pdf:

text = "\n".join(p.extract_text() or "" for p in pdf.pages)

tables = pdf.pages[0].extract_tables() \# list of list-of-rows

# --- PDF → images (one PNG per page) ---

from pdf2image import convert_from_path

for i, img in enumerate(convert_from_path("in.pdf", dpi=200)):

img.save(f"page_{i+1}.png")

# --- Merge / split / rotate ---

from pypdf import PdfReader, PdfWriter

writer = PdfWriter()

for path in ["a.pdf", "b.pdf"]:

for page in PdfReader(path).pages:

writer.add_page(page)

writer.write("merged.pdf")

# Extract pages 2–5

reader = PdfReader("in.pdf")

writer = PdfWriter()

for p in reader.pages[1:5]:

writer.add_page(p)

writer.write("pages_2-5.pdf")

```

**PDF gotchas:**

- `pdf2image` needs `poppler-utils` installed system-wide (not a pip package)
- Scanned PDFs have no text layer — pdfplumber returns `None`. Use `pytesseract` OCR on pdf2image output.

- `PyPDF2` is deprecated → use `pypdf` (same API, maintained fork)

## Image Formats

```python

from PIL import Image

# --- Basic conversion ---

Image.open("in.png").convert("RGB").save("out.jpg", quality=90)

# convert("RGB") is REQUIRED: JPEG can't store alpha channel, will raise OSError

# --- WebP (best web format) ---

Image.open("in.jpg").save("out.webp", quality=85, method=6) \# method 0-6, 6=best compression

# --- AVIF (smallest, Pillow 11+) ---

Image.open("in.jpg").save("out.avif", quality=75)

# --- HEIC (iPhone photos) → JPG ---

from pillow_heif import register_heif_opener

register_heif_opener()

Image.open("in.heic").convert("RGB").save("out.jpg", quality=90)

# --- SVG → PNG ---

import cairosvg

cairosvg.svg2png(url="in.svg", write_to="out.png", output_width=1024)

# --- Batch convert directory ---

from pathlib import Path

for p in Path("imgs").glob("*.png"):

Image.open(p).convert("RGB").save(p.with_suffix(".jpg"), quality=85)

```

**Image gotchas:**

- PNG → JPG: **must** `convert("RGB")` first or transparency crashes the save
- `quality` for PNG is meaningless (lossless) — use `optimize=True, compress_level=9`

- Pillow can't open `.svg` natively — use `cairosvg` or `svglib`
- GIF → MP4 is a video operation: `ffmpeg -i in.gif -pix_fmt yuv420p out.mp4`

## Audio Formats

```python

from pydub import AudioSegment

# --- MP3 ↔ WAV ---

AudioSegment.from_mp3("in.mp3").export("out.wav", format="wav")

AudioSegment.from_wav("in.wav").export("out.mp3", format="mp3", bitrate="192k")

# --- FLAC → MP3 ---

AudioSegment.from_file("in.flac", format="flac").export("out.mp3", format="mp3", bitrate="320k")

# --- OGG → MP3 ---

AudioSegment.from_ogg("in.ogg").export("out.mp3", format="mp3", bitrate="192k")

# --- M4A / AAC → MP3 ---

AudioSegment.from_file("in.m4a", format="m4a").export("out.mp3", format="mp3", bitrate="256k")

# --- Any → Any (pydub supports mp3, wav, ogg, flac, m4a, aac, wma, aiff) ---

AudioSegment.from_file("in.wma", format="wma").export("out.flac", format="flac")

# --- Trim audio (first 30 seconds) ---

audio = AudioSegment.from_file("in.mp3")

audio[:30000].export("first_30s.mp3", format="mp3") \# milliseconds

# --- Merge / concatenate ---

combined = AudioSegment.from_file("a.mp3") + AudioSegment.from_file("b.mp3")

combined.export("merged.mp3", format="mp3")

# --- Adjust volume ---

audio = AudioSegment.from_file("in.mp3")

louder = audio + 6 \# +6 dB

quieter = audio - 6 \# -6 dB

louder.export("louder.mp3", format="mp3")

# --- Get audio info ---

audio = AudioSegment.from_file("in.mp3")

print(f"Duration: {len(audio)/1000:.1f}s, Channels: {audio.channels}, "

f"Sample rate: {audio.frame_rate}Hz, Sample width: {audio.sample_width*8}bit")

# --- Batch convert directory ---

from pathlib import Path

for p in Path("audio").glob("*.wav"):

AudioSegment.from_wav(str(p)).export(p.with_suffix(".mp3"), format="mp3", bitrate="192k")

```

**Audio gotchas:**

- `pydub` requires `ffmpeg` installed system-wide for non-WAV formats
- Bitrate options: "128k" (small/low quality), "192k" (balanced), "256k" (high), "320k" (max for MP3)

- WAV files are uncompressed — expect 10x larger file sizes than MP3
- For sample rate conversion: `audio.set_frame_rate(44100).export("out.wav", format="wav")`

- Mono to stereo: `audio.set_channels(2)` / Stereo to mono: `audio.set_channels(1)`

## ZIP Archives

```python

import zipfile

from pathlib import Path

# --- Create ZIP from files ---

with zipfile.ZipFile("archive.zip", "w", zipfile.ZIP_DEFLATED) as zf:

zf.write("file1.txt")

zf.write("file2.csv")

zf.write("images/photo.jpg")

# --- Create ZIP from entire directory ---

import shutil

shutil.make_archive("archive", "zip", root_dir="my_folder") \# creates archive.zip

# --- Extract all ---

with zipfile.ZipFile("archive.zip", "r") as zf:

zf.extractall("output_dir")

# --- Extract single file ---

with zipfile.ZipFile("archive.zip", "r") as zf:

zf.extract("file1.txt", "output_dir")

# --- List contents without extracting ---

with zipfile.ZipFile("archive.zip", "r") as zf:

for info in zf.infolist():

print(f"{info.filename} {info.file_size:,} bytes {info.compress_size:,} compressed")

# --- Read file from ZIP without extracting ---

with zipfile.ZipFile("archive.zip", "r") as zf:

content = zf.read("file1.txt").decode("utf-8")

# --- Add files to existing ZIP ---

with zipfile.ZipFile("archive.zip", "a") as zf:

zf.write("new_file.txt")

# --- Create ZIP with password (read-only, use pyzipper for write) ---

# pip install pyzipper

import pyzipper

with pyzipper.AESZipFile("secure.zip", "w", compression=pyzipper.ZIP_DEFLATED,

encryption=pyzipper.WZ_AES) as zf:

zf.setpassword(b"my_password")

zf.write("secret.txt")

# --- Batch: ZIP all PDFs in a directory ---

with zipfile.ZipFile("all_pdfs.zip", "w", zipfile.ZIP_DEFLATED) as zf:

for p in Path(".").glob("**/*.pdf"):

zf.write(p)

```

**ZIP gotchas:**

- `zipfile` is in Python's standard library — no install needed
- Always use `ZIP_DEFLATED` compression (default is `ZIP_STORED` = no compression)

- For password-protected ZIPs, stdlib `zipfile` can only read (not write) — use `pyzipper` for encrypted writes
- Max file size in standard ZIP is 4 GB; use `allowZip64=True` (default in Python 3) for larger files

- `shutil.make_archive` is the simplest way to ZIP an entire directory tree

## EPUB Formats

```python

# --- EPUB → other formats (via pandoc) ---

# pandoc is the easiest way to convert EPUB

import pypandoc

# EPUB → Markdown

pypandoc.convert_file("in.epub", "markdown", outputfile="out.md")

# EPUB → HTML

pypandoc.convert_file("in.epub", "html", outputfile="out.html")

# EPUB → DOCX

pypandoc.convert_file("in.epub", "docx", outputfile="out.docx")

# EPUB → plain text

pypandoc.convert_file("in.epub", "plain", outputfile="out.txt")

# --- Other formats → EPUB ---

# Markdown → EPUB

pypandoc.convert_file("in.md", "epub", outputfile="out.epub",

extra_args=["--metadata", "title=My Book"])

# HTML → EPUB

pypandoc.convert_file("in.html", "epub", outputfile="out.epub",

extra_args=["--metadata", "title=My Book"])

# DOCX → EPUB

pypandoc.convert_file("in.docx", "epub", outputfile="out.epub")

```

```bash

# --- CLI equivalents ---

pandoc in.epub -o out.md

pandoc in.epub -o out.pdf --pdf-engine=xelatex

pandoc in.md -o out.epub --metadata title="My Book"

pandoc in.html -o out.epub --metadata title="My Book" --epub-cover-image=cover.jpg

```

```python

# --- Pure Python: read/write EPUB with ebooklib ---

from ebooklib import epub

# Read EPUB

book = epub.read_epub("in.epub")

for item in book.get_items_of_type(9): \# 9 = ITEM_DOCUMENT (HTML chapters)

print(item.get_name())

html_content = item.get_content().decode("utf-8")

# Create EPUB from scratch

book = epub.EpubBook()

book.set_identifier("id123")

book.set_title("My Book")

book.set_language("en")

book.add_author("Author Name")

ch1 = epub.EpubHtml(title="Chapter 1", file_name="ch1.xhtml", lang="en")

ch1.content = "<h1>Chapter 1</h1><p>Hello world.</p>"

book.add_item(ch1)

book.toc = [epub.Link("ch1.xhtml", "Chapter 1", "ch1")]

book.add_item(epub.EpubNcx())

book.add_item(epub.EpubNav())

book.spine = ["nav", ch1]

epub.write_epub("out.epub", book)

```

**EPUB gotchas:**

- `pandoc` is the simplest for format-to-format EPUB conversion
- Always add `--metadata title="..."` when creating EPUB — readers require a title

- EPUB is essentially a ZIP of HTML files — `ebooklib` gives you fine-grained control
- For EPUB → PDF, pandoc needs a LaTeX engine (`texlive-xetex`)

- Cover images: use `--epub-cover-image=cover.jpg` with pandoc

## HTML to PDF

```python

# --- weasyprint (best CSS support, no browser needed) ---

from weasyprint import HTML

# Simple file conversion

HTML("in.html").write_pdf("out.pdf")

# From URL

HTML("https://example.com").write_pdf("page.pdf")

# From HTML string

HTML(string="<h1>Hello</h1><p>World</p>").write_pdf("out.pdf")

# With custom CSS

HTML("in.html").write_pdf("out.pdf", stylesheets=["custom.css"])

# With page size and margins

from weasyprint import CSS

HTML("in.html").write_pdf("out.pdf", stylesheets=[

CSS(string="@page { size: A4; margin: 2cm; }")

])

# Landscape orientation

HTML("in.html").write_pdf("out.pdf", stylesheets=[

CSS(string="@page { size: A4 landscape; margin: 1.5cm; }")

])

```

```bash

# --- CLI alternatives ---

# pandoc (simpler, less CSS fidelity)

pandoc in.html -o out.pdf --pdf-engine=xelatex

# weasyprint CLI

weasyprint in.html out.pdf

weasyprint https://example.com page.pdf

```

**HTML to PDF gotchas:**

- `weasyprint` supports CSS3 including flexbox, grid, and `@page` rules — best for styled documents
- `weasyprint` does NOT run JavaScript — for JS-heavy pages, use `playwright` or `pyppeteer` instead

- For JS-rendered pages: `playwright` → `page.pdf()` is the most reliable option
- pandoc HTML → PDF goes through LaTeX, so complex CSS layouts may not render correctly

- Large HTML files with many images: use `HTML(filename="in.html", base_url=".")` so relative image paths resolve

## GIF Creation

```python

from PIL import Image

import imageio.v3 as iio

from pathlib import Path

# --- Images → animated GIF (Pillow) ---

frames = [Image.open(f"frame_{i}.png") for i in range(10)]

frames[0].save("out.gif", save_all=True, append_images=frames[1:],

duration=100, loop=0) \# duration in ms, loop=0 means infinite

# --- Images → GIF with optimization ---

frames = [Image.open(f"frame_{i}.png").convert("RGBA") for i in range(10)]

frames[0].save("out.gif", save_all=True, append_images=frames[1:],

duration=100, loop=0, optimize=True)

# --- Directory of images → GIF ---

frame_paths = sorted(Path("frames").glob("*.png"))

frames = [Image.open(p) for p in frame_paths]

frames[0].save("out.gif", save_all=True, append_images=frames[1:],

duration=100, loop=0)

# --- GIF → individual frames ---

gif = Image.open("in.gif")

for i in range(gif.n_frames):

gif.seek(i)

gif.save(f"frame_{i}.png")

# --- Resize GIF ---

gif = Image.open("in.gif")

resized_frames = []

for i in range(gif.n_frames):

gif.seek(i)

resized_frames.append(gif.copy().resize((320, 240), Image.LANCZOS))

resized_frames[0].save("small.gif", save_all=True, append_images=resized_frames[1:],

duration=gif.info.get("duration", 100), loop=0)

# --- Video → GIF (imageio + ffmpeg) ---

import imageio.v3 as iio

frames = iio.imread("in.mp4", plugin="pyav")

iio.imwrite("out.gif", frames, plugin="pillow", duration=40, loop=0)

# --- GIF → MP4 (ffmpeg CLI, much smaller file) ---

# ffmpeg -i in.gif -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" out.mp4

```

**GIF gotchas:**

- GIF is limited to 256 colors per frame — complex images lose quality
- Use `optimize=True` to reduce file size, but large GIFs are still huge compared to MP4

- `duration` is per-frame in milliseconds (100ms = 10 FPS, 40ms = 25 FPS)
- `loop=0` means infinite loop; `loop=1` plays once then stops

- For video → GIF, consider downscaling first — full-resolution GIFs are enormous
- Pillow GIF output doesn't support transparency well — use `imageio` for better results

- For best quality: create GIF from video with ffmpeg: `ffmpeg -i in.mp4 -vf "fps=15,scale=480:-1" out.gif`

## PDF to SVG

```python

# --- PyMuPDF (fitz) — best quality, vector-preserving ---

import fitz \# pip install pymupdf

# Single page

doc = fitz.open("in.pdf")

page = doc[0]

svg_text = page.get_svg_image()

with open("page_1.svg", "w") as f:

f.write(svg_text)

# All pages

doc = fitz.open("in.pdf")

for i, page in enumerate(doc):

svg_text = page.get_svg_image()

with open(f"page_{i+1}.svg", "w") as f:

f.write(svg_text)

doc.close()

# With custom resolution (matrix scales the output)

doc = fitz.open("in.pdf")

page = doc[0]

mat = fitz.Matrix(2, 2) \# 2x scale for higher detail

svg_text = page.get_svg_image(matrix=mat)

with open("page_hires.svg", "w") as f:

f.write(svg_text)

```

```bash

# --- CLI alternatives ---

# pdf2svg (if installed)

pdf2svg in.pdf out.svg 1 \# page number

# Inkscape CLI

inkscape in.pdf --export-type=svg --export-filename=out.svg

# pdftocairo (from poppler-utils)

pdftocairo -svg in.pdf out.svg

```

**PDF to SVG gotchas:**

- `pymupdf` (imported as `fitz`) produces true vector SVGs — text stays as text, paths stay as paths
- Scanned PDFs produce SVGs with embedded raster images (no vector data to extract)

- Large PDFs with complex graphics produce very large SVG files
- `pdf2svg` CLI tool is simple but must be installed separately (`apt install pdf2svg`)

- For rasterized SVG (simpler but not truly vector): render PDF to PNG first, then embed in SVG

## Validation

Always verify output:

```python

# Row count parity

assert len(pd.read_csv("out.csv")) == len(pd.read_json("in.json"))

# JSON well-formed

json.load(open("out.json"))

# Image opens

Image.open("out.jpg").verify()

```
