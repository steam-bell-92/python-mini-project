"""
Tokenizer for mathematical expression parser.
Converts input string into a sequence of Tokens.
"""

from enum import Enum, auto
from typing import List, Optional, Any
from dataclasses import dataclass


class TokenType(Enum):
    NUMBER = auto()
    PLUS = auto()
    MINUS = auto()
    MULTIPLY = auto()
    DIVIDE = auto()
    MODULO = auto()
    POWER = auto()
    LPAREN = auto()
    RPAREN = auto()
    COMMA = auto()
    IDENTIFIER = auto()
    EOF = auto()


@dataclass
class Token:
    type: TokenType
    value: Any
    position: int

    def __repr__(self) -> str:
        return f"Token({self.type.name}, {repr(self.value)}, pos={self.position})"


class TokenizerError(Exception):
    def __init__(self, message: str, position: int):
        super().__init__(f"Tokenizer error at position {position}: {message}")
        self.position = position


class Tokenizer:
    FUNCTIONS = {"sin", "cos", "tan", "sqrt", "abs", "log", "exp", "floor", "ceil", "min", "max", "asin", "acos", "atan"}
    CONSTANTS = {"pi", "e"}

    def __init__(self, expression: str):
        self.expression = expression
        self.pos = 0
        self.length = len(expression)

    def _peek(self, offset: int = 0) -> Optional[str]:
        idx = self.pos + offset
        if idx < self.length:
            return self.expression[idx]
        return None

    def tokenize(self) -> List[Token]:
        tokens: List[Token] = []

        while self.pos < self.length:
            ch = self.expression[self.pos]

            if ch.isspace():
                self.pos += 1
                continue

            start_pos = self.pos

            # Numbers (integers & floats)
            if ch.isdigit() or (ch == '.' and self._peek(1) and self._peek(1).isdigit()):
                num_str = ""
                has_decimal = False

                while self.pos < self.length:
                    curr = self.expression[self.pos]
                    if curr.isdigit():
                        num_str += curr
                        self.pos += 1
                    elif curr == '.' and not has_decimal:
                        has_decimal = True
                        num_str += curr
                        self.pos += 1
                    else:
                        break

                val = float(num_str) if has_decimal else int(num_str)
                tokens.append(Token(TokenType.NUMBER, val, start_pos))
                continue

            # Identifiers (Functions, Constants, Variables)
            if ch.isalpha() or ch == '_':
                ident = ""
                while self.pos < self.length and (self.expression[self.pos].isalnum() or self.expression[self.pos] == '_'):
                    ident += self.expression[self.pos]
                    self.pos += 1

                tokens.append(Token(TokenType.IDENTIFIER, ident, start_pos))
                continue

            # Single & Multi-character operators
            if ch == '+':
                tokens.append(Token(TokenType.PLUS, '+', start_pos))
                self.pos += 1
            elif ch == '-':
                tokens.append(Token(TokenType.MINUS, '-', start_pos))
                self.pos += 1
            elif ch == '*':
                if self._peek(1) == '*':
                    tokens.append(Token(TokenType.POWER, '**', start_pos))
                    self.pos += 2
                else:
                    tokens.append(Token(TokenType.MULTIPLY, '*', start_pos))
                    self.pos += 1
            elif ch == '/':
                tokens.append(Token(TokenType.DIVIDE, '/', start_pos))
                self.pos += 1
            elif ch == '%':
                tokens.append(Token(TokenType.MODULO, '%', start_pos))
                self.pos += 1
            elif ch == '^':
                tokens.append(Token(TokenType.POWER, '^', start_pos))
                self.pos += 1
            elif ch == '(':
                tokens.append(Token(TokenType.LPAREN, '(', start_pos))
                self.pos += 1
            elif ch == ')':
                tokens.append(Token(TokenType.RPAREN, ')', start_pos))
                self.pos += 1
            elif ch == ',':
                tokens.append(Token(TokenType.COMMA, ',', start_pos))
                self.pos += 1
            else:
                raise TokenizerError(f"Unexpected character '{ch}'", start_pos)

        # Insert implicit multiplication tokens where appropriate (e.g. 2(3), 2x, (a)(b))
        processed_tokens: List[Token] = []
        for i, tok in enumerate(tokens):
            processed_tokens.append(tok)
            if i + 1 < len(tokens):
                next_tok = tokens[i + 1]

                # Number followed by LPAREN, IDENTIFIER
                if tok.type == TokenType.NUMBER and next_tok.type in (TokenType.LPAREN, TokenType.IDENTIFIER):
                    processed_tokens.append(Token(TokenType.MULTIPLY, '*', next_tok.position))

                # RPAREN followed by LPAREN, NUMBER, IDENTIFIER
                elif tok.type == TokenType.RPAREN and next_tok.type in (TokenType.LPAREN, TokenType.NUMBER, TokenType.IDENTIFIER):
                    processed_tokens.append(Token(TokenType.MULTIPLY, '*', next_tok.position))

        processed_tokens.append(Token(TokenType.EOF, "", self.length))
        return processed_tokens
