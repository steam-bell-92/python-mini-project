import os

# Color codes
GREEN = '\033[92m'
RED = '\033[91m'
BOLD = '\033[1m'
RESET = '\033[0m'

# Enable ANSI escape sequences on Windows
if os.name == 'nt':
    os.system('')

VICTORY_ASCII = r"""
 __      _______ _____ _______ ____  _______     __
 \ \    / /_   _/ ____|__   __/ __ \|  __ \ \   / /
  \ \  / /  | || |       | | | |  | | |__) \ \_/ / 
   \ \/ /   | || |       | | | |  | |  _  / \   /  
    \  /   _| || |____   | | | |__| | | \ \  | |   
     \/   |_____\_____|  |_|  \____/|_|  \_\ |_|   
"""

GAME_OVER_ASCII = r"""
   ____    _     __  __  _____    ___   __     __ _____  ____  
  / ___|  / \   |  \/  || ____|  / _ \  \ \   / /| ____||  _ \ 
 | |  _  / _ \  | |\/| ||  _|   | | | |  \ \ / / |  _|  | |_) |
 | |_| |/ ___ \ | |  | || |___  | |_| |   \ V /  | |___ |  _ < 
  \____/_/   \_\|_|  |_||_____|  \___/     \_/   |_____||_| \_\
"""

def print_victory_banner():
    print(f"{BOLD}{GREEN}{VICTORY_ASCII}{RESET}")

def print_game_over_banner():
    print(f"{BOLD}{RED}{GAME_OVER_ASCII}{RESET}")
