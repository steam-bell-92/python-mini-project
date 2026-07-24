import os
import sys
import tempfile
import pytest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from security.password_manager import (
    PasswordVault, DatabaseManager,
    encrypt_password, decrypt_password, derive_key,
    generate_salt, evaluate_password_strength
)


def test_crypto_encryption_decryption():
    salt = generate_salt()
    key = derive_key("master_pass123", salt)
    plaintext = "SecretP@ssw0rd!"

    nonce, ciphertext = encrypt_password(plaintext, key)
    assert ciphertext != plaintext.encode('utf-8')

    decrypted = decrypt_password(nonce, ciphertext, key)
    assert decrypted == plaintext


def test_password_strength_evaluation():
    level_weak, _ = evaluate_password_strength("abc")
    assert "Weak" in level_weak

    level_strong, _ = evaluate_password_strength("P@ssw0rd1234567!")
    assert "Strong" in level_strong


def test_vault_flow():
    with tempfile.TemporaryDirectory() as tmpdir:
        db_path = os.path.join(tmpdir, "test_vault.db")

        try:
            vault = PasswordVault(db_path)
            assert not vault.is_initialized()

            # Setup master password
            assert vault.setup_master_password("MasterKey!123")
            assert vault.is_initialized()

            # Lock and try invalid password
            vault_wrong = PasswordVault(db_path)
            assert not vault_wrong.unlock("WrongPassword")

            # Unlock with valid password
            vault_valid = PasswordVault(db_path)
            assert vault_valid.unlock("MasterKey!123")

            # Add password
            entry_id = vault_valid.add_password("GitHub", "myuser", "MyS3cretPass!", "Dev")
            assert entry_id > 0

            # Retrieve passwords
            passwords = vault_valid.get_all_passwords()
            assert len(passwords) == 1
            assert passwords[0]["service_name"] == "GitHub"
            assert passwords[0]["password"] == "MyS3cretPass!"

            # Search passwords
            search_res = vault_valid.search_passwords("git")
            assert len(search_res) == 1

            # Delete password
            assert vault_valid.delete_password(entry_id)
            assert len(vault_valid.get_all_passwords()) == 0
        finally:
            import gc
            gc.collect()
