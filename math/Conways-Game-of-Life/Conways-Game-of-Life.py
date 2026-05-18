"""
Conway's Game of Life - Watch patterns emerge from simple rules!

Three simple rules create infinite complexity:
  1. Live cell with 2-3 neighbors → survives
  2. Dead cell with exactly 3 neighbors → becomes alive
  3. All others → die

No external libraries needed - just Python!
"""

import os
import time
import random


class GameOfLife:
    
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.grid = [[False for _ in range(width)] for _ in range(height)]
        self.generation = 0
        self.population_history = []
        
        self.patterns = {
            'glider': ('Glider', 'Moving spaceship', [(0, 1), (1, 2), (2, 0), (2, 1), (2, 2)]),
            'blinker': ('Blinker', 'Flashes back and forth', [(0, 0), (0, 1), (0, 2)]),
            'toad': ('Toad', 'Flips up and down', [(0, 1), (0, 2), (0, 3), (1, 0), (1, 1), (1, 2)]),
            'block': ('Block', 'Stays still forever', [(0, 0), (0, 1), (1, 0), (1, 1)]),
            'beehive': ('Beehive', 'Stable hexagon', [(0, 1), (0, 2), (1, 0), (1, 3), (2, 1), (2, 2)]),
            'beacon': ('Beacon', 'Blinks', [(0, 0), (0, 1), (1, 0), (2, 2), (2, 3), (3, 2), (3, 3)]),
            'random': ('Random', 'Mix it up!', None),
        }
    
    def set_cell(self, x, y, alive):
        if 0 <= x < self.width and 0 <= y < self.height:
            self.grid[y][x] = alive
    
    def get_cell(self, x, y):
        x = x % self.width
        y = y % self.height
        return self.grid[y][x]
    
    def count_neighbors(self, x, y):
        count = 0
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                if dx == 0 and dy == 0:
                    continue
                if self.get_cell(x + dx, y + dy):
                    count += 1
        return count
    
    def step(self):
        new_grid = [[False for _ in range(self.width)] for _ in range(self.height)]
        
        for y in range(self.height):
            for x in range(self.width):
                neighbors = self.count_neighbors(x, y)
                alive = self.grid[y][x]
                
                if alive and neighbors in [2, 3]:
                    new_grid[y][x] = True  # Survives!
                elif not alive and neighbors == 3:
                    new_grid[y][x] = True  # Birth!
        
        self.grid = new_grid
        self.generation += 1
        pop = sum(sum(row) for row in self.grid)
        self.population_history.append(pop)
        return pop
    
    def render(self):
        output = "\n"
        output += f"╔{'═' * (self.width * 2 - 1)}╗\n"
        
        for row in self.grid:
            output += "║"
            for cell in row:
                output += "██" if cell else "  "
            output += "║\n"
        
        output += f"╚{'═' * (self.width * 2 - 1)}╝\n"
        
        pop = sum(sum(row) for row in self.grid)
        output += f"Generation: {self.generation:5d} | Population: {pop:4d}\n"
        return output
    
    def load_pattern(self, pattern_name, x_offset=0, y_offset=0):
        if pattern_name not in self.patterns:
            return False
        
        name, desc, cells = self.patterns[pattern_name]
        
        if pattern_name == 'random':
            for y in range(self.height):
                for x in range(self.width):
                    self.grid[y][x] = random.choice([True, False])
            return True
        
        for x, y in cells:
            px = (x + x_offset) % self.width
            py = (y + y_offset) % self.height
            self.set_cell(px, py, True)
        
        return True
    
    def clear(self):
        self.grid = [[False for _ in range(self.width)] for _ in range(self.height)]
        self.generation = 0
        self.population_history = []


def clear_screen():
    os.system('clear' if os.name != 'nt' else 'cls')


def show_patterns(game):
    clear_screen()
    print("=" * 60)
    print("PATTERNS")
    print("=" * 60)
    
    patterns = list(game.patterns.keys())
    for i, name in enumerate(patterns, 1):
        title, desc, _ = game.patterns[name]
        print(f"{i}. {title:<20} - {desc}")
    
    print(f"{len(patterns) + 1}. Back")
    print("=" * 60)
    
    try:
        choice = int(input("Pick one: "))
        if choice == len(patterns) + 1:
            return
        if 1 <= choice <= len(patterns):
            game.clear()
            game.load_pattern(patterns[choice - 1])
            print(f"✓ Loaded {game.patterns[patterns[choice - 1]][0]}")
            input("Press Enter...")
    except:
        print("Invalid!")
        input("Press Enter...")


def run_sim(game):
    print("\n" + "=" * 60)
    print("SIMULATION (Press CTRL+C to stop)")
    print("=" * 60)
    
    try:
        speed = input("Speed (1-10, default 5): ").strip() or "5"
        speed = max(1, min(10, int(speed)))
        delay = (11 - speed) / 10.0
        
        clear_screen()
        
        while True:
            print(game.render())
            pop = game.step()
            
            if pop == 0:
                print("⚰️  All dead. Game over.")
                break
            
            time.sleep(delay)
    
    except KeyboardInterrupt:
        print("\n\nStopped!")
    
    input("\nPress Enter...")


def edit_grid(game):
    while True:
        print(game.render())
        print("Commands: c x y (toggle), r (random), c (clear), s (step), b (back)")
        
        cmd = input("> ").strip().lower()
        
        if cmd == 'b':
            break
        elif cmd == 'r':
            for y in range(game.height):
                for x in range(game.width):
                    game.set_cell(x, y, random.choice([True, False]))
            print("Randomized!")
        elif cmd == 'c':
            game.clear()
            print("Cleared!")
        elif cmd == 's':
            game.step()
            print(f"Generation {game.generation}")
        elif cmd.startswith('c '):
            try:
                _, x, y = cmd.split()
                x, y = int(x), int(y)
                game.set_cell(x, y, not game.get_cell(x, y))
                print(f"Toggled ({x}, {y})")
            except:
                print("Use: c x y")


def main():
    try:
        w = int(input("Grid width [40]: ") or "40")
        h = int(input("Grid height [25]: ") or "25")
    except:
        w, h = 40, 25
    
    game = GameOfLife(w, h)
    
    while True:
        clear_screen()
        print("=" * 60)
        print("CONWAY'S GAME OF LIFE")
        print("=" * 60)
        print("\n1. Load pattern")
        print("2. Run simulation")
        print("3. Edit grid")
        print("4. Show grid")
        print("5. Clear")
        print("6. Quit")
        print("=" * 60)
        
        choice = input("\nChoice: ").strip()
        
        if choice == '1':
            show_patterns(game)
        elif choice == '2':
            run_sim(game)
        elif choice == '3':
            edit_grid(game)
        elif choice == '4':
            clear_screen()
            print(game.render())
            input("Press Enter...")
        elif choice == '5':
            game.clear()
            print("✓ Cleared")
            input("Press Enter...")
        elif choice == '6':
            print("\n✨ Thanks for playing! ✨\n")
            break
        else:
            print("Invalid!")
            input("Press Enter...")


if __name__ == "__main__":
    main()
