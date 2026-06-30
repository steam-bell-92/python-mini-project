"""
🏆 Progress Tracker — Python Mini Projects
Track which projects you've completed and monitor your learning journey!
"""

import json
import os
from datetime import datetime

# ── Config ────────────────────────────────────────────────────────────────────
DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "completed_projects.json")

# Load Project Registry from projects_registry.json
REGISTRY_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "projects_registry.json"))

ALL_PROJECTS = {
    "🎲 Games": [],
    "🔢 Math": [],
    "🔐 Utilities": []
}

CATEGORY_MAP = {
    "games": "🎲 Games",
    "math": "🔢 Math",
    "utilities": "🔐 Utilities"
}

try:
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        registry = json.load(f)
    for p in registry:
        cat_key = CATEGORY_MAP.get(p["category"])
        if cat_key:
            parts = p["path"].split("/")
            if len(parts) >= 2:
                proj_name = parts[-2]
                ALL_PROJECTS[cat_key].append(proj_name)
except Exception as e:
    print(f"Error loading project registry: {e}")

# Flatten for quick lookup
ALL_PROJECT_NAMES = [p for projects in ALL_PROJECTS.values() for p in projects]
TOTAL = len(ALL_PROJECT_NAMES)


# ── Data helpers ──────────────────────────────────────────────────────────────

def load_data() -> dict:
    """Load saved progress from JSON file, or return a fresh state."""
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r") as f:
            data = json.load(f)
        # Migrate old names to new folder names (corrected mappings)
        migrations = {
            "Dice-Rolling": "Rolling-Dice",
            "Coin-Flip": "Flipping-Toss",
            "Pascals-Triangle": "Pascal-Triangle"
        }
        completed = data.get("completed", {})
        updated_completed = {}
        mutated = False
        for k, v in completed.items():
            if k in migrations:
                new_key = migrations[k]
                # Validate: only migrate if the new key exists in the registry
                if new_key in ALL_PROJECT_NAMES:
                    updated_completed[new_key] = v
                    mutated = True
                else:
                    # If new key doesn't exist in registry, keep old key and warn
                    print(f"⚠️ Warning: migration target '{new_key}' not found in registry. Keeping old key '{k}'.")
                    updated_completed[k] = v
            else:
                updated_completed[k] = v
        if mutated:
            data["completed"] = updated_completed
            save_data(data)
        return data
    return {"completed": {}}          # {project_name: "YYYY-MM-DD HH:MM"}


def save_data(data: dict) -> None:
    """Persist progress to JSON file."""
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)


# ── Display helpers ───────────────────────────────────────────────────────────

def progress_bar(done: int, total: int, width: int = 20) -> str:
    filled = int(width * done / total) if total else 0
    bar = "█" * filled + "░" * (width - filled)
    pct = int(100 * done / total) if total else 0
    return f"[{bar}] {done}/{total} ({pct}%)"


def print_header() -> None:
    print("\n" + "═" * 52)
    print("  🏆  Python Mini Projects — Progress Tracker  🏆")
    print("═" * 52)


def print_menu() -> None:
    print("""
  1️⃣   View all projects & completion status
  2️⃣   Mark a project as completed
  3️⃣   Unmark a project (reset)
  4️⃣   View only completed projects
  5️⃣   View only remaining projects
  6️⃣   Clear ALL progress  ⚠️
  0️⃣   Exit
""")


# ── Feature: list all projects ────────────────────────────────────────────────

def view_all(data: dict) -> None:
    completed = data["completed"]
    done = len(completed)
    print(f"\n📊 Overall progress: {progress_bar(done, TOTAL)}\n")
    for category, projects in ALL_PROJECTS.items():
        cat_done = sum(1 for p in projects if p in completed)
        print(f"  {category}  ({cat_done}/{len(projects)})")
        for p in projects:
            if p in completed:
                ts = completed[p]
                print(f"    ✅  {p}  (done {ts})")
            else:
                print(f"    ⬜  {p}")
        print()


# ── Feature: mark complete ────────────────────────────────────────────────────

