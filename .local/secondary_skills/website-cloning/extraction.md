# Extraction Scripts Reference

Complete Python scripts for Phase 1 reconnaissance. Run these in order.

## Setup

```python

from playwright.sync_api import sync_playwright

import json, os, re, hashlib, urllib.request, urllib.error, subprocess

CHROMIUM_PATH = "FILL_IN" \# from prerequisite step

TARGET_URL = "FILL_IN"

OUT_DIR = "clone-data"

os.makedirs(f"{OUT_DIR}/screenshots", exist_ok=True)

os.makedirs(f"{OUT_DIR}/components", exist_ok=True)

```

## 1. Navigate and Save Raw HTML

```python

with sync_playwright() as p:

browser = p.chromium.launch(

headless=True,

executable_path=CHROMIUM_PATH,

args=["--no-sandbox", "--disable-setuid-sandbox"]

)

page = browser.new_page(viewport={"width": 1440, "height": 900})

page.goto(TARGET_URL, wait_until="domcontentloaded", timeout=60000)

page.wait_for_timeout(5000)

# Scroll full page to trigger lazy loading

for _ in range(20):

page.evaluate("window.scrollBy(0, 500)")

page.wait_for_timeout(500)

page.evaluate("window.scrollTo(0, 0)")

page.wait_for_timeout(2000)

# CRITICAL: Save raw HTML as the source of truth

raw_html = page.content()

with open(f"{OUT_DIR}/raw.html", "w", encoding="utf-8") as f:

f.write(raw_html)

print(f"Saved raw.html ({len(raw_html)} chars)")

```

## 2. Full-Page Screenshots

```python

# Desktop

page.screenshot(path=f"{OUT_DIR}/screenshots/desktop-full.png", full_page=True)

# Tablet

page.set_viewport_size({"width": 768, "height": 1024})

page.wait_for_timeout(1000)

page.screenshot(path=f"{OUT_DIR}/screenshots/tablet-full.png", full_page=True)

# Mobile

page.set_viewport_size({"width": 390, "height": 844})

page.wait_for_timeout(1000)

page.screenshot(path=f"{OUT_DIR}/screenshots/mobile-full.png", full_page=True)

# Reset to desktop

page.set_viewport_size({"width": 1440, "height": 900})

page.wait_for_timeout(500)

```

## 3. Per-Section Screenshots

```python

sections = page.query_selector_all('section, [class*="section"], main > div, main > section')

for i, section in enumerate(sections):

try:

section.scroll_into_view_if_needed()

page.wait_for_timeout(300)

section.screenshot(path=f"{OUT_DIR}/screenshots/section-{i:02d}.png")

print(f"Screenshot: section-{i:02d}")

except Exception as e:

print(f"Skip section {i}: {e}")

```

## 4. Section Inventory Builder

Run this after saving raw.html. It produces a markdown checklist.

