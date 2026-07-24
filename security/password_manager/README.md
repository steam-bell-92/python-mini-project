# Advanced Password Manager with SQLite Database

A zero-external-dependency password manager with SQLite persistence, PBKDF2 key derivation, dynamic nonce stream encryption, and password strength analysis.

## Features

- **Master Authentication**: Hashes and salts master password via PBKDF2 (100,000 iterations).
- **SQLite Storage**: Encrypted credential storage in persistent SQLite database (`vault.db`).
- **Zero Dependencies**: Pure Python standard library implementation (`sqlite3`, `hashlib`, `secrets`, `getpass`).
- **Strength Analysis**: Evaluates password complexity and strength level.

## Usage

```bash
python security/password_manager/main.py
```
