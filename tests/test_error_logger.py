import json
import tempfile
import unittest
from pathlib import Path

import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from error_logger import log_exception, summarize_logs


class ErrorLoggerTests(unittest.TestCase):
    def test_log_exception_writes_structured_entry(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            log_path = Path(tmpdir) / "error-logs.jsonl"
            log_exception(
                project_name="Sample Project",
                exception=ValueError("broken input"),
                log_path=log_path,
            )

            self.assertTrue(log_path.exists())
            with log_path.open("r", encoding="utf-8") as handle:
                payload = json.loads(handle.read().strip())

            self.assertEqual(payload["project_name"], "Sample Project")
            self.assertEqual(payload["exception_type"], "ValueError")
            self.assertIn("broken input", payload["error_message"])
            self.assertIn("timestamp", payload)
            self.assertIn("traceback", payload)

    def test_summarize_logs_counts_by_exception(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            log_path = Path(tmpdir) / "error-logs.jsonl"
            log_exception("Project A", FileNotFoundError("missing file"), log_path=log_path)
            log_exception("Project B", FileNotFoundError("missing file"), log_path=log_path)
            log_exception("Project B", IndexError("bad index"), log_path=log_path)

            summary = summarize_logs(log_path)

            self.assertEqual(summary["total_errors"], 3)
            self.assertEqual(summary["exception_counts"]["FileNotFoundError"], 2)
            self.assertEqual(summary["project_counts"]["Project B"], 2)
            self.assertEqual(summary["project_counts"]["Project A"], 1)

    def test_log_exception_closes_file_descriptors(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            log_path = Path(tmpdir) / "error-logs.jsonl"
            log_exception("Project FD Test", RuntimeError("fd test"), log_path=log_path)
            
            # Verify file can be renamed/deleted without WinError 32 permission lock
            renamed_path = Path(tmpdir) / "renamed-logs.jsonl"
            log_path.rename(renamed_path)
            self.assertTrue(renamed_path.exists())


if __name__ == "__main__":
    unittest.main()

