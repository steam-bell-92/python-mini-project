"""Tests for the Scientific Graphing Calculator's expression evaluator."""

import importlib.util
import os
from pathlib import Path

import pytest

np = pytest.importorskip("numpy")
pytest.importorskip("matplotlib")
os.environ.setdefault("MPLBACKEND", "Agg")

_SCRIPT = (
    Path(__file__).resolve().parent.parent
    / "math"
    / "Scientific-Graphing-Calculator"
    / "Scientific-Graphing-Calculator.py"
)


@pytest.fixture(scope="module")
def evaluate():
    spec = importlib.util.spec_from_file_location("scientific_graphing_calculator", _SCRIPT)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.evaluate_expression


@pytest.mark.parametrize(
    "expr, expected",
    [
        ("2 + 3 * 4", 14),
        ("(2 + 3) * 4", 20),
        ("-5 + 2", -3),
        ("2 ** 10", 1024),
        ("7 // 2", 3),
        ("7 % 4", 3),
        ("sqrt(16)", 4.0),
        ("abs(-3)", 3),
        ("round(2.567, 2)", 2.57),
        ("pi", pytest.approx(3.141592653589793)),
    ],
)
def test_scalar_expressions(evaluate, expr, expected):
    assert evaluate(expr) == expected


def test_array_expressions_for_graphing(evaluate):
    x = np.linspace(0, np.pi, 5)
    assert np.allclose(evaluate("sin(x)", x_val=x), np.sin(x))
    assert np.allclose(evaluate("2*x**2 + 1", x_val=x), 2 * x**2 + 1)
    assert np.allclose(evaluate("arctan(x) + pi", x_val=x), np.arctan(x) + np.pi)


@pytest.mark.parametrize(
    "expr",
    [
        # Regression: attribute access allowed a sandbox escape via the object graph.
        "().__class__.__bases__[0].__subclasses__().__len__()",
        "x.__class__",
        "(1).__class__",
        "__import__('os').system('echo pwned')",
        "open('/etc/passwd')",
        "save",  # numpy.save used to be reachable and can write files
        "sys.version",
        "lambda: 1",
        "[i for i in range(3)]",
        "'abc'",
        "True",
        "sin(x=1)",
        "1 +",
        "",
    ],
)
def test_malicious_or_invalid_expressions_are_rejected(evaluate, expr):
    with pytest.raises(ValueError, match="Invalid expression"):
        evaluate(expr, x_val=1.0)


def test_huge_exponent_is_rejected_instead_of_hanging(evaluate):
    with pytest.raises(ValueError, match="Invalid expression"):
        evaluate("9 ** 9 ** 9")


def test_division_by_zero_is_reported_as_invalid_expression(evaluate):
    with pytest.raises(ValueError, match="Invalid expression"):
        evaluate("1 / 0")
