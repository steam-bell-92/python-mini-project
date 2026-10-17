import pygame

PIXEL_WIDTH = 90

class InputHandler:
    def __init__(self, board):
        self.board = board
        self.selected = None
        self.valid_moves = []

    def get_mouse_pos(self):
        x, y = pygame.mouse.get_pos()

        square = self.board.convert_index_to_square(x, y)

        # First click
        if self.selected is None:

            if self.board.get_piece_in_square(square) and self.board.get_piece_in_square(square).color:

                self.selected = square
                self.valid_moves = self.board.get_valid_moves(square)

        # Second click
        else:

            # User clicked a legal destination
            if square in self.valid_moves and self.board.board.turn:

                move = self.board.make_move(self.selected, square)

                if move:
                    self.selected = None
                    self.valid_moves = []

            # User clicked another piece
            elif self.board.get_piece_in_square(square) and self.board.get_piece_in_square(square).color:

                self.selected = square
                self.valid_moves = self.board.get_valid_moves(square)
