import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_radial_gradient(color_center, color_edge):
    """Create a high-fidelity smooth radial gradient by resizing a eased 24x24 radial dot."""
    w, h = 24, 24
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    cx, cy = w / 2 - 0.5, h / 2 - 0.5
    max_dim = (cx**2 + cy**2)**0.5
    for y in range(h):
        for x in range(w):
            dx = x - cx
            dy = y - cy
            dist = (dx**2 + dy**2)**0.5
            ratio = min(dist / max_dim, 1.0)
            # Smooth cubic easing
            ratio = ratio * ratio * (3 - 2 * ratio)
            r = int(color_center[0] * (1 - ratio) + color_edge[0] * ratio)
            g = int(color_center[1] * (1 - ratio) + color_edge[1] * ratio)
            b = int(color_center[2] * (1 - ratio) + color_edge[2] * ratio)
            draw.point((x, y), fill=(r, g, b))
    return img.resize((800, 450), Image.Resampling.BILINEAR)

def draw_cyber_grid(draw, color, density=40):
    """Draw a thin retro developer grid lines."""
    for x in range(0, 800, density):
        draw.line([(x, 0), (x, 450)], fill=color, width=1)
    for y in range(0, 450, density):
        draw.line([(0, y), (800, y)], fill=color, width=1)

def draw_perspective_grid(draw, color):
    """Draw an immersive synthwave perspective grid."""
    horizon_y = 160
    draw.line([(0, horizon_y), (800, horizon_y)], fill=color, width=1)
    cx = 400
    for x in range(-400, 1200, 40):
        draw.line([(cx, horizon_y), (x, 450)], fill=color, width=1)
    y = 450.0
    while y > horizon_y + 5:
        draw.line([(0, int(y)), (800, int(y))], fill=color, width=1)
        y = horizon_y + (y - horizon_y) * 0.82

