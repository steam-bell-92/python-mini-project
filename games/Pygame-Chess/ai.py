from stockfish import Stockfish

class AiEngine:
    def __init__(self, board):
        self.sf = Stockfish(path="stockfish")
        self.sf.set_elo_rating(2000)
        self.board = board

    def computer_move(self):
        fen = self.board.get_fen()
        self.sf.set_fen_position(fen)
        computerMove = self.sf.get_best_move()

        if not self.board.board.turn:
            self.board.make_move(
                computerMove[:2],
                computerMove[2:]
            )
