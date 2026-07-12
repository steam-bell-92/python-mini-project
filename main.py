"""
🎮 Python Mini Projects — Interactive Launcher Menu
===================================================
A central, interactive TUI menu using the Textual framework
to browse, search, and launch games, math tools, security tools,
and general utilities.
"""

import os
import sys
import json
import subprocess
import ast
from typing import List, Dict, Any

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


# ── Pure-Python helpers (no Textual dependency) ─────────────────────────


def get_docstring_from_file(file_path: str) -> str:
    """Safely extract the module docstring from a Python file using AST."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            tree = ast.parse(f.read(), filename=file_path)
            return ast.get_docstring(tree) or ""
    except Exception:
        return ""


def scan_projects() -> List[Dict[str, Any]]:
    """Dynamically scan games/, math/, security/, and utilities/ directories.

    For each discovered Python script the function tries to match against
    ``projects_registry.json`` for rich metadata (emoji, difficulty,
    description).  When a script is not in the registry it falls back to
    AST-based docstring extraction for the description.
    """
    categories = ["games", "math", "security", "utilities"]

    # Try to load registry for rich metadata matching
    registry_path = os.path.join(BASE_DIR, "projects_registry.json")
    registry: Dict[str, Any] = {}
    if os.path.exists(registry_path):
        try:
            with open(registry_path, "r", encoding="utf-8") as f:
                reg_data = json.load(f)
                for item in reg_data:
                    p_key = item.get("path", "").replace("\\", "/").lower()
                    registry[p_key] = item
        except Exception:
            pass

    scanned_projects: List[Dict[str, Any]] = []

    for category in categories:
        cat_dir = os.path.join(BASE_DIR, category)
        if not os.path.isdir(cat_dir):
            continue

        for entry in os.scandir(cat_dir):
            if entry.is_file() and entry.name.endswith(".py") and entry.name != "__init__.py":
                rel_path = os.path.relpath(entry.path, BASE_DIR).replace("\\", "/")
                reg_item = registry.get(rel_path.lower())

                if reg_item:
                    scanned_projects.append({
                        "name": reg_item["name"],
                        "emoji": reg_item.get("emoji", "\U0001f4c4"),
                        "category": category,
                        "difficulty": reg_item.get("difficulty", "beginner"),
                        "description": reg_item["description"],
                        "path": entry.path,
                    })
                else:
                    doc = get_docstring_from_file(entry.path)
                    desc = doc.strip().split("\n")[0] if doc else "A python utility script."
                    name = entry.name[:-3].replace("-", " ").replace("_", " ").title()
                    scanned_projects.append({
                        "name": name,
                        "emoji": "\U0001f4c4",
                        "category": category,
                        "difficulty": "beginner",
                        "description": desc,
                        "path": entry.path,
                    })
            elif entry.is_dir():
                py_files: List[str] = []
                for root, _dirs, files in os.walk(entry.path):
                    for file in files:
                        if (
                            file.endswith(".py")
                            and not file.startswith("__init__")
                            and not file.startswith("test_")
                        ):
                            py_files.append(os.path.join(root, file))

                if not py_files:
                    continue

                # Find the primary execution file (name matches directory)
                dir_name_lower = entry.name.lower().replace("-", "").replace("_", "")
                primary_file = None
                for py_file in py_files:
                    basename = os.path.basename(py_file)[:-3].lower().replace("-", "").replace("_", "")
                    if basename == dir_name_lower:
                        primary_file = py_file
                        break
                if not primary_file:
                    primary_file = sorted(py_files)[0]

                rel_path = os.path.relpath(primary_file, BASE_DIR).replace("\\", "/")
                reg_item = registry.get(rel_path.lower())

                if reg_item:
                    scanned_projects.append({
                        "name": reg_item["name"],
                        "emoji": reg_item.get("emoji", "\U0001f4c4"),
                        "category": category,
                        "difficulty": reg_item.get("difficulty", "beginner"),
                        "description": reg_item["description"],
                        "path": primary_file,
                    })
                else:
                    doc = get_docstring_from_file(primary_file)
                    desc = doc.strip().split("\n")[0] if doc else "An interactive script."
                    name = entry.name.replace("-", " ").replace("_", " ").title()
                    scanned_projects.append({
                        "name": name,
                        "emoji": "\U0001f4c1",
                        "category": category,
                        "difficulty": "beginner",
                        "description": desc,
                        "path": primary_file,
                    })

    return sorted(scanned_projects, key=lambda p: (p["category"], p["name"]))


# ── Textual TUI (imported lazily so tests can use helpers above) ────────


def _build_app():
    """Build and return the LauncherApp class.

    All Textual imports live here so that ``scan_projects`` and
    ``get_docstring_from_file`` can be imported without Textual installed
    (e.g. in CI where only pytest is available).
    """
    from textual.app import App, ComposeResult
    from textual.containers import Container, Horizontal, Vertical
    from textual.widgets import (
        Header, Footer, ListView, ListItem, Static, Label, Button, Input,
    )
    from textual.binding import Binding

    class ProjectItem(ListItem):
        """List item representing a scanned project."""

        def __init__(self, project_data: Dict[str, Any]) -> None:
            super().__init__()
            self.project_data = project_data

        def compose(self) -> ComposeResult:
            p = self.project_data
            diff_badges = {
                "beginner": "\U0001f7e2 Beg",
                "intermediate": "\U0001f7e1 Int",
                "advanced": "\U0001f534 Adv",
            }
            diff_badge = diff_badges.get(
                p["difficulty"].lower(), p["difficulty"].upper()[:3]
            )
            yield Label(f"{p['emoji']} {p['name']} [ {diff_badge} ]")

    class CategoryItem(ListItem):
        """List item representing a category."""

        def __init__(self, category_id: str, label_text: str) -> None:
            super().__init__()
            self.category_id = category_id
            self.label_text = label_text

        def compose(self) -> ComposeResult:
            yield Label(self.label_text)

    class LauncherApp(App):
        """Textual TUI for Python Mini Projects launcher."""

        TITLE = "\U0001f680 Python Mini Projects Launcher"
        SUB_TITLE = "A modern interactive terminal launcher"

        BINDINGS = [
            Binding("q", "quit", "Exit", show=True),
            Binding("s", "focus_search", "Search", show=True),
            Binding("g", "select_games", "Games", show=False),
            Binding("m", "select_math", "Math", show=False),
            Binding("c", "select_security", "Security", show=False),
            Binding("u", "select_utilities", "Utilities", show=False),
            Binding("a", "select_all", "All", show=False),
        ]

        DEFAULT_CSS = """
        Screen {
            background: #121214;
        }

        #layout {
            height: 1fr;
        }

        #sidebar-container {
            width: 32;
            background: #1e1e24;
            border-right: solid #2a2b36;
            height: 1fr;
        }

        #sidebar-title {
            background: #2a2b36;
            color: #00ffd0;
            text-align: center;
            text-style: bold;
            padding: 1;
        }

        #category-list {
            background: transparent;
            border: none;
        }

        #category-list ListItem {
            padding: 1 2;
            color: #b0b3c6;
        }

        #category-list ListItem.--highlight {
            background: #00ffd0;
            color: #121214;
            text-style: bold;
        }

        #content-container {
            height: 1fr;
            padding: 1 2;
        }

        #search-input {
            background: #1e1e24;
            border: solid #2a2b36;
            color: #ffffff;
            margin-bottom: 1;
        }

        #project-list {
            background: #1e1e24;
            border: solid #2a2b36;
            height: 3fr;
        }

        #project-list ListItem {
            padding: 1 2;
            color: #b0b3c6;
        }

        #project-list ListItem.--highlight {
            background: #9f40ff;
            color: #ffffff;
            text-style: bold;
        }

        #detail-panel {
            background: #1e1e24;
            border: solid #2a2b36;
            margin-top: 1;
            height: 2fr;
            padding: 1 2;
        }

        #detail-header {
            font-size: 110%;
            text-style: bold;
            color: #00ffd0;
            margin-bottom: 1;
        }

        #detail-desc {
            color: #b0b3c6;
            margin-bottom: 1;
            height: 3;
        }

        #detail-meta {
            color: #8a8d9f;
            margin-bottom: 1;
        }

        #launch-btn {
            background: #00ffd0;
            color: #121214;
            border: none;
            text-style: bold;
            width: 100%;
            height: 3;
        }

        #launch-btn:hover {
            background: #00cca6;
        }
        """

        def __init__(self, **kwargs) -> None:
            super().__init__(**kwargs)
            self.all_projects = scan_projects()
            self.filtered_projects: List[Dict[str, Any]] = []
            self.current_category = "all"
            self.search_query = ""
            self.selected_project: Dict[str, Any] | None = None

        def compose(self) -> ComposeResult:
            yield Header()
            yield Horizontal(
                Vertical(
                    Static("\U0001f4c1 CATEGORIES", id="sidebar-title"),
                    ListView(
                        CategoryItem("all", "\U0001f4cb All Projects"),
                        CategoryItem("games", "\U0001f3ae Games"),
                        CategoryItem("math", "\U0001f522 Math"),
                        CategoryItem("security", "\U0001f6e1\ufe0f Security"),
                        CategoryItem("utilities", "\U0001f527 Utilities"),
                        id="category-list",
                    ),
                    id="sidebar-container",
                ),
                Vertical(
                    Input(
                        placeholder="\U0001f50d Search projects...",
                        id="search-input",
                    ),
                    ListView(id="project-list"),
                    Container(
                        Static(
                            "Select a project to view details",
                            id="detail-header",
                        ),
                        Static("", id="detail-desc"),
                        Static("", id="detail-meta"),
                        Button(
                            "\U0001f680 Launch Project",
                            id="launch-btn",
                            variant="success",
                        ),
                        id="detail-panel",
                    ),
                    id="content-container",
                ),
                id="layout",
            )
            yield Footer()

        def on_mount(self) -> None:
            self._refresh_project_list()
            self.query_one("#category-list", ListView).index = 0
            self.query_one("#search-input", Input).focus()

        # ── filtering ───────────────────────────────────────────

        def _refresh_project_list(self) -> None:
            """Rebuild the visible project list from filters."""
            self.filtered_projects = []
            for p in self.all_projects:
                if self.current_category != "all" and p["category"] != self.current_category:
                    continue
                if self.search_query:
                    q = self.search_query.lower()
                    if q not in p["name"].lower() and q not in p["description"].lower():
                        continue
                self.filtered_projects.append(p)

            list_view = self.query_one("#project-list", ListView)
            list_view.clear()
            for p in self.filtered_projects:
                list_view.append(ProjectItem(p))

            if self.filtered_projects:
                list_view.index = 0
                self._show_detail(self.filtered_projects[0])
            else:
                self._show_detail(None)

        def _show_detail(self, project: Dict[str, Any] | None) -> None:
            self.selected_project = project
            header = self.query_one("#detail-header", Static)
            desc = self.query_one("#detail-desc", Static)
            meta = self.query_one("#detail-meta", Static)
            btn = self.query_one("#launch-btn", Button)

            if project:
                header.update(f"{project['emoji']} {project['name']}")
                desc.update(project["description"])
                meta.update(
                    f"[bold]Category:[/bold] {project['category'].title()}  |  "
                    f"[bold]Difficulty:[/bold] {project['difficulty'].title()}  |  "
                    f"[bold]Path:[/bold] {os.path.basename(project['path'])}"
                )
                btn.disabled = False
            else:
                header.update("No project selected")
                desc.update("")
                meta.update("")
                btn.disabled = True

        # ── event handlers ──────────────────────────────────────

        def on_list_view_highlighted(self, event: ListView.Highlighted) -> None:
            if event.list_view.id == "project-list":
                if event.item and hasattr(event.item, "project_data"):
                    self._show_detail(event.item.project_data)
            elif event.list_view.id == "category-list":
                if event.item and hasattr(event.item, "category_id"):
                    self.current_category = event.item.category_id
                    self._refresh_project_list()

        def on_input_changed(self, event: Input.Changed) -> None:
            if event.input.id == "search-input":
                self.search_query = event.value
                self._refresh_project_list()

        def on_button_pressed(self, event: Button.Pressed) -> None:
            if event.button.id == "launch-btn":
                self._launch_selected()

        def on_list_view_selected(self, event: ListView.Selected) -> None:
            if event.list_view.id == "project-list":
                self._launch_selected()

        # ── actions (keyboard shortcuts) ────────────────────────

        def action_focus_search(self) -> None:
            self.query_one("#search-input", Input).focus()

        def action_select_games(self) -> None:
            self._set_category(1)

        def action_select_math(self) -> None:
            self._set_category(2)

        def action_select_security(self) -> None:
            self._set_category(3)

        def action_select_utilities(self) -> None:
            self._set_category(4)

        def action_select_all(self) -> None:
            self._set_category(0)

        def _set_category(self, index: int) -> None:
            cat_list = self.query_one("#category-list", ListView)
            cat_list.index = index
            cat_list.focus()

        # ── project launching ───────────────────────────────────

        def _launch_selected(self) -> None:
            if not self.selected_project:
                return

            script_path = self.selected_project["path"]

            with self.suspend():
                os.system("cls" if os.name == "nt" else "clear")
                print("=" * 60)
                print(f"\U0001f680 Launching {self.selected_project['name']}...")
                print("=" * 60)
                try:
                    subprocess.run([sys.executable, script_path], check=False)
                except Exception as e:
                    print(f"\n\u274c Error executing script: {e}")
                print("\n" + "=" * 60)
                input(
                    "\u2139\ufe0f Script finished. Press Enter to return to the launcher menu..."
                )

    return LauncherApp


if __name__ == "__main__":
    LauncherApp = _build_app()
    app = LauncherApp()
    app.run()
