import json
import os
import pickle
import warnings

DATA_FILE = os.path.join(os.path.dirname(__file__), 'words.json')
OLD_DATA_FILE = os.path.join(os.path.dirname(__file__), 'words.bat')


def _migrate_old_format():
    if os.path.exists(OLD_DATA_FILE):
        try:
            with open(OLD_DATA_FILE, 'rb') as f:
                old_words = pickle.load(f)
            with open(DATA_FILE, 'w', encoding='utf-8') as f:
                json.dump(old_words, f, indent=2)
            os.remove(OLD_DATA_FILE)
            warnings.warn("Migrated words.bat (pickle) to words.json (JSON)")
            return old_words
        except Exception as e:
            warnings.warn(f"Failed to migrate old data file: {e}")
    return None


def DataAdding(word):
    if not os.path.exists(DATA_FILE):
        words = {}
    else:
        with open(DATA_FILE, 'r', encoding='utf-8') as file:
            words = json.load(file)

    words.setdefault(word[0], []).append(word)

    with open(DATA_FILE, 'w', encoding='utf-8') as file:
        json.dump(words, file, indent=2)


if os.path.exists(DATA_FILE):
    with open(DATA_FILE, 'r', encoding='utf-8') as file:
        words = json.load(file)
else:
    migrated = _migrate_old_format()
    if migrated is not None:
        words = migrated
    else:
        words = {}
