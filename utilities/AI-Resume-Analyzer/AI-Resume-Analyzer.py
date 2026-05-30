import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.util import ngrams

# Ensure NLTK downloads happen at the top level so they're available,
# but can be verified inside main or when running.
nltk.download('punkt')
nltk.download('stopwords')

def analyze_resume(resume_text: str) -> dict:
    resume = resume_text.lower()
    
    # NLP processing
    words = word_tokenize(resume)
    
    stop_words = set(stopwords.words('english'))
    KEEP_AS_IS = {"c++", "c#", ".net"}
    
    clean_words = [
        w for w in words
        if (w.isalnum() or w in KEEP_AS_IS) and w not in stop_words
    ]
    
    # Phrase tokens
    bigrams = [' '.join(bg) for bg in ngrams(clean_words, 2)]
    
    # Skill aliases
    skill_aliases = {
        # Languages
        "py": "python",
        "js": "javascript",
        "ts": "typescript",
        "cpp": "c++",
        # Databases
        "postgres": "postgresql",
        "mongo": "mongodb",
        # AI / ML
        "ml": "machine learning",
        "dl": "deep learning",
        "cv": "computer vision",
        # Frameworks
        "reactjs": "react",
        "react.js": "react",
        "nodejs": "node.js",
        "expressjs": "express",
        # Cloud / DevOps
        "aws": "amazon web services",
        "gcp": "google cloud platform",
        # Tools
        "gitlab": "git",
        "github": "git",
    }
    
    normalized_words = [
        skill_aliases.get(word, word)
        for word in clean_words
    ]
    
    normalized_bigrams = [
        skill_aliases.get(bg, bg)
        for bg in bigrams
    ]
    
    # Skills
    skills = [
        "python", "java", "c++", "c#", ".net", "django", "sql",
        "machine learning", "html", "css",
        "javascript", "communication", "teamwork"
    ]
    
    found_skills = []
    for skill in skills:
        if skill in normalized_words or skill in normalized_bigrams:
            found_skills.append(skill)
            
    # Resume section parsing
    education_pattern = r"(education|academic|qualification)"
    experience_pattern = r"(experience|internship|work experience)"
    project_pattern = r"(projects|project)"
    
    edu_found = bool(re.search(education_pattern, resume))
    exp_found = bool(re.search(experience_pattern, resume))
    project_found = bool(re.search(project_pattern, resume))
    
    # Improved score system
    score = 0
    
    # Skill score
    score += min(len(found_skills) * 8, 40)
    
    # Section score
    if edu_found:
        score += 20
    if exp_found:
        score += 25
    if project_found:
        score += 15
        
    # Resume quality bonus
    if len(found_skills) >= 5:
        score += 10
        
    if score > 100:
        score = 100
        
    missing_skills = [s for s in skills if s not in found_skills]
    
    return {
        "found_skills": found_skills,
        "score": score,
        "edu_found": edu_found,
        "exp_found": exp_found,
        "project_found": project_found,
        "missing_skills": missing_skills,
        "all_skills": skills,
    }

def main() -> None:
    print("=== 🤖 AI Resume Analyzer (Advanced NLP Version) ===")
    
    resume = input("\nPaste your resume text:\n")
    if not resume.strip():
        print("❌ Error: Resume cannot be empty.")
        return
        
    result = analyze_resume(resume)
    
    # OUTPUT
    print("\n📊 === Analysis Result ===")
    
    print("\n✅ Skills detected:")
    for s in result["found_skills"]:
        print("-", s)
        
    score = result["score"]
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
    for m in result["missing_skills"][:5]:
        print("-", m)
        
    # Section check
    print("\n📄 Resume Sections:")
    print("- Education:", "✅ Found" if result["edu_found"] else "❌ Missing")
    print("- Experience:", "✅ Found" if result["exp_found"] else "❌ Missing")
    print("- Projects:", "✅ Found" if result["project_found"] else "❌ Missing")
    
    # Final
    print("\n🚀 Analysis Completed")

if __name__ == "__main__":
    main()
