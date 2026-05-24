import importlib.util
import io
import os
from contextlib import redirect_stdout
from unittest.mock import patch


def _load_converter_module():
    file_path = os.path.join(
        os.path.dirname(__file__), "..",
        "utilities", "Number-System-Converter", "Number-System-Converter.py"
    )
    file_path = os.path.abspath(file_path)

    spec = importlib.util.spec_from_file_location("number_system_converter", file_path)
    module = importlib.util.module_from_spec(spec)

    with patch("builtins.input", side_effect=["5"]):
        with patch("builtins.print"):
            spec.loader.exec_module(module)

    return module


_mod = _load_converter_module()


def _capture_output(func, *args):
    buffer = io.StringIO()
    with redirect_stdout(buffer):
        func(*args)
    return buffer.getvalue()


class TestNumberSystemConverter:
    def test_decimal_to_others(self):
        output = _capture_output(_mod.decimal_to_others, "10")
        assert "Binary (Base 2) : 1010" in output
        assert "Octal (Base 8)" in output
        assert "Hex (Base 16)" in output

    def test_binary_to_others(self):
        output = _capture_output(_mod.binary_to_others, "1010")
        assert "Decimal (Base 10) : 10" in output
        assert "Octal (Base 8)" in output
        assert "Hex (Base 16)" in output

    def test_octal_to_others(self):
        output = _capture_output(_mod.octal_to_others, "17")
        assert "Decimal (Base 10) : 15" in output
        assert "Binary (Base 2)" in output
        assert "Hex (Base 16)" in output

    def test_hex_to_others(self):
        output = _capture_output(_mod.hex_to_others, "1a")
        assert "Conversions for Hexadecimal: 1A" in output
        assert "Decimal (Base 10) : 26" in output
        assert "Binary (Base 2)" in output

    def test_invalid_input_is_handled(self):
        output = _capture_output(_mod.decimal_to_others, "not-a-number")
        assert "Invalid input! Please enter a valid decimal integer." in output