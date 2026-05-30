print("=" * 40)
print("🔍 BINARY SEARCH INTERACTIVE TOOL 🔍")
print("=" * 40)
print("\n📝 Easily find the position of a number in a sorted list.")

while True:
    print("\n" + "=" * 40)
    try:
        user_input = input("🎯 Enter sorted numbers separated by spaces (e.g., 2 5 8 12): ").strip()
        if not user_input:
            print("❌ Error: Input cannot be empty.")
            continue
            
        arr = [int(x) for x in user_input.split()]
        
        # Check if the list is actually sorted
        if arr != sorted(arr):
            print("❌ Error: List must be sorted for Binary Search! Please enter sorted numbers.")
            continue
            
        target = int(input("🎯 Enter the number you want to find: ").strip())
        
        # Binary Search procedural logic
        low = 0
        high = len(arr) - 1
        found_index = -1
        
        while low <= high:
            mid = (low + high) // 2
            guess = arr[mid]
            
            if guess == target:
                found_index = mid
                break
            elif guess > target:
                high = mid - 1
            else:
                low = mid + 1
                
        if found_index != -1:
            print(f"\n🎉 Success! Element found at position: {found_index + 1}") 
            print(f"📍 Index in array: {found_index}")
        else:
            print("\n😔 Element not found in the list.")
            
    except ValueError:
        print("❌ Error: Please enter valid integers only.")
        
    again = input("\n🔄 Do you want to search again? (y/n): ").strip().lower()
    if again != 'y':
        print("\n👋 Thanks for using Binary Search! Goodbye!\n")
        break