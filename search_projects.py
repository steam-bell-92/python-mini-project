"""
🔍 Interactive Search System for Python Mini Projects
=====================================================
Search, filter, and explore all projects by keyword,
category, or difficulty level.
"""

import json
import os
import subprocess
import sys
from typing import Any

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(errors="replace")

# ─────────────────────────────────────────────
#  Project Registry
# ─────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REGISTRY_PATH = os.path.join(BASE_DIR, "projects_registry.json")

try:
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        PROJECTS: list[dict[str, Any]] = json.load(f)
except Exception as e:
    print(f"Error loading project registry: {e}")
    PROJECTS = []

DIFFICULTY_ORDER: dict[str, int] = {"beginner": 1, "intermediate": 2, "advanced": 3}

DIFFICULTY_BADGE: dict[str, str] = {
    "beginner": "🟢 Beginner",
    "intermediate": "🟡 Intermediate",
    "advanced": "🔴 Advanced",
}

CATEGORY_BADGE: dict[str, str] = {
    "games": "🎮 Games",
    "math": "🔢 Math",
    "utilities": "🔧 Utilities",
}


def banner() -> None:
    print("\n" + "═" * 56)
    print("   🔍  Python Mini Projects — Interactive Search")
    print("═" * 56)


def divider() -> None:
    print("─" * 56)


def display_project(idx: int, p: dict[str, Any], show_path: bool = False) -> None:
    print(f"\n  [{idx}] {p['emoji']}  {p['name']}")
    category_badge = CATEGORY_BADGE.get(p.get("category", "").lower(), "Unknown")
    difficulty_badge = DIFFICULTY_BADGE.get(p.get("difficulty", "").lower(), "Unknown")
    print(f"       {category_badge}   {difficulty_badge}")
    print(f"       {p['description']}")
    if show_path:
        print(f"       📂 {p['path']}")


def display_results(results: list[dict[str, Any]], show_path: bool = False) -> None:
    if not results:
        print("\n  ⚠️  No projects found. Try a different search term.")
        return
    print(f"\n  ✅  Found {len(results)} project(s):\n")
    for idx, p in enumerate(results, start=1):
        display_project(idx, p, show_path)
        divider()


def search_by_keyword(query: str) -> list[dict[str, Any]]:
    q = query.lower().strip()
    return [
        p for p in PROJECTS
        if q in p["name"].lower()
        or q in p["description"].lower()
        or any(q in kw for kw in p["keywords"])
    ]


def filter_by_category(category: str) -> list[dict[str, Any]]:
    return [p for p in PROJECTS if p["category"] == category.lower().strip()]


def filter_by_difficulty(level: str) -> list[dict[str, Any]]:
    return [p for p in PROJECTS if p["difficulty"] == level.lower().strip()]


def launch_project(projects: list[dict[str, Any]]) -> None:
    if not projects:
        return
    divider()
    choice = input("  ▶  Enter project number to launch (or press Enter to skip): ").strip()
    if not choice:
        return
    try:
        idx = int(choice) - 1
        if 0 <= idx < len(projects):
            path = projects[idx]["path"]
            project_path = path if os.path.isabs(path) else os.path.join(BASE_DIR, path)
            if os.path.exists(project_path):
                print(f"\n  🚀  Launching: {path}\n")
                subprocess.run([sys.executable, project_path])
            else:
                print(f"\n  ⚠️  File not found: {path}")
                print("     Make sure the registry path points to an existing file.")
        else:
            print("  ⚠️  Invalid number.")
    except ValueError:
        print("  ⚠️  Please enter a valid number.")


def main() -> None:
    banner()

    while True:
        print("""
  📌  What would you like to do?

  1  🔍  Search by keyword
  2  📂  Browse by category  (games / math / utilities)
  3  📊  Filter by difficulty (beginner / intermediate / advanced)
  4  📋  List all projects
  5  ❌  Exit
""")
        choice = input("  Enter choice (1-5): ").strip()

        if choice == "1":
            divider()
            query = input("  🔍  Search Project: ").strip()
            if query:
                results = search_by_keyword(query)
                display_results(results, show_path=True)
                launch_project(results)
            else:
                print("  ⚠️  Please enter a search term.")

        elif choice == "2":
            divider()
            print("  Categories: games  |  math  |  utilities")
            cat = input("  📂  Enter category: ").strip()
            if cat in ("games", "math", "utilities"):
                results = filter_by_category(cat)
                display_results(results, show_path=True)
                launch_project(results)
            else:
                print("  ⚠️  Unknown category. Use: games, math, or utilities.")

        elif choice == "3":
            divider()
            print("  Levels: beginner  |  intermediate  |  advanced")
            level = input("  📊  Enter difficulty: ").strip()
            if level in ("beginner", "intermediate", "advanced"):
                results = filter_by_difficulty(level)
                results = sorted(results, key=lambda p: p["name"])
                display_results(results, show_path=True)
                launch_project(results)
            else:
                print("  ⚠️  Unknown level. Use: beginner, intermediate, or advanced.")

        elif choice == "4":
            all_sorted = sorted(
                PROJECTS,
                key=lambda p: (p.get("category", ""), DIFFICULTY_ORDER.get(p.get("difficulty", ""), 99))
            )
            display_results(all_sorted, show_path=False)
            launch_project(all_sorted)

        elif choice == "5":
            print("\n  👋  Happy coding! See you next time.\n")
            break

        else:
            print("  ⚠️  Please enter a number from 1 to 5.")


if __name__ == "__main__":
    main()
