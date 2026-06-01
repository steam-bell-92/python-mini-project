import pygame
import random
import sys

# Import our custom mathematical graphics engine from suits.py
from suits import get_suit_surface

# Initialize Pygame
pygame.init()

# --- CONSTANTS ---
WIDTH, HEIGHT = 800, 600
FPS = 60

# Colors
BG_COLOR = (14, 89, 31) 
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (220, 0, 0)
GOLD = (212, 175, 55)
GRAY = (200, 200, 200)

# Fonts
title_font = pygame.font.SysFont("arial", 48, bold=True)
font = pygame.font.SysFont("arial", 28, bold=True)
small_font = pygame.font.SysFont("arial", 20, bold=True)

# Setup screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Blackjack 21")
clock = pygame.time.Clock()

# --- HELPER FUNCTIONS ---
def get_new_deck():
    """Generates and shuffles a new deck of cards."""
    suits = ['S', 'H', 'D', 'C']
    ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    deck = [f"{rank}{suit}" for suit in suits for rank in ranks]
    random.shuffle(deck)
    return deck

def calculate_score(hand):
    """Calculates the optimal score for a hand (handling Aces)."""
    score = 0
    aces = 0
    for card in hand:
        rank = card[:-1]
        if rank in ['J', 'Q', 'K']:
            score += 10
        elif rank == 'A':
            score += 1
            aces += 1
        else:
            score += int(rank)
            
    while aces > 0 and score + 10 <= 21:
        score += 10
        aces -= 1
        
    return score

def draw_text(text, font, text_col, x, y, center=False):
    """Utility to draw text on the screen."""
    img = font.render(text, True, text_col)
    rect = img.get_rect()
    if center:
        rect.center = (x, y)
    else:
        rect.topleft = (x, y)
    screen.blit(img, rect)

def draw_card(card, x, y, hidden=False):
    """Draws a complete playing card using the imported parametric suits."""
    card_rect = pygame.Rect(x, y, 80, 120)
    pygame.draw.rect(screen, WHITE, card_rect, border_radius=5)
    pygame.draw.rect(screen, BLACK, card_rect, 2, border_radius=5)
    
    if hidden:
        pygame.draw.rect(screen, RED, card_rect.inflate(-10, -10), border_radius=3)
        draw_text("?", title_font, WHITE, x + 40, y + 60, center=True)
    else:
        rank = card[:-1]
        suit = card[-1]
        color = RED if suit in ['H', 'D'] else BLACK
        
        # --- Top Left ---
        draw_text(rank, small_font, color, x + 5, y + 5)
        
        # --- Center ---
        large_suit = get_suit_surface(suit, color, 45)
        screen.blit(large_suit, (x + 17, y + 37))
        
        # --- Bottom Right ---
        rank_surf = small_font.render(rank, True, color)
        rank_surf_inv = pygame.transform.rotate(rank_surf, 180)
        screen.blit(rank_surf_inv, (x + 75 - rank_surf_inv.get_width(), y + 115 - rank_surf_inv.get_height()))

# --- GAME VARIABLES ---
deck = []
player_cards = []
dealer_cards = []
game_state = "START" 
result_msg = ""

# Button Rects
hit_button = pygame.Rect(250, 500, 120, 50)
stand_button = pygame.Rect(430, 500, 120, 50)
restart_button = pygame.Rect(300, 500, 200, 50)

# --- MAIN GAME LOOP ---
running = True
while running:
    clock.tick(FPS)
    screen.fill(BG_COLOR)
    
    # Event Handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            
        if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            mouse_pos = event.pos
            
            if game_state == "PLAYING":
                if hit_button.collidepoint(mouse_pos):
                    player_cards.append(deck.pop())
                    if calculate_score(player_cards) > 21:
                        result_msg = "BUST! Dealer wins!"
                        game_state = "GAME_OVER"
                        
                elif stand_button.collidepoint(mouse_pos):
                    game_state = "GAME_OVER"
                    while calculate_score(dealer_cards) < 17:
                        dealer_cards.append(deck.pop())
                        
                    p_score = calculate_score(player_cards)
                    d_score = calculate_score(dealer_cards)
                    
                    if d_score > 21:
                        result_msg = "DEALER BUSTS! You win!"
                    elif p_score == d_score:
                        result_msg = "IT'S A PUSH! (Draw)"
                    elif p_score > d_score:
                        result_msg = "YOU WIN!"
                    else:
                        result_msg = "DEALER WINS!"
                        
            elif game_state == "GAME_OVER":
                if restart_button.collidepoint(mouse_pos):
                    game_state = "START"
                    
    # State Logic
    if game_state == "START":
        deck = get_new_deck()
        player_cards = [deck.pop(), deck.pop()]
        dealer_cards = [deck.pop(), deck.pop()]
        result_msg = ""
        game_state = "PLAYING"
        
        if calculate_score(player_cards) == 21:
            result_msg = "BLACKJACK! You win!"
            game_state = "GAME_OVER"

    # --- DRAWING THE SCREEN ---
    draw_text("BLACKJACK 21", title_font, GOLD, WIDTH//2, 40, center=True)
    pygame.draw.line(screen, GOLD, (150, 70), (650, 70), 3)

    if game_state in ["PLAYING", "GAME_OVER"]:
        # Dealer's Hand
        draw_text("Dealer's Hand", font, WHITE, 50, 100)
        for i, card in enumerate(dealer_cards):
            x_offset = 50 + (i * 90)
            is_hidden = (i == 0 and game_state == "PLAYING")
            draw_card(card, x_offset, 140, hidden=is_hidden)
            
        if game_state == "GAME_OVER":
            d_score = calculate_score(dealer_cards)
            draw_text(f"Score: {d_score}", small_font, GOLD, 50, 270)
        else:
            visible_score = calculate_score([dealer_cards[1]])
            draw_text(f"Score: {visible_score} + ?", small_font, GOLD, 50, 270)

        # Player's Hand
        p_score = calculate_score(player_cards)
        draw_text("Your Hand", font, WHITE, 50, 310)
        for i, card in enumerate(player_cards):
            x_offset = 50 + (i * 90)
            draw_card(card, x_offset, 350)
        draw_text(f"Score: {p_score}", small_font, GOLD, 50, 480)

    # Draw UI Elements
    if game_state == "PLAYING":
        pygame.draw.rect(screen, GRAY, hit_button, border_radius=10)
        pygame.draw.rect(screen, BLACK, hit_button, 2, border_radius=10)
        draw_text("HIT", font, BLACK, hit_button.centerx, hit_button.centery, center=True)
        
        pygame.draw.rect(screen, GRAY, stand_button, border_radius=10)
        pygame.draw.rect(screen, BLACK, stand_button, 2, border_radius=10)
        draw_text("STAND", font, BLACK, stand_button.centerx, stand_button.centery, center=True)
        
    elif game_state == "GAME_OVER":
        pygame.draw.rect(screen, BLACK, (150, 200, 500, 100), border_radius=15)
        pygame.draw.rect(screen, GOLD, (150, 200, 500, 100), 3, border_radius=15)
        draw_text(result_msg, font, WHITE, WIDTH//2, 250, center=True)
        
        pygame.draw.rect(screen, GOLD, restart_button, border_radius=10)
        pygame.draw.rect(screen, BLACK, restart_button, 2, border_radius=10)
        draw_text("PLAY AGAIN", font, BLACK, restart_button.centerx, restart_button.centery, center=True)

    pygame.display.flip()

pygame.quit()
sys.exit()