import pygame
import sys

pygame.init()

# ── Palette ──────────────────────────────────────────────
BG        = (11, 11, 18)
SURFACE   = (24, 24, 36)
SURFACE2  = (34, 34, 52)
BORDER    = (55, 55, 80)
BORDER2   = (80, 80, 110)
TEXT_PRI  = (240, 240, 248)
TEXT_SEC  = (130, 130, 165)
ACCENT_X  = (80, 170, 255)
ACCENT_O  = (255, 100, 65)
WIN_X_BG  = (15, 40, 75)
WIN_O_BG  = (70, 25, 12)
WIN_X_BD  = (80, 170, 255)
WIN_O_BD  = (255, 100, 65)
DRAW_COL  = (150, 150, 185)
BTN_HOV   = (44, 44, 65)

# ── Window ────────────────────────────────────────────────
W, H = 560, 820
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption("Tic Tac Toe")
clock = pygame.time.Clock()

# ── Fonts ─────────────────────────────────────────────────
def sf(size, bold=False):
    for n in ["Segoe UI", "Helvetica Neue", "Arial", "DejaVu Sans"]:
        try: return pygame.font.SysFont(n, size, bold=bold)
        except: pass
    return pygame.font.Font(None, size)

def mf(size, bold=False):
    for n in ["Consolas", "Courier New", "DejaVu Sans Mono"]:
        try: return pygame.font.SysFont(n, size, bold=bold)
        except: pass
    return pygame.font.Font(None, size)

F_TAG    = sf(14, bold=True)
F_TURN   = sf(34, bold=True)
F_SYM    = sf(68, bold=True)
F_SL     = sf(13, bold=True)
F_SV     = mf(36, bold=True)
F_RESULT = sf(28, bold=True)
F_BTN    = sf(15, bold=True)

# ── State ─────────────────────────────────────────────────
board     = [""] * 9
current   = "X"
game_over = False
scores    = {"X": 0, "O": 0, "D": 0}
hover_idx = -1
WINS      = [(0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6)]

# ── Layout ────────────────────────────────────────────────
CELL  = 148
GAP   = 10
BX    = (W - (3*CELL + 2*GAP)) // 2   # board left edge  = 43
BY    = 270                             # board top edge

def cell_rect(i):
    r, c = divmod(i, 3)
    return pygame.Rect(BX + c*(CELL+GAP), BY + r*(CELL+GAP), CELL, CELL)

# score pills  (3 × 150 px, 14 px gap)
PW, PH   = 150, 80
PGAP     = 14
PY       = 140
PX_START = (W - (3*PW + 2*PGAP)) // 2   # = 43

