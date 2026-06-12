import py_compile
import sys
import os
from pathlib import Path
import importlib.util
import pytest


class TestPythonSyntax:
    """Validate syntax of all Python example files."""

    def get_all_python_files(self):
        """Find all Python files in projects directories."""
        root = Path(__file__).parent.parent
        python_files = []

        for directory in ["games", "math", "utilities"]:
            dir_path = root / directory
            if dir_path.exists():
                python_files.extend(dir_path.rglob("*.py"))

        return sorted(python_files)

    def test_all_python_files_have_valid_syntax(self):
        """All Python example files must have valid syntax."""
        python_files = self.get_all_python_files()
        assert len(python_files) > 0, "No Python files found in projects"

        invalid_files = []
        for file_path in python_files:
            try:
                py_compile.compile(str(file_path), doraise=True)
            except py_compile.PyCompileError as e:
                invalid_files.append((str(file_path), str(e)))

        assert (
            len(invalid_files) == 0
        ), f"Syntax errors found in files:\n" + "\n".join(
            f"  {f}: {e}" for f, e in invalid_files
        )

    def test_no_broken_imports(self):
        """All Python example files must have importable modules."""
        root = Path(__file__).parent.parent
        sys.path.insert(0, str(root))

        python_files = self.get_all_python_files()
        problematic_imports = []

        for file_path in python_files:
            file_name = file_path.stem

            spec = importlib.util.spec_from_file_location(
                file_name, str(file_path)
            )
            module = importlib.util.module_from_spec(spec)

            try:
                spec.loader.exec_module(module)
            except ModuleNotFoundError as e:
                problematic_imports.append(
                    (str(file_path), f"Missing module: {e.name}")
                )
            except ImportError as e:
                problematic_imports.append(
                    (str(file_path), f"Import error: {str(e)}")
                )
            except Exception as e:
                pass

        assert (
            len(problematic_imports) == 0
        ), (
            f"Import errors found:\n"
            + "\n".join(f"  {f}: {e}" for f, e in problematic_imports)
        )


class TestExampleStructure:
    """Validate structure and documentation of example files."""

    def test_project_files_exist(self):
        """Ensure main project files exist in each project directory."""
        root = Path(__file__).parent.parent

        for category in ["games", "math", "utilities"]:
            category_path = root / category
            if category_path.exists():
                project_dirs = [
                    d for d in category_path.iterdir() if d.is_dir()
                ]
                assert (
                    len(project_dirs) > 0
                ), f"No project directories in {category}"

    def test_no_empty_python_files(self):
        """Python files should not be empty."""
        root = Path(__file__).parent.parent
        python_files = []

        for directory in ["games", "math", "utilities"]:
            dir_path = root / directory
            if dir_path.exists():
                python_files.extend(dir_path.rglob("*.py"))

        empty_files = [f for f in python_files if f.stat().st_size == 0]
        assert (
            len(empty_files) == 0
        ), f"Empty Python files found: {empty_files}"


class TestImportsAvailable:
    """Test that standard library imports work in examples."""

    def test_common_imports(self):
        """Verify common imports used in projects are available."""
        common_modules = [
            "random",
            "math",
            "string",
            "time",
            "sys",
            "os",
            "json",
            "itertools",
            "collections",
        ]

        missing_modules = []
        for module_name in common_modules:
            try:
                __import__(module_name)
            except ImportError:
                missing_modules.append(module_name)

        assert (
            len(missing_modules) == 0
        ), f"Missing standard library modules: {missing_modules}"
