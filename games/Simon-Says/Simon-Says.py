import random
import time


print("🎮 Simon Says - Memory Sequence Game! 🎮")
print("Watch the sequence and repeat it correctly!")
print("Each round, the sequence gets longer!\n")

# Game setup
emojis = ['🔴', '🔵', '🟢', '🟡']
emoji_names = ['R', 'B', 'G', 'Y']
sequence = []
player_sequence = []
round_number = 0
game_over = False

print("🎯 How to Play:")
print("1. Watch the sequence of colored circles")
print("2. Type the colors in order (e.g., 'R B G Y')")
print("3. Each correct round adds one more color!")
print("4. Make a mistake and the game ends!\n")

input("Press Enter to start! 👇\n")


while not game_over:
    round_number += 1
    
    # Add new emoji to sequence
    new_emoji = random.choice(emojis)
    sequence.append(new_emoji)
    
    print(f"\n{'='*50}")
    print(f"🎯 Round {round_number} | Sequence Length: {len(sequence)}")
    print(f"{'='*50}")
    
    # Display sequence with delays
    print("\n🔄 Watch the sequence:\n")
    for i, emoji in enumerate(sequence):
        print(f"   {emoji} ", end="", flush=True)
        time.sleep(0.6)
        print("\b\b\b", end="", flush=True)
        time.sleep(0.4)
    
    print("\n")
    
    # Get player input
    player_input = input("🎯 Enter the sequence (space-separated): ").strip().upper().split()
    
    # Validate input
    valid_input = all(inp in emoji_names for inp in player_input)
    
    if not valid_input:
        print("❌ Invalid input! Use only R, B, G, Y separated by spaces.\n")
        game_over = True
        break
    
    # Convert player input to emojis
    player_sequence = [emojis[emoji_names.index(inp)] for inp in player_input]
    
    # Check if player's sequence matches
    if player_sequence == sequence:
        print("✅ Correct! You've mastered this sequence!\n")
    else:
        print(f"❌ Wrong! The sequence was: {' '.join(sequence)}")
        print(f"❌ You entered: {' '.join(player_sequence)}\n")
        game_over = True

print(f"\n{'='*50}")
print(f"🏁 GAME OVER!")
print(f"{'='*50}")
print(f"🎯 Final Round: {round_number}")
print(f"📊 Sequence Length Reached: {len(sequence)}")

if round_number == 1:
    print(f"💡 Try again to beat the first round!\n")
else:
    print(f"🏆 Great job! You made it to round {round_number}!\n")

print("👋 Thanks for playing Simon Says! Goodbye!\n")
