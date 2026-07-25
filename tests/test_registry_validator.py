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


def test_missing_registry_file(tmp_path):
    non_existent = tmp_path / "does_not_exist.json"
    validator = RegistryValidator(non_existent)
    validator.validate()

    assert any("not found" in e.lower() for e in validator.errors)


def test_keywords_must_be_list(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [{
            "name": "Demo",
            "emoji": "X",
            "category": "utilities",
            "difficulty": "beginner",
            "description": "Demo",
            "keywords": "not-a-list",
            "path": "demo.py",
        }],
    )

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("keywords must be a list" in e.lower() for e in validator.errors)


def test_empty_keywords_generates_warning(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [{
            "name": "Demo",
            "emoji": "X",
            "category": "utilities",
            "difficulty": "beginner",
            "description": "Demo",
            "keywords": [],
            "path": "demo.py",
        }],
    )

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("no keywords" in e.lower() for e in validator.warnings)


def test_json_report_output(tmp_path, capsys):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [{
            "name": "Demo",
            "emoji": "X",
            "category": "utilities",
            "difficulty": "beginner",
            "description": "Demo",
            "keywords": ["demo"],
            "path": "demo.py",
        }],
    )

    validator = RegistryValidator(registry)
    validator.validate()
    validator.report(json_output=True)

    import json as json_mod
    captured = capsys.readouterr()
    data = json_mod.loads(captured.out)

    assert "projects" in data
    assert "errors" in data
    assert "warnings" in data
    assert "status" in data
    assert data["projects"] == 1
    assert data["errors"] == 0

