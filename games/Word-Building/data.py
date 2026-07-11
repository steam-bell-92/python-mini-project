import pickle
from pathlib import Path

WORDS_FILE = Path(__file__).with_name("words.bat")

def DataAdding(word):
    with open(WORDS_FILE, 'rb') as file:
        words = pickle.load(file)
    a = words[word[0].lower()]
    a.append(word)
    b = word[0].lower()
    words[b] = a
    
    with open(WORDS_FILE, 'wb') as file:
        pickle.dump(words, file)

with open(WORDS_FILE, 'rb') as file:
    words = pickle.load(file)
