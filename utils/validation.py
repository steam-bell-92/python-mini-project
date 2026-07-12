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
                    if min_value is not None and default < min_value:
                        print(f"❌ Default {default} is below minimum {min_value}.")
                        continue
                    if max_value is not None and default > max_value:
                        print(f"❌ Default {default} is above maximum {max_value}.")
                        continue
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
                    if min_value is not None and default < min_value:
                        print(f"❌ Default {default} is below minimum {min_value}.")
                        continue
                    if max_value is not None and default > max_value:
                        print(f"❌ Default {default} is above maximum {max_value}.")
                        continue
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