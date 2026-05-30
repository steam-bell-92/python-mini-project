import turtle
import time
from constants import SCREEN_WIDTH, SCREEN_HEIGHT, COLLISION_DISTANCE, SLEEP_TIME
from snake import Snake
from food import Food
from scoreboard import Scoreboard

try:
    import pygame
    pygame_installed = True
except ImportError:
    pygame_installed = False
    print("⚠️ Warning: pygame module not found. Game will run without sound effects.")

class SnakeGame:
    def __init__(self):
        self.game_state = "IDLE"
        self.delay = SLEEP_TIME
        self.level = 1

        # Screen setup
        self.screen = turtle.Screen()
        self.screen.title("Snake Game (Modular OOP)")
        self.screen.bgcolor("black")
        self.screen.setup(width=SCREEN_WIDTH, height=SCREEN_HEIGHT)
        self.screen.tracer(0)

        self._draw_borders()

        # Game objects
        self.snake = Snake()
        self.food = Food()
        self.scoreboard = Scoreboard()

        # Dedicated message text engine (matches the working Snake-game.py pattern)
        self.game_text = turtle.Turtle()
        self.game_text.hideturtle()
        self.game_text.color("white")
        self.game_text.penup()
        self.game_text.goto(0, 0)

        # Sound setup
        self.pygame_installed = pygame_installed
        if self.pygame_installed:
            try:
                pygame.mixer.init()
                self.eat_sound = pygame.mixer.Sound("sounds/Apple_Eating.mp3")
                self.gameover_sound = pygame.mixer.Sound("sounds/Game_over.mp3")
            except Exception as e:
                print(f"⚠️ Warning: Could not initialize pygame mixer: {e}")
                self.pygame_installed = False

        # Keyboard bindings
        self.screen.listen()
        self.screen.onkeypress(self.snake.move_up, "Up")
        self.screen.onkeypress(self.snake.move_down, "Down")
        self.screen.onkeypress(self.snake.move_left, "Left")
        self.screen.onkeypress(self.snake.move_right, "Right")
        self.screen.onkeypress(self.handle_spacebar, "space")

    def _draw_borders(self):
        box = turtle.Turtle()
        box.hideturtle()
        box.color("white")
        box.pensize(3)
        box.penup()
        box.goto(-300, 300)
        box.pendown()
        for _ in range(4):
            box.forward(600)
            box.right(90)

    def countdown(self):
        for text in ["3", "2", "1", "GO!"]:
            self.game_text.clear()
            self.game_text.write(text, align="center", font=("Arial", 30, "bold"))
            self.screen.update()
            time.sleep(1)
        self.game_text.clear()

    def handle_spacebar(self):
        if self.game_state == "IDLE":
            self.countdown()
            self.game_state = "PLAYING"
            
        elif self.game_state == "PLAYING":
            self.game_state = "PAUSED"
            self.game_text.clear()
            self.game_text.write("PAUSED", align="center", font=("Arial", 24, "bold"))
            
        elif self.game_state == "PAUSED":
            self.game_state = "PLAYING"
            self.game_text.clear()
            
        elif self.game_state == "GAME_OVER":
            self.snake.reset()
            self.scoreboard.reset()
            self.delay = SLEEP_TIME
            self.level = 1
            self.countdown()
            self.game_state = "PLAYING"

    def run(self):
        self.game_text.write("Press SPACEBAR to Start", align="center", font=("Arial", 24, "bold"))

        while True:
            self.screen.update()

            if self.game_state in ["IDLE", "PAUSED", "GAME_OVER"]:
                time.sleep(0.1)
                continue

            # Boundary collision
            if self.snake.check_boundary_collision():
                if self.pygame_installed:
                    self.gameover_sound.play()
                self.game_text.write("GAME OVER - Press SPACE to Restart", align="center", font=("Arial", 20, "bold"))
                self.game_state = "GAME_OVER"
                continue

            # Food collision
            if self.snake.head.distance(self.food.item) < COLLISION_DISTANCE:
                self.food.reposition(self.snake)
                self.snake.add_part()
                self.scoreboard.increase()
                if self.pygame_installed:
                    self.eat_sound.play()

                if self.scoreboard.score % 5 == 0:
                    self.level += 1
                    self.delay -= 0.01
                    self.game_text.clear()
                    self.game_text.write(f"LEVEL {self.level}", align="center", font=("Arial", 24, "bold"))
                    self.screen.update()
                    time.sleep(0.5)
                    self.game_text.clear()

            # Move snake
            self.snake.move()

            # Self collision
            if self.snake.check_self_collision():
                if self.pygame_installed:
                    self.gameover_sound.play()
                self.game_text.write("GAME OVER - Press SPACE to Restart", align="center", font=("Arial", 20, "bold"))
                self.game_state = "GAME_OVER"
                continue

            time.sleep(self.delay)


if __name__ == "__main__":
    game = SnakeGame()
    try:
        game.run()
    except turtle.Terminator:
        pass