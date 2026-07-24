"""
Database initialization and connection management for SQLite Password Manager.
"""

import sqlite3
import os
from typing import Optional


class DatabaseManager:
    def __init__(self, db_path: str = "security/password_manager/vault.db"):
        self.db_path = db_path
        os.makedirs(os.path.dirname(os.path.abspath(self.db_path)), exist_ok=True)
        self.init_db()

    def get_connection(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn

    def init_db(self):
        """Create master authentication and password storage tables."""
        with self.get_connection() as conn:
            cursor = conn.cursor()

            # Master auth table for master password hash & salt
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS master_auth (
                    id INTEGER PRIMARY KEY CHECK (id = 1),
                    salt BLOB NOT NULL,
                    password_hash BLOB NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)

            # Encrypted vault passwords table
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS passwords (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    service_name TEXT NOT NULL,
                    username TEXT NOT NULL,
                    nonce BLOB NOT NULL,
                    encrypted_password BLOB NOT NULL,
                    category TEXT DEFAULT 'General',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            conn.commit()
            cursor.close()
