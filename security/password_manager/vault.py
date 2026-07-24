"""
Vault core management module handling authentication and password database operations.
"""

from typing import List, Dict, Optional, Any
from security.password_manager.db import DatabaseManager
from security.password_manager.crypto import (
    generate_salt, hash_master_password, derive_key,
    encrypt_password, decrypt_password, evaluate_password_strength
)


class PasswordVault:
    def __init__(self, db_path: str = "security/password_manager/vault.db"):
        self.db = DatabaseManager(db_path)
        self.key: Optional[bytes] = None

    def is_initialized(self) -> bool:
        """Check if master password has been set up."""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT COUNT(*) as cnt FROM master_auth;")
            row = cursor.fetchone()
            return row["cnt"] > 0

    def setup_master_password(self, master_password: str) -> bool:
        """Set up initial master password."""
        if self.is_initialized():
            return False

        salt = generate_salt()
        pwd_hash = hash_master_password(master_password, salt)

        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO master_auth (id, salt, password_hash) VALUES (1, ?, ?);",
                (salt, pwd_hash)
            )
            conn.commit()

        self.key = derive_key(master_password, salt)
        return True

    def unlock(self, master_password: str) -> bool:
        """Authenticate master password and unlock vault."""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT salt, password_hash FROM master_auth WHERE id = 1;")
            row = cursor.fetchone()
            if not row:
                return False

            salt = row["salt"]
            expected_hash = row["password_hash"]
            computed_hash = hash_master_password(master_password, salt)

            if computed_hash == expected_hash:
                self.key = derive_key(master_password, salt)
                return True

        return False

    def add_password(self, service_name: str, username: str, plaintext_password: str, category: str = "General") -> int:
        """Encrypt and store a new service password in SQLite database."""
        if not self.key:
            raise PermissionError("Vault is locked. Authenticate master password first.")

        nonce, ciphertext = encrypt_password(plaintext_password, self.key)

        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO passwords (service_name, username, nonce, encrypted_password, category)
                VALUES (?, ?, ?, ?, ?);
            """, (service_name, username, nonce, ciphertext, category))
            conn.commit()
            return cursor.lastrowid

    def get_all_passwords(self) -> List[Dict[str, Any]]:
        """Retrieve and decrypt all passwords in vault."""
        if not self.key:
            raise PermissionError("Vault is locked. Authenticate master password first.")

        results = []
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT id, service_name, username, nonce, encrypted_password, category, updated_at FROM passwords;")
            for row in cursor.fetchall():
                decrypted_pwd = decrypt_password(row["nonce"], row["encrypted_password"], self.key)
                strength, score = evaluate_password_strength(decrypted_pwd)
                results.append({
                    "id": row["id"],
                    "service_name": row["service_name"],
                    "username": row["username"],
                    "password": decrypted_pwd,
                    "category": row["category"],
                    "strength": strength,
                    "updated_at": row["updated_at"]
                })

        return results

    def search_passwords(self, query: str) -> List[Dict[str, Any]]:
        """Search passwords by service name or category."""
        all_pwd = self.get_all_passwords()
        q = query.lower()
        return [
            item for item in all_pwd
            if q in item["service_name"].lower() or q in item["category"].lower() or q in item["username"].lower()
        ]

    def delete_password(self, entry_id: int) -> bool:
        """Delete a password record by ID."""
        with self.db.get_connection() as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM passwords WHERE id = ?;", (entry_id,))
            conn.commit()
            return cursor.rowcount > 0
