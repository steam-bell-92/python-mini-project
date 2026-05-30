
"""
💰 Budget Tracker CLI Tool
A command-line budget tracker to manage income, expenses, and view summaries by category.
Data is saved persistently in a CSV file.
"""

import csv
import os
from datetime import datetime
from collections import defaultdict

DATA_FILE = "budget_data.csv"
FIELDNAMES = ["date", "type", "category", "description", "amount"]

# ─────────────────────────────────────────────
# FILE HELPERS
# ─────────────────────────────────────────────

def initialize_file():
    """Create the CSV file with headers if it doesn't exist."""
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, mode="w", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
            writer.writeheader()


def load_transactions():
    """Load all transactions from CSV."""
    transactions = []
    with open(DATA_FILE, mode="r", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row["amount"] = float(row["amount"])
            transactions.append(row)
    return transactions


def save_transaction(entry):
    """Append a single transaction to the CSV."""
    with open(DATA_FILE, mode="a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writerow(entry)


# ─────────────────────────────────────────────
# CORE FEATURES
# ─────────────────────────────────────────────

def add_transaction(trans_type):
    """Add an income or expense entry."""
    print(f"\n── Add {trans_type.capitalize()} ──")

    category = input("Category (e.g. Food, Rent, Salary): ").strip()
    if not category:
        print("❌ Category cannot be empty.")
        return

    description = input("Description (optional): ").strip()

    try:
        amount = float(input("Amount (₹): ").strip())
        if amount <= 0:
            print("❌ Amount must be greater than 0.")
            return
    except ValueError:
        print("❌ Invalid amount. Please enter a number.")
        return

    entry = {
        "date": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "type": trans_type,
        "category": category.capitalize(),
        "description": description,
        "amount": round(amount, 2),
    }

    save_transaction(entry)
    print(f"✅ {trans_type.capitalize()} of ₹{amount:.2f} added under '{category.capitalize()}'.")


def view_summary():
    """Show total income, expenses, and current balance."""
    transactions = load_transactions()

    if not transactions:
        print("\n📭 No transactions found.")
        return

    total_income = sum(t["amount"] for t in transactions if t["type"] == "income")
    total_expense = sum(t["amount"] for t in transactions if t["type"] == "expense")
    balance = total_income - total_expense

    print("\n" + "═" * 35)
    print("       💰 BUDGET SUMMARY")
    print("═" * 35)
    print(f"  Total Income  : ₹{total_income:>10.2f}")
    print(f"  Total Expenses: ₹{total_expense:>10.2f}")
    print("─" * 35)
    balance_label = "✅ Balance" if balance >= 0 else "⚠️  Deficit"
    print(f"  {balance_label}  : ₹{abs(balance):>10.2f}")
    print("═" * 35)


def view_category_summary():
    """Show spending/income broken down by category."""
    transactions = load_transactions()

    if not transactions:
        print("\n📭 No transactions found.")
        return

    income_by_cat = defaultdict(float)
    expense_by_cat = defaultdict(float)

    for t in transactions:
        if t["type"] == "income":
            income_by_cat[t["category"]] += t["amount"]
        else:
            expense_by_cat[t["category"]] += t["amount"]

    print("\n" + "═" * 35)
    print("   📊 CATEGORY-WISE BREAKDOWN")
    print("═" * 35)

    if income_by_cat:
        print("\n  📈 Income:")
        for cat, amt in sorted(income_by_cat.items()):
            print(f"    {cat:<20} ₹{amt:.2f}")

    if expense_by_cat:
        print("\n  📉 Expenses:")
        for cat, amt in sorted(expense_by_cat.items()):
            print(f"    {cat:<20} ₹{amt:.2f}")

    print("═" * 35)


def view_all_transactions():
    """Display all recorded transactions."""
    transactions = load_transactions()

    if not transactions:
        print("\n📭 No transactions found.")
        return

    print("\n" + "═" * 70)
    print(f"  {'DATE':<17} {'TYPE':<10} {'CATEGORY':<15} {'DESCRIPTION':<15} {'AMOUNT':>8}")
    print("─" * 70)

    for t in transactions:
        symbol = "+" if t["type"] == "income" else "-"
        print(
            f"  {t['date']:<17} {t['type']:<10} {t['category']:<15} "
            f"{t['description'][:14]:<15} {symbol}₹{t['amount']:>7.2f}"
        )

    print("═" * 70)


def delete_all_transactions():
    """Clear all transaction data after confirmation."""
    confirm = input("\n⚠️  Are you sure you want to delete ALL data? (yes/no): ").strip().lower()
    if confirm == "yes":
        with open(DATA_FILE, mode="w", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
            writer.writeheader()
        print("🗑️  All transactions deleted.")
    else:
        print("❌ Cancelled.")


# ─────────────────────────────────────────────
# MAIN MENU
# ─────────────────────────────────────────────

def print_menu():
    print("\n" + "═" * 35)
    print("      💰 BUDGET TRACKER CLI")
    print("═" * 35)
    print("  1. ➕ Add Income")
    print("  2. ➖ Add Expense")
    print("  3. 📋 View All Transactions")
    print("  4. 📊 View Summary")
    print("  5. 🗂️  Category-wise Breakdown")
    print("  6. 🗑️  Clear All Data")
    print("  7. 🚪 Exit")
    print("═" * 35)


def main():
    initialize_file()
    print("\n👋 Welcome to Budget Tracker!")

    while True:
        print_menu()
        choice = input("  Enter your choice (1-7): ").strip()

        if choice == "1":
            add_transaction("income")
        elif choice == "2":
            add_transaction("expense")
        elif choice == "3":
            view_all_transactions()
        elif choice == "4":
            view_summary()
        elif choice == "5":
            view_category_summary()
        elif choice == "6":
            delete_all_transactions()
        elif choice == "7":
            print("\n👋 Goodbye! Keep tracking your budget. 💸\n")
            break
        else:
            print("❌ Invalid choice. Please enter a number between 1 and 7.")


if __name__ == "__main__":
    main()