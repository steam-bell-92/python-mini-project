import random


print("🎮 Rock, Paper, Scissors Game! 🎮")
print("🪨 Rock beats ✂️  Scissors")
print("📄 Paper beats 🪨 Rock")
print("✂️  Scissors beats 📄 Paper\n")

Flag = True

valid = {
    'r': 1,
    'p': 2,
    's': 3,
}

key = {
    1: 'Rock 🪨',
    2: 'Paper 📄',
    3: 'Scissors ✂️',
}


while Flag:
    value = str(input('🎯 Choose - Rock(r), Paper(p), Scissors(s): ')).lower()
    computer = random.randint(1, 3)

    if value not in valid:
        print('❌ Invalid choice! Please enter r, p, or s. Try again.\n')
        continue

    print(f'\n👤 You chose: {key[valid[value]]}')
    print(f'🤖 Computer chose: {key[computer]}\n')

    if (valid[value] == 1 and computer == 2) or (valid[value] == 2 and computer == 3) or (valid[value] == 3 and computer == 1):
        print('😢 You lost!! Better luck next time!\n')
    elif valid[value] == computer:
        print("🤝 It's a Tie!! Great minds think alike!\n")
    else:
        print('🎉 You won!! Congratulations!\n')

    response = str(input('Continue playing? Yes(y) or No(n): ')).lower()

    if response == 'y':
        Flag = True
        print()
    else:
        Flag = False
        print('\n👋 Thanks for playing! See you next time!\n')