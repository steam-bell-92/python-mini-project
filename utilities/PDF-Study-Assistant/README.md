# 📚 PDF Study Assistant

An AI-powered study tool that lets you **chat with your PDFs** and generate **personalized study plans** — all in a clean Streamlit interface.

---

## ✨ Features

### 🔍 PDF Q&A
- Upload one or more PDF files
- Ask natural language questions and get context-aware answers
- Powered by FAISS vector search + HuggingFace embeddings

### 🗓️ Smart Study Planner
- Upload your syllabus or notes PDF
- Set your exam date and daily study hours
- Mark your weak topics
- Get an AI-generated plan with **priority rankings**, **time allocation**, and **weak topic tips**
- Download your study plan as a `.txt` file

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | [Streamlit](https://streamlit.io/) |
| Embeddings | HuggingFace `all-MiniLM-L6-v2` |
| Vector Store | [FAISS](https://github.com/facebookresearch/faiss) |
| Text Splitting | LangChain `RecursiveCharacterTextSplitter` |
| LLM (primary) | [Groq](https://groq.com/) — `llama-3.1-8b-instant` |
| LLM (fallback) | [Google Gemini](https://ai.google.dev/) — `gemini-2.0-flash` |
| PDF Parsing | PyPDF2 |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/pdf-study-assistant.git
cd pdf-study-assistant
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
GOOGLE_API_KEY=your_google_api_key_here
GROQ_API_KEY=your_groq_api_key_here   # Optional, but preferred
```

> **Note:** If `GROQ_API_KEY` is set, it takes priority. Otherwise the app falls back to Google Gemini.

### 4. Run the app

```bash
streamlit run app.py
```

---

## 📦 Requirements

```
streamlit
PyPDF2
langchain-text-splitters
langchain-huggingface
langchain-community
faiss-cpu
google-genai
groq
python-dotenv
sentence-transformers
```

> You can generate this file with `pip freeze > requirements.txt` after installing packages.

---

## 📖 Usage

### PDF Q&A Mode
1. Select **PDF Q&A** from the sidebar
2. Upload your PDF(s) and click **Process PDFs**
3. Type your question in the input box and get an answer

### Study Planner Mode
1. Select **Study Planner** from the sidebar
2. Set your **exam date** and **daily study hours**
3. Upload your syllabus/notes PDF
4. (Optional) List topics you're weak in
5. Click **Generate Study Plan**
6. Download your plan with the **Download** button

---

## 🔑 API Keys

| Key | Where to Get |
|---|---|
| `GROQ_API_KEY` | [console.groq.com](https://console.groq.com/) |
| `GOOGLE_API_KEY` | [aistudio.google.com](https://aistudio.google.com/) |

---

## ⚠️ Known Limitations

- FAISS index is saved locally (`faiss_index/`) and is not persistent across server restarts in cloud deployments
- PDF text extraction may be incomplete for scanned/image-based PDFs
- Study plan quality depends on how well the syllabus PDF is structured

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)
