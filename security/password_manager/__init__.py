"""
__init__.py for security/password_manager module.
"""

from security.password_manager.vault import PasswordVault
from security.password_manager.db import DatabaseManager
from security.password_manager.crypto import (
    generate_salt, derive_key, hash_master_password,
    encrypt_password, decrypt_password, evaluate_password_strength
)

__all__ = [
    "PasswordVault", "DatabaseManager",
    "generate_salt", "derive_key", "hash_master_password",
    "encrypt_password", "decrypt_password", "evaluate_password_strength"
]
