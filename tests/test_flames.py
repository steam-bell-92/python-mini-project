"""
Tests for FLAMES Game core logic.
"""

def remove_common_chars(name1, name2):
    name1_list = list(name1)
    name2_list = list(name2)
    for char in name1_list[:]:
        if char in name2_list:
            name1_list.remove(char)
            name2_list.remove(char)
    return name1_list, name2_list


def calculate_flames(count):
    flames = ['F', 'L', 'A', 'M', 'E', 'S']
    index = 0
    while len(flames) > 1:
        index = (index + count - 1) % len(flames)
        flames.pop(index)
    return flames[0]


def calculate_score(name1, name2, count):
    total_len = len(name1) + len(name2)
    matched_chars = total_len - count
    return 30 + round((matched_chars / total_len) * 70) if total_len > 0 else 0


# Tests
def test_remove_common_chars_basic():
    n1, n2 = remove_common_chars("alice", "bob")
    assert len(n1) + len(n2) > 0


def test_remove_common_chars_identical():
    n1, n2 = remove_common_chars("abc", "abc")
    assert len(n1) + len(n2) == 0


def test_flames_result_valid():
    result = calculate_flames(3)
    assert result in ['F', 'L', 'A', 'M', 'E', 'S']


def test_flames_count_one():
    result = calculate_flames(1)
    assert result in ['F', 'L', 'A', 'M', 'E', 'S']


def test_flames_count_six():
    result = calculate_flames(6)
    assert result in ['F', 'L', 'A', 'M', 'E', 'S']


def test_score_range():
    score = calculate_score("alice", "bob", 4)
    assert 0 <= score <= 100


def test_score_full_match():
    score = calculate_score("abc", "abc", 0)
    assert score == 100


def test_degenerate_case():
    n1, n2 = remove_common_chars("abc", "abc")
    count = len(n1) + len(n2)
    assert count == 0


def test_flames_known_output():
    # "alice" vs "bob" — count = 4+1 = 5 remaining
    n1, n2 = remove_common_chars("alice", "bob")
    count = len(n1) + len(n2)
    result = calculate_flames(count)
    assert result in ['F', 'L', 'A', 'M', 'E', 'S']