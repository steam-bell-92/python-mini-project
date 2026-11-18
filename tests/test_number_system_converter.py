import importlib.util
import json
import os
from pathlib import Path

import pytest


MODULE_PATH = (
    Path(__file__).resolve().parents[1]
    / "utilities"
    / "Number-System-Converter"
    / "Number-System-Converter.py"
)
SPEC = importlib.util.spec_from_file_location("number_system_converter", MODULE_PATH)

if SPEC is None or SPEC.loader is None:
    raise RuntimeError(f"Unable to load converter module at {MODULE_PATH}")

CONVERTER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(CONVERTER)


def record_case(name, inputs, expected, actual):
    results_path = os.environ.get("R26_T027_CASE_RESULTS")
    if results_path is not None:
        with Path(results_path).open("a", encoding="utf-8") as results_file:
            results_file.write(
                json.dumps(
                    {
                        "check": name,
                        "inputs": inputs,
                        "expected": expected,
                        "actual": actual,
                    }
                )
                + "\n"
            )


@pytest.mark.parametrize(
    ("choice", "value", "expected"),
    [
        ("1", "42", ("101010", "52", "2A")),
        ("2", "101010", ("42", "52", "2A")),
        ("3", "52", ("42", "101010", "2A")),
        ("4", "2a", ("42", "101010", "52")),
    ],
)
def test_main_converts_each_supported_base(
    monkeypatch, capsys, choice, value, expected
):
    responses = iter((choice, value, "5"))
    monkeypatch.setattr("builtins.input", lambda _prompt="": next(responses))

    result = CONVERTER.main()

    output = capsys.readouterr().out
    expected_result = {
        "return": None,
        "output_contains": [*expected, "Goodbye!"],
    }
    actual_result = {
        "return": result,
        "output_contains": [
            text for text in expected_result["output_contains"] if text in output
        ],
        "output": output,
    }
    record_case(
        "test_main_converts_each_supported_base",
        {"choice": choice, "value": value, "exit_choice": "5"},
        expected_result,
        actual_result,
    )
    assert result is None
    assert all(value in output for value in expected)
    assert "Goodbye!" in output


def test_main_reports_invalid_choice_and_number(monkeypatch, capsys):
    responses = iter(("9", "1", "not-a-number", "5"))
    monkeypatch.setattr("builtins.input", lambda _prompt="": next(responses))

    CONVERTER.main()

    output = capsys.readouterr().out
    expected = {
        "output_contains": ["Invalid choice!", "valid decimal integer"],
    }
    actual = {
        "output_contains": [
            text for text in expected["output_contains"] if text in output
        ],
        "output": output,
    }
    record_case(
        "test_main_reports_invalid_choice_and_number",
        {"choices_and_values": ["9", "1", "not-a-number", "5"]},
        expected,
        actual,
    )
    assert "Invalid choice!" in output
    assert "valid decimal integer" in output
