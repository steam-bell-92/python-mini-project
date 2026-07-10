import pygame
import math
import itertools
import random
import sys

pygame.init()
WIDTH, HEIGHT = 800, 600
WIN = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("TSP Visualizer")

# Colors
WHITE = (255, 255, 255)
BLACK = (10, 10, 10)
GRAY = (50, 50, 50)
RED = (255, 100, 100)
GREEN = (100, 255, 100)
BLUE = (100, 100, 255)
YELLOW = (255, 255, 100)

font = pygame.font.SysFont("comicsansms", 20)
small_font = pygame.font.SysFont("comicsansms", 15)

def get_distance(p1, p2):
    return math.hypot(p1[0] - p2[0], p1[1] - p2[1])

def path_distance(nodes, order):
    dist = 0
    for i in range(len(order) - 1):
        dist += get_distance(nodes[order[i]], nodes[order[i+1]])
    if len(order) > 0:
        dist += get_distance(nodes[order[-1]], nodes[order[0]])
    return dist

def draw_text(win, text, x, y, color=WHITE):
    text_surface = font.render(text, True, color)
    win.blit(text_surface, (x, y))

def draw_nodes(win, nodes, order=[], current_edge=None, best_dist=0):
    win.fill(BLACK)
    
    # Draw instructions
    draw_text(win, "Click to add nodes | [R] Random | [C] Clear | [1] Nearest Neighbor | [2] Brute Force", 10, 10, GRAY)
    draw_text(win, f"Nodes: {len(nodes)}", 10, 40, WHITE)
    if best_dist > 0:
        draw_text(win, f"Distance: {best_dist:.2f}", 10, 70, YELLOW)

    # Draw the path
    if len(order) > 1:
        for i in range(len(order) - 1):
            pygame.draw.line(win, GREEN, nodes[order[i]], nodes[order[i+1]], 2)
        pygame.draw.line(win, GREEN, nodes[order[-1]], nodes[order[0]], 2)
        
    if current_edge:
        pygame.draw.line(win, RED, current_edge[0], current_edge[1], 2)

    # Draw nodes
    for i, node in enumerate(nodes):
        color = BLUE if i == 0 else WHITE
        pygame.draw.circle(win, color, node, 6)
        
    pygame.display.update()

def solve_nearest_neighbor(nodes):
    if len(nodes) < 2:
        return [], 0

    unvisited = list(range(1, len(nodes)))
    current = 0
    order = [0]
    
    while unvisited:
        # visualization step
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
                
        nearest = min(unvisited, key=lambda x: get_distance(nodes[current], nodes[x]))
        
        # Animate the connection being tested
        draw_nodes(
            WIN,
            nodes,
            order,
            current_edge=(nodes[current], nodes[nearest]),
            best_dist=path_distance(nodes, order)
        )
        pygame.time.delay(100)
        
        order.append(nearest)
        unvisited.remove(nearest)
        current = nearest
        
    best_dist = path_distance(nodes, order)
    draw_nodes(WIN, nodes, order, best_dist=best_dist)
    return order, best_dist
    
def solve_brute_force(nodes):
    if len(nodes) < 2:
        return [], 0
    if len(nodes) > 10:
        print("Too many nodes for brute force! (Max 10 recommended)")
        return [], 0
        
    min_dist = float('inf')
    best_order = []
    
    # fix the start node to 0 to reduce permutations by N
    nodes_idx = list(range(1, len(nodes)))
    count = 0
    total = math.factorial(len(nodes_idx))
    
    for perm in itertools.permutations(nodes_idx):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
                
        current_order = [0] + list(perm)
        dist = path_distance(nodes, current_order)
        if dist < min_dist:
            min_dist = dist
            best_order = current_order

        count += 1
        if count % max(1, total // 100) == 0:
            draw_nodes(
                WIN,
                nodes,
                best_order,
                current_edge=(nodes[current_order[-1]], nodes[current_order[0]]),
                best_dist=min_dist
            )

    draw_nodes(WIN, nodes, best_order, best_dist=min_dist)
    return best_order, min_dist

def main():
    nodes = []
    order = []
    best_dist = 0
    run = True
    
    while run:
        draw_nodes(WIN, nodes, order, best_dist=best_dist)
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                
            if event.type == pygame.MOUSEBUTTONDOWN:
                x, y = pygame.mouse.get_pos()
                nodes.append((x, y))
                order = []
                best_dist = 0
                
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_c:
                    nodes = []
                    order = []
                    best_dist = 0          
                elif event.key == pygame.K_r:
                    nodes = []
                    for _ in range(10):
                        x = random.randint(50, WIDTH - 50)
                        y = random.randint(100, HEIGHT - 50)
                        nodes.append((x, y))
                    order = []
                    best_dist = 0
                elif event.key == pygame.K_1:
                    if len(nodes) > 1:
                        order, best_dist = solve_nearest_neighbor(nodes
                                                                  
                elif event.key == pygame.K_2:
                    if len(nodes) > 1:
                        if len(nodes) > 10:
                            draw_text(WIN, "Too many nodes for Brute Force! Use <= 10.", 10, 100, RED)
                            pygame.display.update()
                            pygame.time.delay(2000)
                        else:
                            order, best_dist = solve_brute_force(nodes

    pygame.quit()
                               
if __name__ == "__main__":
    main()
