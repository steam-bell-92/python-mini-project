print("🔄 Bubble Sort Interactive Tool 🔄")
print("Sort numbers in Ascending or Descending order\n")


def bubble_sort(arr, reverse=False):
    """
    Sorts a list using the Bubble Sort algorithm.
    Returns the sorted list.
    """

    arr = arr.copy()
    n = len(arr)

    for i in range(n):
        swapped = False

        # Last i elements are already in place
        for j in range(0, n - i - 1):

            # Ascending Order
            if not reverse and arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

            # Descending Order
            elif reverse and arr[j] < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        # If no swaps happened, list is already sorted
        if not swapped:
            break

    return arr


def test_bubble_sort():
    """Background test cases to ensure logic accuracy."""

    # Ascending Order Tests
    assert bubble_sort([64, 34, 25, 12, 22, 11, 90]) == [11, 12, 22, 25, 34, 64, 90]
    assert bubble_sort([5, 1, 4, 2, 8]) == [1, 2, 4, 5, 8]

    # Descending Order Tests
    assert bubble_sort([5, 1, 4, 2, 8], reverse=True) == [8, 5, 4, 2, 1]

    # Edge Case Tests
    assert bubble_sort([]) == []
    assert bubble_sort([1]) == [1]
    assert bubble_sort([-1, -5, 3, 0]) == [-5, -1, 0, 3]


if __name__ == "__main__":

    # Background testing execution
    test_bubble_sort()

    print("=== Bubble Sort Interactive Tool ===")

    try:
        user_input = input(
            "➡️ Enter numbers to sort separated by spaces (e.g., 64 34 25): "
        )

        if not user_input.strip():
            print("❌ Error: Input cannot be empty!")

        else:
            # Convert string input into list of integers
            arr = [int(x) for x in user_input.split()]

            print("\nChoose sorting order:")
            print("1. Ascending")
            print("2. Descending")

            order_choice = input("➡️ Enter your choice (1 or 2): ").strip()

            if order_choice == "1":
                sorted_arr = bubble_sort(arr)

                print(f"\n📊 Original list: {arr}")
                print(f"✅ Sorted list (Ascending): {sorted_arr}")

            elif order_choice == "2":
                sorted_arr = bubble_sort(arr, reverse=True)

                print(f"\n📊 Original list: {arr}")
                print(f"✅ Sorted list (Descending): {sorted_arr}")

            else:
                print("❌ Invalid sorting choice! Please select 1 or 2.")

    except ValueError:
        print("❌ Error: Please enter valid integers only.")

    print("\n👋 Thank you for using Bubble Sort Tool!")