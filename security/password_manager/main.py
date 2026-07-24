"""
Interactive Terminal UI for Password Manager with SQLite Database.
"""

import sys
import getpass
from security.password_manager import PasswordVault


def main():
    print("=" * 60)
    print("  🔐 Advanced Password Manager (SQLite Vault)")
    print("=" * 60)

    vault = PasswordVault()

    if not vault.is_initialized():
        print("\n✨ Welcome! Setting up master vault password.")
        pwd = getpass.getpass("🔑 Create Master Password: ").strip()
        pwd_confirm = getpass.getpass("🔑 Confirm Master Password: ").strip()

        if pwd != pwd_confirm:
            print("❌ Passwords do not match. Exiting.")
            sys.exit(1)

        if not pwd:
            print("❌ Master password cannot be empty.")
            sys.exit(1)

        vault.setup_master_password(pwd)
        print("✅ Master password created and vault initialized successfully!\n")
    else:
        pwd = getpass.getpass("🔑 Enter Master Password to Unlock Vault: ").strip()
        if not vault.unlock(pwd):
            print("❌ Incorrect Master Password. Vault remains locked.")
            sys.exit(1)
        print("✅ Vault unlocked successfully!\n")

    while True:
        print("\n" + "-" * 40)
        print("1 🔑 View / Search Passwords")
        print("2 ➕ Add New Password")
        print("3 ❌ Delete Password Entry")
        print("4 🚪 Lock & Exit")
        print("-" * 40)

        choice = input("🎯 Choose option (1-4): ").strip()

        if choice == "1":
            query = input("🔍 Enter search term (or press Enter to view all): ").strip()
            records = vault.search_passwords(query) if query else vault.get_all_passwords()

            if not records:
                print("📭 No matching password entries found.")
            else:
                print(f"\n📋 Password Records ({len(records)} found):")
                print(f"{'ID':<4} | {'Service':<20} | {'Username':<20} | {'Password':<20} | {'Strength':<10}")
                print("-" * 85)
                for r in records:
                    print(f"{r['id']:<4} | {r['service_name']:<20} | {r['username']:<20} | {r['password']:<20} | {r['strength']:<10}")

        elif choice == "2":
            service = input("🌐 Service Name (e.g. GitHub): ").strip()
            username = input("👤 Username/Email: ").strip()
            password = getpass.getpass("🔒 Password: ").strip()
            category = input("🏷️ Category (default: General): ").strip() or "General"

            if not service or not username or not password:
                print("⚠️ Service, username, and password fields are required.")
                continue

            entry_id = vault.add_password(service, username, password, category)
            print(f"✅ Saved password entry (ID: {entry_id})!")

        elif choice == "3":
            try:
                entry_id = int(input("🗑️ Enter Entry ID to delete: ").strip())
                if vault.delete_password(entry_id):
                    print(f"✅ Deleted entry ID {entry_id} successfully.")
                else:
                    print(f"❌ Entry ID {entry_id} not found.")
            except ValueError:
                print("⚠️ Invalid ID format.")

        elif choice == "4":
            print("\n👋 Vault locked. Goodbye!\n")
            break
        else:
            print("⚠️ Invalid option.")


if __name__ == "__main__":
    main()