```python

inventory = page.evaluate("""

() => {

const main = document.querySelector('main') || document.body;

const allSections = [];

// Header

const header = document.querySelector('header');

if (header) {

allSections.push({

index: 0,

selector: 'header',

type: 'header',

tag: header.tagName.toLowerCase(),

classes: header.className?.toString().slice(0, 200) || '',

headings: [],

buttons: [...header.querySelectorAll('button, a[class*="btn"]')]

.map(b => b.innerText.trim()).filter(t => t).slice(0, 5),

imageCount: header.querySelectorAll('img').length,

textPreview: header.innerText.trim().slice(0, 200),

layout: getComputedStyle(header).display,

height: Math.round(header.getBoundingClientRect().height)

});

}

// Announcement/banner bar

const banner = document.querySelector('[class*="banner"], [class*="announcement"], [class*="promo-bar"], [class*="topbar"], [class*="top-bar"]');

if (banner && banner.offsetHeight > 0 && banner.offsetHeight < 100) {

allSections.push({

index: 0,

selector: banner.id ? '#' + banner.id : '.' + banner.className.split(' ')[0],

type: 'announcement-bar',

tag: banner.tagName.toLowerCase(),

classes: banner.className?.toString().slice(0, 200) || '',

headings: [],

buttons: [],

imageCount: 0,

textPreview: banner.innerText.trim().slice(0, 200),

layout: 'flex',

height: Math.round(banner.getBoundingClientRect().height)

});

}

// Main content sections

const children = main === document.body

? [...main.children].filter(c => \!['HEADER','FOOTER','NAV','SCRIPT','STYLE','NOSCRIPT'].includes(c.tagName))

: [...main.children];

children.forEach((child, idx) => {

const rect = child.getBoundingClientRect();

if (rect.height < 20) return;

const cs = getComputedStyle(child);

if (cs.display === 'none' || cs.visibility === 'hidden') return;

const headings = [...child.querySelectorAll('h1, h2, h3, h4, h5')]

.slice(0, 10).map(h => h.innerText.trim()).filter(t => t);

const buttons = [...child.querySelectorAll('button, [role="button"], a[class*="btn"], a[class*="button"]')]

.slice(0, 10).map(b => b.innerText.trim()).filter(t => t);

const images = child.querySelectorAll('img');

const hasCarousel = child.querySelector('[class*="carousel"], [class*="slider"], [class*="swiper"], [class*="scroll"]') !== null;

const hasGrid = cs.display === 'grid' || child.querySelector('[style*="grid"], [class*="grid"]') !== null;

const hasFlex = cs.display === 'flex';

const hasMarquee = child.querySelector('[class*="marquee"], [class*="ticker"]') !== null;

let sectionType = 'content';

if (idx === 0 && (child.querySelector('h1') || rect.height > 400)) sectionType = 'hero';

else if (hasCarousel) sectionType = 'carousel';

else if (hasMarquee) sectionType = 'marquee';

else if (hasGrid && images.length > 3) sectionType = 'grid';

else if (hasFlex && images.length === 1 && headings.length > 0) sectionType = 'split-layout';

else if (images.length > 3) sectionType = 'gallery';

allSections.push({

index: idx + 1,

selector: child.id ? '#' + child.id : child.tagName.toLowerCase() + (child.className ? '.' + child.className.toString().split(' ')[0] : ''),

type: sectionType,

tag: child.tagName.toLowerCase(),

classes: child.className?.toString().slice(0, 200) || '',

headings: headings,

buttons: buttons,

imageCount: images.length,

textPreview: child.innerText?.slice(0, 300) || '',

layout: cs.display + (hasFlex ? ' ' + cs.flexDirection : '') + (hasGrid ? ' grid' : ''),

height: Math.round(rect.height)

});

});

// Footer

const footer = document.querySelector('footer');

if (footer) {

allSections.push({

index: 999,

selector: 'footer',

type: 'footer',

tag: 'footer',

classes: footer.className?.toString().slice(0, 200) || '',

headings: [...footer.querySelectorAll('h3, h4, h5, strong')]

.map(h => h.innerText.trim()).filter(t => t).slice(0, 10),

buttons: [],

imageCount: footer.querySelectorAll('img').length,

textPreview: footer.innerText.trim().slice(0, 300),

layout: getComputedStyle(footer).display,

height: Math.round(footer.getBoundingClientRect().height)

});

}

return allSections;

}

""")

# Write inventory as markdown checklist

md = "# Section Inventory\\n\\n"

md += "Check off each section after building and verifying it.\\n\\n"

for s in inventory:

md += f"- [ ] **{s['index']:02d}. {s['type'].upper()}** — `{s['selector']}`\\n"

md += f" - Height: {s['height']}px | Images: {s['imageCount']} | Layout: {s['layout']}\\n"

if s['headings']:

md += f" - Headings: {' | '.join(s['headings'][:5])}\\n"

if s['buttons']:

md += f" - Buttons: {' | '.join(s['buttons'][:5])}\\n"

md += f" - Text: {s['textPreview'][:150]}...\\n\\n"

with open(f"{OUT_DIR}/section-inventory.md", "w") as f:

f.write(md)

with open(f"{OUT_DIR}/section-inventory.json", "w") as f:

json.dump(inventory, f, indent=2)

print(f"Inventory: {len(inventory)} sections")

```

