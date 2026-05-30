"""
🧠 Math Quiz Game - GUI Edition
Modern interactive math quiz using Tkinter
"""

import tkinter as tk
from tkinter import messagebox
import random
import json
import os
import time
try:
    import winsound
except ImportError:
    winsound = None

# ─────────────────────────────────────────────
# Utility Functions
# ─────────────────────────────────────────────

def play_sound(sound_type):
    if not winsound:
        try:
            if hasattr(tk, '_default_root') and tk._default_root:
                tk._default_root.bell()
            else:
                print('\a', end='', flush=True)
        except Exception:
            pass
        return
    try:
        if sound_type == 'correct':
            winsound.Beep(1000, 150) # Frequency, duration
        elif sound_type == 'wrong':
            winsound.Beep(300, 300)
        elif sound_type == 'game_over':
            winsound.Beep(200, 600)
    except (RuntimeError, OSError):
        pass

def load_scores():
    if os.path.exists("math_quiz_scores.json"):
        try:
            with open("math_quiz_scores.json", "r") as f:
                return json.load(f)
        except (FileNotFoundError, json.JSONDecodeError, OSError, UnicodeDecodeError):
            pass
    return {"highest_score": 0, "longest_streak": 0}

def save_scores(highest_score, longest_streak):
    scores = load_scores()
    updated = False
    if highest_score > scores.get("highest_score", 0):
        scores["highest_score"] = highest_score
        updated = True
    if longest_streak > scores.get("longest_streak", 0):
        scores["longest_streak"] = longest_streak
        updated = True
    if updated:
        with open("math_quiz_scores.json", "w") as f:
            json.dump(scores, f)

def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

def generate_question(difficulty):
    if difficulty == 1:
        q_type = random.choice(['add', 'sub', 'mul', 'div'])
    elif difficulty == 2:
        q_type = random.choice(['add', 'sub', 'mul', 'div', 'negative', 'decimal', 'percentage', 'missing'])
    else:
        q_type = random.choice(['bodmas', 'prime', 'conversion', 'percentage', 'decimal'])

    if q_type == 'add':
        a, b = random.randint(1, 60), random.randint(1, 60)
        return f"What is {a} + {b}?", a + b
    elif q_type == 'sub':
        a, b = random.randint(1, 50), random.randint(1, 50)
        if a < b: a, b = b, a
        return f"What is {a} - {b}?", a - b
    elif q_type == 'mul':
        a, b = random.randint(2, 15), random.randint(2, 15)
        return f"What is {a} × {b}?", a * b
    elif q_type == 'div':
        b = random.randint(2, 10)
        a = b * random.randint(2, 10)
        return f"What is {a} ÷ {b}?", a // b
    elif q_type == 'negative':
        a = random.randint(-25, -1)
        b = random.randint(1, 30)
        return f"What is {a} + {b}?", a + b
    elif q_type == 'decimal':
        a = round(random.uniform(1.0, 10.0), 1)
        b = round(random.uniform(1.0, 10.0), 1)
        return f"What is {a} + {b}?", round(a + b, 1)
    elif q_type == 'percentage':
        percent = random.choice([10, 20, 25, 50])
        number = random.choice([100, 200, 300, 400, 500])
        return f"What is {percent}% of {number}?", int((percent / 100) * number)
    elif q_type == 'missing':
        a = random.randint(1, 50)
        b = random.randint(1, 50)
        return f"__ + {b} = {a + b}, find __?", a
    elif q_type == 'bodmas':
        a = random.randint(1, 20)
        b = random.randint(1, 20)
        c = random.randint(1, 5)
        return f"What is {a} + {b} × {c}?", a + b * c
    elif q_type == 'prime':
        num = random.randint(10, 50)
        return f"Is {num} a prime number?", "Yes" if is_prime(num) else "No"
    elif q_type == 'conversion':
        conv = random.choice(['hours', 'minutes', 'days'])
        if conv == 'hours':
            h = random.randint(1, 10)
            return f"{h} hour(s) = ? minutes", h * 60
        elif conv == 'minutes':
            m = random.randint(1, 10)
            return f"{m} minute(s) = ? seconds", m * 60
        else:
            d = random.randint(1, 7)
            return f"{d} day(s) = ? hours", d * 24

    a, b = random.randint(1, 30), random.randint(1, 30)
    return f"What is {a} + {b}?", a + b

def generate_options(correct):
    if isinstance(correct, str):
        options = ["Yes", "No", "Maybe", "Not Sure"]
        random.shuffle(options)
        if correct not in options:
            options[0] = correct
        return options

    options = {correct}
    while len(options) < 4:
        fake = correct + random.randint(-15, 15)
        if fake != correct:
            options.add(fake)
    options = list(options)
    random.shuffle(options)
    return options

