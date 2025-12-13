print("=" * 50)
print("TOWER OF HANOI")
print("=" * 50)

while True:
    try:
        n = int(input("\nEnter the number of disks (1-8): "))
        if 1 <= n <= 8:
            break
        else:
            print("Please enter a number between 1 and 8!")
    except ValueError:
        print("Please enter a valid number!")

tower_A = list(range(n, 0, -1))
tower_B = []
tower_C = []

stack = [(n, 'A', 'C', 'B')]
move_count = 0

print(f"\nSolving Tower of Hanoi with {n} disks...")
print("Moving from Tower A to Tower C using Tower B as auxiliary")
print("\nInitial State:")
print(f"Tower A: {tower_A}")
print(f"Tower B: {tower_B}")
print(f"Tower C: {tower_C}")
print("\n" + "=" * 50)

while stack:
    disks, source, destination, auxiliary = stack.pop()
    
    if disks == 1:
        move_count += 1
        
        if source == 'A':
            source_tower = tower_A
        elif source == 'B':
            source_tower = tower_B
        else:
            source_tower = tower_C
        
        if destination == 'A':
            dest_tower = tower_A
        elif destination == 'B':
            dest_tower = tower_B
        else:
            dest_tower = tower_C
        
        disk = source_tower.pop()
        dest_tower.append(disk)
        
        print(f"Move {move_count}: Move disk {disk} from Tower {source} to Tower {destination}")
        print(f"Tower A: {tower_A}")
        print(f"Tower B: {tower_B}")
        print(f"Tower C: {tower_C}")
        print("-" * 50)
    else:
        stack.append((disks - 1, auxiliary, destination, source))
        
        stack.append((1, source, destination, auxiliary))
        
        stack.append((disks - 1, source, auxiliary, destination))

print("\n" + "=" * 50)
print("🎉 PUZZLE SOLVED!")
print(f"Total moves: {move_count}")
print(f"Minimum moves required: {2**n - 1}")
print("=" * 50)
