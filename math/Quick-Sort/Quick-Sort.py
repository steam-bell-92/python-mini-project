import sys
import os

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))

from utils.validation import get_choice, get_int_list


def quick_sort(arr: list[int], reverse: bool = False) -> list[int]:
    """Sorts a list of integers using the Quick Sort algorithm.

    Args:
        arr: The list of integers to sort.
        reverse: If True, sorts in descending order. Otherwise, ascending.

    Returns:
        A new sorted list.
    """
    # Base case: a list of 0 or 1 elements is already sorted
    if len(arr) <= 1:
        return arr.copy()

    # Choose the last element as the pivot
    pivot = arr[-1]
    left = []
    right = []

    # Partition the remaining elements around the pivot
    for value in arr[:-1]:
        if not reverse and value <= pivot:
            left.append(value)
        elif not reverse and value > pivot:
            right.append(value)
        elif reverse and value >= pivot:
            left.append(value)
        else:
            right.append(value)

    # Recursively sort left and right partitions, then combine
    return quick_sort(left, reverse) + [pivot] + quick_sort(right, reverse)


def main() -> None:
    print("=" * 50)
    print("⚡ QUICK SORT INTERACTIVE TOOL ⚡")
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

        sorted_arr = quick_sort(arr, reverse)

        print(f"\n📊 Original list: {arr}")
        if reverse:
            print(f"✅ Sorted list (Descending): {sorted_arr}")
        else:
            print(f"✅ Sorted list (Ascending): {sorted_arr}")

        again = input("\n🔄 Do you want to sort another list? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Quick Sort Tool! Goodbye!\n")
            break


if __name__ == "__main__":
    main()