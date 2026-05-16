import time
import random

# Typing sentences
sentences = [
    "Python is fun to learn",
    "Open source is amazing",
    "Practice makes perfect",
    "Typing speed improves daily",
    "Consistency beats motivation"
]

print("\n⌨️ ===============================")
print("   WELCOME TO TYPING SPEED TESTER")
print("================================ ⌨️\n")

# Select random sentence
sentence = random.choice(sentences)

print("📌 Type the following sentence:\n")
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

# Calculate words per minute
words = len(sentence.split())
wpm = (words / time_taken) * 60 if time_taken > 0 else 0

# Calculate accuracy
correct_chars = 0

for i in range(min(len(sentence), len(typed_text))):
    if sentence[i] == typed_text[i]:
        correct_chars += 1

accuracy = (correct_chars / len(sentence)) * 100

# Results
print("\n🎉 ===== TEST COMPLETED ===== 🎉")
print(f"⏱️ Time Taken : {time_taken:.2f} seconds")
print(f"🚀 Typing Speed : {wpm:.2f} WPM")
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