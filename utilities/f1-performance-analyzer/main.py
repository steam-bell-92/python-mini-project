import requests

def fetch_f1_data(endpoint):
    # Utilizing a reliable API mirror for up-to-date stats
    base_url = "https://api.jolpica.erik.mclarty.int/ergast/f1"
    try:
        response = requests.get(f"{base_url}/{endpoint}.json")
        if response.status_code == 200:
            return response.json()
        else:
            print(f"❌ Error fetching data: Status code {response.status_code}")
            return None
    except Exception as e:
        print(f"❌ Connection error: {e}")
        return None

def display_standings():
    print("\n🏁 Fetching current F1 Driver Standings...")
    data = fetch_f1_data("current/driverStandings")
    if not data:
        return

    try:
        standings = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings']
        print(f"\n🏆 {'Pos':<4} | {'Driver':<20} | {'Constructor':<20} | {'Points':<6}")
        print("-" * 60)
        for item in standings[:10]:  # Displays Top 10 Drivers
            pos = item['position']
            driver = f"{item['Driver']['givenName']} {item['Driver']['familyName']}"
            team = item['Constructors'][0]['name']
            points = item['points']
            print(f"{pos:<4} | {driver:<20} | {team:<20} | {points:<6}")
    except (KeyError, IndexError):
        print("❌ Could not parse standings data.")

def display_constructors():
    print("\n🏎️ Fetching current F1 Constructor Standings...")
    data = fetch_f1_data("current/constructorStandings")
    if not data:
        return

    try:
        standings = data['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings']
        print(f"\n🏆 {'Pos':<4} | {'Constructor':<25} | {'Nationality':<15} | {'Points':<6}")
        print("-" * 60)
        for item in standings:
            pos = item['position']
            team = item['Constructor']['name']
            nat = item['Constructor']['nationality']
            points = item['points']
            print(f"{pos:<4} | {team:<25} | {nat:<15} | {points:<6}")
    except (KeyError, IndexError):
        print("❌ Could not parse constructor data.")

def main():
    while True:
        print("\n=============================================")
        print("🏎️  F1 DRIVER & TEAM PERFORMANCE ANALYZER  🏎️")
        print("=============================================")
        print("1. View Current Top 10 Driver Standings")
        print("2. View Constructor Standings")
        print("3. Exit")
        
        choice = input("\nEnter your choice (1-3): ").strip()
        
        if choice == "1":
            display_standings()
        elif choice == "2":
            display_constructors()
        elif choice == "3":
            print("\n👋 Thank you for using F1 Analyzer! Circuit out. 🏁")
            break
        else:
            print("❌ Invalid choice. Please enter 1, 2, or 3.")

if __name__ == "__main__":
    main()