def generate_banner(name, category, filename):
    """Generate a highly customized, vector-styled banner for the card."""
    # Tailor color scheme by category
    if category == "games":
        color_center = (25, 10, 55)
        color_edge = (6, 3, 16)
        color_accent = (236, 72, 153) # Neon Pink
        color_accent_dim = (236, 72, 153, 40)
        color_grid = (236, 72, 153, 20)
        grid_type = "perspective"
    elif category == "math":
        color_center = (8, 24, 60)
        color_edge = (3, 6, 20)
        color_accent = (99, 102, 241) # Cosmic Indigo
        color_accent_dim = (99, 102, 241, 50)
        color_grid = (99, 102, 241, 24)
        grid_type = "polar"
    else: # utilities
        color_center = (6, 32, 24)
        color_edge = (2, 8, 6)
        color_accent = (16, 185, 129) # Mint Green
        color_accent_dim = (16, 185, 129, 50)
        color_grid = (16, 185, 129, 24)
        grid_type = "regular"

    # Base Background Gradient
    img = create_radial_gradient(color_center, color_edge)
    
    # Vector Overlay Layer
    vector_layer = Image.new("RGBA", (800, 450))
    v_draw = ImageDraw.Draw(vector_layer)

    # 1. Grid type overlays
    if grid_type == "perspective":
        draw_perspective_grid(v_draw, color_grid)
    elif grid_type == "polar":
        # Draw concentric rings
        cx, cy = 400, 225
        for r in range(50, 500, 60):
            v_draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color_grid, width=1)
        # Draw radial rays
        for i in range(12):
            angle = i * (math.pi / 6)
            dx = int(500 * math.cos(angle))
            dy = int(500 * math.sin(angle))
            v_draw.line([(cx, cy), (cx + dx, cy + dy)], fill=color_grid, width=1)
    else:
        draw_cyber_grid(v_draw, color_grid, density=50)

    # 2. Draw topic-specific customized vector art
    n_lower = name.lower()
    if "2048" in n_lower:
        # Draw 2048 tile grid
        for i, val in enumerate(["2", "4", "8", "16"]):
            x = 240 + (i % 2) * 180
            y = 120 + (i // 2) * 120
            v_draw.rounded_rectangle([x, y, x + 140, y + 90], radius=12, fill=(255,255,255,8), outline=color_accent, width=2)
            v_draw.text((x + 70, y + 45), val, fill=color_accent, anchor="mm")
    elif "fibonacci" in n_lower:
        # Draw golden spiral
        cx, cy = 400, 225
        points = []
        angle = 0
        r_scale = 0.5
        for i in range(250):
            r = r_scale * math.exp(0.015 * i)
            x = cx + r * math.cos(angle)
            y = cy + r * math.sin(angle)
            points.append((x, y))
            angle += 0.05
        if len(points) > 1:
            v_draw.line(points, fill=color_accent, width=3)
    elif "pascal" in n_lower:
        # Draw pascal hexagon nodes
        rows = 4
        for r in range(rows):
            for c in range(r + 1):
                x = 400 + (c - r / 2.0) * 100
                y = 100 + r * 75
                # draw glowing hex node
                v_draw.ellipse([x - 22, y - 22, x + 22, y + 22], fill=(255,255,255,10), outline=color_accent, width=2)
    elif "projectile" in n_lower:
        # Parabolic motion curve
        points = []
        for x_val in range(100, 700, 4):
            # Parabola formula
            t = (x_val - 100) / 500.0
            y_val = 350 - 400 * t * (1 - t)
            points.append((x_val, y_val))
        v_draw.line(points, fill=color_accent, width=3)
        # Draw target explosion
        v_draw.ellipse([690, 340, 710, 360], fill=color_accent, outline=(255,255,255), width=2)
    elif "calculator" in n_lower:
        # Operator grids
        ops = ["+", "-", "×", "÷"]
        for i, op in enumerate(ops):
            x = 220 + i * 100
            y = 160
            v_draw.rounded_rectangle([x, y, x + 70, y + 70], radius=15, fill=(255,255,255,12), outline=color_accent, width=2)
            v_draw.text((x + 35, y + 35), op, fill=color_accent, anchor="mm")
    elif "dice" in n_lower:
        # Two tilted glowing dice
        def draw_die(ox, oy):
            v_draw.rounded_rectangle([ox, oy, ox + 90, oy + 90], radius=18, fill=(255,255,255,10), outline=color_accent, width=3)
            # pips
            pips = [(ox + 45, oy + 45), (ox + 25, oy + 25), (ox + 65, oy + 65)]
            for p in pips:
                v_draw.ellipse([p[0]-6, p[1]-6, p[0]+6, p[1]+6], fill=color_accent)
        draw_die(250, 140)
        draw_die(460, 200)
    elif "coin" in n_lower:
        # Glowing spinning gold coin arcs
        cx, cy = 400, 225
        v_draw.ellipse([cx - 70, cy - 70, cx + 70, cy + 70], outline=color_accent, width=3)
        v_draw.ellipse([cx - 40, cy - 40, cx + 40, cy + 40], outline=color_accent, width=1)
        v_draw.text((cx, cy), "$", fill=color_accent, anchor="mm")
        # Spin rings
        v_draw.ellipse([cx - 110, cy - 35, cx + 110, cy + 35], outline=color_accent_dim, width=2)
    elif "snake" in n_lower:
        # Serpentine trail
        pts = [(160, 320), (320, 320), (320, 160), (520, 160), (520, 280), (600, 280)]
        v_draw.line(pts, fill=color_accent, width=6, joint="round")
        # Draw apple
        v_draw.ellipse([625, 270, 645, 290], fill=(239, 68, 68), outline=(255,255,255), width=2)
    elif "dots" in n_lower:
        # Connect dots
        for r in range(4):
            for c in range(6):
                x = 220 + c * 70
                y = 120 + r * 70
                v_draw.ellipse([x - 4, y - 4, x + 4, y + 4], fill=(255,255,255,180))
        # Draw active connections
        v_draw.line([(220, 120), (290, 120)], fill=color_accent, width=3)
        v_draw.line([(290, 120), (290, 190)], fill=color_accent, width=3)
        v_draw.line([(290, 190), (360, 190)], fill=color_accent, width=3)
    elif "tower" in n_lower:
        # Tower of hanoi poles and rings
        v_draw.line([(250, 350), (250, 150)], fill=(255,255,255,120), width=6)
        v_draw.line([(400, 350), (400, 150)], fill=(255,255,255,120), width=6)
        v_draw.line([(550, 350), (550, 150)], fill=(255,255,255,120), width=6)
        v_draw.line([(180, 350), (620, 350)], fill=(255,255,255,120), width=8)
        # rings
        v_draw.rounded_rectangle([320, 330, 480, 348], radius=6, fill=color_accent, outline=(255,255,255,100))
        v_draw.rounded_rectangle([340, 310, 460, 328], radius=6, fill=color_accent, outline=(255,255,255,100))
        v_draw.rounded_rectangle([210, 330, 290, 348], radius=6, fill=color_accent)
    elif "hangman" in n_lower:
        # Gallows
        v_draw.line([(250, 350), (400, 350)], fill=(255,255,255,100), width=6)
        v_draw.line([(320, 350), (320, 120)], fill=(255,255,255,100), width=6)
        v_draw.line([(320, 120), (450, 120)], fill=(255,255,255,100), width=6)
        v_draw.line([(450, 120), (450, 160)], fill=(255,255,255,100), width=3)
        # Glowing stick figure
        v_draw.ellipse([435, 160, 465, 190], outline=color_accent, width=3) # head
        v_draw.line([(450, 190), (450, 260)], fill=color_accent, width=3) # body
        v_draw.line([(450, 205), (420, 230)], fill=color_accent, width=3) # arms
        v_draw.line([(450, 205), (480, 230)], fill=color_accent, width=3)
    elif "password" in n_lower:
        # Key lock shield
        cx, cy = 400, 225
        v_draw.ellipse([cx-40, cy-40, cx+40, cy+40], outline=color_accent, width=4)
        v_draw.rectangle([cx-8, cy, cx+8, cy+50], fill=color_accent)
        v_draw.ellipse([cx-8, cy, cx+8, cy+16], fill=(255,255,255))
    elif "speed" in n_lower or "typing" in n_lower:
        # Keyboard buttons
        for c in range(5):
            x = 200 + c * 90
            y = 180
            v_draw.rounded_rectangle([x, y, x + 70, y + 70], radius=10, fill=(255,255,255,10), outline=color_accent, width=2)
            key = ["Q", "W", "E", "R", "T"][c]
            v_draw.text((x + 35, y + 35), key, fill=color_accent, anchor="mm")
    elif "armstrong" in n_lower or "prime" in n_lower:
        # Math number grids
        for r in range(3):
            for c in range(5):
                num = str(r * 5 + c + 1)
                x = 220 + c * 80
                y = 130 + r * 70
                is_prime = num in ["2", "3", "5", "7", "11", "13"]
                bg = color_accent if is_prime else (255,255,255,12)
                fg = (255,255,255) if is_prime else color_accent
                v_draw.rounded_rectangle([x, y, x + 60, y + 50], radius=8, fill=bg, outline=color_accent, width=2)
                v_draw.text((x + 30, y + 25), num, fill=fg, anchor="mm")
    elif "coordinate" in n_lower or "polar" in n_lower:
        # Cartesian grid intersecting polar coordinate circle mesh
        cx, cy = 400, 225
        v_draw.line([(150, cy), (650, cy)], fill=(255,255,255,80), width=2)
        v_draw.line([(cx, 50), (cx, 400)], fill=(255,255,255,80), width=2)
        for r in [50, 100, 150]:
            v_draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=color_accent, width=2)
    elif "collatz" in n_lower:
        # Beautiful branching curves representing paths
        cx, cy = 400, 380
        for i in range(12):
            angle = -math.pi / 2 + (i - 5.5) * 0.08
            pts = [(cx, cy), (cx + 120 * math.cos(angle), cy - 120 * math.sin(angle)), 
                   (cx + 250 * math.cos(angle + 0.1), cy - 250 * math.sin(angle + 0.1))]
            v_draw.line(pts, fill=color_accent, width=2)
    elif "derivative" in n_lower:
        # Curve and tangent line
        pts = []
        for x_val in range(150, 650, 5):
            t = (x_val - 150) / 500.0
            y_val = 320 - 150 * math.sin(t * math.pi * 1.5)
            pts.append((x_val, y_val))
        v_draw.line(pts, fill=(255,255,255,100), width=2)
        # Tangent line at t=0.5 (x=400, y=210)
        v_draw.line([(250, 140), (550, 280)], fill=color_accent, width=3)
        v_draw.ellipse([395, 205, 405, 215], fill=color_accent)
    elif "simon" in n_lower:
        # Simon Says 4 neon color quadrants
        cx, cy = 400, 225
        colors = [(239, 68, 68), (59, 130, 246), (16, 185, 129), (245, 158, 11)] # R, B, G, Y
        for i in range(4):
            dx = -1 if i%2 == 0 else 1
            dy = -1 if i//2 == 0 else 1
            x = cx + dx * 10 - (50 if dx < 0 else 0)
            y = cy + dy * 10 - (50 if dy < 0 else 0)
            v_draw.rounded_rectangle([x, y, x+50, y+50], radius=8, fill=colors[i])
    elif "flappy" in n_lower:
        # Glowing pillars
        v_draw.rounded_rectangle([250, 0, 310, 160], radius=8, fill=(255,255,255,12), outline=color_accent, width=3)
        v_draw.rounded_rectangle([250, 290, 310, 450], radius=8, fill=(255,255,255,12), outline=color_accent, width=3)
        v_draw.rounded_rectangle([520, 0, 580, 220], radius=8, fill=(255,255,255,12), outline=color_accent, width=3)
        v_draw.rounded_rectangle([520, 350, 580, 450], radius=8, fill=(255,255,255,12), outline=color_accent, width=3)
        # Bird
        v_draw.ellipse([390, 215, 420, 245], fill=color_accent, outline=(255,255,255), width=2)
    elif "morse" in n_lower:
        # Dots and dashes
        symbols = [".", "-", "-", "."]
        for i, s in enumerate(symbols):
            x = 220 + i * 100
            y = 180
            if s == ".":
                v_draw.ellipse([x + 25, y + 25, x + 45, y + 45], fill=color_accent)
            else:
                v_draw.rounded_rectangle([x + 10, y + 30, x + 60, y + 40], radius=5, fill=color_accent)
    elif "converter" in n_lower:
        # binary text strings floating
        v_draw.text((250, 130), "01001011", fill=color_accent_dim)
        v_draw.text((450, 130), "HEX: 4B", fill=color_accent)
        v_draw.text((320, 250), "DEC: 75", fill=color_accent)
    elif "mole" in n_lower:
        # Hammer and mole hole
        cx, cy = 400, 225
        v_draw.ellipse([cx-60, cy+10, cx+60, cy+40], fill=(0,0,0,100), outline=color_accent, width=2) # hole
        # Mole head poking out
        v_draw.rounded_rectangle([cx-30, cy-50, cx+30, cy+20], radius=20, fill=color_accent)
        v_draw.ellipse([cx-15, cy-35, cx-5, cy-25], fill=(255,255,255))
        v_draw.ellipse([cx+5, cy-35, cx+15, cy-25], fill=(255,255,255))
    elif "rock" in n_lower or "scissor" in n_lower:
        # Simple shapes for rock, paper, scissors
        v_draw.ellipse([220, 160, 300, 240], fill=(255,255,255,10), outline=color_accent, width=3) # Rock
        v_draw.rectangle([360, 160, 440, 240], fill=(255,255,255,10), outline=color_accent, width=3) # Paper
        # Scissors (two lines crossing)
        v_draw.line([(500, 160), (580, 240)], fill=color_accent, width=5)
        v_draw.line([(580, 160), (500, 240)], fill=color_accent, width=5)
    elif "word" in n_lower or "scramble" in n_lower:
        # Scattered letters
        letters = ["P", "Y", "T", "H", "O", "N"]
        coords = [(210, 130), (330, 270), (450, 120), (570, 260), (280, 210), (500, 190)]
        for i, l in enumerate(letters):
            x, y = coords[i]
            v_draw.text((x, y), l, fill=color_accent)
    elif "flames" in n_lower:
        # Hearts and flames
        cx, cy = 400, 225
        v_draw.ellipse([cx - 40, cy - 20, cx, cy + 20], fill=color_accent)
        v_draw.ellipse([cx, cy - 20, cx + 40, cy + 20], fill=color_accent)
        v_draw.polygon([(cx - 38, cy + 5), (cx + 38, cy + 5), (cx, cy + 50)], fill=color_accent)
    elif "blackjack" in n_lower:
        # Playing cards
        def draw_card(x, y, val):
            v_draw.rounded_rectangle([x, y, x+80, y+120], radius=8, fill=(255,255,255,10), outline=color_accent, width=3)
            v_draw.text((x+40, y+60), val, fill=color_accent, anchor="mm")
        draw_card(260, 150, "A")
        draw_card(460, 150, "10")
    elif "tic-tac-toe" in n_lower:
        # Tic-tac-toe board and winning diagonal match state
        cx, cy = 400, 225
        # Grid lines
        v_draw.line([(cx-60, cy-100), (cx-60, cy+100)], fill=color_accent, width=4)
        v_draw.line([(cx+60, cy-100), (cx+60, cy+100)], fill=color_accent, width=4)
        v_draw.line([(cx-100, cy-60), (cx+100, cy-60)], fill=color_accent, width=4)
        v_draw.line([(cx-100, cy+60), (cx+100, cy+60)], fill=color_accent, width=4)
        
        # Helper X/O drawers
        def draw_x(ox, oy):
            v_draw.line([(ox-20, oy-20), (ox+20, oy+20)], fill=(255, 255, 255), width=4)
            v_draw.line([(ox+20, oy-20), (ox-20, oy+20)], fill=(255, 255, 255), width=4)
            
        def draw_o(ox, oy):
            v_draw.ellipse([ox-20, oy-20, ox+20, oy+20], outline=color_accent, width=4)
            
        # Draw game state (Winning diagonal for X)
        draw_x(cx-100, cy-100) # Top-Left
        draw_x(cx, cy)         # Middle-Center
        draw_x(cx+100, cy+100) # Bottom-Right
        
        draw_o(cx-100, cy)     # Middle-Left
        draw_o(cx+100, cy-100) # Top-Right
        
        # Glowing winning strike line
        v_draw.line([(cx-130, cy-130), (cx+130, cy+130)], fill=(255, 75, 75), width=6)
    elif "color" in n_lower or "palette" in n_lower:
        # Color palette suggestor
        colors = [(239, 68, 68), (245, 158, 11), (253, 224, 71), (16, 185, 129), (59, 130, 246)]
        for i, col in enumerate(colors):
            x = 220 + i * 80
            y = 175
            v_draw.ellipse([x, y, x + 65, y + 65], fill=col, outline=(255,255,255,100), width=2)
    elif "resume" in n_lower or "analyzer" in n_lower:
        # Resume analyzer dashboard
        v_draw.rounded_rectangle([250, 100, 550, 350], radius=24, fill=(255,255,255,12), outline=color_accent, width=3)
        v_draw.rounded_rectangle([285, 135, 515, 315], radius=18, fill=(255,255,255,8), outline=(255,255,255,50), width=2)
        v_draw.polygon([(332, 135), (515, 135), (515, 190)], fill=(255,255,255,20), outline=color_accent)
        v_draw.ellipse([280, 145, 390, 255], outline=color_accent, width=8)
        v_draw.text((335, 200), "82%", fill=color_accent, anchor="mm")
        for i, w in enumerate([90, 75, 65]):
            y = 275 + i * 18
            v_draw.rounded_rectangle([410, y, 410 + w, y + 10], radius=4, fill=color_accent)
        v_draw.text((430, 165), "AI RESUME", fill=color_accent, anchor="lm")
        v_draw.text((430, 188), "ANALYZER", fill=(255,255,255), anchor="lm")
    elif "caesar" in n_lower:
        # Cipher wheel and shifting letters
        cx, cy = 400, 225
        for r in range(55, 190, 28):
            v_draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=color_accent, width=2)
        for i, ch in enumerate("ABCDEFGHIJKLMNOPQRSTUVWXYZ"):
            angle = (i / 26.0) * (2 * math.pi)
            x = cx + int(175 * math.cos(angle))
            y = cy + int(175 * math.sin(angle))
            v_draw.text((x, y), ch, fill=color_accent, anchor="mm")
        v_draw.line([(250, 115), (550, 335)], fill=color_accent_dim, width=3)
        v_draw.line([(550, 115), (250, 335)], fill=color_accent_dim, width=3)
        v_draw.rounded_rectangle([305, 160, 495, 290], radius=24, fill=(255,255,255,14), outline=color_accent, width=3)
        v_draw.text((400, 225), "A+3", fill=color_accent, anchor="mm")
    elif "pet" in n_lower or "productivity" in n_lower:
        # Cute paw print
        cx, cy = 400, 225
        v_draw.ellipse([cx-20, cy-15, cx+20, cy+25], fill=color_accent) # pad
        v_draw.ellipse([cx-35, cy-40, cx-15, cy-20], fill=color_accent) # toe 1
        v_draw.ellipse([cx-10, cy-50, cx+10, cy-30], fill=color_accent) # toe 2
        v_draw.ellipse([cx+15, cy-40, cx+35, cy-20], fill=color_accent) # toe 3
    else:
        # Default nice abstract waves
        points = []
        for x in range(0, 800, 10):
            y = 225 + 100 * math.sin(x * 0.01) + 20 * math.cos(x * 0.03)
            points.append((x, y))
        v_draw.line(points, fill=color_accent, width=3)

    # Blur vectors slightly for neon glow look
    glow = vector_layer.filter(ImageFilter.GaussianBlur(8))
    # Composite: Background + Glow + Sharp Vector Outline
    composite = Image.alpha_composite(Image.alpha_composite(img.convert("RGBA"), glow), vector_layer)

    # 3. Floating Glassmorphism Center Card Panel
    glass_layer = Image.new("RGBA", (800, 450))
    gl_draw = ImageDraw.Draw(glass_layer)
    gl_draw.rounded_rectangle([150, 110, 650, 340], radius=24, fill=(255, 255, 255, 14), outline=(255, 255, 255, 45), width=2)
    
    # Load fonts cleanly
    try:
        font_title = ImageFont.truetype("segoeui.ttf", 36)
        font_subtitle = ImageFont.truetype("segoeui.ttf", 16)
    except IOError:
        try:
            font_title = ImageFont.truetype("arial.ttf", 36)
            font_subtitle = ImageFont.truetype("arial.ttf", 16)
        except IOError:
            font_title = ImageFont.load_default()
            font_subtitle = ImageFont.load_default()

    # Draw Text Labels
    # Shadow text
    gl_draw.text((402, 212), name, fill=(0, 0, 0, 160), anchor="mm", font=font_title)
    # Highlight text
    gl_draw.text((400, 210), name, fill=(255, 255, 255, 255), anchor="mm", font=font_title)
    
    cat_text = category.upper() + " LAB" if category != "games" else "GAMES ARCADE"
    # Category tag kicker
    gl_draw.text((400, 275), cat_text, fill=color_accent, anchor="mm", font=font_subtitle)

    final_img = Image.alpha_composite(composite, glass_layer).convert("RGB")
    
    # Save Image
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    final_img.save(filename, "JPEG", quality=90)
    print(f"Generated HD banner: {filename}")