## 5. Design Token Extraction

```python

def extract_tokens(page, out_dir):

tokens = page.evaluate("""

() => {

const body = document.body;

const cs = getComputedStyle(body);

const cssVars = [];

try {

for (const sheet of document.styleSheets) {

try {

for (const rule of sheet.cssRules) {

if (rule.selectorText === ':root' || rule.selectorText === ':root, :host') {

for (const prop of rule.style) {

if (prop.startsWith('--')) {

cssVars.push([prop, rule.style.getPropertyValue(prop).trim()]);

}

}

}

}

} catch(e) {}

}

} catch(e) {}

const h1 = document.querySelector('h1');

const h2 = document.querySelector('h2');

const h3 = document.querySelector('h3');

const btn = document.querySelector('button, [class*="btn"], a[class*="button"]');

const nav = document.querySelector('nav, header');

const card = document.querySelector('[class*="card"], [class*="Card"]');

function getStyles(el) {

if (!el) return null;

const s = getComputedStyle(el);

return {

fontSize: s.fontSize, fontWeight: s.fontWeight, fontFamily: s.fontFamily,

lineHeight: s.lineHeight, letterSpacing: s.letterSpacing, color: s.color,

textTransform: s.textTransform, textAlign: s.textAlign,

backgroundColor: s.backgroundColor,

padding: s.padding, borderRadius: s.borderRadius, border: s.border,

boxShadow: s.boxShadow

};

}

return {

body: {

bgColor: cs.backgroundColor, textColor: cs.color,

fontFamily: cs.fontFamily, fontSize: cs.fontSize, lineHeight: cs.lineHeight

},

h1: getStyles(h1), h2: getStyles(h2), h3: getStyles(h3),

button: getStyles(btn), nav: getStyles(nav), card: getStyles(card),

cssVars: cssVars,

fonts: [...document.querySelectorAll('link[href*="fonts.googleapis"], link[href*="fonts.gstatic"]')]

.map(l => l.href),

selfHostedFonts: (() => {

const fonts = [];

try {

for (const sheet of document.styleSheets) {

try {

for (const rule of sheet.cssRules) {

if (rule instanceof CSSFontFaceRule) {

fonts.push({

family: rule.style.getPropertyValue('font-family').replace(/['"]/g, ''),

src: rule.style.getPropertyValue('src'),

weight: rule.style.getPropertyValue('font-weight') || '400',

style: rule.style.getPropertyValue('font-style') || 'normal'

});

}

}

} catch(e) {}

}

} catch(e) {}

return fonts;

})(),

favicons: [...document.querySelectorAll('link[rel*="icon"], link[rel="apple-touch-icon"]')]

.map(l => ({ href: l.href, rel: l.rel, sizes: l.sizes?.toString() || '' })),

title: document.title,

metaDescription: document.querySelector('meta[name="description"]')?.content || ''

};

}

""")

with open(f"{out_dir}/tokens.json", "w") as f:

json.dump(tokens, f, indent=2)

return tokens

```

## 6. Asset Download (Complete)

