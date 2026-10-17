"""Tests for the Word-Building word list storage (JSON, formerly pickle)."""

import importlib.util
import json
from pathlib import Path

import pytest

_DATA = Path(__file__).resolve().parent.parent / "games" / "Word-Building" / "data.py"


@pytest.fixture
def data(tmp_path, monkeypatch):
    """Load data.py from its (hyphenated) directory with a temp words file."""
    spec = importlib.util.spec_from_file_location("word_building_data", _DATA)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    target = tmp_path / "words.json"
    target.write_text(json.dumps({"a": ["apple"], "b": []}), encoding="utf-8")
    monkeypatch.setattr(module, "WORDS_FILE", target)
    module.words = module._load_words()
    return module


def test_bundled_word_list_is_valid_json_of_lists():
    bundled = json.loads(_DATA.with_name("words.json").read_text(encoding="utf-8"))
    assert bundled and all(isinstance(v, list) for v in bundled.values())
    assert all(isinstance(w, str) for v in bundled.values() for w in v)


def test_module_does_not_import_pickle():
    import ast

    tree = ast.parse(_DATA.read_text(encoding="utf-8"))
    imported = {
        alias.name.split(".")[0]
        for node in ast.walk(tree)
        if isinstance(node, ast.Import)
        for alias in node.names
    } | {
        node.module.split(".")[0]
        for node in ast.walk(tree)
        if isinstance(node, ast.ImportFrom) and node.module
    }
    assert "pickle" not in imported


def test_adding_word_persists_and_updates_memory(data):
    data.DataAdding("Avocado")
    assert "Avocado" in data.words["a"]
    assert "Avocado" in json.loads(data.WORDS_FILE.read_text(encoding="utf-8"))["a"]


def test_adding_duplicate_word_is_ignored(data):
    data.DataAdding("apple")
    assert data.words["a"].count("apple") == 1


def test_adding_word_for_new_letter_creates_bucket(data):
    data.DataAdding("zebra")
    assert data.words["z"] == ["zebra"]


def test_no_temp_files_left_behind(data):
    data.DataAdding("banana")
    assert [p.name for p in data.WORDS_FILE.parent.iterdir()] == ["words.json"]