# Project category directory mappings

projects = [
    # GAMES
    ("2048 Game", "games", "2048-game.webp"),
    ("Coin Flip", "games", "coin-flip.webp"),
    ("Dice Rolling", "games", "dice-rolling.webp"),
    ("Dots & Boxes AI", "games", "dots-boxes.webp"),
    ("Emoji Memory Game", "games", "emoji-memory-game.webp"),  # FIXED filename
    ("FLAMES Game", "games", "flames.webp"),
    ("Flappy Game", "games", "flappy-game.webp"),
    ("Hangman", "games", "hangman.webp"),
    ("Math Quiz", "games", "math-quiz.webp"),
    ("Number Guessing", "games", "number-guessing.webp"),
    ("Password Forge", "games", "password-forge.webp"),
    ("Rock Paper Scissors", "games", "rock-paper-scissor.webp"),
    ("Snake Game", "games", "snake.webp"),
    ("Whack-a-Mole", "games", "whack-a-mole.webp"),
    ("Word Scramble", "games", "word-scramble.webp"),
    ("Blackjack 21", "games", "blackjack21.webp"),
    ("Simon Says", "games", "simon-says.webp"),
    ("Tic Tac Toe", "games", "tic-tac-toe.webp"),
    ("Spot the Difference", "games", "spot-the-difference.webp"),
    ("Productive Pet", "utilities", "productive-pet.webp"),
    ("Progress Tracker", "utilities", "progress-tracker.webp"),

    # MATH
    ("AP/GP/AGP/HP Recognizer", "math", "progression-recognizer.webp"),
    ("Armstrong Numbers", "math", "armstrong.webp"),
    ("Calculator", "math", "calculator.webp"),
    ("Collatz Conjecture", "math", "collatz.webp"),
    ("Coordinate to Polar", "math", "coordinate-polar-transform.webp"),
    ("Derivative Calculator", "math", "derivative-calculator.webp"),
    ("Fibonacci Series", "math", "fibonacci.webp"),
    ("Pascal's Triangle", "math", "pascal-triangle.webp"),
    ("Prime Analyzer", "math", "prime-analyzer.webp"),
    ("Projectile Motion", "math", "projectile-motion.webp"),
    ("Binary Search", "math", "binary-search.webp"),
    ("Bubble Sort", "math", "bubble-sort.webp"),
    ("Tower of Hanoi", "math", "tower-of-hanoi.webp"),

    # UTILITIES
    ("Morse Code", "utilities", "morse-code.webp"),
    ("Number Converter", "utilities", "number-converter.webp"),
    ("Tower of Hanoi", "utilities", "tower-of-hanoi.webp"),
    ("Typing Speed Tester", "utilities", "typing-speed-tester.webp"),
    ("Color Palette Suggestor", "utilities", "color-palette.webp"),
    ("AI Resume Analyzer", "utilities", "resume-analyzer.webp"),
    ("Caesar Cipher", "utilities", "caesar-cipher.webp"),
]

# Run generation
script_dir = os.path.dirname(os.path.abspath(__file__))
banners_dir = os.path.join(script_dir, "assets", "banners")
for name, cat, filename in projects:
    dest_path = os.path.join(banners_dir, filename)
    generate_banner(name, cat, dest_path)

print("All HD banner images generated successfully!")
