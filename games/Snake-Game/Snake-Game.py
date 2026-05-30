import turtle
import random
import time

# ================= SOUND SYSTEM =================
pygame_installed = False
eat_sound = None
gameover_sound = None

try:
    import pygame
    pygame.mixer.init()
    
    # Try loading default wav files
    try:
        eat_sound = pygame.mixer.Sound("sounds/eat.wav")
        gameover_sound = pygame.mixer.Sound("sounds/gameover.wav")
        pygame_installed = True
    except Exception:
        # Fallback to alternate mp3 file naming schemes
        try:
            eat_sound = pygame.mixer.Sound("sounds/Apple_Eating.mp3")
            gameover_sound = pygame.mixer.Sound("sounds/Game_over.mp3")
            pygame_installed = True
        except Exception:
            print("⚠️ Warning: Sound files not found in 'sounds/' folder. Game will run silently.")
            pygame_installed = False
except ImportError:
    print("⚠️ Warning: pygame module not found. Game will run without sound effects.")


# ================= SCREEN SETUP =================

screen = turtle.Screen()
screen.title("Advanced Snake Game")
screen.bgcolor("#0A0A0A")
screen.setup(width=0.8, height=0.9)
screen.tracer(0)

# ================= BORDER =================

border = turtle.Turtle()
border.hideturtle()
border.color("#00FFAA")
border.pensize(4)
border.penup()
border.goto(-300, 300)
border.pendown()

for _ in range(4):
    border.forward(600)
    border.right(90)

# ================= TITLE =================

title_text = turtle.Turtle()
title_text.hideturtle()
title_text.color("#00FFAA")
title_text.penup()
title_text.goto(0, 330)
title_text.write("SNAKE GAME", align="center", font=("Arial", 28, "bold"))

# ================= TEXT =================

game_text = turtle.Turtle()
game_text.hideturtle()
game_text.color("white")
game_text.penup()
game_text.goto(0, 0)

# ================= GAME CONSTANTS =================

GRID_SIZE = 15
GRID_RANGE = 18
BORDER_LIMIT = 280

# ================= SNAKE =================

head = turtle.Turtle()
head.shape("circle")
head.color("#00FF66")
head.penup()
head.direction = "stop"

parts = []

# ================= FOOD =================

food = turtle.Turtle()
food.penup()

food_types = [
    {"shape": "circle", "color": "#FF4444", "size": 1.2, "points": 1},
    {"shape": "square", "color": "#FFD700", "size": 1.3, "points": 2},
    {"shape": "triangle", "color": "#00BFFF", "size": 1.4, "points": 3},
]

current_food = None

def generate_food():
    global current_food

    current_food = random.choice(food_types)
    food.shape(current_food["shape"])
    food.color(current_food["color"])
    food.shapesize(current_food["size"])

    while True:
        x = random.randint(-GRID_RANGE, GRID_RANGE) * GRID_SIZE
        y = random.randint(-GRID_RANGE, GRID_RANGE) * GRID_SIZE

        occupied = False

        if (x, y) == (int(head.xcor()), int(head.ycor())):
            occupied = True

        for p in parts:
            if (int(p.xcor()), int(p.ycor())) == (x, y):
                occupied = True
                break

        if not occupied:
            food.goto(x, y)
            return

generate_food()

# ================= STATE VARIABLES =================

score = 0
high_score = 0
level = 1
speed = 0.05
game_state = "IDLE" 

score_text = turtle.Turtle()
score_text.hideturtle()
score_text.color("white")
score_text.penup()
score_text.goto(0, 295)

def update_score():
    score_text.clear()
    score_text.write(
        f"SCORE: {score}   LEVEL: {level}   HIGH SCORE: {high_score}",
        align="center",
        font=("Courier New", 16, "bold")
    )

update_score()

# ================= CONTROL INFRASTRUCTURE =================

