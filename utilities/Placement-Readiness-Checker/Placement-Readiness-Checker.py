print("🎓 Placement Readiness Checker 🎓")
print("Analyze your placement preparation level!\n")


name = input("👤 Enter your name: ")


print(f"\n✨ Welcome, {name}!\n")


cgpa = float(input("📚 Enter your CGPA (out of 10): "))

projects = int(input("💻 Enter number of projects completed: "))

dsa = int(input("🧠 Rate your DSA skills (1-10): "))

communication = int(input("🎤 Rate your communication skills (1-10): "))

aptitude = int(input("📊 Rate your aptitude skills (1-10): "))


print("\n⏳ Calculating your placement readiness...\n")


score = 0


# Score calculation
score += cgpa * 5
score += projects * 5
score += dsa * 4
score += communication * 3
score += aptitude * 3


# Limit score to 100
if score > 100:
    score = 100


print(f"📊 Placement Readiness Score: {score:.1f}%\n")


# Placement category
if score >= 80:
    print("🔥 You are Interview Ready!")

elif score >= 60:
    print("👍 You are Improving Well!")

else:
    print("📚 Keep Practicing and Building Skills!")


print("\n💡 Personalized Suggestions:")


if projects < 3:
    print("✅ Build more real-world projects")

if dsa < 7:
    print("✅ Practice DSA regularly")

if communication < 7:
    print("✅ Improve communication skills")

if aptitude < 7:
    print("✅ Practice aptitude questions daily")

if cgpa < 7:
    print("✅ Focus on improving academics")


# Extra motivational message
if score >= 90:
    print("\n🏆 Excellent work! You're highly placement ready!")

elif score >= 75:
    print("\n✨ Great progress! Keep polishing your skills!")

else:
    print("\n🚀 Stay consistent and keep learning!")


print("\n👋 Thank you for using Placement Readiness Checker!")