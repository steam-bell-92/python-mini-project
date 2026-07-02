import random
import time
import os
import threading

# ─────────────────────────────────────────────
#  WORD BANK  –  words split by difficulty tier
#  Easy   : 3–5 letters   (common, everyday)
#  Medium : 5–7 letters   (moderate vocab)
#  Hard   : 7+ letters    (advanced / complex)
# ─────────────────────────────────────────────
WORD_BANK = {
    "🐾 Animals": {
        "easy":   ["cat", "dog", "frog", "bear", "duck", "lion", "crab", "wolf", "deer", "moth"],
        "medium": ["parrot", "jaguar", "donkey", "walrus", "falcon", "badger", "beaver"],
        "hard":   ["elephant", "kangaroo", "crocodile", "flamingo", "squirrel", "chimpanzee", "porcupine"],
    },
    "🍎 Fruits": {
        "easy":   ["plum", "pear", "lime", "kiwi", "fig", "date", "guava", "peach"],
        "medium":  ["mango", "cherry", "papaya", "lychee", "banana", "apricot"],
        "hard":   ["strawberry", "blueberry", "raspberry", "watermelon", "pomegranate", "passionfruit"],
    },
    "🌍 Countries": {
        "easy":   ["iraq", "iran", "peru", "cuba", "chad", "togo", "fiji", "laos"],
        "medium": ["france", "brazil", "canada", "norway", "mexico", "sweden", "jordan"],
        "hard":   ["portugal", "thailand", "argentina", "indonesia", "venezuela", "mozambique"],
    },
    "🔬 Science": {
        "easy":   ["atom", "lens", "cell", "gene", "acid", "volt", "mass", "heat"],
        "medium": ["proton", "plasma", "enzyme", "neuron", "photon", "magnet"],
        "hard":   ["molecule", "electron", "chlorophyll", "chromosome", "thermostat", "graviton"],
    },
    "🎵 Music": {
        "easy":   ["beat", "drum", "bass", "tune", "note", "riff", "solo", "jazz"],
        "medium": ["rhythm", "melody", "chorus", "guitar", "violin", "octave"],
        "hard":   ["symphony", "harmonic", "bassoon", "arpeggio", "cadenza", "pizzicato"],
    },
    "🏅 Sports": {
        "easy":   ["swim", "golf", "polo", "judo", "surf", "yoga", "race", "shot"],
        "medium": ["karate", "hockey", "tennis", "soccer", "boxing", "rowing"],
        "hard":   ["archery", "fencing", "cycling", "lacrosse", "triathlon", "volleyball"],
    },
}

# ─────────────────────────────────────────────
#  DIFFICULTY CONFIG
# ─────────────────────────────────────────────
DIFFICULTY_LEVELS = {
    "easy": {
        "label":       "🟢 Easy",
        "description": "3–5 letter words · 50 s timer · 4 attempts · Beginner hints",
        "tier":        "easy",
        "timer":       50,
        "max_attempts": 4,
        "points":      5,
        "hint_detail": "full",   # reveals category + first letter
    },
    "medium": {
        "label":       "🟡 Medium",
        "description": "5–7 letter words · 35 s timer · 3 attempts · Category hint",
        "tier":        "medium",
        "timer":       35,
        "max_attempts": 3,
        "points":      10,
        "hint_detail": "category",  # reveals category only
    },
    "hard": {
        "label":       "🔴 Hard",
        "description": "7+ letter words · 20 s timer · 2 attempts · Vague hint",
        "tier":        "hard",
        "timer":       20,
        "max_attempts": 2,
        "points":      20,
        "hint_detail": "vague",   # reveals only word length & first letter
    },
}


# ─────────────────────────────────────────────
#  HELPERS
# ─────────────────────────────────────────────
def clear():
    os.system("cls" if os.name == "nt" else "clear")


def scramble(word: str) -> str:
    letters = list(word)
    for _ in range(200):
        random.shuffle(letters)
        if "".join(letters) != word:
            return "".join(letters)
    return "".join(letters)


def fancy(word: str) -> str:
    return "  ".join(word.upper())


def header(round_num: int, score: int, lives: int, difficulty: str):
    lives_str = "❤️ " * lives + "🖤 " * (3 - lives)
    print("╔══════════════════════════════════════════════╗")
    print("║       🔤  W O R D  S C R A M B L E  🔤        ║")
    print("╠══════════════════════════════════════════════╣")
    print(f"║  Round: {round_num:<5}  Score: {score:<6}  Lives: {lives_str:<14}║")
    print(f"║  Difficulty: {DIFFICULTY_LEVELS[difficulty]['label']:<30}║")
    print("╚══════════════════════════════════════════════╝\n")


