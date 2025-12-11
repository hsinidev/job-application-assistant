# Job Application Assistant (AI-Powered)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-2.0.0-green.svg)
![React](https://img.shields.io/badge/React-19-blue)
![Gemini API](https://img.shields.io/badge/Gemini-2.5-orange)

An intelligent, AI-powered web application designed to help job seekers—specifically electricians and skilled tradespeople—generate highly targeted, professional cover letters. By parsing job descriptions and cross-referencing them with user CV data, it creates tailored applications in seconds.

## 🚀 Live Demo

[**doodax.com**](https://doodax.com/tools/job-application-assistant/index.html)  
*(Opens in a new tab)*

## 🔒 Security & API Key

**Important:** This application uses the Google Gemini API. 
To ensure security, the API Key is **never hardcoded** in the source files. 

*   The key is loaded exclusively via the `process.env.API_KEY` environment variable.
*   **Do not** commit your API key to GitHub or include it in client-side code.
*   Hackers can scrape public repositories for exposed keys. Always use environment variables.

## ✨ Features

*   **Job Parsing**: Automatically extracts key details (Contact Name, Job Title, ID) from unstructured job postings.
*   **Smart Cover Letters**: Generates context-aware, persuasive cover letters in German (or English) using Google's Gemini 2.5 Flash model.
*   **PDF Support**: Extracts text from PDF CVs.
*   **SEO Optimized**: Built with JSON-LD schemas, extensive content, and semantic HTML for maximum visibility.
*   **Modern UI**: Glassmorphism design with an immersive, multi-colored animated nebula background.

## 🛠 Tech Stack

*   **Frontend**: React 19, TypeScript, Vite
*   **Styling**: Tailwind CSS
*   **AI**: Google GenAI SDK (Gemini 2.5 Flash)
*   **PDF Handling**: PDF.js

## 📂 Project Structure

```bash
/
├── components/          # Reusable UI components
│   ├── CopyableOutput.tsx
│   ├── GalaxyBackground.tsx  # Immersive background animations
│   ├── InfoModal.tsx         # Popup modals for legal/info
│   ├── Input.tsx
│   ├── SeoContent.tsx        # SEO blog post & schema
│   ├── Spinner.tsx
│   └── TextArea.tsx
├── public/              # Static assets for SEO
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── services/            # API and utility services
│   ├── geminiService.ts
│   └── pdfParser.ts
├── App.tsx              # Main application logic
├── index.html           # Entry point with SEO meta tags
├── types.ts             # TypeScript interfaces
└── README.md            # Documentation
```

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Install dependencies**: `npm install`
3.  **Set API Key**: Create a `.env` file and add `API_KEY=your_gemini_key`
4.  **Run**: `npm run dev`

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
**Powered by [HSINI MOHAMED](https://github.com/hsinidev)**
