---
name: photo-editor
description: Edit, resize, crop, filter, and optimize images — backgrounds, watermarks, and batch processing.
---

# Photo Editor

Resize, crop, filter, and optimize images. Pillow for Python, sharp for Node. Clarify intent before starting.

## Clarify Intent First

When a user asks to "edit a photo" or "change an image," the request could mean two very different things. **Ask before proceeding** if it's ambiguous:

1. **Edit the existing image** — crop, resize, recolor, adjust brightness/contrast, add text, remove background, apply filters, watermark, etc. → Use the tools below (Pillow, sharp, OpenCV).
2. **Generate a new AI image** — create something from scratch or heavily reimagine the photo (e.g., "make this photo look like a painting," "put me on a beach," "create a logo from this concept"). → Use image generation tools instead, not this skill.

### When to ask

- "Can you fix this photo?" → Probably editing. Ask what specifically needs fixing.
- "Make this look better" → Ambiguous. Ask: "Do you want me to adjust the existing photo (brightness, contrast, cropping, etc.) or generate a new version with AI?"

- "Change the background" → Could be either. Ask: "Should I remove the current background (I can make it transparent or a solid color), or do you want an AI-generated scene behind you?"
- "Make a profile picture from this" → Likely crop/resize, but could mean AI enhancement. Clarify.

#### Don't ask when it's obvious

- "Crop this to 1080x1080" → Just crop it.
- "Make this a PNG" → Just convert it.

- "Remove the background" → Use rembg.
- "Generate a photo of a sunset" → No existing photo to edit — use image generation.

## Tool Selection

| Tool | Use when | Install |

|---|---|---|

| **Pillow** | Default: resize, crop, filters, text, format conversion | `pip install Pillow` |

| **OpenCV** | Computer vision: face detection, perspective transform, inpainting, contours | `pip install opencv-python numpy` |

| **sharp** (Node) | High-volume pipelines — 4-5x faster than Pillow (libvips-backed) | `npm install sharp` |

| **rembg** | AI background removal | `pip install rembg` |

| **ImageMagick** | CLI batch ops, 200+ formats. Use the `magick` command, e.g. `magick -size 100x100 xc:blue test2.jpg`. | `apt install imagemagick` |

## Open — ALWAYS Fix Orientation First

```python

from PIL import Image, ImageOps

img = Image.open("photo.jpg")

img = ImageOps.exif_transpose(img) \# CRITICAL: applies EXIF rotation, then strips tag

# Without this, phone photos appear sideways after processing

```

## Resize & Crop

```python

from PIL import Image, ImageOps

# --- Fit inside box, keep aspect ratio (shrink only) ---

img.thumbnail((1080, 1080), Image.Resampling.LANCZOS) \# modifies in place

# --- Exact size, keep aspect, center-crop overflow (best for thumbnails) ---

thumb = ImageOps.fit(img, (300, 300), Image.Resampling.LANCZOS, centering=(0.5, 0.5))

# --- Exact size, keep aspect, pad with color (letterbox) ---

padded = ImageOps.pad(img, (1920, 1080), color=(0, 0, 0))

# --- Exact size, ignore aspect (will distort) ---

stretched = img.resize((800, 600), Image.Resampling.LANCZOS)

# --- Scale by factor ---

half = img.resize((img.width // 2, img.height // 2), Image.Resampling.LANCZOS)

# --- Manual crop (left, upper, right, lower) — NOT (x, y, w, h) ---

cropped = img.crop((100, 50, 900, 650))

```

**Resampling filters:** `LANCZOS`for photo downscale (best quality),`BICUBIC`for upscale,`NEAREST` for pixel art/icons (no smoothing).

## Face-Aware Cropping

For portraits and headshots, detect the face first and crop around it instead of guessing coordinates. This produces much better results for profile pictures.

