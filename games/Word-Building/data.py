import json
import os

DATA_FILE = os.path.join(os.path.dirname(__file__), 'words.json')


def DataAdding(word):
    if not os.path.exists(DATA_FILE):
        words = {}
    else:
        with open(DATA_FILE, 'r', encoding='utf-8') as file:
            words = json.load(file)

    a = words[word[0]]
    a.append(word)
    words[word[0]] = a

    with open(DATA_FILE, 'w', encoding='utf-8') as file:
        json.dump(words, file, indent=2)


if os.path.exists(DATA_FILE):
    with open(DATA_FILE, 'r', encoding='utf-8') as file:
        words = json.load(file)
else:
    words = {}
