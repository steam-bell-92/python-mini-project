# Games Folder

This folder contains beginner-friendly Python mini games. Each game is self-contained in its own subfolder and can be run directly from the terminal.

## Projects in `games/`

- 2048-Game
- Brick-Breaker
- Dots-Boxes-AI
- Emoji-Memory-Game
- FLAMES-Game
- Flipping-Toss
- Hangman-Game
- Number-Guessing-Game
- Number-Sliding-Puzzle
- Password-Forge
- Reverse-Hangman-Game
- Rock-Paper-Scissor
- Rolling-Dice
- Simon-Says
- Snake-Game
- Tic-Tac-Toe
- Whack-a-Mole
- Word-Scramble-Game

## How to Set Up and Run Any Game Project

Follow these steps to run any project in the `games` folder. These instructions are designed for beginners and assume no prior experience with Python projects.

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

Use the `cd` command to change directories. For example, to go to the Number-Guessing-Game project:

```bash
cd path/to/your/python-mini-project/games/Number-Guessing-Game
```
Replace `path/to/your/python-mini-project` with the actual path where you downloaded or cloned the repository.

### 4. (Optional) Install Project Dependencies

Most game projects use only the Python standard library and do not require extra packages. If a project folder contains a `requirements.txt` file, install dependencies with:

```bash
pip install -r requirements.txt
# or
pip3 install -r requirements.txt
```
If you get a 'pip not found' error, try `python -m pip install -r requirements.txt` instead.

### 5. Run the Project

Start the project by running its main Python file. For example:

```bash
python Number-Guessing-Game.py
# or
python3 Number-Guessing-Game.py
```
If you get an error about 'python' not being found, try 'python3'.

### 6. Read Project-Specific Instructions

Some projects may include a README file or comments at the top of the code. Always check for these files in the project folder for details on how to play the game, what input it expects, and what output it produces.

### 7. Troubleshooting

- If you see an error about missing modules, double-check step 4.
- If you see a 'Permission denied' error, make sure you have permission to access the folder and files.
- If you are stuck, open an issue on the repository or ask for help in the project's discussion area.

## Best Practices for Contributors

- Keep each game in its own folder.
- Follow naming style: `Category/Project-Name/Project-Name.py`.
- Keep code simple, procedural (no classes), and beginner-friendly.
- Use clear prompts and feedback for user interaction.
- Add comments for clarity and to explain non-obvious code sections.
- Avoid adding unnecessary dependencies. If dependencies are required, always include a `requirements.txt` file and update instructions.
- Use clear, descriptive variable and file names.
- Test your project on Windows, Mac, and Linux if possible.

---

Credit: Project by [steam-bell-92](https://github.com/steam-bell-92) and contributors
