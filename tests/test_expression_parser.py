import pytest
import math
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from expression_parser import (
    evaluate_expression, Tokenizer, Parser, Evaluator,
    TokenType, TokenizerError, ParseError, EvaluationError
)


def test_tokenizer_basic():
    tok = Tokenizer("2 + 3 * 4")
    tokens = tok.tokenize()
    types = [t.type for t in tokens]
    assert types == [
        TokenType.NUMBER, TokenType.PLUS, TokenType.NUMBER,
        TokenType.MULTIPLY, TokenType.NUMBER, TokenType.EOF
    ]


def test_implicit_multiplication():
    assert evaluate_expression("2(3 + 4)") == 14.0
    assert evaluate_expression("3pi") == pytest.approx(3 * math.pi)


def test_arithmetic_operations():
    assert evaluate_expression("1 + 2 + 3") == 6
    assert evaluate_expression("10 - 4 - 2") == 4
    assert evaluate_expression("2 + 3 * 4") == 14
    assert evaluate_expression("(2 + 3) * 4") == 20
    assert evaluate_expression("2 ^ 3 ^ 2") == 512  # Right associative
    assert evaluate_expression("10 % 4") == 2


def test_unary_operators():
    assert evaluate_expression("-5 + 3") == -2
    assert evaluate_expression("-(3 + 4)") == -7
    assert evaluate_expression("+5") == 5


def test_functions_and_constants():
    assert evaluate_expression("sin(pi / 2)") == pytest.approx(1.0)
    assert evaluate_expression("cos(0)") == pytest.approx(1.0)
    assert evaluate_expression("sqrt(16)") == 4.0
    assert evaluate_expression("abs(-42)") == 42
    assert evaluate_expression("max(1, 5, 2)") == 5
    assert evaluate_expression("min(1, 5, 2)") == 1


def test_variables():
    vars_dict = {"x": 10, "y": 3}
    assert evaluate_expression("x + y * 2", vars_dict) == 16
    assert evaluate_expression("x^2 - y", vars_dict) == 97


def test_error_handling():
    with pytest.raises(TokenizerError):
        evaluate_expression("2 @ 3")

    with pytest.raises(ParseError):
        evaluate_expression("2 +")

    with pytest.raises(ParseError):
        evaluate_expression("(2 + 3")

    with pytest.raises(EvaluationError, match="Division by zero"):
        evaluate_expression("10 / 0")

    with pytest.raises(EvaluationError, match="Undefined variable"):
        evaluate_expression("unknown_var + 1")
