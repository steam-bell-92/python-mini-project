import sys
import os

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_int, get_int_list

def binary_search(arr: list[int], target: int) -> int:
    """Perform binary search on a sorted list and return target index or -1."""
    low = 0
    high = len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2
        guess = arr[mid]
        
        if guess == target:
            return mid
        elif guess > target:
            high = mid - 1
        else:
            low = mid + 1
            
    return -1

def main() -> None:
    print("=" * 40)
    print("🔍 BINARY SEARCH INTERACTIVE TOOL 🔍")
    print("=" * 40)
    print("\n📝 Easily find the position of a number in a sorted list.")

    while True:
        print("\n" + "=" * 40)
        
        arr = get_int_list(
            prompt="🎯 Enter sorted numbers separated by spaces (e.g., 2 5 8 12): ",
            error_empty="❌ Error: Input cannot be empty.",
            error_invalid="❌ Error: Please enter valid integers only."
        )
        
        # Check if the list is actually sorted
        if arr != sorted(arr):
            print("❌ Error: List must be sorted for Binary Search! Please enter sorted numbers.")
            continue
            
        target = get_int(
            prompt="🎯 Enter the number you want to find: ",
            error_invalid="❌ Error: Please enter valid integers only."
        )
        
        found_index = binary_search(arr, target)
        
        if found_index != -1:
            print(f"\n🎉 Success! Element found at position: {found_index + 1}") 
            print(f"📍 Index in array: {found_index}")
        else:
            print("\n😔 Element not found in the list.")
            
        again = input("\n🔄 Do you want to search again? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Binary Search! Goodbye!\n")
            break

if __name__ == "__main__":
    main()