```python

def download_all_assets(page, out_dir="clone-data", public_dir="public"):

assets = page.evaluate("""

() => {

return {

images: [...document.querySelectorAll('img')]

.filter(img => img.offsetWidth > 30 && img.src)

.map(img => ({

src: img.src,

srcset: img.srcset || '',

alt: img.alt,

w: img.offsetWidth, h: img.offsetHeight,

parentClasses: img.parentElement?.className?.toString().slice(0, 100) || ''

})),

videos: [...document.querySelectorAll('video')].map(v => ({

src: v.src || v.querySelector('source')?.src,

poster: v.poster,

autoplay: v.autoplay, loop: v.loop, muted: v.muted

})).filter(v => v.src),

backgroundImages: [...document.querySelectorAll('*')].filter(el => {

const bg = getComputedStyle(el).backgroundImage;

return bg && bg !== 'none' && bg.includes('url(');

}).slice(0, 50).map(el => ({

url: getComputedStyle(el).backgroundImage,

element: el.tagName + (el.className ? '.' + el.className.toString().split(' ')[0] : '')

})),

svgs: [...document.querySelectorAll('svg')].slice(0, 50).map((svg, i) => ({

index: i,

viewBox: svg.getAttribute('viewBox') || '',

width: svg.getAttribute('width') || svg.offsetWidth,

height: svg.getAttribute('height') || svg.offsetHeight,

html: svg.outerHTML.length < 5000 ? svg.outerHTML : '[TOO_LARGE]',

parentText: svg.parentElement?.innerText?.trim().slice(0, 50) || '',

ariaLabel: svg.getAttribute('aria-label') || ''

}))

};

}

""")

with open(f"{out_dir}/assets.json", "w") as f:

json.dump(assets, f, indent=2)

downloaded = {}

img_dir = f"{public_dir}/images"

vid_dir = f"{public_dir}/videos"

os.makedirs(img_dir, exist_ok=True)

os.makedirs(vid_dir, exist_ok=True)

def upscale_cdn_url(url):

"""Increase resolution for known CDN URL patterns."""

if 'cdn.shopify.com' in url or 'aloyoga.com/cdn' in url:

url = re.sub(r'_small\', '_1200x.', url)

url = re.sub(r'width=\d+', 'width=1200', url)

url = re.sub(r'height=\d+', 'height=1200', url)

elif 'cdn.sanity.io' in url:

url = re.sub(r'w=\d+', 'w=1200', url)

url = re.sub(r'h=\d+', 'h=1200', url)

elif 'res.cloudinary.com' in url:

url = re.sub(r'w_\d+', 'w_1200', url)

url = re.sub(r'h_\d+', 'h_1200', url)

elif 'images.ctfassets.net' in url:

url = re.sub(r'w=\d+', 'w=1200', url)

return url

def download_with_retry(url, filepath, max_retries=3):

"""Download a URL with retry logic and fallback User-Agent strings."""

user_agents = [

"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

]

last_error = None

for attempt in range(max_retries):

try:

ua = user_agents[attempt % len(user_agents)]

req = urllib.request.Request(url, headers={"User-Agent": ua, "Accept": "image/*,*/*"})

with urllib.request.urlopen(req, timeout=15) as resp:

status = resp.getcode()

if status != 200:

print(f" Attempt {attempt+1}: HTTP {status} for {url}")

last_error = f"HTTP {status}"

continue

data = resp.read()

if len(data) < 100:

print(f" Attempt {attempt+1}: Suspiciously small ({len(data)} bytes)")

last_error = f"Too small ({len(data)} bytes)"

continue

with open(filepath, "wb") as f:

f.write(data)

return True

except Exception as e:

last_error = str(e)

print(f" Attempt {attempt+1} failed: {e}")

print(f"FAIL after {max_retries} attempts: {url} -> {last_error}")

return False

for img in assets.get("images", []):

url = img["src"]

if not url or url.startswith("data:"):

continue

url = upscale_cdn_url(url)

ext = re.search(r'\(png|jpg|jpeg|webp|gif|svg|avif)', url.lower())

ext = ext.group(0) if ext else ".webp"

name_hash = hashlib.md5(url.encode()).hexdigest()[:10]

alt_slug = re.sub(r'[^a-z0-9]', '-', (img.get("alt") or "img").lower())[:30]

filename = f"{alt_slug}-{name_hash}{ext}"

filepath = f"{img_dir}/{filename}"

if download_with_retry(url, filepath):

downloaded[img["src"]] = f"/images/{filename}"

print(f"OK: {filename}")

else:

no_upscale = img["src"]

if no_upscale != url:

print(f" Retrying without CDN upscale: {no_upscale}")

if download_with_retry(no_upscale, filepath):

downloaded[img["src"]] = f"/images/{filename}"

print(f"OK (no upscale): {filename}")

for vid in assets.get("videos", []):

url = vid["src"]

if not url: continue

ext = re.search(r'\(mp4|webm|mov)', url.lower())

ext = ext.group(0) if ext else ".mp4"

name_hash = hashlib.md5(url.encode()).hexdigest()[:10]

filename = f"video-{name_hash}{ext}"

filepath = f"{vid_dir}/{filename}"

try:

req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})

with urllib.request.urlopen(req, timeout=30) as resp:

with open(filepath, "wb") as f:

f.write(resp.read())

downloaded[url] = f"/videos/{filename}"

print(f"OK: {filename}")

except Exception as e:

print(f"FAIL: {url} -> {e}")

with open(f"{out_dir}/downloaded-assets.json", "w") as f:

json.dump(downloaded, f, indent=2)

# Verify all downloads

failed = []

for original_url, local_path in downloaded.items():

full_path = f"{public_dir}{local_path}"

if not os.path.exists(full_path) or os.path.getsize(full_path) < 100:

failed.append(original_url)

if failed:

print(f"\\nWARNING: {len(failed)} assets failed verification:")

for url in failed:

print(f" - {url}")

return downloaded

```

