import importlib.util
import io
import os
from contextlib import redirect_stdout
from unittest.mock import patch


def _load_armstrong_module():
    file_path = os.path.join(
        os.path.dirname(__file__), "..",
        "math", "Armstrong-Number", "Armstrong-Number.py"
    )
    file_path = os.path.abspath(file_path)

    spec = importlib.util.spec_from_file_location("armstrong_number", file_path)
    module = importlib.util.module_from_spec(spec)

    with patch("builtins.input", side_effect=["0"]):
        with patch("builtins.print"):
            spec.loader.exec_module(module)

    return module


_mod = _load_armstrong_module()
ArmstrongChecker = _mod.ArmstrongChecker


class TestArmstrongNumber:
    def test_calculate_for_armstrong_number(self):
        checker = ArmstrongChecker(153)
        checker.calculate()
        assert checker.total == 153

    def test_calculate_for_non_armstrong_number(self):
        checker = ArmstrongChecker(154)
        checker.calculate()
        assert checker.total == 190

    def test_check_prints_armstrong_message(self):
        checker = ArmstrongChecker(153)
        buffer = io.StringIO()
        with redirect_stdout(buffer):
            checker.check()
        output = buffer.getvalue()
        assert "153 is an Armstrong Number!" in output

    def test_check_prints_non_armstrong_message(self):
        checker = ArmstrongChecker(154)
        buffer = io.StringIO()
        with redirect_stdout(buffer):
            checker.check()
        output = buffer.getvalue()
        assert "154 is NOT an Armstrong Number." in output
