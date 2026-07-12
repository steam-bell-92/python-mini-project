"""Tests for the project scanning helpers in main.py.

These tests deliberately avoid importing any Textual code so they
can run in CI where only ``pytest`` is installed.
"""

import os
import sys
import tempfile

# Ensure the project root is on sys.path so ``import main`` works.
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from main import scan_projects, get_docstring_from_file


class TestGetDocstringFromFile:
    """Tests for the ``get_docstring_from_file`` helper."""

    def test_extracts_module_docstring(self, tmp_path):
        py_file = tmp_path / "sample.py"
        py_file.write_text('"""\nHello World\n"""\npass\n', encoding="utf-8")
        assert get_docstring_from_file(str(py_file)).strip() == "Hello World"

    def test_returns_empty_for_no_docstring(self, tmp_path):
        py_file = tmp_path / "no_doc.py"
        py_file.write_text("x = 1\n", encoding="utf-8")
        assert get_docstring_from_file(str(py_file)) == ""

    def test_returns_empty_for_syntax_error(self, tmp_path):
        py_file = tmp_path / "bad.py"
        py_file.write_text("def (broken syntax\n", encoding="utf-8")
        assert get_docstring_from_file(str(py_file)) == ""

    def test_returns_empty_for_missing_file(self):
        assert get_docstring_from_file("/nonexistent/path.py") == ""


class TestScanProjects:
    """Tests for the ``scan_projects`` function."""

    def test_returns_list(self):
        projects = scan_projects()
        assert isinstance(projects, list)

    def test_finds_projects(self):
        projects = scan_projects()
        assert len(projects) > 0, "Expected at least one project to be discovered"

    def test_project_schema(self):
        projects = scan_projects()
        required_keys = {"name", "emoji", "category", "difficulty", "description", "path"}
        for p in projects:
            assert required_keys.issubset(p.keys()), f"Missing keys in {p.get('name', '?')}"

    def test_project_paths_exist(self):
        projects = scan_projects()
        for p in projects:
            assert os.path.exists(p["path"]), f"Path does not exist: {p['path']}"

    def test_categories_are_valid(self):
        valid = {"games", "math", "security", "utilities"}
        projects = scan_projects()
        for p in projects:
            assert p["category"] in valid, f"Unexpected category: {p['category']}"

    def test_sorted_by_category_then_name(self):
        projects = scan_projects()
        keys = [(p["category"], p["name"]) for p in projects]
        assert keys == sorted(keys), "Projects should be sorted by (category, name)"