## 7. Per-Component Deep Style Extraction

```python

def extract_component_styles(page, selector):

return page.evaluate("""

(selector) => {

const el = document.querySelector(selector);

if (!el) return { error: 'Element not found: ' + selector };

const props = [

'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',

'textTransform','textDecoration','textAlign',

'backgroundColor','background','backgroundImage','backgroundSize','backgroundPosition',

'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',

'margin','marginTop','marginRight','marginBottom','marginLeft',

'width','height','maxWidth','minWidth','maxHeight','minHeight',

'display','flexDirection','justifyContent','alignItems','gap',

'gridTemplateColumns','gridTemplateRows',

'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',

'boxShadow','overflow','overflowX','overflowY',

'position','top','right','bottom','left','zIndex',

'opacity','transform','transition','cursor',

'objectFit','objectPosition','whiteSpace','textOverflow'

];

function extractStyles(element) {

const cs = getComputedStyle(element);

const styles = {};

props.forEach(p => {

const v = cs[p];

if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' &&

v !== 'rgba(0, 0, 0, 0)' && v !== 'start' && v !== 'stretch' &&

v !== 'visible' && v !== 'static' && v !== 'row' && v !== 'repeat') {

styles[p] = v;

}

});

return styles;

}

function walk(element, depth) {

if (depth > 4) return null;

const children = [...element.children];

const rect = element.getBoundingClientRect();

return {

tag: element.tagName.toLowerCase(),

classes: element.className?.toString().split(' ').slice(0, 5).join(' ') || '',

id: element.id || null,

text: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3

? element.textContent.trim().slice(0, 300) : null,

rect: { x: Math.round(rect.x), y: Math.round(rect.y),

w: Math.round(rect.width), h: Math.round(rect.height) },

styles: extractStyles(element),

images: element.tagName === 'IMG' ? {

src: element.src, alt: element.alt,

naturalWidth: element.naturalWidth, naturalHeight: element.naturalHeight

} : null,

svg: element.tagName === 'SVG' ? {

viewBox: element.getAttribute('viewBox'),

html: element.outerHTML.length < 3000 ? element.outerHTML : '[TOO_LARGE]'

} : null,

childCount: children.length,

children: children.slice(0, 20).map(c => walk(c, depth + 1)).filter(Boolean)

};

}

return walk(el, 0);

}

""", selector)

```

## 8. Hover and Scroll State Extraction

