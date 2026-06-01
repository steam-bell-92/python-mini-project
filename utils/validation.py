from typing import List, Optional

def get_int(
    prompt: str,
    min_value: Optional[int] = None,
    max_value: Optional[int] = None,
    default: Optional[int] = None,
    error_empty: str = "❌ Error: Input cannot be empty.",
    error_invalid: str = "❌ Invalid input. Please enter a valid integer.",
) -> int:
    while True:
        try:
            val_str = input(prompt).strip()
            if not val_str:
                if default is not None:
                    return default
                print(error_empty)
                continue
            val = int(val_str)
            if min_value is not None and val < min_value:
                print(f"❌ Please enter a number greater than or equal to {min_value}.")
                continue
            if max_value is not None and val > max_value:
                print(f"❌ Please enter a number less than or equal to {max_value}.")
                continue
            return val
        except ValueError:
            print(error_invalid)

def get_float(
    prompt: str,
    min_value: Optional[float] = None,
    max_value: Optional[float] = None,
    default: Optional[float] = None,
    error_empty: str = "❌ Error: Input cannot be empty.",
    error_invalid: str = "❌ Invalid input. Please enter a valid number.",
) -> float:
    while True:
        try:
            val_str = input(prompt).strip()
            if not val_str:
                if default is not None:
                    return default
                print(error_empty)
                continue
            val = float(val_str)
            if min_value is not None and val < min_value:
                print(f"❌ Please enter a number greater than or equal to {min_value}.")
                continue
            if max_value is not None and val > max_value:
                print(f"❌ Please enter a number less than or equal to {max_value}.")
                continue
            return val
        except ValueError:
            print(error_invalid)

def get_non_empty_string(
    prompt: str,
    default: Optional[str] = None,
    error_empty: str = "❌ Error: Input cannot be empty.",
) -> str:
    while True:
        val_str = input(prompt).strip()
        if not val_str:
            if default is not None:
                return default
            print(error_empty)
            continue
        return val_str

def get_choice(
    prompt: str,
    choices: List[str],
    default: Optional[str] = None,
    error_empty: str = "❌ Error: Input cannot be empty.",
    error_invalid: Optional[str] = None,
) -> str:
    choices_lower = [c.lower() for c in choices]
    while True:
        val_str = input(prompt).strip()
        if not val_str:
            if default is not None:
                return default
            print(error_empty)
            continue
        if val_str.lower() in choices_lower:
            idx = choices_lower.index(val_str.lower())
            return choices[idx]
        if error_invalid is not None:
            print(error_invalid)
        else:
            print(f"❌ Invalid selection. Please choose from: {', '.join(choices)}")

def get_yes_no(prompt: str, default: Optional[str] = None) -> bool:
    while True:
        val_str = input(prompt).strip().lower()
        if not val_str:
            if default is not None:
                return default.lower() in ['y', 'yes']
            print("❌ Error: Input cannot be empty. Please enter 'y' or 'n'.")
            continue
        if val_str in ['y', 'yes']:
            return True
        if val_str in ['n', 'no']:
            return False
        print("❌ Invalid choice. Please enter 'y' or 'n'.")

def get_int_list(
    prompt: str,
    min_len: Optional[int] = None,
    max_len: Optional[int] = None,
    error_empty: str = "❌ Error: Input cannot be empty.",
    error_invalid: str = "❌ Error: Please enter valid integers only.",
) -> List[int]:
    while True:
        val_str = input(prompt).strip()
        if not val_str:
            print(error_empty)
            continue
        try:
            val_list = [int(x) for x in val_str.split()]
            if min_len is not None and len(val_list) < min_len:
                print(f"❌ Error: Please enter at least {min_len} numbers.")
                continue
            if max_len is not None and len(val_list) > max_len:
                print(f"❌ Error: Please enter at most {max_len} numbers.")
                continue
            return val_list
        except ValueError:
            print(error_invalid)

def get_float_list(
    prompt: str,
    min_len: Optional[int] = None,
    max_len: Optional[int] = None,
    error_empty: str = "❌ Error: Input cannot be empty.",
    error_invalid: str = "❌ Error: Please enter valid numbers only.",
) -> List[float]:
    while True:
        val_str = input(prompt).strip()
        if not val_str:
            print(error_empty)
            continue
        try:
            val_list = [float(x) for x in val_str.split()]
            if min_len is not None and len(val_list) < min_len:
                print(f"❌ Error: Please enter at least {min_len} numbers.")
                continue
            if max_len is not None and len(val_list) > max_len:
                print(f"❌ Error: Please enter at most {max_len} numbers.")
                continue
            return val_list
        except ValueError:
            print(error_invalid)
