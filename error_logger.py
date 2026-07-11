from __future__ import annotations

import json
import traceback
from collections import Counter
from collections.abc import Callable
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, TypeVar

T = TypeVar("T")

DEFAULT_LOG_PATH = Path(__file__).resolve().parent / "logs" / "error-logs.jsonl"


def _ensure_log_path(log_path: str | Path | None) -> Path:
    path = Path(log_path) if log_path is not None else DEFAULT_LOG_PATH
    path.parent.mkdir(parents=True, exist_ok=True)
    return path


def log_exception(
    project_name: str,
    exception: Exception,
    log_path: str | Path | None = None,
    additional_data: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Write a structured exception entry to a JSON Lines log file."""
    path = _ensure_log_path(log_path)
    payload = {
        "project_name": project_name,
        "exception_type": type(exception).__name__,
        "error_message": str(exception),
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "traceback": "".join(traceback.format_exception(type(exception), exception, exception.__traceback__)),
    }

    if additional_data:
        payload["additional_data"] = additional_data

    with path.open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(payload, ensure_ascii=False) + "\n")

    return payload


def summarize_logs(log_path: str | Path | None = None) -> dict[str, Any]:
    """Return a compact summary of the stored error logs."""
    path = _ensure_log_path(log_path)
    if not path.exists():
        return {
            "total_errors": 0,
            "exception_counts": {},
            "project_counts": {},
            "latest_errors": [],
        }

    exception_counts: Counter[str] = Counter()
    project_counts: Counter[str] = Counter()
    latest_errors: list[dict[str, Any]] = []

    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            payload = json.loads(line)
            exception_counts[payload["exception_type"]] += 1
            project_counts[payload["project_name"]] += 1
            latest_errors.append(payload)

    return {
        "total_errors": sum(exception_counts.values()),
        "exception_counts": dict(exception_counts),
        "project_counts": dict(project_counts),
        "latest_errors": latest_errors[-5:],
    }


def get_recent_errors(
    limit: int = 50,
    log_path: str | Path | None = None,
) -> list[dict[str, Any]]:
    """Return the most recent error entries."""
    path = _ensure_log_path(log_path)
    if not path.exists():
        return []

    errors: list[dict[str, Any]] = []
    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            errors.append(json.loads(line))

    return errors[-limit:]


def clear_logs(log_path: str | Path | None = None) -> bool:
    """Clear all error logs. Returns True if logs were cleared."""
    path = _ensure_log_path(log_path)
    if path.exists():
        path.unlink()
        return True
    return False


def safe_run(
    project_name: str,
    action: Callable[[], T],
    log_path: str | Path | None = None,
) -> T:
    """Run an action while logging any unexpected exceptions."""
    try:
        return action()
    except Exception as exc:  # pylint: disable=broad-except
        log_exception(project_name, exc, log_path=log_path)
        raise
