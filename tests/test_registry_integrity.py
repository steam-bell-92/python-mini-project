"""Integrity checks for the real projects_registry.json (regression tests)."""

import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
REGISTRY = REPO_ROOT / "projects_registry.json"


def _reject_duplicate_keys(pairs):
    seen = {}
    for key, value in pairs:
        if key in seen:
            raise AssertionError(f"duplicate JSON key {key!r} (missing '}},{{' between entries?)")
        seen[key] = value
    return seen


def _load():
    with REGISTRY.open(encoding="utf-8") as fh:
        data = json.load(fh, object_pairs_hook=_reject_duplicate_keys)
    return data if isinstance(data, list) else data["projects"]


def test_registry_has_no_duplicate_keys():
    # Regression: two entries were once fused into one object, silently
    # dropping "Advanced Password Manager" because json keeps the last value.
    assert _load()


def test_registry_paths_exist():
    missing = [p["path"] for p in _load() if not (REPO_ROOT / p["path"]).is_file()]
    assert missing == []


def test_registry_paths_are_unique():
    paths = [p["path"] for p in _load()]
    assert len(paths) == len(set(paths))


def test_password_manager_is_registered():
    assert "security/password_manager/main.py" in {p["path"] for p in _load()}
