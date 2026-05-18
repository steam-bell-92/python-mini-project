# 🎮 Conway's Game of Life

A simple cellular automaton where patterns evolve from basic rules.

## What is It?

A grid of cells that are either alive (██) or dead (  ). Each generation, cells change based on their neighbors:

1. **Survives** - Live cell with 2-3 neighbors
2. **Born** - Dead cell with exactly 3 neighbors
3. **Dies** - Everything else

## How to Run

```bash
python3 Conways-Game-of-Life.py
```

No external dependencies needed!

## Quick Start

1. Select "Load pattern" → Pick "Glider"
2. Select "Run simulation" → Speed 8
3. Watch it move diagonally!

## Menu Options

- **Load pattern** - Choose from 7+ presets (Glider, Blinker, Block, Random, etc.)
- **Run simulation** - Watch it evolve in real-time
- **Edit grid** - Manually place cells with `c x y`
- **Show grid** - View current state
- **Clear** - Reset everything

## Edit Commands

```
c x y  →  Toggle cell at (x,y)
r      →  Randomize grid
c      →  Clear grid
s      →  Step one generation
b      →  Back to menu
```

## Built-in Patterns

| Name | Behavior |
|------|----------|
| **Glider** | Moves diagonally |
| **Blinker** | Flashes back and forth |
| **Block** | Never changes (still life) |
| **Beehive** | Stable hexagon |
| **Toad** | Oscillates |
| **Beacon** | Blinks |
| **Random** | Fill with random cells |

## Why It's Cool

- Simple rules create complex behavior
- Demonstrates **emergence** - complexity from simplicity
- Turing complete (can compute anything!)
- Beautiful and unpredictable

## Tips

- Start with Glider to see movement
- Use Random and let it evolve
- Try Blinker to see oscillation
- Slow down the speed to see details
- Edit mode lets you create custom patterns

---

**Enjoy exploring emergent behavior! 🎮**