# ─────────────────────────────────────────────
# UI Components
# ─────────────────────────────────────────────

def create_gradient(canvas, width, height, color1, color2):
    canvas.delete("gradient")
    r1, g1, b1 = canvas.winfo_rgb(color1)
    r2, g2, b2 = canvas.winfo_rgb(color2)
    r_ratio = float(r2 - r1) / height
    g_ratio = float(g2 - g1) / height
    b_ratio = float(b2 - b1) / height

    for i in range(height):
        nr = int(r1 + (r_ratio * i))
        ng = int(g1 + (g_ratio * i))
        nb = int(b1 + (b_ratio * i))
        color = "#%04x%04x%04x" % (nr, ng, nb)
        canvas.create_line(0, i, width, i, fill=color, tags="gradient")

class RoundedButton(tk.Canvas):
    def __init__(self, parent, text, command=None, width=200, height=50, radius=20, bg="#334155", active_bg="#38bdf8", fg="white", active_fg="black", font=("Helvetica", 14, "bold"), **kwargs):
        super().__init__(parent, width=width, height=height, bg=parent['bg'], highlightthickness=0, **kwargs)
        self.command = command
        self.bg_color = bg
        self.active_bg = active_bg
        self.fg_color = fg
        self.active_fg = active_fg
        
        self.rect = self.round_rectangle(0, 0, width, height, radius=radius, fill=bg)
        self.text_item = self.create_text(width/2, height/2, text=text, fill=fg, font=font)
        
        self.bind("<ButtonPress-1>", self.on_press)
        self.bind("<ButtonRelease-1>", self.on_release)
        self.bind("<Enter>", self.on_enter)
        self.bind("<Leave>", self.on_leave)

    def round_rectangle(self, x1, y1, x2, y2, radius=25, **kwargs):
        points = [x1+radius, y1, x1+radius, y1, x2-radius, y1, x2-radius, y1, x2, y1, x2, y1+radius, x2, y1+radius, x2, y2-radius, x2, y2-radius, x2, y2, x2-radius, y2, x2-radius, y2, x1+radius, y2, x1+radius, y2, x1, y2, x1, y2-radius, x1, y2-radius, x1, y1+radius, x1, y1+radius, x1, y1]
        return self.create_polygon(points, **kwargs, smooth=True)

    def on_press(self, event):
        self.itemconfig(self.rect, fill=self.active_bg)
    def on_release(self, event):
        self.itemconfig(self.rect, fill=self.active_bg)
        if self.command:
            self.command()
    def on_enter(self, event):
        self.itemconfig(self.rect, fill=self.active_bg)
        self.itemconfig(self.text_item, fill=self.active_fg)
        self.config(cursor="hand2")
    def on_leave(self, event):
        self.itemconfig(self.rect, fill=self.bg_color)
        self.itemconfig(self.text_item, fill=self.fg_color)
        self.config(cursor="")
    
    def config_text(self, text):
        self.itemconfig(self.text_item, text=text)

# ─────────────────────────────────────────────
# GUI App
# ─────────────────────────────────────────────

class MathQuizGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("🧠 Math Quiz Game")
        self.root.geometry("900x650")
        self.root.resizable(False, False)
        
        # Background Canvas for Gradient
        self.bg_canvas = tk.Canvas(self.root, width=900, height=650, highlightthickness=0)
        self.bg_canvas.place(x=0, y=0, relwidth=1, relheight=1)
        create_gradient(self.bg_canvas, 900, 650, "#0f172a", "#1e293b")
        
        # Central Panel
        self.main_panel = tk.Frame(self.root, bg="#1e293b", bd=0, highlightthickness=2, highlightbackground="#38bdf8")
        self.main_panel.place(relx=0.5, rely=0.5, anchor="center", width=800, height=550)

        self.scores = load_scores()

        self.create_home_screen()

    def clear_panel(self):
        for widget in self.main_panel.winfo_children():
            widget.destroy()

    def create_home_screen(self):
        self.clear_panel()
        self.game_active = False
        
        self.root.bind("<Escape>", self.handle_escape)
        

        title = tk.Label(self.main_panel, text="🧠 MATH QUIZ", font=("Helvetica", 36, "bold"), fg="white", bg="#1e293b")
        title.pack(pady=(40, 10))
        
        stats_text = f"🏆 High Score: {self.scores.get('highest_score', 0)}   🔥 Best Streak: {self.scores.get('longest_streak', 0)}"
        stats_label = tk.Label(self.main_panel, text=stats_text, font=("Helvetica", 14), fg="#fbbf24", bg="#1e293b")
        stats_label.pack(pady=(0, 20))

        subtitle = tk.Label(self.main_panel, text="Choose Your Difficulty", font=("Helvetica", 16), fg="#cbd5e1", bg="#1e293b")
        subtitle.pack(pady=10)

        diff_frame = tk.Frame(self.main_panel, bg="#1e293b")
        diff_frame.pack(pady=20)

        difficulties = [("🟢 Easy", 1), ("🟡 Medium", 2), ("🔴 Hard", 3), ("♾ Endless", 4)]
        self.selected_difficulty = 1

        self.diff_buttons = []
        for text, level in difficulties:
            btn = RoundedButton(diff_frame, text=text, width=160, height=45, bg="#334155", font=("Helvetica", 12, "bold"),
                                command=lambda l=level: self.set_difficulty(l))
            btn.pack(side="left", padx=10)
            self.diff_buttons.append((btn, level))

        self.mode_label = tk.Label(self.main_panel, text="Selected: 🟢 Easy", font=("Helvetica", 16, "bold"), fg="#38bdf8", bg="#1e293b")
        self.mode_label.pack(pady=30)

        start_btn = RoundedButton(self.main_panel, text="▶ START GAME", width=250, height=60, bg="#38bdf8", fg="black", active_bg="#0284c7", active_fg="white", font=("Helvetica", 18, "bold"), command=self.start_game)
        start_btn.pack(pady=10)
        
        self.set_difficulty(1) # default highlight

    def set_difficulty(self, level):
        self.selected_difficulty = level
        labels = {1: "🟢 Easy", 2: "🟡 Medium", 3: "🔴 Hard", 4: "♾ Endless"}
        self.mode_label.config(text=f"Selected: {labels[level]}")
        
        for btn, lvl in self.diff_buttons:
            if lvl == level:
                btn.itemconfig(btn.rect, fill="#38bdf8")
                btn.itemconfig(btn.text_item, fill="black")
                btn.bg_color = "#38bdf8"
                btn.fg_color = "black"
            else:
                btn.itemconfig(btn.rect, fill="#334155")
                btn.itemconfig(btn.text_item, fill="white")
                btn.bg_color = "#334155"
                btn.fg_color = "white"

    def start_game(self):
        self.lives = 3
        self.score = 0
        self.streak = 0
        self.current_best_streak = 0
        self.game_active = True
        self.game_paused = False
        
        # Analytics
        self.question_count = 0
        self.correct_count = 0
        self.fastest_time = float('inf')
        self.hardest_question_time = 0
        self.hardest_question = "None"
        
        if self.selected_difficulty == 4:
            self.difficulty = 1
        else:
            self.difficulty = self.selected_difficulty
        
        self.create_game_screen()
        self.load_question()

    def create_game_screen(self):
        self.clear_panel()

        top_frame = tk.Frame(self.main_panel, bg="#0f172a", height=60)
        top_frame.pack(fill="x", padx=20, pady=20)
        top_frame.pack_propagate(False)

        self.score_label = tk.Label(top_frame, text="⭐ Score: 0", font=("Helvetica", 14, "bold"), fg="white", bg="#0f172a")
        self.score_label.pack(side="left", padx=15)

        self.streak_label = tk.Label(top_frame, text="🔥 Streak: 0", font=("Helvetica", 14, "bold"), fg="white", bg="#0f172a")
        self.streak_label.pack(side="left", padx=15)

        self.lives_label = tk.Label(top_frame, text="❤️❤️❤️", font=("Helvetica", 16), fg="white", bg="#0f172a")
        self.lives_label.pack(side="right", padx=15)
        pause_btn = RoundedButton(
            top_frame,
            text="⏸ Pause",
            width=120,
            height=40,
            bg="#f59e0b",
            active_bg="#d97706",
            font=("Helvetica", 12, "bold"),
            command=self.pause_game
        )
        pause_btn.pack(side="right", padx=10)
        self.root.bind("<Escape>", self.handle_escape)

        # Question Card
        self.q_card = tk.Frame(self.main_panel, bg="#334155", bd=0, highlightthickness=1, highlightbackground="#475569")
        self.q_card.pack(pady=20, padx=40, fill="x", ipady=20)

        self.question_label = tk.Label(self.q_card, text="Question", font=("Helvetica", 26, "bold"), fg="white", bg="#334155", wraplength=600, justify="center")
        self.question_label.pack()

        self.options_frame = tk.Frame(self.main_panel, bg="#1e293b")
        self.options_frame.pack(pady=10)

        self.option_buttons = []
        for i in range(4):
            btn = RoundedButton(self.options_frame, text="Option", width=300, height=55, bg="#0f172a", active_bg="#38bdf8", font=("Helvetica", 16))
            btn.grid(row=i // 2, column=i % 2, padx=15, pady=15)
            self.option_buttons.append(btn)

        self.feedback_label = tk.Label(self.main_panel, text="", font=("Helvetica", 18, "bold"), fg="white", bg="#1e293b")
        self.feedback_label.pack(pady=20)

    def update_status(self):
        hearts = "❤️" * self.lives + "🖤" * (3 - self.lives)
        self.score_label.config(text=f"⭐ Score: {self.score}")
        self.streak_label.config(text=f"🔥 Streak: {self.streak}")
        self.lives_label.config(text=hearts)
    # Pause Menu Implemented
    def toggle_pause(self):
        self.game_paused = not self.game_paused
        if self.game_paused:
            self.pause_window = tk.Toplevel(self.root)
            self.pause_window.title("Paused")
            self.pause_window.geometry("300x220")
            self.pause_window.resizable(False, False)
            self.pause_window.configure(bg="#1e293b")
            self.pause_window.transient(self.root)
            self.pause_window.grab_set()
            
            pause_label = tk.Label(
                self.pause_window,
                text="⏸ GAME PAUSED",
                font=("Helvetica", 20, "bold"),
                fg="white",
                bg="#1e293b"
            )
            pause_label.pack(pady=25)
            
            resume_btn = RoundedButton(
                self.pause_window,
                text="▶ Resume",
                width=180,
                height=45,
                bg="#10b981",
                active_bg="#059669",
                font=("Helvetica", 13, "bold"),
                command=self.resume_game
                
            )
            resume_btn.pack(pady=10)
            
            menu_btn = RoundedButton(
                self.pause_window,
                text="🏠 Main Menu",
                width=180,
                height=45,
                bg="#ef4444",
                active_bg="#b91c1c",
                font=("Helvetica", 13, "bold"),
                command=self.return_to_menu
            )
            menu_btn.pack(pady=10)
            for btn in self.option_buttons:
                btn.command = None
        else:
            self.resume_game()
            
    def handle_escape(self, event=None):
        if self.game_active:
            self.toggle_pause()
        else:
            self.root.destroy()
            
    def resume_game(self):
        self.game_paused = False
        if hasattr(self, "pause_window"):
            self.pause_window.destroy()
            
        options = [btn.itemcget(btn.text_item, "text") for btn in self.option_buttons]
        for btn, option in zip(self.option_buttons, options):
            
            btn.command = lambda opt=option: self.check_answer(opt)
            
    def return_to_menu(self):
        self.game_paused = False
        if hasattr(self, "pause_window"):
            self.pause_window.destroy()
        self.create_home_screen()

    def load_question(self):
        if self.game_paused:
            return
        self.update_status()
        self.question_count += 1

        if self.selected_difficulty == 4:
            if self.streak >= 6:
                self.difficulty = 3
            elif self.streak >= 3:
                self.difficulty = 2

        question, correct = generate_question(self.difficulty)
        self.correct_answer = correct
        self.current_question_text = question
        
        options = generate_options(correct)
        self.question_label.config(text=f"Q{self.question_count}. {question}")

        for btn, option in zip(self.option_buttons, options):
            btn.config_text(str(option))
            # Need to re-bind command to capture current option
            btn.command = lambda opt=option: self.check_answer(opt)

        self.feedback_label.config(text="")
        
        # Start timer for analytics
        self.question_start_time = time.time()

    def check_answer(self, selected):
        if self.game_paused:
            return
        time_taken = time.time() - self.question_start_time
        
        # Disable buttons temporarily
        for btn in self.option_buttons:
            btn.command = None

        if selected == self.correct_answer:
            play_sound('correct')
            self.correct_count += 1
            self.score += 10
            self.streak += 1
            self.current_best_streak = max(self.current_best_streak, self.streak)
            
            if time_taken < self.fastest_time:
                self.fastest_time = time_taken
            if time_taken > self.hardest_question_time:
                self.hardest_question_time = time_taken
                self.hardest_question = self.current_question_text

            bonus = ""
            if self.streak in [3, 6, 9]:
                self.score += 5
                bonus = " 🎉 Bonus +5"

            self.feedback_label.config(text=f"✅ Correct!{bonus}", fg="#22c55e")
        else:
            play_sound('wrong')
            self.lives -= 1
            self.streak = 0
            self.feedback_label.config(text=f"❌ Wrong! Correct Answer: {self.correct_answer}", fg="#ef4444")

        self.update_status()

        if self.lives <= 0:
            play_sound('game_over')
            self.root.after(1500, self.game_over)
        else:
            self.root.after(1200, self.load_question)
    
    # Pause menu implemented
    def pause_game(self):
        if self.game_paused:
            return
        self.game_paused = True
        pause_window = tk.Toplevel(self.root)
        pause_window.title("Paused")
        pause_window.geometry("320x220")
        pause_window.configure(bg="#1e293b")
        pause_window.resizable(False, False)
        
        tk.Label(
            pause_window,
            text="⏸ GAME PAUSED",
            font=("Helvetica", 22, "bold"),
            fg="white",
            bg="#1e293b"
        ).pack(pady=25)
        
        def resume_game():
            self.game_paused = False
            pause_window.destroy()
            
        def return_home():
            self.game_paused = False
            pause_window.destroy()
            self.create_home_screen()
            
        
        resume_btn = RoundedButton(
            pause_window,
            text="▶ Resume",
            width=180,
            height=45,
            bg="#10b981",
            active_bg="#059669",
            font=("Helvetica", 13, "bold"),
            command=resume_game
        )
        resume_btn.pack(pady=10)
        
        home_btn = RoundedButton(
            pause_window,
            text="🏠 Home Menu",
            width=180,
            height=45,
            bg="#ef4444",
            active_bg="#b91c1c",
            font=("Helvetica", 13, "bold"),
            command=return_home
        )
        home_btn.pack(pady=10)
        
        pause_window.protocol("WM_DELETE_WINDOW", resume_game)

    def get_grade(self, accuracy):
        if accuracy >= 90: return "S 🌟"
        elif accuracy >= 80: return "A 😄"
        elif accuracy >= 70: return "B 👍"
        elif accuracy >= 50: return "C 🙂"
        else: return "F 😢"

    def game_over(self):
        self.clear_panel()
        
        save_scores(self.score, self.current_best_streak)
        self.scores = load_scores()

        accuracy = (self.correct_count / self.question_count) * 100 if self.question_count > 0 else 0
        grade = self.get_grade(accuracy)
        fastest_str = f"{self.fastest_time:.1f}s" if self.fastest_time != float('inf') else "N/A"

        title = tk.Label(self.main_panel, text="💀 GAME OVER", font=("Helvetica", 32, "bold"), fg="#ef4444", bg="#1e293b")
        title.pack(pady=(30, 20))
        
        stats_frame = tk.Frame(self.main_panel, bg="#334155", bd=0, highlightthickness=1, highlightbackground="#475569")
        stats_frame.pack(fill="x", padx=60, ipady=15)
        
        stats = [
            ("⭐ Final Score", f"{self.score}"),
            ("🎯 Accuracy", f"{accuracy:.1f}%"),
            ("🔥 Best Streak", f"{self.current_best_streak}"),
            ("⚡ Fastest Answer", fastest_str),
            ("📊 Grade", grade)
        ]
        
        for i, (lbl, val) in enumerate(stats):
            f = tk.Frame(stats_frame, bg="#334155")
            f.pack(fill="x", padx=40, pady=5)
            tk.Label(f, text=lbl, font=("Helvetica", 14), fg="#cbd5e1", bg="#334155").pack(side="left")
            tk.Label(f, text=val, font=("Helvetica", 14, "bold"), fg="white", bg="#334155").pack(side="right")
            
        hardest_lbl = tk.Label(self.main_panel, text=f"🧠 Hardest Q: {self.hardest_question}", font=("Helvetica", 12, "italic"), fg="#94a3b8", bg="#1e293b")
        hardest_lbl.pack(pady=15)

        btn_frame = tk.Frame(self.main_panel, bg="#1e293b")
        btn_frame.pack(pady=20)

        play_again_btn = RoundedButton(btn_frame, text="🔄 Play Again", width=180, height=50, bg="#10b981", active_bg="#059669", font=("Helvetica", 14, "bold"), command=self.create_home_screen)
        play_again_btn.pack(side="left", padx=10)

        quit_btn = RoundedButton(btn_frame, text="❌ Quit", width=180, height=50, bg="#ef4444", active_bg="#b91c1c", font=("Helvetica", 14, "bold"), command=self.root.destroy)
        quit_btn.pack(side="left", padx=10)


if __name__ == "__main__":
    root = tk.Tk()
    app = MathQuizGUI(root)
    root.mainloop()