from random import randrange
from turtle import *
import math
import os

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def move(self, other):
        """move this vector by adding another vector to it"""
        self.x += other.x
        self.y += other.y

    def __sub__(self, other):
        """subtract two vectors to find the difference"""
        return Vector(self.x - other.x, self.y - other.y)

    def __abs__(self):
        return math.hypot(self.x, self.y)

bird = Vector(0, 0)
balls = []
score = 0
game_over = False
high_score = 0

def tap(x, y):
    """move bird up in response to screen tap or reset if dead"""
    global game_over
    
    if game_over:
        reset_game()
    else:
        up = Vector(0, 30)
        bird.move(up)

def reset_game():
    """resets the game state and starts the loop again"""
    global game_over, score
    game_over = False
    score = 0
    bird.x, bird.y = 0, 0
    balls.clear()
    move()
    
current_dir = os.path.dirname(os.path.abspath(__file__))
highscore_path = os.path.join(current_dir, "highscore.txt")

try:
    with open(highscore_path, "r") as file:
        high_score = int(file.read())
except (FileNotFoundError, ValueError, OSError):
    high_score = 0

def inside(point):
    """return True if point on screen"""
    return -200 < point.x < 200 and -200 < point.y < 200

def draw(alive):
    clear()

    goto(bird.x, bird.y)
    if alive:
        dot(10, '#06b6d4')
    else:
        dot(10, '#ef4444')

    for ball in balls:
        goto(ball.x, ball.y)
        dot(20, '#8b5cf6')

    goto(-190, 180)
    color('white') 
    write(f"Score: {score}", font=("Arial", 14, "bold"))
    goto(-190, 155)
    write(f"High Score: {high_score}", font=("Arial", 14, "bold"))

    if not alive:
        goto(0, 20)
        write("💥 GAME OVER 💥", align="center", font=("Arial", 24, "bold"))
        goto(0, -20)
        write("🔄 Click anywhere to Play Again", align="center", font=("Arial", 14, "normal"))

    update()

def move():
    """update object positions"""
    global score, high_score, game_over
    
    if game_over:
        return

    bird.y -= 5

    for ball in balls:
        ball.x -= 3

    if randrange(10) == 0:
        y = randrange(-199, 199)
        ball = Vector(199, y)
        balls.append(ball)

    while len(balls) > 0 and not inside(balls[0]):
        balls.pop(0)
        score += 1
        if score > high_score:
            high_score = score
            try:
                with open(highscore_path, "w") as file:
                    file.write(str(high_score))
            except Exception as e:
                print(f"⚠️ Warning: Could not save high score: {e}")

    if not inside(bird):
        game_over = True
        draw(False)
        return

    for ball in balls:
        if abs(ball - bird) < 15:
            game_over = True

            draw(False)
            return

    draw(True)
    ontimer(move, 50)

setup(420, 420, 370, 0)
bgcolor('#0f172a')
hideturtle()
up()
tracer(False)
onscreenclick(tap)
move()
done()


