# 💰 Budget Tracker CLI

A beginner-friendly command-line tool to track your **income and expenses**, view **balance summaries**, and analyze **category-wise spending** — all saved persistently in a CSV file.

---

## 🚀 Features

- ➕ Add income entries with category and description
- ➖ Add expense entries with category and description
- 📋 View all transactions in a clean formatted table
- 📊 View overall summary (total income, expenses, balance)
- 🗂️ Category-wise breakdown of income and expenses
- 🗑️ Clear all data with confirmation prompt
- 💾 Data persists across sessions via `budget_data.csv`

---

## 🛠️ Requirements

- Python 3.x
- No external libraries needed (uses only built-in modules)

---

## ▶️ How to Run

cd utilities/Budget-Tracker
python budget_tracker.py

---

## 🎮 Menu Options

1. ➕ Add Income
2. ➖ Add Expense
3. 📋 View All Transactions
4. 📊 View Summary
5. 🗂️  Category-wise Breakdown
6. 🗑️  Clear All Data
7. 🚪 Exit

---

## 📸 Sample Output

Adding an Expense:
Category (e.g. Food, Rent, Salary): Food
Description (optional): Lunch
Amount (₹): 150
✅ Expense of ₹150.00 added under 'Food'.

Budget Summary:
Total Income  :      ₹5000.00
Total Expenses:       ₹950.00
✅ Balance    :      ₹4050.00

---

## 📁 File Structure

Budget-Tracker/
├── budget_tracker.py   
├── budget_data.csv     
└── README.md

Note: budget_data.csv is auto-generated on first run.

---

## 👤 Author

Contributed as part of GSSoC (GirlScript Summer of Code)
Repository: https://github.com/steam-bell-92/python-mini-project