# buttons  sit 28 px below the last row of cells
BOARD_BOTTOM = BY + 3*CELL + 2*GAP      # = 270+3*148+2*10 = 734
BTN_Y  = BOARD_BOTTOM + 28
BW, BH = 200, 50
BTN1   = pygame.Rect((W//2) - BW - 12, BTN_Y, BW, BH)
BTN2   = pygame.Rect((W//2) + 12,      BTN_Y, BW, BH)

# ── Helpers ───────────────────────────────────────────────
def rrect(surf, color, rect, r=14, bw=0, bc=None):
    pygame.draw.rect(surf, color, rect, border_radius=r)
    if bw and bc:
        pygame.draw.rect(surf, bc, rect, bw, border_radius=r)

def tc(surf, txt, font, color, cx, cy):
    s = font.render(txt, True, color)
    surf.blit(s, (cx - s.get_width()//2, cy - s.get_height()//2))

def check_winner():
    for a,b,c in WINS:
        if board[a] and board[a]==board[b]==board[c]:
            return board[a], [a,b,c]
    if "" not in board:
        return "D", []
    return None, None

def play(i):
    global current, game_over
    if game_over or board[i]: return
    board[i] = current
    w, _ = check_winner()
    if w:
        game_over = True
        if w in ("X","O"): scores[w] += 1
        else:               scores["D"] += 1
    else:
        current = "O" if current == "X" else "X"

def new_game():
    global board, current, game_over
    board = [""] * 9; current = "X"; game_over = False

def reset_all():
    scores["X"] = scores["O"] = scores["D"] = 0
    new_game()

# ── Draw ─────────────────────────────────────────────────
def draw():
    screen.fill(BG)
    mx, my = pygame.mouse.get_pos()

    # ── title ──
    tc(screen, "TIC  TAC  TOE", F_TAG, TEXT_SEC, W//2, 36)

    # ── turn / result ──
    w, combo = check_winner()
    if not game_over:
        col = ACCENT_X if current == "X" else ACCENT_O
        tc(screen, f"{current}  to play", F_TURN, col, W//2, 90)
    else:
        if w in ("X","O"):
            col = ACCENT_X if w=="X" else ACCENT_O
            tc(screen, f"Player {w}  Wins! 🏆", F_RESULT, col, W//2, 90)
        else:
            tc(screen, "It's a Draw!", F_RESULT, DRAW_COL, W//2, 90)

    # ── score pills ──
    pill_data = [
        ("X",    scores["X"],  ACCENT_X),
        ("DRAW", scores["D"],  DRAW_COL),
        ("O",    scores["O"],  ACCENT_O),
    ]
    for idx, (lbl, val, col) in enumerate(pill_data):
        px = PX_START + idx*(PW+PGAP)
        pr = pygame.Rect(px, PY, PW, PH)
        rrect(screen, SURFACE2, pr, r=14, bw=1, bc=BORDER)
        tc(screen, lbl,      F_SL, TEXT_SEC, px+PW//2, PY+22)
        tc(screen, str(val), F_SV, col,      px+PW//2, PY+57)

    # ── cells ──
    for i in range(9):
        rect = cell_rect(i)
        hov  = hover_idx == i and not board[i] and not game_over

        # pick bg + border
        if w and w in ("X","O") and combo and i in combo:
            bg = WIN_X_BG if board[i]=="X" else WIN_O_BG
            bd = WIN_X_BD if board[i]=="X" else WIN_O_BD
            bw = 2
        elif hov:
            bg, bd, bw = SURFACE2, BORDER2, 1
        else:
            bg, bd, bw = SURFACE, BORDER, 1

        rrect(screen, bg, rect, r=18, bw=bw, bc=bd)

        if board[i]:
            col = ACCENT_X if board[i]=="X" else ACCENT_O
            tc(screen, board[i], F_SYM, col, rect.centerx, rect.centery)
        elif hov:
            ghost = F_SYM.render(current, True,
                                  ACCENT_X if current=="X" else ACCENT_O)
            ghost.set_alpha(28)
            screen.blit(ghost, (rect.centerx - ghost.get_width()//2,
                                 rect.centery - ghost.get_height()//2))

    # ── buttons ──
    for rect, label in [(BTN1,"New Game"), (BTN2,"Reset Scores")]:
        hov = rect.collidepoint(mx, my)
        rrect(screen, BTN_HOV if hov else SURFACE2, rect, r=12, bw=1, bc=BORDER2 if hov else BORDER)
        tc(screen, label, F_BTN, TEXT_PRI if hov else TEXT_SEC, rect.centerx, rect.centery)

    pygame.display.flip()

# ── Main loop ─────────────────────────────────────────────
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit(); sys.exit()

        elif event.type == pygame.MOUSEMOTION:
            hover_idx = -1
            for i in range(9):
                if cell_rect(i).collidepoint(event.pos):
                    hover_idx = i; break

        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            for i in range(9):
                if cell_rect(i).collidepoint(event.pos):
                    play(i); break
            if BTN1.collidepoint(event.pos): new_game()
            if BTN2.collidepoint(event.pos): reset_all()

    draw()
    clock.tick(60)