```python

import cv2

import numpy as np

from PIL import Image, ImageOps

img = Image.open("portrait.jpg")

img = ImageOps.exif_transpose(img)

cv_img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

gray = cv2.cvtColor(cv_img, cv2.COLOR_BGR2GRAY)

cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

faces = cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(100, 100))

if len(faces) > 0:

# Use the largest detected face

fx, fy, fw, fh = max(faces, key=lambda f: f[2] * f[3])

face_cx = fx + fw // 2

face_cy = fy + fh // 2

# Square crop centered on face with padding (3x face height for head+shoulders)

crop_size = min(img.width, img.height, fh * 3)

left = max(0, face_cx - crop_size // 2)

top = max(0, face_cy - int(crop_size * 0.35)) \# face in upper third

right = left + crop_size

bottom = top + crop_size

# Clamp to image bounds

if right > img.width:

left -= (right - img.width)

right = img.width

if bottom > img.height:

top -= (bottom - img.height)

bottom = img.height

left = max(0, left)

top = max(0, top)

cropped = img.crop((left, top, right, bottom))

profile = cropped.resize((800, 800), Image.Resampling.LANCZOS)

profile.save("profile_800x800.jpg", quality=92, optimize=True)

else:

# Fallback: center crop

profile = ImageOps.fit(img, (800, 800), Image.Resampling.LANCZOS, centering=(0.5, 0.4))

profile.save("profile_800x800.jpg", quality=92, optimize=True)

```

### Tips

- `centering=(0.5, 0.4)` in the fallback biases the crop slightly toward the top — better for portraits than dead center.
- For group photos with multiple faces, you may want to fit all detected faces in the crop instead of picking the largest.

## Color & Exposure

```python

from PIL import ImageEnhance, ImageOps

# --- Enhancers: 1.0 = unchanged, <1 less, >1 more ---

img = ImageEnhance.Brightness(img).enhance(1.15)

img = ImageEnhance.Contrast(img).enhance(1.2)

img = ImageEnhance.Color(img).enhance(1.1) \# saturation

img = ImageEnhance.Sharpness(img).enhance(1.5)

# --- Quick ops ---

gray = ImageOps.grayscale(img)

inverted = ImageOps.invert(img.convert("RGB"))

auto = ImageOps.autocontrast(img, cutoff=1) \# stretch histogram, clip 1% extremes

equalized = ImageOps.equalize(img) \# flatten histogram

```

## Filters

```python

from PIL import ImageFilter

img.filter(ImageFilter.GaussianBlur(radius=5))

img.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3)) \# better than SHARPEN

img.filter(ImageFilter.BoxBlur(10))

img.filter(ImageFilter.FIND_EDGES)

img.filter(ImageFilter.MedianFilter(size=3)) \# denoise, removes salt-and-pepper

```

## Watermark / Logo Removal

Use OpenCV's `cv2.inpaint()`— it fills a masked region by sampling surrounding pixels, producing seamless results. **Do not use pixel-by-pixel`getpixel`/`putpixel` loops** — they are slow and produce visible artifacts.

### Step 1: Find the watermark boundaries

Always inspect the image at full resolution first. Watermarks are often much larger than they appear in thumbnails. Save a crop of the watermark region to verify coordinates before attempting removal.

```python

import cv2

import numpy as np

from PIL import Image, ImageOps

img = Image.open("photo.jpg")

img = ImageOps.exif_transpose(img)

w, h = img.size

# Save a debug crop of the suspected watermark area to verify its extent

debug = img.crop((0, 0, min(w, 1000), min(h, 500)))

debug.save("debug_watermark_area.jpg")

# IMPORTANT: View this debug image to confirm where the watermark actually is

# before proceeding. Guessing coordinates wastes iterations.

```

### Step 2: Create a mask and inpaint

```python

cv_img = cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

# --- Option A: Color-based mask (best for colored logos on neutral backgrounds) ---

hsv = cv2.cvtColor(cv_img, cv2.COLOR_BGR2HSV)

# Example: detect blue watermark pixels (adjust ranges for your watermark color)

lower_blue = np.array([90, 40, 40])

upper_blue = np.array([130, 255, 255])

mask = cv2.inRange(hsv, lower_blue, upper_blue)

# Also catch dark text pixels in the watermark region

roi_gray = cv2.cvtColor(cv_img[:wm_h, :wm_w], cv2.COLOR_BGR2GRAY)

_, dark_mask = cv2.threshold(roi_gray, 80, 255, cv2.THRESH_BINARY_INV)

# Combine: place dark_mask into the full-size mask

mask[:wm_h, :wm_w] = cv2.bitwise_or(mask[:wm_h, :wm_w], dark_mask)

# --- Option B: Region-based mask (when you know the bounding box) ---

# Simpler but removes everything in the box, not just the watermark pixels

mask = np.zeros(cv_img.shape[:2], dtype=np.uint8)

mask[0:wm_h, 0:wm_w] = 255 \# fill the entire watermark region

# Dilate the mask slightly to catch anti-aliased edges

kernel = np.ones((5, 5), np.uint8)

mask = cv2.dilate(mask, kernel, iterations=2)

# Inpaint — fills masked area using surrounding pixel data

result = cv2.inpaint(cv_img, mask, inpaintRadius=7, flags=cv2.INPAINT_TELEA)

# INPAINT_TELEA: fast marching method (best for most cases)

# INPAINT_NS: Navier-Stokes (better for large regions, slower)

result_pil = Image.fromarray(cv2.cvtColor(result, cv2.COLOR_BGR2RGB))

result_pil.save("clean.jpg", quality=92, optimize=True)

```

