import os
from main import scan_projects, get_docstring_from_file

def test_scan_projects():
    """Verify that scan_projects scans and retrieves the projects in the repository."""
    projects = scan_projects()
    assert isinstance(projects, list)
    assert len(projects) > 0
    
    # Check that keys are correctly populated
    first_project = projects[0]
    assert "name" in first_project
    assert "emoji" in first_project
    assert "category" in first_project
    assert "difficulty" in first_project
    assert "description" in first_project
    assert "path" in first_project
    assert os.path.exists(first_project["path"])

def test_get_docstring_from_file():
    """Test get_docstring_from_file helper on a file."""
    # Write a temporary python file
    temp_file = "temp_test_docstring.py"
    try:
        with open(temp_file, "w", encoding="utf-8") as f:
            f.write('"""\nTest Docstring\n"""\npass\n')
        doc = get_docstring_from_file(temp_file)
        assert doc.strip() == "Test Docstring"
    finally:
        if os.path.exists(temp_file):
            os.remove(temp_file)
