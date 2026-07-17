import json
from pathlib import Path

from utils.registry_validator import RegistryValidator

def write_registry(tmp_path, data):
    registry = tmp_path / "projects_registry.json"

    registry.write_text(
        json.dumps(data, indent=2),
        encoding="utf-8",
    )

    return registry

def test_valid_registry(tmp_path):
    project_file = tmp_path / "demo.py"
    project_file.write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": ["demo"],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert validator.errors == []

def test_invalid_category(tmp_path):
    project_file = tmp_path / "demo.py"
    project_file.write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "invalid",
                "difficulty": "beginner",
                "description": "Demo",
                "keywords": ["demo"],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert validator.errors

def test_duplicate_names(tmp_path):
    (tmp_path / "a.py").write_text("")
    (tmp_path / "b.py").write_text("")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "One",
                "keywords": ["demo"],
                "path": "a.py",
            },
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Two",
                "keywords": ["demo"],
                "path": "b.py",
            },
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any("Duplicate project name" in e for e in validator.errors)

def test_invalid_difficulty(tmp_path):
    project_file = tmp_path / "demo.py"
    project_file.write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [{
            "name": "Demo",
            "emoji": "🔥",
            "category": "utilities",
            "difficulty": "expert",
            "description": "Demo",
            "keywords": ["demo"],
            "path": "demo.py",
        }],
    )

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("invalid difficulty" in e.lower() for e in validator.errors)

def test_duplicate_paths(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo1",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo",
                "keywords": ["demo"],
                "path": "demo.py",
            },
            {
                "name": "Demo2",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo",
                "keywords": ["demo"],
                "path": "demo.py",
            },
        ],
    )

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("duplicate project path" in e.lower() for e in validator.errors)

def test_missing_required_field(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [{
            "name": "Demo",
            "emoji": "🔥",
            "category": "utilities",
            "difficulty": "beginner",
            "description": "Demo",
            "path": "demo.py",
        }],
    )

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("missing required fields" in e.lower() for e in validator.errors)

def test_missing_project_file(tmp_path):
    registry = write_registry(
        tmp_path,
        [{
            "name": "Demo",
            "emoji": "🔥",
            "category": "utilities",
            "difficulty": "beginner",
            "description": "Demo",
            "keywords": ["demo"],
            "path": "missing.py",
        }],
    )

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("missing project file" in e.lower() for e in validator.errors)

def test_invalid_json(tmp_path):
    registry = tmp_path / "projects_registry.json"

    registry.write_text("{ invalid json", encoding="utf-8")

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("invalid json" in e.lower() for e in validator.errors)

