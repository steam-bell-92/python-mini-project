"""
Registry Validator

Developer utility for validating projects_registry.json.

Checks:
- JSON syntax
- Required fields
- Valid categories
- Valid difficulty values
- Duplicate project names
- Duplicate project paths
- Missing project files

Supports:
- --json
- --strict
- --file
"""

from pathlib import Path
import json
import argparse
import sys


VALID_CATEGORIES = {
    "games",
    "math",
    "utilities",
}

VALID_DIFFICULTIES = {
    "beginner",
    "intermediate",
    "advanced",
}


class RegistryValidator:
    def __init__(self, registry_path: str = "projects_registry.json"):
        self.registry_path = Path(registry_path)
        self.errors = []
        self.warnings = []
        self.projects = []

    def load_registry(self):
        """Load registry JSON."""
        if not self.registry_path.exists():
            self.errors.append(
                f"Registry file not found: {self.registry_path}"
            )
            return False

        try:
            with self.registry_path.open("r", encoding="utf-8") as file:
                self.projects = json.load(file)
            return True
        except json.JSONDecodeError as exc:
            self.errors.append(f"Invalid JSON: {exc}")
            return False
        
    def validate_required_fields(self):
        """Validate required registry fields."""

        required_fields = {
            "name",
            "emoji",
            "category",
            "difficulty",
            "description",
            "keywords",
            "path",
        }

        for index, project in enumerate(self.projects, start=1):

            missing = required_fields - project.keys()

            if missing:
                self.errors.append(
                    f"Project #{index} is missing required fields: "
                    f"{', '.join(sorted(missing))}"
                )

    def validate_categories(self):
        """Validate allowed project categories."""

        for project in self.projects:

            category = project.get("category")

            if category not in VALID_CATEGORIES:
                self.errors.append(
                    f"{project.get('name', '<unknown>')} "
                    f"has invalid category '{category}'."
                )

    def validate_difficulties(self):
        """Validate allowed difficulty values."""

        for project in self.projects:

            difficulty = project.get("difficulty")

            if difficulty not in VALID_DIFFICULTIES:
                self.errors.append(
                    f"{project.get('name', '<unknown>')} "
                    f"has invalid difficulty '{difficulty}'."
                )

    def validate_duplicate_names(self):
        """Detect duplicate project names."""

        seen = set()

        for project in self.projects:
            name = project.get("name")

            if name in seen:
                self.errors.append(
                    f"Duplicate project name: {name}"
                )
            else:
                seen.add(name)

    def validate_duplicate_paths(self):
        """Detect duplicate project paths."""

        seen = set()

        for project in self.projects:
            path = project.get("path")

            if path in seen:
                self.errors.append(
                    f"Duplicate project path: {path}"
                )
            else:
                seen.add(path)

    def validate_project_paths(self):
        """Ensure project files exist."""

        root = self.registry_path.parent

        for project in self.projects:

            path = project.get("path")

            if not path:
                continue

            project_file = root / path

            if not project_file.exists():
                self.errors.append(
                    f"Missing project file: {path}"
                )

    def validate_keywords(self):
        """Validate keywords field."""

        for project in self.projects:

            keywords = project.get("keywords")

            if not isinstance(keywords, list):
                self.errors.append(
                    f"{project['name']} keywords must be a list."
                )
                continue

            if len(keywords) == 0:
                self.warnings.append(
                    f"{project['name']} has no keywords."
                )

    def validate(self):
        """Run all validation checks."""

        if not self.load_registry():
            return

        self.validate_required_fields()
        self.validate_categories()
        self.validate_difficulties()

        self.validate_duplicate_names()
        self.validate_duplicate_paths()
        self.validate_project_paths()
        self.validate_keywords()

    def report(self, json_output=False):
        if json_output:
            print(
                json.dumps(
                    {
                        "projects": len(self.projects),
                        "errors": len(self.errors),
                        "warnings": len(self.warnings),
                        "status": (
                            "passed"
                            if not self.errors
                            else "failed"
                        ),
                    },
                    indent=2,
                )
            )
            return

        """Print validation summary."""

        print("\n========== Registry Validation ==========\n")

        print(f"Projects scanned : {len(self.projects)}")
        print(f"Errors           : {len(self.errors)}")
        print(f"Warnings         : {len(self.warnings)}")

        if self.errors:
            print("\nErrors:")
            for error in self.errors:
                print(f"  - {error}")

        if self.warnings:
            print("\nWarnings:")
            for warning in self.warnings:
                print(f"  - {warning}")

        if not self.errors and not self.warnings:
            print("\n✓ Registry validation passed successfully.")

if __name__ == "__main__":

    parser = argparse.ArgumentParser(
        description="Validate projects_registry.json"
    )

    parser.add_argument(
        "--file",
        default="projects_registry.json",
        help="Path to registry file",
    )

    parser.add_argument(
        "--json",
        action="store_true",
        help="Output JSON report",
    )

    parser.add_argument(
        "--strict",
        action="store_true",
        help="Treat warnings as errors",
    )

    args = parser.parse_args()

    validator = RegistryValidator(args.file)

    validator.validate()

    validator.report(json_output=args.json)

    if args.strict and validator.warnings:
        sys.exit(1)

    sys.exit(1 if validator.errors else 0)