def build_hint(category: str, word: str, detail: str) -> str:
    if detail == "full":
        return f"Category: {category}  |  Starts with: '{word[0].upper()}'"
    elif detail == "category":
        return f"Category: {category}"
    else:  # vague
        return f"Starts with: '{word[0].upper()}'  |  Length: {len(word)} letters"


# ─────────────────────────────────────────────
#  COUNTDOWN TIMER  (runs in a background thread)
# ─────────────────────────────────────────────
class CountdownTimer:
    """Non-blocking timer that sets self.expired = True when time runs out."""

    def __init__(self, seconds: int):
        self.total = seconds
        self.remaining = seconds
        self.expired = False
        self._stop = threading.Event()
        self._thread = threading.Thread(target=self._run, daemon=True)

    def start(self):
        self._thread.start()

    def stop(self):
        self._stop.set()

    def _run(self):
        while self.remaining > 0 and not self._stop.is_set():
            time.sleep(1)
            self.remaining -= 1
        if not self._stop.is_set():
            self.expired = True

    def bar(self, width: int = 30) -> str:
        filled = int(width * self.remaining / self.total)
        bar = "█" * filled + "░" * (width - filled)
        color = "⏱ " if self.remaining > self.total * 0.4 else "⚠️ "
        return f"{color} [{bar}] {self.remaining:>2}s"


# ─────────────────────────────────────────────
#  DIFFICULTY SELECTION SCREEN
# ─────────────────────────────────────────────
def select_difficulty() -> str:
    clear()
    print("\n  ╔══════════════════════════════════════════════╗")
    print("  ║       🔤  W O R D  S C R A M B L E  🔤        ║")
    print("  ╚══════════════════════════════════════════════╝\n")
    print("  Choose your difficulty:\n")
    for key, cfg in DIFFICULTY_LEVELS.items():
        print(f"  [{key[0].upper()}] {cfg['label']}")
        print(f"       {cfg['description']}\n")
    while True:
        choice = input("  ➤  Enter difficulty (easy / medium / hard): ").strip().lower()
        if choice in DIFFICULTY_LEVELS:
            return choice
        # also accept first letter
        for key in DIFFICULTY_LEVELS:
            if choice == key[0]:
                return key
        print("  ❌ Invalid choice. Type easy, medium, or hard.\n")


# ─────────────────────────────────────────────
#  WELCOME / RULES SCREEN
# ─────────────────────────────────────────────
def show_welcome():
    clear()
    print("\n  ╔══════════════════════════════════════════════╗")
    print("  ║       🔤  W O R D  S C R A M B L E  🔤        ║")
    print("  ╚══════════════════════════════════════════════╝\n")
    print("  Unscramble the letters before the timer runs out!\n")
    print("  📋  Rules:")
    print("      • 3 lives per game")
    print("      • Attempts & timer vary by difficulty")
    print("      • Type 'hint'  → reveal a clue  (costs half points)")
    print("      • Type 'skip'  → skip with no penalty")
    print("      • Type 'quit'  → end the game\n")
    input("  Press Enter to continue… ")