### Step 3: Verify the result

```python

# Save a crop of the same region after removal to confirm it's clean

verify = result_pil.crop((0, 0, min(w, 1000), min(h, 500)))

verify.save("debug_watermark_removed.jpg")

# View this image before proceeding to resize/crop

```

#### Tips (2)

- For watermarks on uniform backgrounds (studio portraits, product photos), `INPAINT_TELEA`with`inpaintRadius=5-10` works well.
- For watermarks over textured areas (landscapes, fabric), use `INPAINT_NS` with a larger radius (10-15).

- If the watermark is semi-transparent, color-based masking (Option A) is more precise than a rectangular region mask.
- Always verify at full resolution — artifacts invisible in thumbnails may be obvious when zoomed in.

## Text & Watermark (Adding)

```python

from PIL import Image, ImageDraw, ImageFont

draw = ImageDraw.Draw(img)

try:

font = ImageFont.truetype("DejaVuSans-Bold.ttf", 48) \# Linux default

except OSError:

font = ImageFont.load_default() \# fallback (tiny, ugly)

# --- Text with outline ---

draw.text((50, 50), "Caption", font=font, fill="white",

stroke_width=3, stroke_fill="black")

# --- Centered text ---

bbox = draw.textbbox((0, 0), "Centered", font=font)

tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]

draw.text(((img.width - tw) // 2, (img.height - th) // 2), "Centered", font=font, fill="white")

# --- Watermark (semi-transparent PNG overlay) ---

logo = Image.open("logo.png").convert("RGBA")

logo.thumbnail((img.width // 5, img.height // 5))

# Fade to 40% opacity

alpha = logo.split()[3].point(lambda p: int(p * 0.4))

logo.putalpha(alpha)

pos = (img.width - logo.width - 20, img.height - logo.height - 20)

img.paste(logo, pos, logo) \# third arg = alpha mask — REQUIRED for transparency

```

## Save & Optimize

```python

# --- JPEG ---

img.convert("RGB").save("out.jpg", quality=85, optimize=True, progressive=True)

# convert("RGB") REQUIRED if source has alpha — JPEG can't store transparency

# --- PNG (lossless — quality param does nothing) ---

img.save("out.png", optimize=True, compress_level=9)

# --- WebP (best web format: ~30% smaller than JPEG at same quality) ---

img.save("out.webp", quality=85, method=6) \# method 0-6, 6=slowest/best compression

# --- AVIF (smallest files, Pillow 11+, slower encode) ---

img.save("out.avif", quality=75) \# 75 ≈ JPEG 85 visually, ~50% smaller

# --- Strip all metadata (privacy) ---

clean = Image.new(img.mode, img.size)

clean.putdata(list(img.getdata()))

clean.save("stripped.jpg", quality=85)

```

**Quality guide:** JPEG/WebP 85 = sweet spot. 90+ = diminishing returns. <70 = visible artifacts. Never re-save JPEGs repeatedly — each save degrades (generation loss).

## Batch Processing

```python

from pathlib import Path

from PIL import Image, ImageOps

out = Path("optimized"); out.mkdir(exist_ok=True)

for p in Path("photos").glob("*.[jJ][pP]*[gG]"): \# matches jpg, jpeg, JPG, JPEG

img = ImageOps.exif_transpose(Image.open(p))

img.thumbnail((1920, 1920), Image.Resampling.LANCZOS)

img.convert("RGB").save(out / f"{p.stem}.webp", quality=85, method=6)

```

## sharp (Node.js — use for high throughput)

