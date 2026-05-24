# Utilities Folder

This folder contains practical Python mini-tools and utility-based projects such as converters, analyzers, and productivity helpers. Each project is in its own subfolder and can be run directly from the terminal.

## Projects in `utilities/`

- AI-Resume-Analyzer
- Caesar-Cipher
- Fake-News-Headline-Generator
- Number-System-Converter
- Productivity-Pet
- Text-to-Morse
- Tower-of-Hanoi
- Typing-Speed-Tester
- F1-Performance-Analyzer

## How to Set Up and Run Any Utility Project

Follow these steps to run any project in the `utilities` folder. These instructions are designed for beginners and assume no prior experience with Python projects.

### 1. Install Python (if not already installed)

You need Python 3.10 or higher. Download it from the official website: https://www.python.org/downloads/

After installing, check your version:

```bash
python --version
# or
python3 --version
```
If you see a version number like `Python 3.10.0` or higher, you are ready.

### 2. Open a Terminal or Command Prompt

On Windows: Press `Win + R`, type `cmd`, and press Enter.
On Mac: Open the Terminal app from Applications > Utilities.
On Linux: Open your preferred terminal emulator.

### 3. Navigate to the Project Folder

Use the `cd` command to change directories. For example, to go to the Number-System-Converter project:

```bash
cd path/to/your/python-mini-project/utilities/Number-System-Converter
```
Replace `path/to/your/python-mini-project` with the actual path where you downloaded or cloned the repository.

### 4. (Optional) Install Project Dependencies

Some projects may have a `requirements.txt` file listing extra packages. If you see this file in the project folder, run:

```bash
pip install -r requirements.txt
# or
pip3 install -r requirements.txt
```
If you get a 'pip not found' error, try `python -m pip install -r requirements.txt` instead.
Most projects in this folder do NOT require extra packages and will work with just Python.

### 5. Run the Project

Start the project by running its main Python file. For example:

```bash
python Number-System-Converter.py
# or
python3 Number-System-Converter.py
```
If you get an error about 'python' not being found, try 'python3'.

### 6. Read Project-Specific Instructions

Some projects may include a README file, example input files, or other documentation. Always check for these files in the project folder for details on how to use the tool, what input it expects, and what output it produces.

### 7. Troubleshooting

- If you see an error about missing modules, double-check step 4.
- If you see a 'Permission denied' error, make sure you have permission to access the folder and files.
- If you are stuck, open an issue on the repository or ask for help in the project's discussion area.

## Best Practices for Contributors

- Keep utilities simple, focused, and easy to run for beginners.
- Clearly mention any required input format or special instructions in the project-level documentation (README or comments).
- Avoid adding unnecessary dependencies. If dependencies are required, always include a `requirements.txt` file and update instructions.
- Use clear, descriptive variable and file names.
- Add comments to explain non-obvious code sections.
- Test your project on Windows, Mac, and Linux if possible.

---

Credit: Project by [steam-bell-92](https://github.com/steam-bell-92) and contributors
