import importlib.util

spec = importlib.util.spec_from_file_location(
    "happy_number",
    "math/Happy-Number/Happy-Number.py"
)

module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

print("Imported successfully!")