```javascript

const sharp = require('sharp');

// Resize + convert + optimize, streaming (flat memory)

await sharp('in.jpg')

.rotate() // auto-rotate from EXIF (like exif_transpose)

.resize(1080, 1080, { fit: 'cover', position: 'center' }) // = ImageOps.fit

.webp({ quality: 85 })

.toFile('out.webp');

// fit options: 'cover' (crop), 'contain' (letterbox), 'inside' (shrink to fit), 'fill' (stretch)

// Composite watermark

await sharp('photo.jpg')

.composite([{ input: 'logo.png', gravity: 'southeast' }])

.toFile('watermarked.jpg');

```

sharp strips all metadata by default. Use `.withMetadata()` to preserve EXIF/ICC.

## OpenCV (when Pillow isn't enough)

```python

import cv2

img = cv2.imread("in.jpg") \# BGR order, not RGB!

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Face detection

cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

faces = cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

for (x, y, w, h) in faces:

cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

cv2.imwrite("out.jpg", img)

# Pillow <-> OpenCV

import numpy as np

cv_img = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

pil_img = Image.fromarray(cv2.cvtColor(cv_img, cv2.COLOR_BGR2RGB))

```

## Bulk Pixel Manipulation — Use numpy, Not getpixel/putpixel

**Never loop over pixels with `getpixel()`/`putpixel()`** for large regions — it is extremely slow (minutes for a full image). Convert to a numpy array, operate on the array, then convert back.

```python

import numpy as np

from PIL import Image

img = Image.open("photo.jpg").convert("RGB")

arr = np.array(img) \# shape: (height, width, 3), dtype: uint8

# Example: replace a region with sampled background color

bg_color = arr[50, -100, :] \# sample one pixel from the right side

arr[0:300, 0:800, :] = bg_color \# fill the region instantly

# Example: blend two regions with a gradient mask

alpha = np.linspace(1, 0, 100).reshape(1, 100, 1) \# horizontal fade over 100px

region = arr[0:300, 700:800, :]

bg_strip = np.full_like(region, bg_color)

arr[0:300, 700:800, :] = (region * (1 - alpha) + bg_strip * alpha).astype(np.uint8)

result = Image.fromarray(arr)

```

**Speed comparison:** `putpixel` on a 700x250 region = ~175,000 calls = 30+ seconds. numpy array slice = instant.

## Platform Dimensions

| Platform | Size | Ratio |

|---|---|---|

| Instagram post | 1080x1080 | 1:1 |

| Instagram story / TikTok | 1080x1920 | 9:16 |

| LinkedIn profile photo | 400x400 | 1:1 |

| LinkedIn banner | 1584x396 | 4:1 |

| LinkedIn post | 1200x627 | 1.91:1 |

| Twitter/X profile | 400x400 | 1:1 |

| Twitter/X post | 1200x675 | 16:9 |

| Facebook profile | 320x320 | 1:1 |

| Facebook cover | 851x315 | 2.7:1 |

| YouTube thumbnail | 1280x720 | 16:9 |

| WhatsApp profile | 500x500 | 1:1 |

| Open Graph (link preview) | 1200x630 | 1.91:1 |

## Debug Workflow

When edits don't look right, follow this process instead of re-running the whole pipeline blindly:

1. **Save a debug crop of the target area** before and after processing. View both to confirm what changed.
2. **Work at full resolution first.** Watermarks and artifacts that look small in a thumbnail can be large at native resolution. Always inspect at the original size before resizing.

3. **Save intermediate results.** After each major processing step (watermark removal, crop, resize), save a checkpoint image so you can identify which step introduced a problem.
4. **Spot-check specific pixels** to verify processing took effect:

```python

# Quick pixel check after watermark removal

for (x, y) in [(60, 50), (200, 130), (400, 100)]:

print(f"({x},{y}): {img.getpixel((x, y))}")

# If these still show watermark colors (e.g. bright blue), removal failed

```

## Gotchas

- **`img.crop()`box is`(left, top, right, bottom)`** — absolute coords, NOT`(x, y, width, height)`
- **`thumbnail()`mutates in place and returns`None`** — don't do`img = img.thumbnail(...)`

- **Paste with transparency** needs the image as the third (mask) arg: `bg.paste(fg, pos, fg)`
- **Palette mode ("P")** breaks many filters — `img.convert("RGB")` first

- **Fonts:** `ImageFont.truetype`needs a real font file. Linux:`/usr/share/fonts/truetype/dejavu/`. Ship a`.ttf` with your code for portability.
- **OpenCV needs numpy** — always `pip install opencv-python numpy` together

- **OpenCV uses BGR, Pillow uses RGB** — convert when switching between them or colors will be wrong
