import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download('punkt_tab')
nltk.download('punkt')
nltk.download('stopwords')

print("=== 🤖 AI Resume Analyzer (Advanced NLP Version) ===")

resume = input("\nPaste your resume text:\n").lower()

# NLP processing
words = word_tokenize(resume)

stop_words = set(stopwords.words('english'))

clean_words = [
    w for w in words
    if w.isalnum() and w not in stop_words
]

# Skills
skills = [
    "python", "java", "c++", "django", "sql",
    "machine", "learning", "html", "css",
    "javascript", "communication", "teamwork"
]

found_skills = []

for skill in skills:
    if skill in clean_words:
        found_skills.append(skill)

# Education / Experience detection
education_keywords = ["btech", "bachelor", "degree", "university", "college"]
experience_keywords = ["internship", "experience", "worked", "project", "developer"]

edu_found = any(word in resume for word in education_keywords)
exp_found = any(word in resume for word in experience_keywords)

# OUTPUT
print("\n📊 === Analysis Result ===")

print("\n✅ Skills detected:")
for s in found_skills:
    print("-", s)

# Score system
score = len(found_skills) * 10

if edu_found:
    score += 20
if exp_found:
    score += 20

if score > 100:
    score = 100

print(f"\n🎯 ATS Score: {score}/100")

# Strength
if score >= 80:
    print("✅ Resume Strength: Excellent")
elif score >= 50:
    print("👍 Resume Strength: Good")
else:
    print("⚠️ Needs Improvement")

# Suggestions
print("\n💡 Recommendations:")

missing_skills = [s for s in skills if s not in found_skills]

for m in missing_skills[:5]:
    print("-", m)

# Section check
print("\n📄 Resume Sections:")

print("- Education:", "✅ Found" if edu_found else "❌ Missing")
print("- Experience/Projects:", "✅ Found" if exp_found else "❌ Missing")

# Final
print("\n🚀 Analysis Completed")