import random
import re

print("🔥 PASSWORD FORGE 🔥")
print("Survive evolving firewall rules.\n")


# ---------------- DIFFICULTY ---------------- #

print("🎯 Choose Difficulty")
print("1️⃣ Easy  -> 5 lives")
print("2️⃣ Medium -> 3 lives")
print("3️⃣ Hard -> 2 lives\n")

difficulty = input("➡️ Enter choice (1/2/3): ")

if difficulty == "1":
    lives = 5

elif difficulty == "2":
    lives = 3

else:
    lives = 2


# ---------------- RANDOM GAME VALUES ---------------- #

banned_digit = random.randint(0, 9)

target_sum = random.randint(12, 24)

lucky_letter = random.choice(
    "abcdefghijklmnopqrstuvwxyz"
)

months = [
    "january", "february", "march",
    "april", "may", "june",
    "july", "august", "september",
    "october", "november", "december"
]

elements = [
    "fire", "water", "earth", "air"
]

specials = "!@#$%^&*()_+-=[]{}|;:,.<>?/"

score = 0

unlocked_rules = 1


# ---------------- RULE LIST ---------------- #

rules = [

    "At least 8 characters",

    "One uppercase letter",

    "One lowercase letter",

    "One digit",

    "One special character",

    f"Do not use digit {banned_digit}",

    "Contain a month name",

    "Contain a Roman numeral",

    f"Digits must sum to {target_sum}",

    "Contain palindrome pattern",

    f"Contain lucky letter '{lucky_letter}' twice",

    "Contain nature word",

    "Contain at least 4 vowels"
]


# ---------------- GAME LOOP ---------------- #

while lives > 0:

    print("\n" + "=" * 50)

    print(f"❤️ Lives: {lives}")
    print(f"🏆 Score: {score}")

    print("\n🔓 Current Rules:\n")

    for i in range(unlocked_rules):

        print(f"{i+1}. {rules[i]}")

    password = input(
        "\n📝 Forge Password (or type 'exit'): "
    )

    # ---------------- EXIT OPTION ---------------- #

    if password.lower() in ["exit", "quit", "q"]:

        print("\n👋 Exiting Password Forge...")
        print("Thanks for playing!\n")

        break

    passed_rules = []

    failed_rules = []

    # ---------------- RULE 1 ---------------- #

    if len(password) >= 8:
        passed_rules.append(rules[0])
    else:
        failed_rules.append(rules[0])

    # ---------------- RULE 2 ---------------- #

    if any(c.isupper() for c in password):
        passed_rules.append(rules[1])
    else:
        failed_rules.append(rules[1])

    # ---------------- RULE 3 ---------------- #

    if any(c.islower() for c in password):
        passed_rules.append(rules[2])
    else:
        failed_rules.append(rules[2])

    # ---------------- RULE 4 ---------------- #

    if any(c.isdigit() for c in password):
        passed_rules.append(rules[3])
    else:
        failed_rules.append(rules[3])

    # ---------------- RULE 5 ---------------- #

    if any(c in specials for c in password):
        passed_rules.append(rules[4])
    else:
        failed_rules.append(rules[4])

    # ---------------- RULE 6 ---------------- #

    if str(banned_digit) not in password:
        passed_rules.append(rules[5])
    else:
        failed_rules.append(rules[5])

    # ---------------- RULE 7 ---------------- #

    if any(month in password.lower() for month in months):
        passed_rules.append(rules[6])
    else:
        failed_rules.append(rules[6])

    # ---------------- RULE 8 ---------------- #

    if re.search(r"\b[IVXLCDM]+\b", password.upper()):
        passed_rules.append(rules[7])
    else:
        failed_rules.append(rules[7])

    # ---------------- RULE 9 ---------------- #

    digit_total = sum(
        int(c)
        for c in password
        if c.isdigit()
    )

    if digit_total == target_sum:
        passed_rules.append(rules[8])
    else:
        failed_rules.append(rules[8])

    # ---------------- RULE 10 ---------------- #

    if re.search(r"(.).\1|(.)(.)\3\2", password):
        passed_rules.append(rules[9])
    else:
        failed_rules.append(rules[9])

    # ---------------- RULE 11 ---------------- #

    if password.lower().count(lucky_letter) >= 2:
        passed_rules.append(rules[10])
    else:
        failed_rules.append(rules[10])

    # ---------------- RULE 12 ---------------- #

    if any(
        element in password.lower()
        for element in elements
    ):
        passed_rules.append(rules[11])
    else:
        failed_rules.append(rules[11])

    # ---------------- RULE 13 ---------------- #

    vowels = "aeiou"

    vowel_count = sum(
        1
        for c in password.lower()
        if c in vowels
    )

    if vowel_count >= 4:
        passed_rules.append(rules[12])
    else:
        failed_rules.append(rules[12])

    # ---------------- SHOW RESULTS ---------------- #

    print("\n✅ PASSED RULES:")

    passed_visible = False

    for rule in passed_rules[:unlocked_rules]:

        print(f"✔️ {rule}")

        passed_visible = True

    if not passed_visible:
        print("None")

    print("\n❌ FAILED RULES:")

    failed_visible = False

    for rule in failed_rules[:unlocked_rules]:

        print(f"✖️ {rule}")

        failed_visible = True

    if not failed_visible:
        print("None")

    # ---------------- CHECK CURRENT RULES ---------------- #

    current_rules_passed = True

    for i in range(unlocked_rules):

        if rules[i] in failed_rules:

            current_rules_passed = False

    # ---------------- SUCCESS ---------------- #

    if current_rules_passed:

        print("\n🎉 Firewall Layer Destroyed!")

        score += 100

        if unlocked_rules < len(rules):

            print("\n🔓 NEW RULE UNLOCKED:")

            print(
                f"➡️ {rules[unlocked_rules]}"
            )

            unlocked_rules += 1

        else:

            print("\n🏆 YOU BEAT PASSWORD FORGE!")

            print(f"⭐ Final Score: {score}")

            break

    # ---------------- FAILURE ---------------- #

    else:

        lives -= 1

        print("\n🚨 SECURITY BREACH DETECTED")

        print("❌ -1 Life")


# ---------------- GAME OVER ---------------- #

if lives == 0:

    print("\n💀 GAME OVER")

    print("The Firewall defeated you.")


print("\n👋 Thanks for playing Password Forge!\n")