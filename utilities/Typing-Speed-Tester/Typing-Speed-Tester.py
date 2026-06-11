import time
import random
import urllib.request
import json
import sys
import os

# Add root directory to sys.path to import utils package
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from utils import save_score, get_top_scores

# Local fallback sentences
fallback_sentences = [
    "Python is fun to learn",
    "Open source is amazing",
    "Practice makes perfect",
    "Typing speed improves daily",
    "Consistency beats motivation",
    "The quick brown fox jumps over the lazy dog",
    "Code is like humor; when you have to explain it, it's bad",
    "Success is not final, failure is not fatal",
    "Keep it simple, stupid is a design principle",
    "Life is what happens when you're busy making other plans",
    "Every day is a second chance to improve yourself",
    "Technology is best when it brings people together",
    "Stay hungry, stay foolish was a famous advice",
    "An apple a day keeps the doctor away",
    "The best way to predict the future is to create it"
]

print("\n⌨️ ===============================")
print("   WELCOME TO TYPING SPEED TESTER")
print("================================ ⌨️\n")

while True:
    print("🌐 Fetching a fresh phrase for you...")
    
    # Try multiple APIs for robustness
    urls = [
        "https://dummyjson.com/quotes/random",
        "https://api.quotable.io/random"
    ]
    
    sentence = None
    for url in urls:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=3) as response:
                data = json.loads(response.read().decode())
                # dummyjson uses 'quote', quotable uses 'content'
                phrase = data.get('quote') or data.get('content')
                if phrase:
                    sentence = phrase
                    break
        except Exception:
            continue
            
    if not sentence:
        print("📴 Offline or API unavailable. Using a classic phrase instead.")
        sentence = random.choice(fallback_sentences)

    print("\n📌 Type the following sentence:\n")
    print(f"👉 {sentence}\n")
    
    input("Press Enter when you are ready... 🚀")
    
    # Start timer
    start_time = time.time()
    
    # User input
    typed_text = input("\n⌨️ Start Typing:\n")
    
    # End timer
    end_time = time.time()
    
    # Calculate time
    time_taken = end_time - start_time
    
    # Calculate words per minute based on typed text
    sentence_words = sentence.split()
    typed_words = typed_text.split()
    correct_words = sum(
        1 for i, word in enumerate(typed_words)
        if i < len(sentence_words) and word == sentence_words[i]
    )
    wpm = (correct_words / time_taken) * 60 if time_taken > 0 else 0
    
    # Calculate accuracy
    correct_chars = 0
    for i in range(min(len(sentence), len(typed_text))):
        if sentence[i] == typed_text[i]:
            correct_chars += 1
            
    accuracy = (correct_chars / len(sentence)) * 100 if len(sentence) > 0 else 0
    
    # Results
    print("\n🎉 ===== TEST COMPLETED ===== 🎉")
    print(f"⏱️ Time Taken : {time_taken:.2f} seconds")
    print(f"🚀 Net WPM      : {wpm:.2f} WPM")
    print(f"🎯 Accuracy : {accuracy:.2f}%")
    
    # Performance feedback
    if accuracy == 100:
        print("🏆 Perfect Typing!")
    elif accuracy >= 80:
        print("👏 Great Job!")
    elif accuracy >= 50:
        print("👍 Good Attempt!")
    else:
        print("💡 Keep Practicing!")

    # Save and display high scores
    name = input("\n  Enter your name for the high scores board: ").strip()
    if name:
        save_score("Typing-Speed-Tester", name, int(wpm))
    
    print("\n🏆 ===== HIGH SCORES BOARD =====")
    top_scores = get_top_scores("Typing-Speed-Tester", 5)
    if top_scores:
        for idx, (p_name, p_score, p_time) in enumerate(top_scores):
            print(f"  {idx+1}. {p_name:15s} : {p_score:4d} WPM  ({p_time})")
    else:
        print("  No high scores yet!")
    print("================================")
        
    again = input("\n🔄 Do you want to test again? (y/n): ").strip().lower()
    if again != 'y':
        print("\n👋 Thanks for testing your typing speed! Goodbye!\n")
        break