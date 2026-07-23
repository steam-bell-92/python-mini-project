import sys
import os

# Add project root to sys.path
if "__file__" in globals():
    sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
else:
    sys.path.append(os.path.abspath(os.getcwd()))

from utils.validation import get_choice, get_int_list


def _sift_down(arr: list[int], start: int, end: int, reverse: bool) -> None:
    """Restores the heap property for the subtree rooted at `start`.

    Args:
        arr: The list being heapified (mutated in place).
        start: Index of the subtree root to sift down from.
        end: Last valid index of the active heap region.
        reverse: If True, maintains a min-heap (for descending sort).
                 Otherwise, maintains a max-heap (for ascending sort).
    """
    root = start

    while True:
        child = 2 * root + 1
        if child > end:
            break

        # Pick the child that should be closer to the root
        if child + 1 <= end:
            if not reverse and arr[child] < arr[child + 1]:
                child += 1
            elif reverse and arr[child] > arr[child + 1]:
                child += 1

        should_swap = (not reverse and arr[root] < arr[child]) or (reverse and arr[root] > arr[child])

        if should_swap:
            arr[root], arr[child] = arr[child], arr[root]
            root = child
        else:
            break


def heap_sort(arr: list[int], reverse: bool = False) -> list[int]:
    """Sorts a list of integers using the Heap Sort algorithm.

    Args:
        arr: The list of integers to sort.
        reverse: If True, sorts in descending order. Otherwise, ascending.

    Returns:
        A new sorted list.
    """
    result = arr.copy()
    n = len(result)

    # Phase 1: Build a max-heap (ascending) or min-heap (descending)
    for start in range(n // 2 - 1, -1, -1):
        _sift_down(result, start, n - 1, reverse)

    # Phase 2: Repeatedly extract the root and shrink the heap
    for end in range(n - 1, 0, -1):
        result[0], result[end] = result[end], result[0]
        _sift_down(result, 0, end - 1, reverse)

    return result


def main() -> None:
    print("=" * 50)
    print("🏔️  HEAP SORT INTERACTIVE TOOL 🏔️")
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

        sorted_arr = heap_sort(arr, reverse)

        print(f"\n📊 Original list: {arr}")
        if reverse:
            print(f"✅ Sorted list (Descending): {sorted_arr}")
        else:
            print(f"✅ Sorted list (Ascending): {sorted_arr}")

        again = input("\n🔄 Do you want to sort another list? (y/n): ").strip().lower()
        if again != 'y':
            print("\n👋 Thanks for using Heap Sort Tool! Goodbye!\n")
            break


if __name__ == "__main__":
    main()