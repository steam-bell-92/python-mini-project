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
        self.unregistered_projects = []
        self.projects = []
        self.validation_status = "PENDING"

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

    def validate_path_safety(self, path):
        """Check if a registry path is safe (no traversal, no injection)."""
        if not path:
            return False, "Path is empty"
        if "\0" in path:
            return False, "Path contains null byte"
        if path.startswith("/") or (len(path) > 1 and path[1] == ":"):
            return False, "Path is absolute"
        # Normalize and check for traversal
        normalized = str(Path(path).as_posix())
        if ".." in path or normalized.startswith("../"):
            return False, "Path contains traversal sequences"
        return True, None

    def validate_project_paths(self):
        """Ensure project files exist and paths are safe."""

        root = self.registry_path.parent

        for project in self.projects:

            path = project.get("path")
            name = project.get("name", "<unknown>")

            if not path:
                continue

            safe, reason = self.validate_path_safety(path)
            if not safe:
                self.errors.append(
                    f"{name}: path '{path}' is unsafe ({reason})"
                )
                continue

            project_file = root / path

            if not project_file.exists():
                self.errors.append(
                    f"Registered project not found in repository: {path}"
                )

    def validate_repository_consistency(self):
        """Validate repository and registry consistency."""

        registry_dirs = self.get_registry_project_directories()
        discovered_dirs = self.discover_repository_projects()

        unregistered_projects = sorted(
            discovered_dirs - registry_dirs
        )

        self.unregistered_projects = unregistered_projects

        for project in self.unregistered_projects:
            self.errors.append(
                f"Project exists in repository but is missing from registry: {project}"
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

    def get_scan_directories(self):
        """Return repository roots that contain projects."""

        root = self.registry_path.parent

        return {
            directory.name
            for directory in root.iterdir()
            if directory.is_dir()
            and directory.name != "__pycache__"
            and not directory.name.startswith(".")
        }

    def get_registry_project_directories(self):
        """Return project directories defined in the registry."""

        registry_dirs = set()

        for project in self.projects:
            path = project.get("path")

            if not path:
                continue

            registry_dirs.add(
                Path(path).parent.as_posix()
            )

        return registry_dirs

    def discover_repository_projects(self):
        """Discover project directories from the repository."""

        root = self.registry_path.parent
        discovered_projects = set()

        for directory_name in self.get_scan_directories():
            directory = root / directory_name

            if (
                not directory.exists()
                or not directory.is_dir()
            ):
                continue

            # Standalone project (e.g. expression_parser)
            if directory_name == "expression_parser":
                if any(directory.glob("*.py")):
                    discovered_projects.add(
                        directory.relative_to(root).as_posix()
                    )
                continue

            # Category containing project folders
            for project_dir in directory.iterdir():
                if not project_dir.is_dir():
                    continue

                if project_dir.name == "__pycache__":
                    continue

                # Only consider directories that contain at least one
                # top-level Python file.
                if any(project_dir.glob("*.py")):
                    discovered_projects.add(
                        project_dir.relative_to(root).as_posix()
                    )

        return discovered_projects

    def validate(self):
        """Run all validation checks."""

        if not self.load_registry():
            self.validation_status = "ABORTED"
            return

        self.validate_required_fields()
        self.validate_categories()
        self.validate_difficulties()

        self.validate_duplicate_names()
        self.validate_duplicate_paths()
        self.validate_project_paths()
        self.validate_repository_consistency()
        self.validate_keywords()

        if self.errors:
            self.validation_status = "FAILED"
        else:
            self.validation_status = "PASSED"

    def report(self, json_output=False):
        if json_output:
            print(
                json.dumps(
                    {
                        "projects": len(self.projects),
                        "errors": len(self.errors),
                        "warnings": len(self.warnings),
                        "status": self.validation_status.lower(),
                        "repository_consistency": {
                            "unregistered_projects": self.unregistered_projects,
                        },
                    },
                    indent=2,
                )
            )
            return

        """Print validation summary."""

        print("\n========== Registry Validation ==========\n")

        print(f"Status           : {self.validation_status}")
        print(f"Registry         : {self.registry_path}")

        projects_scanned = (
            "N/A"
            if self.validation_status == "ABORTED"
            else len(self.projects)
        )

        print(f"Projects scanned : {projects_scanned}")
        print(f"Errors           : {len(self.errors)}")
        print(f"Warnings         : {len(self.warnings)}")

        if self.validation_status == "ABORTED":
            print(
                "\nValidation aborted because "
                "the registry could not be loaded."
            )

        if self.errors:
            print("\nErrors:")

            for error in self.errors:
                if error.startswith(
                    "Project exists in repository but is missing from registry:"
                ):
                    continue

                print(f"  - {error}")

        if self.unregistered_projects:
            print("\nRepository Consistency:")

            print("\n  Unregistered projects:")

            for project in self.unregistered_projects:
                print(f"    - {project}")

        if self.warnings:
            print("\nWarnings:")
            for warning in self.warnings:
                print(f"  - {warning}")

        if self.validation_status == "PASSED" and not self.warnings:
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