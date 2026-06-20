import streamlit as st
from PyPDF2 import PdfReader
from langchain_text_splitters import RecursiveCharacterTextSplitter
import os
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from google import genai
from dotenv import load_dotenv
from datetime import date

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")


def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        try:
            pdf_reader = PdfReader(pdf, strict=False)
            for page in pdf_reader.pages:
                text += page.extract_text() or ""
        except Exception as e:
            st.warning(f"Could not read file: {pdf.name} — {e}")
    return text


def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    return text_splitter.split_text(text)


def call_llm(prompt):
    if GROQ_API_KEY:
        from groq import Groq
        client = Groq(api_key=GROQ_API_KEY)
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message.content
    else:
        client = genai.Client(api_key=GOOGLE_API_KEY)
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        return response.text


def get_vector_store(text_chunks):
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")


def get_answer(context, user_question):
    prompt = f"""
    Answer the question as detailed as possible from the provided context.
    If the answer is not in the context, say "answer is not available in the context".
    Do not provide a wrong answer.

    Context: {context}
    Question: {user_question}
    Answer:
    """
    return call_llm(prompt)


def extract_topics_from_text(pdf_text):
    prompt = f"""
    You are an expert academic assistant. From the following study material/syllabus text,
    extract all major topics and subtopics that a student needs to study.
    Return ONLY a numbered list of topics, one per line. No extra explanation.
    Example format:
    1. Topic Name
    2. Topic Name

    Text:
    {pdf_text[:6000]}
    """
    return call_llm(prompt)


def generate_study_plan(topics_text, exam_date, weak_topics, study_hours):
    today = date.today()
    days_left = (exam_date - today).days
    prompt = f"""
    You are a smart study planner AI. A student has an exam in {days_left} day(s) (on {exam_date}).
    They can study {study_hours} hours per day.
    Total available study time: {days_left * study_hours} hours.

    Topics extracted from their study material:
    {topics_text}

    Topics the student considers themselves WEAK in:
    {weak_topics if weak_topics else "Not specified"}

    Your job:
    1. PRIORITY RANKING: Rank all topics by priority (High / Medium / Low) considering:
       - Weak topics get higher priority
       - Fundamental/prerequisite topics get higher priority
    2. TIME ALLOCATION: Suggest how many hours to spend on each topic.
       Make sure total hours fit within {days_left * study_hours} hours.
    3. WEAK TOPIC TIPS: For each weak topic, give a specific 1-line tip on how to tackle it.

    Format your response clearly with these 3 sections using headers.
    Be concise and practical.
    """
    return call_llm(prompt)


def main():
    st.set_page_config("PDF Study Assistant", layout="wide")
    st.title("PDF Study Assistant")

    st.sidebar.title("Navigation")
    mode = st.sidebar.radio("Choose Mode", ["PDF Q&A", "Study Planner"])

    if mode == "PDF Q&A":
        st.header("Chat with your PDF")

        pdf_docs = st.sidebar.file_uploader(
            "Upload PDF Files",
            accept_multiple_files=True,
            key="qa_uploader"
        )
        if st.sidebar.button("Process PDFs"):
            if not pdf_docs:
                st.sidebar.error("Please upload at least one PDF.")
            else:
                with st.spinner("Processing..."):
                    raw_text = get_pdf_text(pdf_docs)
                    text_chunks = get_text_chunks(raw_text)
                    get_vector_store(text_chunks)
                    st.sidebar.success("Done!")

        user_question = st.text_input("Ask a question from your PDF")
        if user_question:
            embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
            new_db = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
            docs = new_db.similarity_search(user_question)
            context = "\n\n".join([doc.page_content for doc in docs])
            answer = get_answer(context, user_question)
            st.write("Reply:", answer)

    elif mode == "Study Planner":
        st.header("Smart Study Planner")

        col1, col2 = st.columns(2)
        with col1:
            exam_date = st.date_input("Exam Date", min_value=date.today())
        with col2:
            study_hours = st.slider("Study hours per day", 1, 16, 6)

        days_left = (exam_date - date.today()).days
        if days_left > 0:
            st.info(f"{days_left} day(s) left — Total study time: {days_left * study_hours} hours")
        elif days_left == 0:
            st.warning("Exam is today! Focus on quick revision.")
        else:
            st.error("Exam date is in the past.")

        planner_pdf = st.file_uploader("Upload Syllabus / Notes PDF", type=["pdf"], key="planner_uploader")
        weak_topics = st.text_area("Topics you are weak in (comma separated)", placeholder="e.g. Recursion, Graphs, DP")

        if st.button("Generate Study Plan"):
            if not planner_pdf:
                st.error("Please upload a PDF first.")
            elif days_left <= 0:
                st.error("Please select a valid future exam date.")
            else:
                with st.spinner("Extracting topics..."):
                    pdf_text = get_pdf_text([planner_pdf])
                    topics_raw = extract_topics_from_text(pdf_text)

                st.subheader("Topics Found")
                st.markdown(topics_raw)

                with st.spinner("Generating study plan..."):
                    plan = generate_study_plan(topics_raw, exam_date, weak_topics, study_hours)

                st.subheader("Your Study Plan")
                st.markdown(plan)

                st.download_button(
                    label="Download Study Plan",
                    data=plan,
                    file_name="study_plan.txt",
                    mime="text/plain"
                )


if __name__ == "__main__":
    main()