"""
Cryptographic utility module using PBKDF2 key derivation and stream cipher encryption.
Zero external dependencies, built using standard library hashlib & secrets.
"""

import hashlib
import secrets
from typing import Tuple


def generate_salt(length: int = 16) -> bytes:
    """Generate cryptographically secure random salt."""
    return secrets.token_bytes(length)


def derive_key(master_password: str, salt: bytes, iterations: int = 100_000) -> bytes:
    """Derive 256-bit encryption key from master password using PBKDF2 HMAC SHA-256."""
    return hashlib.pbkdf2_hmac('sha256', master_password.encode('utf-8'), salt, iterations, dklen=32)


def hash_master_password(master_password: str, salt: bytes) -> bytes:
    """Hash master password for storage & verification."""
    return derive_key(master_password, salt, iterations=100_000)


def encrypt_password(plaintext: str, key: bytes) -> Tuple[bytes, bytes]:
    """
    Encrypt plaintext password using derived key and unique nonce via SHA-256 keystream.
    Returns (nonce, ciphertext).
    """
    nonce = secrets.token_bytes(16)
    plaintext_bytes = plaintext.encode('utf-8')
    keystream = bytearray()

    # Generate keystream block by block
    block_num = 0
    while len(keystream) < len(plaintext_bytes):
        block = hashlib.sha256(key + nonce + block_num.to_bytes(4, 'big')).digest()
        keystream.extend(block)
        block_num += 1

    ciphertext = bytes(p ^ k for p, k in zip(plaintext_bytes, keystream[:len(plaintext_bytes)]))
    return nonce, ciphertext


def decrypt_password(nonce: bytes, ciphertext: bytes, key: bytes) -> str:
    """Decrypt ciphertext back to plaintext string."""
    keystream = bytearray()
    block_num = 0

    while len(keystream) < len(ciphertext):
        block = hashlib.sha256(key + nonce + block_num.to_bytes(4, 'big')).digest()
        keystream.extend(block)
        block_num += 1

    plaintext_bytes = bytes(c ^ k for c, k in zip(ciphertext, keystream[:len(ciphertext)]))
    return plaintext_bytes.decode('utf-8')


def evaluate_password_strength(password: str) -> Tuple[str, int]:
    """
    Analyze password strength on scale 0-100 and return strength level string.
    """
    score = 0
    if len(password) >= 8:
        score += 20
    if len(password) >= 12:
        score += 20
    if any(c.isupper() for c in password):
        score += 15
    if any(c.islower() for c in password):
        score += 15
    if any(c.isdigit() for c in password):
        score += 15
    if any(c in "!@#$%^&*()_+-=[]{}|;:,.<>?" for c in password):
        score += 15

    if score < 40:
        return "Weak 🔴", score
    elif score < 75:
        return "Medium 🟡", score
    else:
        return "Strong 🟢", score
