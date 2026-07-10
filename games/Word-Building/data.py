import pickle
from pathlib import Path

WORDS_FILE = Path(__file__).with_name("words.bat")

def DataAdding(word):
    file = open(WORDS_FILE, 'rb')
    words = pickle.load(file)
    a = words[word[0]]
    a.append(word)
    b = word[0]
    words[b] = a
    file.close()
    
    file = open(WORDS_FILE, 'wb')
    pickle.dump(words, file)
    file.close()

file = open(WORDS_FILE, 'rb')
words = pickle.load(file)
file.close()
