def binary_search(arr, target):
    """
    Performs a binary search on a sorted list.
    Returns the index of the target if found, otherwise returns -1.
    """
    low = 0
    high = len(arr) - 1

    while low <= high:
        # Calculate the middle index safely
        mid = (low + high) // 2
        guess = arr[mid]
        
        # Check if the target is found at the middle position
        if guess == target:
            return mid
            
        # If the target is smaller, ignore the right half
        elif guess > target:
            high = mid - 1
            
        # If the target is larger, ignore the left half
        else:
            low = mid + 1
            
    # Target element is not present in the list
    return -1


def test_binary_search():
    """ Background test cases to ensure logic accuracy before user input.."""
    test_list = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
    
    # Test case 1: Element is in the middle
    assert binary_search(test_list, 23) == 5, "Test Case 1 Failed"
    
    # Test case 2: Element is at the start
    assert binary_search(test_list, 2) == 0, "Test Case 2 Failed"
    
    # Test case 3: Element does not exist
    assert binary_search(test_list, 100) == -1, "Test Case 3 Failed"


if __name__ == "__main__":
    # For logic check
    test_binary_search()

    # --- USER INTERACTION SECTION ---
    print(" === Binary Search Interactive Tool === ")
    try:
        user_input = input("Enter Sorted numbers seperated by spaces (e.g.,2 5 8 12) : ")
        arr=[int(x) for x in user_input.split()]

        #check if the list is actually sorted
        if arr != sorted(arr):
            print("Error: List must be Sorted for Binary Search!")
        else:
            target = int(input("Enter The Number You Want to Find -:" ))
            result = binary_search(arr, target)

            if result != -1:
                print(f"Success! Element found at position : {result +1 }") 
                print(f"Index in array : {result}")
            else:
                print("Element not found in the List.")
    
    except ValueError:
        print("Error: Please Enter valid integers only.")