def countdown():
    for text in ["3", "2", "1", "GO!"]:
        game_text.clear()
        game_text.write(text, align="center", font=("Arial", 30, "bold"))
        screen.update()
        time.sleep(1)
    game_text.clear()

def handle_spacebar():
    global game_state, score, level, speed
    
    if game_state == "IDLE":
        countdown()
        game_state = "PLAYING"
        
    elif game_state == "PLAYING":
        game_state = "PAUSED"
        game_text.clear()
        game_text.write("PAUSED", align="center", font=("Arial", 24, "bold"))
        
    elif game_state == "PAUSED":
        game_state = "PLAYING"
        game_text.clear()
        
    elif game_state == "GAME_OVER":
        head.goto(0, 0)
        head.direction = "stop"
        for p in parts:
            p.goto(1000, 1000)
        parts.clear()
        
        score = 0
        level = 1
        speed = 0.05
        
        update_score()
        countdown()
        game_state = "PLAYING"

screen.listen()
screen.onkeypress(handle_spacebar, "space")

def move_up():
    if head.direction != "down" and game_state == "PLAYING":
        head.direction = "up"

def move_down():
    if head.direction != "up" and game_state == "PLAYING":
        head.direction = "down"

def move_left():
    if head.direction != "right" and game_state == "PLAYING":
        head.direction = "left"

def move_right():
    if head.direction != "left" and game_state == "PLAYING":
        head.direction = "right"

screen.onkeypress(move_up, "Up")
screen.onkeypress(move_down, "Down")
screen.onkeypress(move_left, "Left")
screen.onkeypress(move_right, "Right")

# ================= MOVE PHYSICS =================

def move():
    if head.direction == "up":
        head.sety(head.ycor() + GRID_SIZE)
    elif head.direction == "down":
        head.sety(head.ycor() - GRID_SIZE)
    elif head.direction == "left":
        head.setx(head.xcor() - GRID_SIZE)
    elif head.direction == "right":
        head.setx(head.xcor() + GRID_SIZE)

# ================= MAIN LOOP =================

game_text.write("Press SPACEBAR to Start", align="center", font=("Arial", 24, "bold"))

while True:
    screen.update()

    if game_state in ["IDLE", "PAUSED", "GAME_OVER"]:
        time.sleep(0.1)
        continue

    # Border collision
    if (
        head.xcor() > BORDER_LIMIT or
        head.xcor() < -BORDER_LIMIT or
        head.ycor() > BORDER_LIMIT or
        head.ycor() < -BORDER_LIMIT
    ):
        if pygame_installed and gameover_sound:
            gameover_sound.play()
        game_text.write("GAME OVER - Press SPACE to Restart", align="center", font=("Arial", 20, "bold"))
        game_state = "GAME_OVER"
        continue

    # Food collision
    if head.distance(food) < GRID_SIZE:
        if pygame_installed and eat_sound:
            eat_sound.play()

        score += current_food["points"]

        if score > high_score:
            high_score = score

        if score % 5 == 0:
            level += 1
            speed -= 0.005
            game_text.clear()
            game_text.write(f"LEVEL {level}", align="center", font=("Arial", 24, "bold"))
            screen.update()
            time.sleep(0.5)
            game_text.clear()

        generate_food()

        new_part = turtle.Turtle()
        new_part.shape("circle")
        new_part.color("#66FF99")
        new_part.penup()
        parts.append(new_part)
        update_score()

    # Move body
    for i in range(len(parts) - 1, 0, -1):
        x = parts[i - 1].xcor()
        y = parts[i - 1].ycor()
        parts[i].goto(x, y)

    if parts:
        parts[0].goto(head.xcor(), head.ycor())

    move()

    # Self collision
    for p in parts:
        if p.distance(head) < 12:
            if pygame_installed and gameover_sound:
                gameover_sound.play()
            game_text.write("GAME OVER - Press SPACE to Restart", align="center", font=("Arial", 20, "bold"))
            game_state = "GAME_OVER"
            break

    if game_state == "GAME_OVER":
        continue

    time.sleep(speed)