import tkinter as tk
root=tk.Tk()
root.title("Tower of Hanoi")
root.geometry("800x600")

goal_label = tk.Label(
    root,
    text="Goal: Move all disks from Tower A to Tower C without placing a larger disk on a smaller disk.",
    font=("Arial", 11)
)
goal_label.pack(pady=5)

title_label=tk.Label(root,text="Tower of Hanoi",font=("Arial",20,"bold"))
title_label.pack(pady=10)

control_frame=tk.Frame(root)
control_frame.pack()

disk_label=tk.Label(control_frame,text="Number of Disks:")
disk_label.pack(side=tk.LEFT)
disk_entry=tk.Entry(control_frame,width=5)
disk_entry.pack(side=tk.LEFT,padx=5)

move_label=tk.Label(root,text="Moves:0",font=("Arial",12))
move_label.pack(pady=10)

feedback_label=tk.Label(root,text="",font=("Arial",12))
feedback_label.pack()

hint_label = tk.Label(root,text="Hint: Click Hint button for help.",font=("Arial", 11))
hint_label.pack()



canvas=tk.Canvas(root,width=700,height=400,bg="white")
canvas.pack(pady=20)

towers={"A":[],
"B":[],
"C":[]
}
moves=0
num_disks=0
selected_tower=None

tower_positions={"A":150,"B":300,"C":450}

def start_game():
    global towers
    global moves
    global num_disks

    num_disks=int(disk_entry.get())

    towers={
        "A":list(range(num_disks,0,-1)),
        "B":[],
        "C":[]
    }
    moves=0
    move_label.config(text="Moves:0")
    feedback_label.config(text="")

    hint_label.config(text="Hint: Click Hint button for help")

    draw_game()


def draw_game():
    canvas.delete("all")
    draw_towers()
    draw_disks()

def draw_disks():
        tower_x=150
        disk_height=20
        y_bottom=348
        

        for tower_name in towers:
            tower_x=tower_positions[tower_name]
            for i,size in enumerate(towers[tower_name]):
                width=size*20
                x1=tower_x-width/2
                x2=tower_x+width/2
                y2=y_bottom-(i*disk_height)
                y1=y2-disk_height

                canvas.create_rectangle(x1,y1,x2,y2,fill="skyblue")

def draw_towers():
    canvas.create_line(150,150,150,350,fill="black",width=3)
    canvas.create_line(300,150,300,350,fill="black",width=3)
    canvas.create_line(450,150,450,350,fill="black",width=3)
    canvas.create_line(50,350,550,350,fill="red",width=3)

def get_tower(x):
    if 100<=x<=200:
        return "A"

    elif 250<=x<=350:
        return "B"

    elif 400<=x<=500:
        return "C"

    return None

def handle_click(event):
    if num_disks==0:
        return
    global selected_tower
    tower = get_tower(event.x)
    if tower is None:
        return
    if selected_tower is None:
        selected_tower = tower

        feedback_label.config(text=f"Selected Tower {tower}",fg="blue")
    else:
        move_disk(selected_tower,tower)
        selected_tower = None

        

def move_disk(source, destination):
    global moves

    if len(towers[source]) == 0:
        feedback_label.config(text="No disk to move")
        return

    disk = towers[source][-1]

    if (
        len(towers[destination]) == 0
        or
        disk < towers[destination][-1]
    ):
        towers[source].pop()
        towers[destination].append(disk)

        moves += 1
        move_label.config(
            text=f"Moves: {moves}"
        )

        feedback_label.config(text=f"Moved disk from: {source} to {destination}",fg="green")

        draw_game()
        check_win()

    else:
        feedback_label.config(text="Illegal move! larger disks cannot be placed on smaller disks",fg="red")

def show_hint():
    minimum_moves = (2 ** num_disks) - 1

    hint_label.config(
        text=f"Minimum moves needed for {num_disks} disks: {minimum_moves}"
    )

def check_win():
    if towers["C"] == list(range(num_disks, 0, -1)):
        minimum_moves = (2 ** num_disks) - 1

        feedback_label.config(
            text=f"🎉 Congratulations! Puzzle Solved in {moves} moves! , optimized solution has {minimum_moves} moves ",
            fg="green"
        )


def reset_game():

    global towers
    global moves
    global selected_tower

    towers = {
        "A": list(range(num_disks, 0, -1)),
        "B": [],
        "C": []
    }

    moves = 0
    selected_tower = None

    move_label.config(text="Moves: 0")

    feedback_label.config(
        text="Game reset.",
        fg="blue"
    )

    hint_label.config(
        text="Hint: Click Hint button for help."
    )

    draw_game()

def try_again():

    global towers
    global moves
    global num_disks
    global selected_tower

    towers = {
        "A": [],
        "B": [],
        "C": []
    }

    moves = 0
    num_disks = 0
    selected_tower = None

    canvas.delete("all")

    move_label.config(text="Moves: 0")

    feedback_label.config(
        text="Enter a disk count and press START.",
        fg="black"
    )

    hint_label.config(
        text="Hint: Click Hint button for help."
    )

    disk_entry.delete(0, tk.END)

canvas.bind("<Button-1>",handle_click)
start_button=tk.Button(control_frame,text='START',command=start_game)
start_button.pack(side=tk.LEFT)

hint_button = tk.Button(
    control_frame,
    text="HINT",
    command=show_hint
)
hint_button.pack(side=tk.LEFT, padx=5)

reset_button = tk.Button(
    control_frame,
    text="RESET",
    command=reset_game
)
reset_button.pack(side=tk.LEFT, padx=5)

try_again_button = tk.Button(
    control_frame,
    text="TRY AGAIN",
    command=try_again
)
try_again_button.pack(side=tk.LEFT, padx=5)

root.mainloop()

 submitting this for PR