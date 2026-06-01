import sys
import os

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))
from utils.validation import get_choice, get_int_list

def bubble_sort(arr: list[int], reverse: bool = False) -> list[int]:
    """Sorts a list of integers using the Bubble Sort algorithm.
    
    Args:
        arr: The list of integers to sort.
        reverse: If True, sorts in descending order. Otherwise, ascending.
        
    Returns:
        A new sorted list.
    """
    sorted_arr = arr.copy()
    n = len(sorted_arr)
    
    for i in range(n):
        swapped = False
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Ascending Order
            if not reverse and sorted_arr[j] > sorted_arr[j + 1]:
                sorted_arr[j], sorted_arr[j + 1] = sorted_arr[j + 1], sorted_arr[j]
                swapped = True
            # Descending Order
            elif reverse and sorted_arr[j] < sorted_arr[j + 1]:
                sorted_arr[j], sorted_arr[j + 1] = sorted_arr[j + 1], sorted_arr[j]
                swapped = True
        
        # If no swaps happened, list is already sorted
        if not swapped:
            break
            
    return sorted_arr

def main() -> None:
    print("=" * 50)
    print("🔄 BUBBLE SORT INTERACTIVE TOOL 🔄")
    print("=" * 50)
    print("Sort a list of numbers in Ascending or Descending order.\n")

    while True:
        print("=" * 50)
        
        arr = get_int_list(
            prompt="➡️  Enter numbers to sort separated by spaces (e.g., 64 34 25): ",
            error_empty="❌ Error: Input cannot be empty!",
            error_invalid="❌ Error: Please enter valid integers only."
        )
        
        print("\nChoose sorting order:")
        print("1️⃣  Ascending")
        print("2️⃣  Descending")
        
        order_choice = get_choice(
            prompt="🎯 Enter your choice (1 or 2): ",
            choices=["1", "2"],
            error_invalid="❌ Invalid sorting choice! Please select 1 or 2."
        )

        reverse = (order_choice == "2")
        
        sorted_arr = bubble_sort(arr, reverse)

        print(f"\n📊 Original list: {arr}")
        if reverse:
            print(f"✅ Sorted list (Descending): {sorted_arr}")
        else:
            print(f"✅ Sorted list (Ascending): {sorted_arr}")

        again = input("\n🔄 Do you want to sort another list? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Bubble Sort Tool! Goodbye!\n")
            break

if __name__ == "__main__":
    main()