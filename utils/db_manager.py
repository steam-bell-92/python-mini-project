import os
import sqlite3
from datetime import datetime
from typing import List, Tuple, Optional

# Resolve database path to root directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, "data.db")


def get_connection() -> sqlite3.Connection:
    """Returns a connection to the SQLite database."""
    conn = sqlite3.connect(DB_PATH)
    return conn


def init_db() -> None:
    """Initializes the database and creates high_scores table if it doesn't exist."""
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS high_scores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            game_name TEXT NOT NULL,
            player_name TEXT NOT NULL,
            score INTEGER NOT NULL,
            timestamp TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()


def save_score(game_name: str, player_name: str, score: int) -> None:
    """Saves a player's score to the database."""
    init_db()
    conn = get_connection()
    cursor = conn.cursor()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    cursor.execute("""
        INSERT INTO high_scores (game_name, player_name, score, timestamp)
        VALUES (?, ?, ?, ?)
    """, (game_name, player_name.strip(), score, timestamp))
    conn.commit()
    conn.close()


def get_top_scores(game_name: str, limit: int = 5) -> List[Tuple[str, int, str]]:
    """Retrieves top scores for a specific game."""
    init_db()
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT player_name, score, timestamp
        FROM high_scores
        WHERE game_name = ?
        ORDER BY score DESC, timestamp ASC
        LIMIT ?
    """, (game_name, limit))
    results = cursor.fetchall()
    conn.close()
    return results


def get_all_scores(game_name: str) -> List[Tuple[str, int, str]]:
    """Retrieves all scores for a specific game."""
    init_db()
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT player_name, score, timestamp
        FROM high_scores
        WHERE game_name = ?
        ORDER BY score DESC, timestamp ASC
    """, (game_name,))
    results = cursor.fetchall()
    conn.close()
    return results


def clear_scores(game_name: str) -> int:
    """Clears all scores for a specific game. Returns number of deleted rows."""
    init_db()
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM high_scores WHERE game_name = ?", (game_name,))
    deleted = cursor.rowcount
    conn.commit()
    conn.close()
    return deleted
