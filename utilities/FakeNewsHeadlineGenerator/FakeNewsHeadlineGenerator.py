import random

subjects = [
    "Shahrukh Khan",
    "Virat Kohli",
    "Nirmala Sitharaman",
    "A Mumbai Cat",
    "A Group Of Monkeys",
    "Prime Minister Modi",
    "Auto Rickshaw Driver from Delhi"
]

actions = [
    "launches",
    "cancels",
    "dances with",
    "eats",
    "declares war on",
    "orders",
    "celebrates"
]

places_or_things = [
    "at Red Fort",
    "in Mumbai Local Train",
    "a plate of Samosa",
    "inside Parliament",
    "at Ganga Ghat",
    "during IPL Match",
    "at India Gate"
]

while True:
    subject = random.choice(subjects)
    action = random.choice(actions)
    places_or_thing = random.choice(places_or_things)

    headline = f"BREAKING NEWS: {subject} {action} {places_or_thing}!"
    print("\n" + headline)

    user_input = input("DO YOU WANT ANOTHER HEADLINE? (YES/NO): ").strip().lower()
    if user_input == 'no':
        break

print("\nTHANKS FOR USING THE FAKE NEWS GENERATOR. HAVE A FUN DAY!")