# ─────────────────────────────────────────────
#  SINGLE ROUND  –  returns (scored_points, lost_life, quit_flag)
# ─────────────────────────────────────────────
def play_round(
    word: str,
    category: str,
    difficulty: str,
    round_num: int,
    score: int,
    lives: int,
) -> tuple[int, bool, bool]:
    cfg = DIFFICULTY_LEVELS[difficulty]
    max_attempts = cfg["max_attempts"]
    time_limit = cfg["timer"]
    base_points = cfg["points"]
    hint_detail = cfg["hint_detail"]

    sc = scramble(word)
    hint_used = False
    attempts = 0

    timer = CountdownTimer(time_limit)
    timer.start()

    while attempts < max_attempts:
        if timer.expired:
            timer.stop()
            clear()
            header(round_num, score, lives, difficulty)
            print(f"  ⏰  Time's up!  The word was: {word.upper()}\n")
            time.sleep(2)
            return 0, True, False   # lose a life

        clear()
        header(round_num, score, lives, difficulty)
        print(f"  🔀  Unscramble this word:\n")
        print(f"      ✨  {fancy(sc)}  ✨\n")
        print(f"  Letters: {len(word)}   |   Attempts left: {max_attempts - attempts}   |   {timer.bar()}")

        if hint_used:
            hint_text = build_hint(category, word, hint_detail)
            print(f"  💡 Hint: {hint_text}")

        print("\n  Commands: [answer] · 'hint' · 'skip' · 'quit'\n")

        try:
            raw = input("  ➤  Your guess: ").strip().lower()
        except (EOFError, KeyboardInterrupt):
            timer.stop()
            return 0, False, True   # quit

        if raw == "quit":
            timer.stop()
            return 0, False, True

        if raw == "skip":
            timer.stop()
            clear()
            header(round_num, score, lives, difficulty)
            print(f"  ⏭️  Skipped! The word was: {word.upper()}\n")
            time.sleep(1.5)
            return 0, False, False  # no penalty

        if raw == "hint":
            if not hint_used:
                hint_used = True
                print(f"\n  💡 Hint: {build_hint(category, word, hint_detail)}")
            else:
                print("\n  💡 You already used your hint!")
            time.sleep(1)
            continue

        attempts += 1

        if raw == word:
            timer.stop()
            earned = base_points if not hint_used else base_points // 2
            # Speed bonus: +50 % of base if >60 % time remains
            speed_bonus = 0
            if timer.remaining > time_limit * 0.6:
                speed_bonus = base_points // 2
                earned += speed_bonus
            clear()
            header(round_num, score + earned, lives, difficulty)
            note = []
            if hint_used:    note.append("hint used: −½ pts")
            if speed_bonus:  note.append("speed bonus: +½ pts")
            note_str = f"  ({', '.join(note)})" if note else ""
            print(f"\n  🎉 Correct!  +{earned} points{note_str}\n")
            time.sleep(1.8)
            return earned, False, False

        remaining = max_attempts - attempts
        if remaining > 0:
            print(f"\n  ❌ Nope!  {remaining} attempt{'s' if remaining != 1 else ''} left.")
            time.sleep(1)
        else:
            timer.stop()
            lives_after = lives - 1
            clear()
            lives_str = "❤️ " * lives_after + "🖤 " * (3 - lives_after)
            print("╔══════════════════════════════════════════════╗")
            print("║       🔤  W O R D  S C R A M B L E  🔤        ║")
            print("╠══════════════════════════════════════════════╣")
            print(f"║  Round: {round_num:<5}  Score: {score:<6}  Lives: {lives_str:<14}║")
            print(f"║  Difficulty: {DIFFICULTY_LEVELS[difficulty]['label']:<30}║")
            print("╚══════════════════════════════════════════════╝\n")
            print(f"\n  💔  Out of attempts!  The word was: {word.upper()}\n")
            time.sleep(2)
            return 0, True, False   # lose a life

    # Shouldn't reach here but just in case
    timer.stop()
    return 0, True, False


# ─────────────────────────────────────────────
#  GAME OVER SCREEN
# ─────────────────────────────────────────────
def game_over_screen(round_num: int, score: int):
    clear()
    print("\n  ╔══════════════════════════════════════════════╗")
    print("  ║             💀   G A M E  O V E R   💀         ║")
    print("  ╚══════════════════════════════════════════════╝\n")
    print(f"  You survived {round_num} round{'s' if round_num != 1 else ''}.")
    print(f"  Final score : {score} points\n")
    grade = (
        "🏆 Wordsmith Supreme!"   if score >= 100 else
        "🥇 Excellent!"           if score >= 70  else
        "🥈 Good effort!"         if score >= 40  else
        "🥉 Keep practising!"     if score >= 20  else
        "📚 Hit the dictionary!"
    )
    print(f"  {grade}\n")


# ─────────────────────────────────────────────
#  MAIN LOOP
# ─────────────────────────────────────────────
def main():
    show_welcome()

    while True:
        difficulty = select_difficulty()
        tier = DIFFICULTY_LEVELS[difficulty]["tier"]

        score = 0
        lives = 3
        round_num = 1
        quit_game = False

        # Build pool: all words from the chosen tier across every category
        pool: list[tuple[str, str]] = []   # (category, word)
        for cat, tiers in WORD_BANK.items():
            for w in tiers.get(tier, []):
                pool.append((cat, w))

        random.shuffle(pool)
        pool_index = 0

        while lives > 0 and not quit_game:
            # Cycle through words; reshuffle when exhausted
            if pool_index >= len(pool):
                random.shuffle(pool)
                pool_index = 0

            category, word = pool[pool_index]
            pool_index += 1

            earned, lost_life, quit_game = play_round(
                word, category, difficulty, round_num, score, lives
            )

            score += earned
            if lost_life:
                lives -= 1
            if not quit_game:
                round_num += 1

        game_over_screen(round_num - 1, score)

        try:
            again = input("  Play again? (y/n): ").strip().lower()
        except (EOFError, KeyboardInterrupt):
            again = "n"

        if again != "y":
            print("\n  Thanks for playing! 👋\n")
            break


if __name__ == "__main__":
    main()