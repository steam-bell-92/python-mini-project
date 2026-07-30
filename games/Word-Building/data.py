import json
from pathlib import Path

WORDS_FILE = Path(__file__).with_name("words.json")

def _load_words():
    """Load words dictionary from JSON file."""
    if not WORDS_FILE.exists():
        return {}
    try:
        with open(WORDS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError):
        return {}

def _save_words(words):
    """Save words dictionary to JSON file."""
    with open(WORDS_FILE, "w", encoding="utf-8") as f:
        json.dump(words, f, ensure_ascii=False)

def DataAdding(word):
    words = _load_words()
    key = word[0].lower()
    if key not in words:
        words[key] = []
    if word not in words[key]:
        words[key].append(word)
    _save_words(words)

words = _load_words()
