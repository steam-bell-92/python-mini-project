"""
🔨 Whack-a-Mole
Type the number of the mole before it disappears!
"""

import random
import time
import os
import threading


# ── Config ────────────────────────────────────────────────────────────────────
GRID_SIZE  = 9        # 3×3 grid
MOLE       = "🐭"
HOLE       = "🕳️ "
HAMMER     = "🔨"

LEVELS = {
    1: {"name": "Easy",   "window": 2.5, "rounds": 10, "moles": 1},
    2: {"name": "Medium", "window": 1.5, "rounds": 15, "moles": 2},
    3: {"name": "Hard",   "window": 0.8, "rounds": 20, "moles": 3},
}


def clear():
    os.system("cls" if os.name == "nt" else "clear")


def draw_grid(active: set[int], hit: set[int]):
    """Print 3×3 grid. active=mole positions, hit=just-whacked."""
    print()
    for row in range(3):
        line = "  "
        for col in range(3):
            idx = row * 3 + col
            if idx in hit:
                line += f" {HAMMER}[{idx+1}] "
            elif idx in active:
                line += f" {MOLE}[{idx+1}] "
            else:
                line += f" {HOLE}[{idx+1}] "
        print(line)
    print()


def choose_level() -> dict:
    clear()
    print("╔══════════════════════════════╗")
    print("║   🔨  WHACK-A-MOLE  🐭       ║")
    print("╚══════════════════════════════╝\n")
    print("  Difficulty:")
    for k, v in LEVELS.items():
        print(f"  {k} → {v['name']:8s}  ({v['window']}s window, {v['moles']} mole(s), {v['rounds']} rounds)")
    print()
    while True:
        try:
            c = int(input("  Enter 1 / 2 / 3: ").strip())
            if c in LEVELS:
                return LEVELS[c]
            print("  ⚠️  Enter 1, 2, or 3.")
        except ValueError:
            print("  ⚠️  Numbers only.")


def play():
    level    = choose_level()
    window   = level["window"]
    rounds   = level["rounds"]
    n_moles  = level["moles"]

    score = 0
    misses = 0
    reaction_times = []

    clear()
    print(f"\n  🐭 {level['name']} mode — {rounds} rounds — {window}s per mole")
    print("  Type the number(s) and press Enter fast!\n")
    time.sleep(2)

    for rnd in range(1, rounds + 1):
        # Random mole positions (no duplicates)
        active = set(random.sample(range(GRID_SIZE), n_moles))
        hit    = set()

        clear()
        print(f"  Round {rnd}/{rounds}  |  Score: {score}  |  Misses: {misses}\n")
        draw_grid(active, set())

        # ── Timed input using threading ───────────────────────────────────────
        user_input = []
        input_event = threading.Event()

        def get_input():
            try:
                raw = input("  Whack! Enter number(s) e.g. '2' or '1 3': ").strip()
                user_input.append(raw)
            except EOFError:
                pass
            input_event.set()

        t = threading.Thread(target=get_input, daemon=True)
        start_ts = time.time()
        t.start()
        input_event.wait(timeout=window)
        elapsed = time.time() - start_ts

        # ── Evaluate ──────────────────────────────────────────────────────────
        if user_input:
            try:
                chosen = set(int(x) - 1 for x in user_input[0].split())
            except ValueError:
                chosen = set()

            valid_hits = chosen & active        # correct moles hit
            wrong_hits = chosen - active        # wrong holes hit

            hit = valid_hits
            round_score = len(valid_hits) * 10
            round_miss  = len(active - valid_hits) + len(wrong_hits)

            if elapsed <= window:
                reaction_times.append(elapsed)

            score  += round_score
            misses += round_miss

            clear()
            print(f"  Round {rnd}/{rounds}  |  Score: {score}  |  Misses: {misses}\n")
            draw_grid(active, hit)

            if valid_hits == active and not wrong_hits:
                print(f"  ✅ Perfect hit! +{round_score}  ⚡ {elapsed:.2f}s")
            elif valid_hits:
                print(f"  ⚠️  Partial hit! +{round_score}  Missed: {len(active - valid_hits)}")
            else:
                print("  ❌ Missed!")
        else:
            # Timed out
            clear()
            print(f"  Round {rnd}/{rounds}  |  Score: {score}  |  Misses: {misses}\n")
            draw_grid(active, set())
            print("  ⏰ Too slow!")
            misses += n_moles

        time.sleep(0.9)

        # Gap between rounds
        gap = random.uniform(0.4, 1.0)
        time.sleep(gap)

    # ── Final screen ──────────────────────────────────────────────────────────
    clear()
    print("\n╔══════════════════════════════════════╗")
    print("║         🏁  GAME OVER!               ║")
    print("╚══════════════════════════════════════╝\n")
    print(f"  🎯 Final Score : {score}")
    print(f"  ❌ Total Misses: {misses}")
    max_score = rounds * n_moles * 10
    accuracy  = round((score / max_score) * 100) if max_score else 0
    print(f"  📊 Accuracy    : {accuracy}%")

    if reaction_times:
        avg_rt = sum(reaction_times) / len(reaction_times)
        print(f"  ⚡ Avg Reaction: {avg_rt:.2f}s")

    if accuracy >= 90:
        print("\n  🌟 Legendary reflexes!")
    elif accuracy >= 70:
        print("\n  👏 Great job!")
    elif accuracy >= 50:
        print("\n  😅 Not bad — keep practising!")
    else:
        print("\n  🐭 The moles win this round...")


def main():
    while True:
        play()
        print("\n  Play again? (y / n): ", end="")
        if input().strip().lower() != "y":
            print("\n  Thanks for playing! 🔨\n")
            break


if __name__ == "__main__":
    main()