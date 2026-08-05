import json
from pathlib import Path
import pytest

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

    assert any(
        "registered project not found in repository"
        in e.lower()
        for e in validator.errors
    )

def test_invalid_json(tmp_path):
    registry = tmp_path / "projects_registry.json"

    registry.write_text("{ invalid json", encoding="utf-8")

    validator = RegistryValidator(registry)
    validator.validate()

    assert any("invalid json" in e.lower() for e in validator.errors)


def test_missing_registry_file(tmp_path):
    registry = tmp_path / "missing_registry.json"

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "registry file not found" in error.lower()
        for error in validator.errors
    )


def test_keywords_must_be_list(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": "demo",
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "keywords must be a list" in error.lower()
        for error in validator.errors
    )


def test_empty_keywords_generates_warning(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": [],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert validator.errors == []

    assert any(
        "has no keywords" in warning.lower()
        for warning in validator.warnings
    )


def test_json_report(tmp_path, capsys):
    (tmp_path / "demo.py").write_text("print('hello')")

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

    validator.report(json_output=True)

    captured = capsys.readouterr()

    output = json.loads(captured.out)

    assert "repository_consistency" in output

    assert output["repository_consistency"] == {
        "unregistered_projects": []
    }

    assert output["projects"] == 1
    assert output["errors"] == 0
    assert output["warnings"] == 0
    assert output["status"] == "passed"


def test_unregistered_repository_project(tmp_path):
    """Repository project should be reported if missing from registry."""

    utilities = tmp_path / "utilities"
    utilities.mkdir()

    project = utilities / "DemoProject"
    project.mkdir()

    (project / "DemoProject.py").write_text(
        "print('hello')",
        encoding="utf-8",
    )

    registry = write_registry(tmp_path, [])

    validator = RegistryValidator(registry)

    validator.validate()

    assert "utilities/DemoProject" in validator.unregistered_projects

    assert any(
        "missing from registry" in error.lower()
        for error in validator.errors
    )


def test_repository_consistency_passes(tmp_path):
    """Registry and repository should be fully synchronized."""

    utilities = tmp_path / "utilities"
    utilities.mkdir()

    project = utilities / "DemoProject"
    project.mkdir()

    (project / "DemoProject.py").write_text(
        "print('hello')",
        encoding="utf-8",
    )

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
                "path": "utilities/DemoProject/DemoProject.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert validator.unregistered_projects == []


def test_valid_path_normalization(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

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

    assert not any(
        "path separator" in error.lower()
        or "leading './'" in error.lower()
        or "leading '/'" in error.lower()
        or "trailing '/'" in error.lower()
        for error in validator.errors
    )


@pytest.mark.parametrize(
    ("path", "expected"),
    [
        ("demo\\project.py", "windows path separators"),
        ("demo//project.py", "duplicate path separators"),
        ("./demo.py", "leading './'"),
        ("/demo.py", "leading '/'"),
        ("demo.py/", "trailing '/'"),
    ],
)
def test_invalid_path_normalization(tmp_path, path, expected):
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
                "path": path,
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "Demo" in error and expected in error.lower()
        for error in validator.errors
    )


def test_duplicate_keywords(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": [
                    "python",
                    "game",
                    "python",
                ],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "duplicate keywords" in error.lower()
        for error in validator.errors
    )


def test_duplicate_keywords_case_insensitive(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": [
                    "Python",
                    "python",
                    "PYTHON",
                ],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "duplicate keywords" in error.lower()
        for error in validator.errors
    )


def test_empty_string_keyword(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": ["", "python"],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "empty keyword" in error.lower()
        for error in validator.errors
    )


def test_whitespace_keyword(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": ["   ", "python"],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "empty keyword" in error.lower()
        for error in validator.errors
    )


def test_non_string_keyword(tmp_path):
    (tmp_path / "demo.py").write_text("print('hello')")

    registry = write_registry(
        tmp_path,
        [
            {
                "name": "Demo",
                "emoji": "🔥",
                "category": "utilities",
                "difficulty": "beginner",
                "description": "Demo project",
                "keywords": ["python", 123],
                "path": "demo.py",
            }
        ],
    )

    validator = RegistryValidator(registry)

    validator.validate()

    assert any(
        "non-string keyword" in error.lower()
        for error in validator.errors
    )
