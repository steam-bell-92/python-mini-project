import pygame
import math

# Global cache so we don't recalculate the heavy math every frame
SUIT_CACHE = {}

def get_heart_points(cx, cy, scale, invert=False):
    """Generates pure parametric coordinates for a perfect heart."""
    points = []
    for i in range(360):
        t = math.radians(i)
        
        # The canonical Heart equations
        x = 16 * (math.sin(t) ** 3)
        y = 13 * math.cos(t) - 5 * math.cos(2*t) - 2 * math.cos(3*t) - math.cos(4*t)
        
        # Pygame Y-axis goes down, so we subtract Y. 
        # If inverted (for Spades), we add Y to flip it upside down.
        if invert:
            points.append((cx + x * scale, cy + y * scale))
        else:
            points.append((cx + x * scale, cy - y * scale))
    return points

def get_circle_points(cx, cy, r):
    """Generates pure parametric coordinates for perfect circular lobes (for Clubs)."""
    points = []
    for i in range(360):
        t = math.radians(i)
        points.append((cx + r * math.cos(t), cy + r * math.sin(t)))
    return points

def get_suit_surface(suit, color, final_size):
    """Builds and caches the suit surface using mathematical geometry."""
    key = (suit, color, final_size)
    if key in SUIT_CACHE: 
        return SUIT_CACHE[key]
    
    # Supersampling trick: Draw 4x larger, then shrink smoothly to remove pixelation
    scale_factor = 4
    high_res_size = final_size * scale_factor
    surf = pygame.Surface((high_res_size, high_res_size), pygame.SRCALPHA)
    
    cx, cy = high_res_size / 2, high_res_size / 2
    w, h = high_res_size * 0.8, high_res_size * 0.8 

    if suit == 'D': # Diamond: Simple geometric polygon
        pygame.draw.polygon(surf, color, [(cx, cy - h/2), (cx + w/2.1, cy), (cx, cy + h/2), (cx - w/2.1, cy)])
        
    elif suit == 'H': # Heart: Pure parametric equation
        scale = high_res_size * 0.025
        # Shift slightly down to visually center in the box
        points = get_heart_points(cx, cy + (high_res_size * 0.05), scale, invert=False)
        pygame.draw.polygon(surf, color, points)
        
    elif suit == 'S': # Spade: Inverted parametric heart + polygon stem
        scale = high_res_size * 0.025
        # Shift slightly down to visually center in the box
        points = get_heart_points(cx, cy + (high_res_size * 0.05), scale, invert=True)
        pygame.draw.polygon(surf, color, points)

        # Draw the stem base flaring outwards
        stem_top_y = (cy - (high_res_size * 0.05)) + (2 * scale)
        stem_bottom_y = cy + h/1.5
        
        pygame.draw.polygon(surf, color, [
            (cx, stem_top_y), 
            (cx - w/8, stem_bottom_y), 
            (cx + w/8, stem_bottom_y)
        ])
        
    elif suit == 'C': # Club: 3 Parametric circular lobes + polygon stem
        # Three intersecting circles forming the clover
        pygame.draw.polygon(surf, color, get_circle_points(cx, cy - h/4, w/3.8))       # Top lobe
        pygame.draw.polygon(surf, color, get_circle_points(cx - w/4.5, cy + h/10, w/3.8)) # Bottom Left
        pygame.draw.polygon(surf, color, get_circle_points(cx + w/4.5, cy + h/10, w/3.8)) # Bottom Right
        
        # Draw the stem base filling the gap and flaring downwards
        pygame.draw.polygon(surf, color, [(cx, cy), (cx - w/8, cy + h/2), (cx + w/8, cy + h/2)])
        
    # Scale down smoothly for absolutely perfect, anti-aliased vector edges
    final_surf = pygame.transform.smoothscale(surf, (final_size, final_size))
    SUIT_CACHE[key] = final_surf
    return final_surf