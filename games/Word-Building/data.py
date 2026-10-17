"""Word list storage for the Word-Building game (plain JSON, no pickle)."""

import json
import os
import tempfile
from pathlib import Path

WORDS_FILE = Path(__file__).with_name("words.json")


def _load_words():
    with open(WORDS_FILE, encoding="utf-8") as fh:
        return json.load(fh)


def _save_words(data):
    """Write atomically so an interrupted save cannot corrupt the word list."""
    directory = os.path.dirname(os.fspath(WORDS_FILE))
    fd, tmp_path = tempfile.mkstemp(dir=directory, suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as fh:
            json.dump(data, fh, ensure_ascii=False, indent=1)
            fh.write("\n")
        os.replace(tmp_path, WORDS_FILE)
    except BaseException:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        raise


def DataAdding(word):
    """Add ``word`` to the in-memory list and persist it (ignores duplicates)."""
    bucket = words.setdefault(word[0].lower(), [])
    if word not in bucket:
        bucket.append(word)
        _save_words(words)


words = _load_words()