def mark_completed(data: dict) -> None:
    completed = data["completed"]
    remaining = [p for p in ALL_PROJECT_NAMES if p not in completed]

    if not remaining:
        print("\n🎉 Wow — you've finished every project! Nothing left to mark.")
        return

    print("\n📝 Remaining projects (enter the number to mark as done):\n")
    for i, p in enumerate(remaining, 1):
        print(f"  {i:>2}.  {p}")

    raw = input("\n  Enter number (or 0 to cancel): ").strip()
    if raw == "0" or raw == "":
        return

    try:
        idx = int(raw) - 1
        if not (0 <= idx < len(remaining)):
            raise ValueError
    except ValueError:
        print("  ❌  Invalid choice.")
        return

    project = remaining[idx]
    ts = datetime.now().strftime("%Y-%m-%d %H:%M")
    completed[project] = ts
    save_data(data)
    print(f"\n  🎊  '{project}' marked as completed on {ts}!")

    # Milestone messages
    done = len(completed)
    if done == TOTAL:
        print("\n  🏅  YOU'VE COMPLETED ALL PROJECTS! Incredible work! 🏅")
    elif done % 5 == 0:
        print(f"\n  🔥  {done} projects done — you're on a roll!")


# ── Feature: unmark ───────────────────────────────────────────────────────────

def unmark_project(data: dict) -> None:
    completed = data["completed"]
    if not completed:
        print("\n  ℹ️  No completed projects to unmark.")
        return

    done_list = list(completed.keys())
    print("\n  ✅ Completed projects:\n")
    for i, p in enumerate(done_list, 1):
        print(f"  {i:>2}.  {p}  (done {completed[p]})")

    raw = input("\n  Enter number to unmark (or 0 to cancel): ").strip()
    if raw == "0" or raw == "":
        return

    try:
        idx = int(raw) - 1
        if not (0 <= idx < len(done_list)):
            raise ValueError
    except ValueError:
        print("  ❌  Invalid choice.")
        return

    project = done_list[idx]
    del completed[project]
    save_data(data)
    print(f"\n  ↩️  '{project}' has been unmarked.")


# ── Feature: view completed ───────────────────────────────────────────────────

def view_completed(data: dict) -> None:
    completed = data["completed"]
    if not completed:
        print("\n  📭  No projects completed yet. Keep going! 💪")
        return

    print(f"\n  🎉 Completed projects ({len(completed)}/{TOTAL}):\n")
    for i, (p, ts) in enumerate(completed.items(), 1):
        print(f"  {i:>2}. ✅  {p}  —  {ts}")


# ── Feature: view remaining ───────────────────────────────────────────────────

def view_remaining(data: dict) -> None:
    completed = data["completed"]
    remaining = [p for p in ALL_PROJECT_NAMES if p not in completed]

    if not remaining:
        print("\n  🏅  Nothing left — you've done them all!")
        return

    print(f"\n  📋 Remaining projects ({len(remaining)}/{TOTAL}):\n")
    for i, p in enumerate(remaining, 1):
        print(f"  {i:>2}. ⬜  {p}")


# ── Feature: clear all ────────────────────────────────────────────────────────

def clear_all(data: dict) -> None:
    confirm = input("\n  ⚠️  This will erase ALL progress. Type 'yes' to confirm: ").strip().lower()
    if confirm == "yes":
        data["completed"] = {}
        save_data(data)
        print("  🗑️  All progress cleared.")
    else:
        print("  ↩️  Cancelled.")


# ── Main loop ─────────────────────────────────────────────────────────────────

def main() -> None:
    data = load_data()

    while True:
        print_header()

        done = len(data["completed"])
        print(f"\n  📊  {progress_bar(done, TOTAL)}")

        print_menu()
        choice = input("  Enter choice: ").strip()

        if choice == "1":
            view_all(data)
        elif choice == "2":
            mark_completed(data)
        elif choice == "3":
            unmark_project(data)
        elif choice == "4":
            view_completed(data)
        elif choice == "5":
            view_remaining(data)
        elif choice == "6":
            clear_all(data)
        elif choice == "0":
            print("\n  👋  Happy coding! Keep building! 🚀\n")
            break
        else:
            print("  ❌  Invalid option. Please try again.")

        input("\n  Press Enter to continue...")


if __name__ == "__main__":
    main()