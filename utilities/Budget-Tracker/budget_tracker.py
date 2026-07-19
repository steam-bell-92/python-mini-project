"""
💰 Budget Tracker CLI Tool
A command-line budget tracker to manage income, expenses, and view summaries by category.
Data is saved persistently in a CSV file.
"""

import csv
import os
from datetime import datetime
from collections import defaultdict
from decimal import Decimal, InvalidOperation, ROUND_HALF_UP

DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "budget_data.csv")
FIELDNAMES = ["id", "date", "type", "category", "description", "amount"]

# ─────────────────────────────────────────────
# FILE HELPERS
# ─────────────────────────────────────────────

def initialize_file():
    """Create the CSV file with headers if it doesn't exist."""
    if not os.path.exists(DATA_FILE):
        with open(DATA_FILE, mode="w", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
            writer.writeheader()
    else:
        # Migrate old files that don't have the 'id' column
        with open(DATA_FILE, mode="r", newline="") as f:
            reader = csv.DictReader(f)
            existing_fields = reader.fieldnames or []
            rows = list(reader)

        if "id" not in existing_fields:
            for idx, row in enumerate(rows, start=1):
                row["id"] = str(idx)
            with open(DATA_FILE, mode="w", newline="") as f:
                writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
                writer.writeheader()
                writer.writerows(rows)


def load_transactions():
    """Load all transactions from CSV, returning amounts as Decimal."""
    transactions = []
    with open(DATA_FILE, mode="r", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row["amount"] = Decimal(row["amount"])
            transactions.append(row)
    return transactions


def save_all_transactions(transactions):
    """Overwrite the CSV with the given list of transactions."""
    with open(DATA_FILE, mode="w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writeheader()
        for t in transactions:
            writer.writerow({
                "id": t["id"],
                "date": t["date"],
                "type": t["type"],
                "category": t["category"],
                "description": t["description"],
                "amount": str(t["amount"]),
            })


def next_id(transactions):
    """Return the next available integer ID as a string."""
    if not transactions:
        return "1"
    return str(max(int(t["id"]) for t in transactions) + 1)


def save_transaction(entry):
    """Append a single transaction to the CSV."""
    with open(DATA_FILE, mode="a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writerow({**entry, "amount": str(entry["amount"])})


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
        raw = input("Amount (₹): ").strip()
        amount = Decimal(raw).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
        if amount <= 0:
            print("❌ Amount must be greater than 0.")
            return
    except InvalidOperation:
        print("❌ Invalid amount. Please enter a number.")
        return

    transactions = load_transactions()
    entry = {
        "id": next_id(transactions),
        "date": datetime.now().strftime("%Y-%m-%d %H:%M"),
        "type": trans_type,
        "category": category.capitalize(),
        "description": description,
        "amount": amount,
    }

    save_transaction(entry)
    print(f"✅ {trans_type.capitalize()} of ₹{amount} added under '{category.capitalize()}' (ID: {entry['id']}).")


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
    print(f"  Total Income  : ₹{total_income:>10}")
    print(f"  Total Expenses: ₹{total_expense:>10}")
    print("─" * 35)
    balance_label = "✅ Balance" if balance >= 0 else "⚠️  Deficit"
    print(f"  {balance_label}  : ₹{abs(balance):>10}")
    print("═" * 35)


def view_category_summary():
    """Show spending/income broken down by category."""
    transactions = load_transactions()

    if not transactions:
        print("\n📭 No transactions found.")
        return

    income_by_cat: dict[str, Decimal] = defaultdict(Decimal)
    expense_by_cat: dict[str, Decimal] = defaultdict(Decimal)

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
            print(f"    {cat:<20} ₹{amt}")

    if expense_by_cat:
        print("\n  📉 Expenses:")
        for cat, amt in sorted(expense_by_cat.items()):
            print(f"    {cat:<20} ₹{amt}")

    print("═" * 35)


def view_all_transactions():
    """Display all recorded transactions."""
    transactions = load_transactions()

    if not transactions:
        print("\n📭 No transactions found.")
        return

    print("\n" + "═" * 76)
    print(f"  {'ID':<5} {'DATE':<17} {'TYPE':<10} {'CATEGORY':<15} {'DESCRIPTION':<13} {'AMOUNT':>9}")
    print("─" * 76)

    for t in transactions:
        symbol = "+" if t["type"] == "income" else "-"
        print(
            f"  {t['id']:<5} {t['date']:<17} {t['type']:<10} {t['category']:<15} "
            f"{t['description'][:12]:<13} {symbol}₹{t['amount']:>8}"
        )

    print("═" * 76)


def edit_transaction():
    """Edit an existing transaction by ID."""
    transactions = load_transactions()

    if not transactions:
        print("\n📭 No transactions to edit.")
        return

    view_all_transactions()

    try:
        target_id = input("\n✏️  Enter the ID of the transaction to edit: ").strip()
    except (KeyboardInterrupt, EOFError):
        print("\n❌ Cancelled.")
        return

    match = next((t for t in transactions if t["id"] == target_id), None)
    if not match:
        print(f"❌ No transaction found with ID {target_id}.")
        return

    print(f"\n── Editing Transaction #{target_id} ──")
    print("  Press Enter to keep the current value.\n")

    # Category
    new_category = input(f"  Category [{match['category']}]: ").strip()
    if new_category:
        match["category"] = new_category.capitalize()

    # Description
    new_desc = input(f"  Description [{match['description']}]: ").strip()
    if new_desc != "":
        match["description"] = new_desc

    # Amount
    new_amount_raw = input(f"  Amount (₹) [{match['amount']}]: ").strip()
    if new_amount_raw:
        try:
            new_amount = Decimal(new_amount_raw).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
            if new_amount <= 0:
                print("❌ Amount must be greater than 0. Keeping original value.")
            else:
                match["amount"] = new_amount
        except InvalidOperation:
            print("❌ Invalid amount. Keeping original value.")

    # Type
    new_type = input(f"  Type (income/expense) [{match['type']}]: ").strip().lower()
    if new_type in ("income", "expense"):
        match["type"] = new_type
    elif new_type:
        print("❌ Invalid type. Keeping original value.")

    save_all_transactions(transactions)
    print(f"✅ Transaction #{target_id} updated successfully.")


def delete_transaction():
    """Delete a single transaction by ID."""
    transactions = load_transactions()

    if not transactions:
        print("\n📭 No transactions to delete.")
        return

    view_all_transactions()

    try:
        target_id = input("\n🗑️  Enter the ID of the transaction to delete: ").strip()
    except (KeyboardInterrupt, EOFError):
        print("\n❌ Cancelled.")
        return

    match = next((t for t in transactions if t["id"] == target_id), None)
    if not match:
        print(f"❌ No transaction found with ID {target_id}.")
        return

    print(f"\n  Transaction to delete:")
    print(f"  [{match['id']}] {match['date']} | {match['type']} | "
          f"{match['category']} | {match['description']} | ₹{match['amount']}")

    confirm = input("\n  Confirm delete? (yes/no): ").strip().lower()
    if confirm == "yes":
        updated = [t for t in transactions if t["id"] != target_id]
        save_all_transactions(updated)
        print(f"🗑️  Transaction #{target_id} deleted.")
    else:
        print("❌ Cancelled.")


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
    print("  6. ✏️  Edit a Transaction")
    print("  7. 🗑️  Delete a Transaction")
    print("  8. 💣 Clear All Data")
    print("  9. 🚪 Exit")
    print("═" * 35)


def main():
    initialize_file()
    print("\n👋 Welcome to Budget Tracker!")

    while True:
        print_menu()
        choice = input("  Enter your choice (1-9): ").strip()

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
            edit_transaction()
        elif choice == "7":
            delete_transaction()
        elif choice == "8":
            delete_all_transactions()
        elif choice == "9":
            print("\n👋 Goodbye! Keep tracking your budget. 💸\n")
            break
        else:
            print("❌ Invalid choice. Please enter a number between 1 and 9.")


if __name__ == "__main__":
    main()