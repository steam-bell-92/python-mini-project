"""
🎮 Python Mini Projects — Interactive Launcher Menu
===================================================
A central, interactive CLI menu at the root level to browse,
search, and launch all games, math utilities, and other tools.
"""

import os
import subprocess
import sys
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REGISTRY_PATH = os.path.join(BASE_DIR, "projects_registry.json")

try:
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        PROJECTS = json.load(f)
except Exception as e:
    print(f"Error loading project registry: {e}")
    PROJECTS = []

DIFFICULTY_BADGES = {
    "beginner": "🟢 Beg",
    "intermediate": "🟡 Int",
    "advanced": "🔴 Adv",
}

CATEGORY_EMOJIS = {
    "games": "🎮",
    "math": "🔢",
    "utilities": "🔧",
}

# ── Keyboard Shortcuts ─────────────────────────────────────
# Users can override these by creating keyboard_shortcuts.json
# in the same directory as main.py. See `show_help()` for details.
KEYBOARD_SHORTCUTS = {
    "main_menu": {
        "g": "games",
        "m": "math",
        "u": "utilities",
        "s": "search",
        "l": "list_all",
        "q": "exit",
        "?": "help",
        "h": "help",
    },
    "global": {
        "?": "help",
        "h": "help",
        "b": "back",
    },
}

# Attempt to load user-defined shortcuts
_SHORTCUTS_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "keyboard_shortcuts.json")
if os.path.exists(_SHORTCUTS_PATH):
    try:
        with open(_SHORTCUTS_PATH, "r", encoding="utf-8") as f:
            _user_shortcuts = json.load(f)
        KEYBOARD_SHORTCUTS["main_menu"].update(_user_shortcuts.get("main_menu", {}))
        KEYBOARD_SHORTCUTS["global"].update(_user_shortcuts.get("global", {}))
    except Exception:
        pass


def print_header():
    print("\n" + "═" * 60)
    print("        🚀  PYTHON MINI PROJECTS — INTERACTIVE LAUNCHER")
    print("═" * 60)


def print_footer():
    print("═" * 60)


def show_help():
    """Display a help modal with all available keyboard shortcuts."""
    os.system('cls' if os.name == 'nt' else 'clear')
    print_header()
    print("  ⌨️  KEYBOARD SHORTCUTS — Press any key to return")
    print("─" * 60)
    print("  MAIN MENU shortcuts:")
    print("    g  → Games")
    print("    m  → Math Utilities")
    print("    u  → General Utilities")
    print("    s  → Search Projects")
    print("    l  → List All Projects")
    print("    q  → Exit")
    print("    ?  or  h  → Show this help")
    print("  SUB-MENU shortcuts:")
    print("    b  → Back to previous menu")
    print("    ?  or  h  → Show this help")
    print("  NUMERIC input:")
    print("    You can still type numbers to select menu items")
    print("─" * 60)
    print("  CUSTOMIZATION:")
    print("    Create keyboard_shortcuts.json in the project root")
    print("    to remap any shortcut. Example:")
    print('    {"main_menu": {"x": "exit", "1": "games"}}')
    print_footer()
    input("  👉 Press Enter to return...")


def list_projects_by_category(category_name):
    filtered = [p for p in PROJECTS if p["category"] == category_name]
    filtered_sorted = sorted(filtered, key=lambda p: p["name"])
    return filtered_sorted


def launch_project(path):
    project_path = path if os.path.isabs(path) else os.path.join(BASE_DIR, path)

    if not os.path.exists(project_path):
        print(f"\n❌ Error: File not found at '{path}'")
        input("\nPress Enter to return to menu...")
        return

    print(f"\n🚀 Launching: {os.path.basename(project_path)}")
    print("─" * 60 + "\n")
    try:
        # Run with current python executable
        subprocess.run([sys.executable, project_path])
    except Exception as e:
        print(f"\n❌ Error executing script: {e}")
    print("\n" + "─" * 60)
    input("ℹ️ Script finished. Press Enter to return to the launcher...")


def _handle_global_shortcuts(choice, allow_back=True):
    """Return a canonical action string for global shortcuts, or None."""
    lowered = choice.lower().strip()
    if lowered in KEYBOARD_SHORTCUTS["global"]:
        action = KEYBOARD_SHORTCUTS["global"][lowered]
        if action == "back" and allow_back:
            return "back"
        if action == "help":
            show_help()
            return "help_shown"
    return None


