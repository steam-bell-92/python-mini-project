# 🔢 Number System Converter

A beginner-friendly command-line utility for converting between decimal,
binary, octal, and hexadecimal numbers.

## Requirements

- Python 3.10 or newer
- No external libraries

## Run

From the repository root:

```bash
python utilities/Number-System-Converter/Number-System-Converter.py
```

You can also run it from the project directory:

```bash
cd utilities/Number-System-Converter
python Number-System-Converter.py
```

## Public API

The module exposes `main()`. It returns `None`, prints prompts and conversion
results to standard output, and reads menu choices and values from standard
input. Running the file directly calls `main()` automatically.

Because the filename contains hyphens, use `importlib` rather than a normal
Python import statement:

```python
import importlib.util
from pathlib import Path

path = Path("utilities/Number-System-Converter/Number-System-Converter.py")
spec = importlib.util.spec_from_file_location("number_system_converter", path)

if spec is None or spec.loader is None:
    raise RuntimeError("Unable to load Number-System-Converter.py")

module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
module.main()
```

In normal use, `main()` is interactive and does not accept a numeric argument.
