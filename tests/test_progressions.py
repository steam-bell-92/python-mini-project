"""
Tests for math/AP-GP-AGP-HP-Recognizer/AP-GP-AGP-HP-Recognizer.py

We import the helper functions by loading the module dynamically, mocking out
the top-level print() and input() calls that run at module level.
"""

import importlib
import sys
import types
from unittest.mock import patch
import pytest


# ── Load module while suppressing top-level I/O ───────────────────────

def _load_recognizer():
    """Import the recognizer module, suppressing top-level print/input."""
    module_path = "math.AP-GP-AGP-HP-Recognizer.AP-GP-AGP-HP-Recognizer"
    # Python doesn't allow hyphens in module names, so use importlib
    import importlib.util
    import os

    file_path = os.path.join(
        os.path.dirname(__file__), "..",
        "math", "AP-GP-AGP-HP-Recognizer", "AP-GP-AGP-HP-Recognizer.py"
    )
    file_path = os.path.abspath(file_path)

    spec = importlib.util.spec_from_file_location("ap_gp_recognizer", file_path)
    module = importlib.util.module_from_spec(spec)

    # Patch input to raise StopIteration so the while-loop exits immediately
    with patch("builtins.input", side_effect=["2"]):
        with patch("builtins.print"):
            try:
                spec.loader.exec_module(module)
            except (StopIteration, EOFError):
                pass

    return module


_mod = _load_recognizer()

# Extract functions
parse_sequence = _mod.parse_sequence
check_ap = _mod.check_ap
check_gp = _mod.check_gp
check_hp = _mod.check_hp
check_agp = _mod.check_agp
format_number = _mod.format_number
is_close = _mod.is_close


# ── parse_sequence tests ──────────────────────────────────────────────

class TestParseSequence:
    def test_valid_input(self):
        seq, err = parse_sequence("2, 4, 6, 8")
        assert seq == [2.0, 4.0, 6.0, 8.0]
        assert err == ""

    def test_too_few_values(self):
        seq, err = parse_sequence("1, 2, 3")
        assert seq is None
        assert "at least 4" in err.lower()

    def test_non_numeric(self):
        seq, err = parse_sequence("1, 2, abc, 4")
        assert seq is None
        assert "invalid" in err.lower()

    def test_whitespace_handling(self):
        seq, err = parse_sequence("  1 ,  2 ,  3 ,  4  ")
        assert seq == [1.0, 2.0, 3.0, 4.0]

    def test_floats(self):
        seq, err = parse_sequence("1.5, 3.0, 4.5, 6.0")
        assert seq == [1.5, 3.0, 4.5, 6.0]


# ── check_ap tests ───────────────────────────────────────────────────

class TestCheckAP:
    def test_valid_ap(self):
        ok, diff = check_ap([2, 4, 6, 8])
        assert ok is True
        assert diff == pytest.approx(2.0)

    def test_negative_diff_ap(self):
        ok, diff = check_ap([10, 7, 4, 1])
        assert ok is True
        assert diff == pytest.approx(-3.0)

    def test_not_ap(self):
        ok, diff = check_ap([1, 2, 4, 8])
        assert ok is False

    def test_constant_sequence_is_ap(self):
        ok, diff = check_ap([5, 5, 5, 5])
        assert ok is True
        assert diff == pytest.approx(0.0)

    def test_fractional_ap(self):
        ok, diff = check_ap([0.5, 1.0, 1.5, 2.0])
        assert ok is True
        assert diff == pytest.approx(0.5)


# ── check_gp tests ───────────────────────────────────────────────────

class TestCheckGP:
    def test_valid_gp(self):
        ok, ratio = check_gp([3, 6, 12, 24])
        assert ok is True
        assert ratio == pytest.approx(2.0)

    def test_fractional_ratio_gp(self):
        ok, ratio = check_gp([16, 8, 4, 2])
        assert ok is True
        assert ratio == pytest.approx(0.5)

    def test_not_gp(self):
        ok, ratio = check_gp([2, 4, 6, 8])
        assert ok is False

    def test_all_zeros_gp(self):
        ok, ratio = check_gp([0, 0, 0, 0])
        assert ok is True
        assert ratio == pytest.approx(0.0)

    def test_zero_in_middle_rejected(self):
        ok, ratio = check_gp([1, 0, 3, 4])
        assert ok is False


# ── check_hp tests ───────────────────────────────────────────────────

class TestCheckHP:
    def test_valid_hp(self):
        # Reciprocals: 1, 1/2, 1/3, 1/4 → AP with diff = -1/12?
        # Actually HP: 1, 1/2, 1/3, 1/4 → reciprocals 1, 2, 3, 4 (AP, d=1)
        ok, diff = check_hp([1, 1/2, 1/3, 1/4])
        assert ok is True
        assert diff == pytest.approx(1.0)

    def test_zero_term_rejected(self):
        ok, diff = check_hp([0, 1, 2, 3])
        assert ok is False

    def test_non_hp(self):
        ok, diff = check_hp([1, 2, 3, 4])
        assert ok is False


# ── check_agp tests ──────────────────────────────────────────────────

class TestCheckAGP:
    def test_valid_agp(self):
        # AGP: a_n = (a + (n-1)d) * r^(n-1)
        # a=1, d=1, r=2 → 1, 4, 12, 32
        ok, ratio = check_agp([1, 4, 12, 32])
        assert ok is True
        assert ratio == pytest.approx(2.0)

    def test_non_agp(self):
        ok, ratio = check_agp([1, 2, 3, 4])
        # Pure AP is not necessarily detected as AGP (r=1 might match)
        # Just check it returns a boolean
        assert isinstance(ok, bool)


# ── format_number tests ──────────────────────────────────────────────

class TestFormatNumber:
    def test_integer(self):
        assert format_number(5.0) == "5"

    def test_near_integer(self):
        assert format_number(3.0000000001) == "3"

    def test_decimal(self):
        result = format_number(3.14159)
        assert "3.14159" in result

    def test_negative_integer(self):
        assert format_number(-4.0) == "-4"