def main_menu():
    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        print_header()
        print("  Please select a category to browse:")
        print("\n  [1] 🎮 Games        (or press 'g')")
        print("  [2] 🔢 Math         (or press 'm')")
        print("  [3] 🔧 Utilities     (or press 'u')")
        print("  [4] 🔍 Search       (or press 's')")
        print("  [5] 📋 List All     (or press 'l')")
        print("  [6] ❌ Exit         (or press 'q')")
        print("  [?] ❓ Help          (press '?' or 'h')")
        print_footer()

        choice = input("👉 Enter choice (1-6, or shortcut key): ").strip()

        # Single-key shortcuts
        lowered = choice.lower()
        if lowered in KEYBOARD_SHORTCUTS["main_menu"]:
            action = KEYBOARD_SHORTCUTS["main_menu"][lowered]
            if action == "help":
                show_help()
                continue
            elif action == "exit":
                print("\n👋 Happy Coding! Goodbye.\n")
                break
            elif action == "games":
                category_menu("games", "Games")
            elif action == "math":
                category_menu("math", "Math Utilities")
            elif action == "utilities":
                category_menu("utilities", "General Utilities")
            elif action == "search":
                search_menu()
            elif action == "list_all":
                list_all_menu()
            continue

        if lowered in KEYBOARD_SHORTCUTS["global"]:
            g_action = _handle_global_shortcuts(choice, allow_back=False)
            if g_action == "help_shown":
                continue

        if choice == "1":
            category_menu("games", "Games")
        elif choice == "2":
            category_menu("math", "Math Utilities")
        elif choice == "3":
            category_menu("utilities", "General Utilities")
        elif choice == "4":
            search_menu()
        elif choice == "5":
            list_all_menu()
        elif choice == "6":
            print("\n👋 Happy Coding! Goodbye.\n")
            break
        else:
            input("\n⚠️ Invalid selection. Press Enter to try again...")


def category_menu(category_key, category_title):
    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        print_header()
        print(f"  📂 Category: {category_title}")
        print("─" * 60)

        items = list_projects_by_category(category_key)
        for idx, item in enumerate(items, start=1):
            difficulty = DIFFICULTY_BADGES.get(item["difficulty"], item["difficulty"])
            print(f"  [{idx:2d}] {item['emoji']} {item['name']:30s} [{difficulty}]")
            print(f"       {item['description']}")
            print()

        print(f"  [B] 🔙 Back to Main Menu")
        print(f"  [?] ❓ Help")
        print_footer()

        choice = input("👉 Select project number (or 'b' / '?'): ").strip().lower()

        g_action = _handle_global_shortcuts(choice, allow_back=True)
        if g_action == "back":
            break
        if g_action == "help_shown":
            continue

        if choice == 'b':
            break

        try:
            val = int(choice)
            if 1 <= val <= len(items):
                launch_project(items[val - 1]["path"])
            else:
                input("\n⚠️ Number out of range. Press Enter to try again...")
        except ValueError:
            input("\n⚠️ Invalid input. Please enter a number, 'b', or '?'. Press Enter to try again...")


def search_menu():
    os.system('cls' if os.name == 'nt' else 'clear')
    print_header()
    print("  🔍 Search Projects")
    print_footer()
    query = input("👉 Enter search keyword (e.g., game, solver, cipher): ").strip().lower()
    if not query:
        return

    results = [
        p for p in PROJECTS
        if query in p["name"].lower()
        or query in p["description"].lower()
        or any(query in kw.lower() for kw in p["keywords"])
    ]

    if not results:
        input("\n⚠️ No matching projects found. Press Enter to return to main menu...")
        return

    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        print_header()
        print(f"  🔍 Search Results for '{query}':")
        print("─" * 60)

        for idx, item in enumerate(results, start=1):
            cat_emoji = CATEGORY_EMOJIS.get(item["category"], "")
            difficulty = DIFFICULTY_BADGES.get(item["difficulty"], item["difficulty"])
            print(f"  [{idx:2d}] {cat_emoji} {item['name']:30s} [{difficulty}]")
            print(f"       {item['description']}")
            print()

        print(f"  [B] 🔙 Back to Main Menu")
        print(f"  [?] ❓ Help")
        print_footer()

        choice = input("👉 Select project number (or 'b' / '?'): ").strip().lower()

        g_action = _handle_global_shortcuts(choice, allow_back=True)
        if g_action == "back":
            break
        if g_action == "help_shown":
            continue

        if choice == 'b':
            break

        try:
            val = int(choice)
            if 1 <= val <= len(results):
                launch_project(results[val - 1]["path"])
            else:
                input("\n⚠️ Number out of range. Press Enter to try again...")
        except ValueError:
            input("\n⚠️ Invalid input. Please enter a number, 'b', or '?'. Press Enter to try again...")


def list_all_menu():
    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        print_header()
        print("  📋 All Projects")
        print("─" * 60)

        sorted_all = sorted(PROJECTS, key=lambda p: (p["category"], p["name"]))
        for idx, item in enumerate(sorted_all, start=1):
            cat_emoji = CATEGORY_EMOJIS.get(item["category"], "")
            difficulty = DIFFICULTY_BADGES.get(item["difficulty"], item["difficulty"])
            print(f"  [{idx:2d}] {cat_emoji} {item['name']:30s} [{difficulty}]")
            print(f"       {item['description']}")
            print()

        print(f"  [B] 🔙 Back to Main Menu")
        print(f"  [?] ❓ Help")
        print_footer()

        choice = input("👉 Select project number (or 'b' / '?'): ").strip().lower()

        g_action = _handle_global_shortcuts(choice, allow_back=True)
        if g_action == "back":
            break
        if g_action == "help_shown":
            continue

        if choice == 'b':
            break

        try:
            val = int(choice)
            if 1 <= val <= len(sorted_all):
                launch_project(sorted_all[val - 1]["path"])
            else:
                input("\n⚠️ Number out of range. Press Enter to try again...")
        except ValueError:
            input("\n⚠️ Invalid input. Please enter a number, 'b', or '?'. Press Enter to try again...")


if __name__ == "__main__":
    try:
        main_menu()
    except KeyboardInterrupt:
        print("\n\n👋 Goodbye!")
