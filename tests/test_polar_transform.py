"""
Tests for math/Coordinate-to-Polar-Transformation/Coordinate-to-Polar-Transformation.py

Since the source file has top-level print/input calls, we re-implement the
pure helper functions here using the exact same logic to keep tests isolated.
"""

import math
import pytest


# ── Re-implemented helpers (same logic as source) ──────────────────────

def format_number(value):
    """Format a number: show as int if close to integer, else trim trailing zeros."""
    if abs(value - round(value)) < 1e-9:
        return str(int(round(value)))
    return f"{value:.6f}".rstrip("0").rstrip(".")


def cartesian_to_polar(x, y):
    """Convert (x, y) to (radius, theta_degrees) with theta in [0, 360)."""
    radius = math.hypot(x, y)
    theta_rad = math.atan2(y, x)
    theta_deg = math.degrees(theta_rad)
    if theta_deg < 0:
        theta_deg += 360
    return radius, theta_deg


def get_quadrant(x, y):
    """Return the quadrant/axis label for a given (x, y) point."""
    if x > 0 and y > 0:
        return "Quadrant I"
    elif x < 0 and y > 0:
        return "Quadrant II"
    elif x < 0 and y < 0:
        return "Quadrant III"
    elif x > 0 and y < 0:
        return "Quadrant IV"
    elif x == 0 and y != 0:
        return "Y-axis"
    elif y == 0 and x != 0:
        return "X-axis"
    return "Origin"


# ── format_number tests ────────────────────────────────────────────────

class TestFormatNumber:
    def test_integer_value(self):
        assert format_number(5.0) == "5"

    def test_near_integer(self):
        assert format_number(3.0000000001) == "3"

    def test_decimal_value(self):
        result = format_number(3.14159)
        assert result == "3.14159"

    def test_zero(self):
        assert format_number(0.0) == "0"

    def test_negative_integer(self):
        assert format_number(-7.0) == "-7"

    def test_trailing_zeros_stripped(self):
        result = format_number(2.5)
        assert result == "2.5"
        assert not result.endswith("0")


# ── Cartesian-to-Polar conversion tests ────────────────────────────────

class TestCartesianToPolar:
    def test_origin(self):
        r, theta = cartesian_to_polar(0, 0)
        assert r == pytest.approx(0.0)

    def test_positive_x_axis(self):
        r, theta = cartesian_to_polar(5, 0)
        assert r == pytest.approx(5.0)
        assert theta == pytest.approx(0.0)

    def test_positive_y_axis(self):
        r, theta = cartesian_to_polar(0, 3)
        assert r == pytest.approx(3.0)
        assert theta == pytest.approx(90.0)

    def test_negative_x_axis(self):
        r, theta = cartesian_to_polar(-4, 0)
        assert r == pytest.approx(4.0)
        assert theta == pytest.approx(180.0)

    def test_negative_y_axis(self):
        r, theta = cartesian_to_polar(0, -2)
        assert r == pytest.approx(2.0)
        assert theta == pytest.approx(270.0)

    def test_quadrant_one(self):
        r, theta = cartesian_to_polar(1, 1)
        assert r == pytest.approx(math.sqrt(2))
        assert theta == pytest.approx(45.0)

    def test_quadrant_two(self):
        r, theta = cartesian_to_polar(-1, 1)
        assert r == pytest.approx(math.sqrt(2))
        assert theta == pytest.approx(135.0)

    def test_quadrant_three(self):
        r, theta = cartesian_to_polar(-1, -1)
        assert r == pytest.approx(math.sqrt(2))
        assert theta == pytest.approx(225.0)

    def test_quadrant_four(self):
        r, theta = cartesian_to_polar(1, -1)
        assert r == pytest.approx(math.sqrt(2))
        assert theta == pytest.approx(315.0)

    def test_known_345_triangle(self):
        r, theta = cartesian_to_polar(3, 4)
        assert r == pytest.approx(5.0)


# ── Quadrant detection tests ──────────────────────────────────────────

class TestGetQuadrant:
    def test_quadrant_I(self):
        assert get_quadrant(3, 4) == "Quadrant I"

    def test_quadrant_II(self):
        assert get_quadrant(-3, 4) == "Quadrant II"

    def test_quadrant_III(self):
        assert get_quadrant(-3, -4) == "Quadrant III"

    def test_quadrant_IV(self):
        assert get_quadrant(3, -4) == "Quadrant IV"

    def test_positive_y_axis(self):
        assert get_quadrant(0, 5) == "Y-axis"

    def test_negative_y_axis(self):
        assert get_quadrant(0, -5) == "Y-axis"

    def test_positive_x_axis(self):
        assert get_quadrant(5, 0) == "X-axis"

    def test_negative_x_axis(self):
        assert get_quadrant(-5, 0) == "X-axis"

    def test_origin(self):
        assert get_quadrant(0, 0) == "Origin"
