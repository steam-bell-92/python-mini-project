import json
from pathlib import Path

WORDS_FILE = Path(__file__).with_name("words.json")

def DataAdding(word):
    with open(WORDS_FILE, 'r', encoding='utf-8') as file:
        words = json.load(file)
    first_letter = word[0].lower()
    if first_letter not in words:
        words[first_letter] = []
    if word not in words[first_letter]:
        words[first_letter].append(word)
    with open(WORDS_FILE, 'w', encoding='utf-8') as file:
        json.dump(words, file, ensure_ascii=False, indent=2)

with open(WORDS_FILE, 'r', encoding='utf-8') as file:
    words = json.load(file)
