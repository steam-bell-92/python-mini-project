print("=" * 50)
print("🗼 TOWER OF HANOI 🗼")
print("=" * 50)
print("Move all disks from Tower A to Tower C using Tower B as auxiliary.\n")

while True:
    print("=" * 50)
    try:
        user_input = input("🎯 Enter the number of disks (1-8) or 'q' to quit: ").strip()
        if user_input.lower() == 'q':
            print("\n👋 Thanks for playing Tower of Hanoi! Goodbye!\n")
            break
            
        if not user_input:
            print("❌ Error: Input cannot be empty.")
            continue
            
        n = int(user_input)
        if not (1 <= n <= 8):
            print("⚠️ Please enter a number between 1 and 8!")
            continue
    except ValueError:
        print("❌ Please enter a valid integer between 1 and 8.")
        continue

    tower_A = list(range(n, 0, -1))
    tower_B = []
    tower_C = []

    towers = {
        'A': tower_A,
        'B': tower_B,
        'C': tower_C
    }

    stack = [(n, 'A', 'C', 'B')]
    move_count = 0

    print(f"\n🚀 Solving Tower of Hanoi with {n} disks...")
    print("Moving from Tower A to Tower C using Tower B as auxiliary")
    print("\nInitial State:")
    print(f"  Tower A: {towers['A']}")
    print(f"  Tower B: {towers['B']}")
    print(f"  Tower C: {towers['C']}")
    print("\n" + "=" * 50)

    while stack:
        disks, source, destination, auxiliary = stack.pop()
        if disks == 1:
            # Inline move_disk
            source_tower = towers[source]
            dest_tower = towers[destination]

            if not source_tower:
                print(f"❌ Invalid move! Tower {source} is empty.")
                disk = None
            else:
                disk = source_tower[-1]
                if dest_tower and dest_tower[-1] < disk:
                    print("❌ Invalid move! Cannot place larger disk on smaller disk.")
                    disk = None
                else:
                    disk = source_tower.pop()
                    dest_tower.append(disk)

            if disk is not None:
                move_count += 1
                print(f"👉 Move {move_count}: Move disk {disk} from Tower {source} to Tower {destination}")
                print(f"  Tower A: {towers['A']}")
                print(f"  Tower B: {towers['B']}")
                print(f"  Tower C: {towers['C']}")
                print("-" * 50)
        else:
            stack.append((disks - 1, auxiliary, destination, source))
            stack.append((1, source, destination, auxiliary))
            stack.append((disks - 1, source, auxiliary, destination))

    print("\n" + "=" * 50)
    print("🎉 PUZZLE SOLVED!")
    print(f"📊 Total moves: {move_count}")
    print(f"💡 Minimum moves required: {2**n - 1}")
    print("=" * 50)

    again = input("\n🔄 Do you want to solve again? (y/n): ").strip().lower()
    if again != 'y':
        print("\n👋 Thanks for playing Tower of Hanoi! Goodbye!\n")
        break
