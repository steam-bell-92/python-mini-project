import pickle

def DataAdding(word):
    file = open('words.bat', 'rb')
    words = pickle.load(file)
    words.setdefault(word[0], []).append(word)
    file.close()

    file = open('words.bat', 'wb')
    pickle.dump(words, file)
    file.close()

file = open('words.bat', 'rb')
words = pickle.load(file)
file.close()
