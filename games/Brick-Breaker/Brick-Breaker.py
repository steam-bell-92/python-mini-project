from tkinter import *
import random


# 🎮 Window Setup 🎮
WIDTH, HEIGHT = 600, 500

root = Tk()
root.title("🎮 Brick Breaker Game 🎮")
root.resizable(False, False)

canvas = Canvas(root, width=WIDTH, height=HEIGHT, bg="#0f0f1e")
canvas.pack()


# 🌈 Brick Colors 🌈
COLORS = [
    "#ff5050",
    "#ff8c32",
    "#ffdc32",
    "#50dc50",
    "#50a0ff",
    "#b450ff"
]


# 🏓 Paddle
paddle = canvas.create_rectangle(
    250, 460, 350, 472,
    fill="#64c8ff",
    outline=""
)


# ⚽ Ball
ball = canvas.create_oval(
    294, 444, 310, 460,
    fill="#ffe050",
    outline=""
)


# 🧱 Brick Storage
bricks = []


# 📊 Score & Lives
score_text = canvas.create_text(
    10, 10,
    anchor="nw",
    fill="white",
    font=("Courier", 14),
    text="🏆 Score: 0"
)

lives_text = canvas.create_text(
    WIDTH - 10, 10,
    anchor="ne",
    fill="white",
    font=("Courier", 14),
    text="❤️ Lives: 3"
)

message_text = canvas.create_text(
    WIDTH // 2,
    HEIGHT // 2,
    fill="yellow",
    font=("Courier", 20, "bold"),
    text="🎯 PRESS SPACE TO START"
)


# 🎮 Game State
game = {
    "ball_x": 3,
    "ball_y": -4,
    "score": 0,
    "lives": 3,
    "running": False
}


# 🧱 Create Bricks
def create_bricks():

    for brick in bricks:
        canvas.delete(brick)

    bricks.clear()

    for row in range(5):
        for col in range(8):

            x = 10 + col * 72
            y = 40 + row * 32

            color = random.choice(COLORS)

            brick = canvas.create_rectangle(
                x, y,
                x + 66, y + 24,
                fill=color,
                outline="#0f0f1e"
            )

            bricks.append(brick)


create_bricks()


# ⚽ Reset Ball Position
def reset_ball():

    paddle_position = canvas.coords(paddle)

    canvas.coords(
        ball,
        paddle_position[0] + 44,
        paddle_position[1] - 16,
        paddle_position[0] + 56,
        paddle_position[1] - 4
    )

    game["ball_x"] = 3
    game["ball_y"] = -4


# 🏓 Move Paddle With Mouse
def move_paddle(event):

    canvas.coords(
        paddle,
        event.x - 50,
        460,
        event.x + 50,
        472
    )

    if not game["running"]:
        reset_ball()


canvas.bind("<Motion>", move_paddle)


# 🚀 Start Game
def start_game(event):

    game["running"] = True

    canvas.itemconfig(
        message_text,
        text=""
    )


root.bind("<space>", start_game)


# 🔄 Main Game Loop
def game_loop():

    if game["running"]:

        # Move Ball
        canvas.move(
            ball,
            game["ball_x"],
            game["ball_y"]
        )

        ball_pos = canvas.coords(ball)
        paddle_pos = canvas.coords(paddle)

        # 🧱 Wall Collision
        if ball_pos[0] <= 0 or ball_pos[2] >= WIDTH:
            game["ball_x"] = -game["ball_x"]

        if ball_pos[1] <= 0:
            game["ball_y"] = abs(game["ball_y"])

        # 💔 Ball Falls Down
        if ball_pos[3] >= HEIGHT:

            game["lives"] -= 1

            canvas.itemconfig(
                lives_text,
                text=f"❤️ Lives: {game['lives']}"
            )

            game["running"] = False

            reset_ball()

            if game["lives"] <= 0:

                canvas.itemconfig(
                    message_text,
                    text="💀 GAME OVER - PRESS SPACE"
                )

                game["score"] = 0
                game["lives"] = 3

                canvas.itemconfig(
                    score_text,
                    text="🏆 Score: 0"
                )

                canvas.itemconfig(
                    lives_text,
                    text="❤️ Lives: 3"
                )

                create_bricks()

            else:

                canvas.itemconfig(
                    message_text,
                    text="🎯 PRESS SPACE"
                )

        # 🏓 Paddle Collision
        if (
            paddle_pos[0] < ball_pos[2]
            and ball_pos[0] < paddle_pos[2]
            and paddle_pos[1] < ball_pos[3]
            and ball_pos[1] < paddle_pos[3]
        ):

            game["ball_y"] = -abs(game["ball_y"])

        # 🧱 Brick Collision
        for index in range(len(bricks) - 1, -1, -1):

            brick_pos = canvas.coords(bricks[index])

            if (
                brick_pos
                and brick_pos[0] < ball_pos[2]
                and ball_pos[0] < brick_pos[2]
                and brick_pos[1] < ball_pos[3]
                and ball_pos[1] < brick_pos[3]
            ):

                canvas.delete(bricks.pop(index))

                game["ball_y"] = -game["ball_y"]

                game["score"] += 10

                canvas.itemconfig(
                    score_text,
                    text=f"🏆 Score: {game['score']}"
                )

                break

        # 🎉 Level Complete
        if not bricks:

            create_bricks()

            game["running"] = False

            reset_ball()

            canvas.itemconfig(
                message_text,
                text="✨ NEXT LEVEL - PRESS SPACE"
            )

    root.after(16, game_loop)


# ▶️ Start Loop
game_loop()


# 👋 Run Game
root.mainloop()