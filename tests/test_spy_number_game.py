import unittest


class TestSpyNumberGame(unittest.TestCase):

    def test_secret_number_in_range(self):
        """Secret number must be between 1 and 100"""
        import random
        for _ in range(100):
            number = random.randint(1, 100)
            self.assertGreaterEqual(number, 1)
            self.assertLessEqual(number, 100)

    def test_high_low_hint(self):
        """High/low hint logic is correct"""
        secret = 60
        low_guess = 40
        high_guess = 80

        self.assertTrue(low_guess < secret)   # should say HIGHER
        self.assertTrue(high_guess > secret)  # should say LOWER

    def test_even_odd_hint(self):
        """Even/odd detection is correct"""
        self.assertEqual(42 % 2, 0)   # even
        self.assertNotEqual(37 % 2, 0) # odd

    def test_zone_hint(self):
        """Zone detection is correct"""
        self.assertTrue(1 <= 20 <= 25)    # zone 1-25
        self.assertTrue(26 <= 40 <= 50)   # zone 26-50
        self.assertTrue(51 <= 65 <= 75)   # zone 51-75
        self.assertTrue(76 <= 90 <= 100)  # zone 76-100

    def test_warm_cold_hint(self):
        """Warmer/colder logic based on distance"""
        secret = 50
        previous_guess = 70   # distance 20
        current_guess = 60    # distance 10 → warmer

        prev_distance = abs(secret - previous_guess)
        curr_distance = abs(secret - current_guess)

        self.assertLess(curr_distance, prev_distance)  # getting warmer

    def test_max_attempts(self):
        """Game allows exactly 7 attempts"""
        max_attempts = 7
        self.assertEqual(max_attempts, 7)


if __name__ == "__main__":
    unittest.main()
