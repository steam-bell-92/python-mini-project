# Quote Cards

Generate visually appealing quote card images for social media from podcast pull quotes.

## Table of Contents

- [Design Specifications](#design-specifications)
- [Output Dimensions](#output-dimensions)

- [Generation Methods](#generation-methods)
- [Text Layout Rules](#text-layout-rules)

## Design Specifications

Each quote card should include:

1. **Quote text** — formatted for visual impact with line breaks at natural pauses
2. **Speaker attribution** — name and title/role

3. **Podcast branding** — show name or logo
4. **Background** — gradient, solid color, or subtle pattern (not a busy photo)

### Style Guidelines

- **Typography**: Use a bold, readable font for the quote. Sans-serif for modern feel, serif for authority/editorial feel.
- **Contrast**: Ensure strong contrast between text and background (WCAG AA minimum).

- **Whitespace**: Generous margins (at least 10% of canvas on all sides). The quote should breathe.
- **Hierarchy**: Quote text is largest, attribution is smaller, branding is smallest.

- **Color**: Pull from the podcast's brand palette if available. If not, use the tone of the episode to guide color choice (warm tones for personal stories, cool tones for technical content, bold tones for controversial takes).

## Output Dimensions

Generate each quote card in three sizes:

| Platform | Dimensions | Aspect Ratio | Use |

|----------|-----------|-------------|-----|

| Instagram Feed | 1080 x 1080 | 1:1 | Feed posts, carousels |

| Twitter/LinkedIn | 1200 x 675 | 16:9 | Tweet images, LinkedIn posts |

| Stories/Reels | 1080 x 1920 | 9:16 | Instagram Stories, TikTok |

## Generation Methods

### Method 1: Pillow (Python)

Use Pillow for programmatic generation. Best for batch processing and consistent branding.

```python

from PIL import Image, ImageDraw, ImageFont

import textwrap

def generate_quote_card(

quote_text: str,

speaker_name: str,

speaker_title: str,

podcast_name: str,

output_path: str,

width: int = 1080,

height: int = 1080,

bg_color: str = "#1a1a2e",

accent_color: str = "#e94560",

text_color: str = "#ffffff",

subtitle_color: str = "#a0a0b0",

):

img = Image.new("RGB", (width, height), bg_color)

draw = ImageDraw.Draw(img)

margin_x = int(width * 0.12)

margin_y = int(height * 0.15)

max_text_width = width - 2 * margin_x

try:

font_quote = ImageFont.truetype(

"/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",

int(width * 0.042),

)

font_speaker = ImageFont.truetype(

"/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",

int(width * 0.028),

)

font_brand = ImageFont.truetype(

"/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",

int(width * 0.022),

)

except OSError:

font_quote = ImageFont.load_default()

font_speaker = font_quote

font_brand = font_quote

draw.text(

(margin_x, margin_y - int(height * 0.08)),

"\u201c",

fill=accent_color,

font=ImageFont.truetype(

"/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",

int(width * 0.12),

) if font_quote != ImageFont.load_default() else font_quote,

)

chars_per_line = int(max_text_width / (width * 0.025))

wrapped = textwrap.fill(quote_text, width=chars_per_line)

lines = wrapped.split("\n")

y = margin_y + int(height * 0.05)

line_height = int(width * 0.058)

for line in lines:

draw.text((margin_x, y), line, fill=text_color, font=font_quote)

y += line_height

y += int(height * 0.04)

draw.line(

[(margin_x, y), (margin_x + int(width * 0.08), y)],

fill=accent_color,

width=3,

)

y += int(height * 0.03)

draw.text((margin_x, y), speaker_name, fill=text_color, font=font_speaker)

y += int(height * 0.04)

if speaker_title:

draw.text(

(margin_x, y), speaker_title, fill=subtitle_color, font=font_speaker

)

y += int(height * 0.04)

brand_bbox = draw.textbbox((0, 0), podcast_name, font=font_brand)

brand_width = brand_bbox[2] - brand_bbox[0]

draw.text(

(width - margin_x - brand_width, height - margin_y),

podcast_name,

fill=subtitle_color,

font=font_brand,

)

img.save(output_path, quality=95)

return output_path

```

### Method 2: AI Image Generation

For higher visual quality, use the `generate_image` tool to create unique, branded quote card backgrounds, then overlay the text programmatically. This produces more visually distinctive cards but takes longer.

Prompt pattern:

```text

Abstract background for a quote card. [Color palette description].

Subtle gradient with soft geometric shapes. No text. Modern, clean, editorial feel.

Dimensions: [width]x[height].

```

## Text Layout Rules

- **Maximum quote length**: 150 characters for single-size cards. For longer quotes (up to 250 chars), reduce font size by 20%.
- **Line breaks**: Break at natural pauses, not mid-phrase. Prioritize semantic breaks:

- Good: "Culture eats strategy\nfor breakfast"
- Bad: "Culture eats\nstrategy for breakfast"

- **Emphasis**: Use ALL CAPS for one key word/phrase if the quote has a clear punchline. Don't overdo it.
- **Attribution format**: "— Speaker Name" on one line, title/role on the next.
