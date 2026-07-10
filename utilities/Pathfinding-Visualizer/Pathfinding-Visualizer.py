import os
import time

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def print_grid(grid):
    for row in grid:
        print(" ".join(row))
    print()

def get_neighbors(node, rows, cols):
    r, c = node
    neighbors = []
    if r > 0: neighbors.append((r - 1, c))
    if r < rows - 1: neighbors.append((r + 1, c))
    if c > 0: neighbors.append((r, c - 1))
    if c < cols - 1: neighbors.append((r, c + 1))
    return neighbors

def run_dijkstra(grid, start, end):
    rows, cols = len(grid), len(grid[0])
    distances = { (r, c): float('inf') for r in range(rows) for c in range(cols) }
    distances[start] = 0
    previous = { (r, c): None for r in range(rows) for c in range(cols) }
    unvisited = [(r, c) for r in range(rows) for c in range(cols)]
    
    while unvisited:
        unvisited.sort(key=lambda node: distances[node])
        current = unvisited.pop(0)
        
        if distances[current] == float('inf'):
            break
            
        if grid[current[0]][current[1]] == '█':
            continue
            
        if current == end:
            break
            
        for neighbor in get_neighbors(current, rows, cols):
            if neighbor in unvisited and grid[neighbor[0]][neighbor[1]] != '█':
                alt = distances[current] + 1
                if alt < distances[neighbor]:
                    distances[neighbor] = alt
                    previous[neighbor] = current
                    
                    if neighbor != end and neighbor != start:
                        grid[neighbor[0]][neighbor[1]] = '.'
                        clear_screen()
                        print_grid(grid)
                        time.sleep(0.05)
                        
    # Reconstruct path
    path = []
    curr = end
    while previous[curr] is not None:
        path.append(curr)
        curr = previous[curr]

    if curr != start:
        return False 
        
    for p in reversed(path):
        if p != end and p != start:
            grid[p[0]][p[1]] = '*'
            clear_screen()
            print_grid(grid)
            time.sleep(0.05)
    return True

def main():
    rows, cols = 10, 20
    grid = [[' ' for _ in range(cols)] for _ in range(rows)]
    
    start = (1, 1)
    end = (8, 18)
    
    grid[start[0]][start[1]] = 'S'
    grid[end[0]][end[1]] = 'E'
    
    # Add some walls
    for i in range(2, 8):
        grid[i][6] = '█'
    for i in range(1, 7):
        grid[i][12] = '█'
       
    print("🗺️ Pathfinding Visualizer (Terminal Edition)")
    print("S = Start, E = End, █ = Wall, . = Visited, * = Path")
    input("Press Enter to run Dijkstra's Algorithm...")

    path_found = run_dijkstra(grid, start, end)
    if path_found:
        print("✅ Finished Pathfinding! Path found.")
    else:
        print("❌ No path exists between Start and End!")
    

if __name__ == "__main__":
    main()
