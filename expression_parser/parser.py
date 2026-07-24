"""
AST Node definitions and Parser for mathematical expressions.
Implements a Recursive Descent parser.
"""

from dataclasses import dataclass
from typing import List, Union
from expression_parser.tokenizer import Token, TokenType, TokenizerError, Tokenizer


class ParseError(Exception):
    def __init__(self, message: str, position: int):
        super().__init__(f"Parse error at position {position}: {message}")
        self.position = position


# AST Node Definitions
@dataclass
class ASTNode:
    pass


@dataclass
class NumberNode(ASTNode):
    value: Union[int, float]


@dataclass
class VariableNode(ASTNode):
    name: str


@dataclass
class UnaryOpNode(ASTNode):
    operator: str
    operand: ASTNode


@dataclass
class BinaryOpNode(ASTNode):
    left: ASTNode
    operator: str
    right: ASTNode


@dataclass
class FunctionCallNode(ASTNode):
    name: str
    args: List[ASTNode]


class Parser:
    def __init__(self, tokens: List[Token]):
        self.tokens = tokens
        self.pos = 0

    def _current_token(self) -> Token:
        if self.pos < len(self.tokens):
            return self.tokens[self.pos]
        return self.tokens[-1]

    def _consume(self, expected_type: TokenType) -> Token:
        tok = self._current_token()
        if tok.type != expected_type:
            raise ParseError(
                f"Expected token type '{expected_type.name}', found '{tok.type.name}' ('{tok.value}')",
                tok.position
            )
        self.pos += 1
        return tok

    def parse(self) -> ASTNode:
        if self._current_token().type == TokenType.EOF:
            raise ParseError("Empty expression", 0)

        node = self._expr()

        if self._current_token().type != TokenType.EOF:
            tok = self._current_token()
            raise ParseError(f"Unexpected token '{tok.value}' after full parse", tok.position)

        return node

    def _expr(self) -> ASTNode:
        """expr -> term ((PLUS | MINUS) term)*"""
        node = self._term()

        while self._current_token().type in (TokenType.PLUS, TokenType.MINUS):
            tok = self._current_token()
            self.pos += 1
            right = self._term()
            node = BinaryOpNode(left=node, operator=tok.value, right=right)

        return node

    def _term(self) -> ASTNode:
        """term -> factor ((MULTIPLY | DIVIDE | MODULO) factor)*"""
        node = self._factor()

        while self._current_token().type in (TokenType.MULTIPLY, TokenType.DIVIDE, TokenType.MODULO):
            tok = self._current_token()
            self.pos += 1
            right = self._factor()
            node = BinaryOpNode(left=node, operator=tok.value, right=right)

        return node

    def _factor(self) -> ASTNode:
        """factor -> unary ((POWER) factor)?"""
        node = self._unary()

        if self._current_token().type == TokenType.POWER:
            tok = self._current_token()
            self.pos += 1
            right = self._factor()  # Right associative
            node = BinaryOpNode(left=node, operator=tok.value, right=right)

        return node

    def _unary(self) -> ASTNode:
        """unary -> (PLUS | MINUS) unary | primary"""
        tok = self._current_token()

        if tok.type in (TokenType.PLUS, TokenType.MINUS):
            self.pos += 1
            operand = self._unary()
            return UnaryOpNode(operator=tok.value, operand=operand)

        return self._primary()

    def _primary(self) -> ASTNode:
        """primary -> NUMBER | IDENTIFIER ( '(' args ')' )? | '(' expr ')' """
        tok = self._current_token()

        if tok.type == TokenType.NUMBER:
            self.pos += 1
            return NumberNode(value=tok.value)

        if tok.type == TokenType.IDENTIFIER:
            name = tok.value
            self.pos += 1

            if self._current_token().type == TokenType.LPAREN:
                self.pos += 1
                args = []

                if self._current_token().type != TokenType.RPAREN:
                    args.append(self._expr())
                    while self._current_token().type == TokenType.COMMA:
                        self.pos += 1
                        args.append(self._expr())

                self._consume(TokenType.RPAREN)
                return FunctionCallNode(name=name, args=args)

            return VariableNode(name=name)

        if tok.type == TokenType.LPAREN:
            self.pos += 1
            node = self._expr()
            self._consume(TokenType.RPAREN)
            return node

        raise ParseError(f"Unexpected token '{tok.value}'", tok.position)
