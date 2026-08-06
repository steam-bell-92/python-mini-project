import pygame
from loader import Loader
from input_handler import InputHandler
from renderer import Renderer
from board import Board
from ai import AiEngine


def main():
    pygame.init()
    screen = pygame.display.set_mode((720, 720))
    loader = Loader()

    board = Board()
    input_handler = InputHandler(board)
    ai = AiEngine(board)
    renderer = Renderer(input_handler, board, loader)
    renderer.draw(screen)

    running = True
    while running:

        for event in pygame.event.get():

            if event.type == pygame.QUIT:
                running = False

            elif event.type == pygame.MOUSEBUTTONDOWN:

                if not board.game_over():

                    input_handler.get_mouse_pos()

                    if not board.game_over():
                        ai.computer_move()

        renderer.draw(screen)

        if board.game_over():
            pygame.time.wait(5000)
            running = False


if __name__ == "__main__":
    main()
