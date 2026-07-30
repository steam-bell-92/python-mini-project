import pygame
import chess
class Board:
    def __init__(self):
        self.board=chess.Board()
    def convert_index_to_square(self,x,y):
        col=x//90
        row=y//90
        file=chr(ord('a')+col)
        rank=str(8-row)
        square=file+rank
        return square
    def get_piece_in_square(self,square):
        square_index = chess.parse_square(square)
        piece = self.board.piece_at(square_index)
        return piece
    def get_valid_moves(self, square):
        square_index = chess.parse_square(square)

        valid_moves_for_square = [
            chess.square_name(m.to_square)
            for m in self.board.legal_moves
            if m.from_square == square_index
        ]

        return valid_moves_for_square     
    def make_move(self, initial_square, final_square):
        
            my_move = chess.Move.from_uci(
                initial_square + final_square
            )

            if my_move in self.board.legal_moves:
                self.board.push(my_move)
                return True
        
            

            return False
    def square_to_index(self, square):
        col = ord(square[0]) - ord('a')
        row = 8 - int(square[1])

        return (row, col)
    def get_fen(self):
        return self.board.fen()

    def checkmate(self):
        return self.board.is_checkmate()
    def stalemate(self):
        return self.board.is_stalemate()

    def game_over(self):
        return self.board.is_game_over()
        