```python

def extract_hover_state(page, selector):

before = page.evaluate("""

(sel) => {

const el = document.querySelector(sel);

if (!el) return null;

const cs = getComputedStyle(el);

return {

backgroundColor: cs.backgroundColor, color: cs.color,

transform: cs.transform, boxShadow: cs.boxShadow,

opacity: cs.opacity, borderColor: cs.borderColor,

textDecoration: cs.textDecoration, transition: cs.transition

};

}

""", selector)

el = page.query_selector(selector)

if el:

el.hover()

page.wait_for_timeout(500)

after = page.evaluate("""

(sel) => {

const el = document.querySelector(sel);

if (!el) return null;

const cs = getComputedStyle(el);

return {

backgroundColor: cs.backgroundColor, color: cs.color,

transform: cs.transform, boxShadow: cs.boxShadow,

opacity: cs.opacity, borderColor: cs.borderColor,

textDecoration: cs.textDecoration, transition: cs.transition

};

}

""", selector)

diff = {}

if before and after:

for key in before:

if before[key] != after[key]:

diff[key] = {"before": before[key], "after": after[key]}

return {"before": before, "after": after, "diff": diff}

def extract_scroll_state(page, selector, scroll_to=200):

page.evaluate("window.scrollTo(0, 0)")

page.wait_for_timeout(500)

before = page.evaluate("""

(sel) => {

const el = document.querySelector(sel);

if (!el) return null;

const cs = getComputedStyle(el);

return {

backgroundColor: cs.backgroundColor, boxShadow: cs.boxShadow,

height: cs.height, padding: cs.padding, borderRadius: cs.borderRadius,

position: cs.position, top: cs.top, transform: cs.transform,

opacity: cs.opacity, backdropFilter: cs.backdropFilter

};

}

""", selector)

page.evaluate(f"window.scrollTo(0, {scroll_to})")

page.wait_for_timeout(800)

after = page.evaluate("""

(sel) => {

const el = document.querySelector(sel);

if (!el) return null;

const cs = getComputedStyle(el);

return {

backgroundColor: cs.backgroundColor, boxShadow: cs.boxShadow,

height: cs.height, padding: cs.padding, borderRadius: cs.borderRadius,

position: cs.position, top: cs.top, transform: cs.transform,

opacity: cs.opacity, backdropFilter: cs.backdropFilter

};

}

""", selector)

page.evaluate("window.scrollTo(0, 0)")

diff = {}

if before and after:

for key in before:

if before[key] != after[key]:

diff[key] = {"before": before[key], "after": after[key]}

return {"scrollThreshold": scroll_to, "before": before, "after": after, "diff": diff}

```

## 9. Responsive Layout Extraction

```python

def extract_responsive(page, selector, breakpoints=[1440, 768, 390]):

results = {}

for width in breakpoints:

page.set_viewport_size({"width": width, "height": 900})

page.wait_for_timeout(800)

data = page.evaluate("""

(sel) => {

const el = document.querySelector(sel);

if (!el) return null;

const cs = getComputedStyle(el);

const rect = el.getBoundingClientRect();

return {

display: cs.display, flexDirection: cs.flexDirection,

gridTemplateColumns: cs.gridTemplateColumns, gap: cs.gap,

padding: cs.padding, width: Math.round(rect.width),

height: Math.round(rect.height), childCount: el.children.length,

childrenVisible: [...el.children].filter(c => {

const s = getComputedStyle(c);

return s.display !== 'none' && s.visibility !== 'hidden';

}).length

};

}

""", selector)

results[f"{width}px"] = data

page.set_viewport_size({"width": 1440, "height": 900})

return results

```

## 10. Complete Per-Section Extraction Flow

```python

def extract_section_full(page, section_name, selector, out_dir="clone-data"):

print(f"\\nExtracting: {section_name} ({selector})")

el = page.query_selector(selector)

if el:

el.scroll_into_view_if_needed()

page.wait_for_timeout(500)

el.screenshot(path=f"{out_dir}/screenshots/{section_name}.png")

styles = extract_component_styles(page, selector)

with open(f"{out_dir}/components/{section_name}-styles.json", "w") as f:

json.dump(styles, f, indent=2)

responsive = extract_responsive(page, selector)

with open(f"{out_dir}/components/{section_name}-responsive.json", "w") as f:

json.dump(responsive, f, indent=2)

text = page.evaluate("""

(sel) => {

const el = document.querySelector(sel);

return el ? el.innerText : '';

}

""", selector)

with open(f"{out_dir}/components/{section_name}-text.txt", "w") as f:

f.write(text)

return {"styles": styles, "responsive": responsive, "text": text}

```
