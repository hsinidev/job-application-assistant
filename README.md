<div align="center">
# 🚀 Job Application Assistant
### *Modern, High-Performance JavaScript Solution & Developer Suite*

<p align="center">
  [![Architect](https://img.shields.io/badge/Architect-Hsini%20Mohamed-0055ff?style=for-the-badge&logo=github&logoColor=white)](https://hsini.dev)
  [![Portfolio](https://img.shields.io/badge/Portfolio-hsini.dev-00c853?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hsini.dev)
  [![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge)](https://github.com/hsinidev)
  [![Framework](https://img.shields.io/badge/Framework-JavaScript-6366f1?style=for-the-badge)](https://github.com/hsinidev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</p>

</div>

---
## 🌟 Executive Overview

**Job Application Assistant** is a production-grade **TypeScript** platform engineered for high reliability, clean architectural separation, and frictionless developer workflow.

## ⚡ Key Highlights & Capabilities

- **Scalable Architecture**: Modular, decoupled components adhering to clean code principles.
- **Optimized Runtime**: Ultra-fast execution with minimal memory and CPU overhead.
- **Developer Tooling**: Standardized linting, formatting, and rapid local iteration setup.
- **Production Ready**: Built-in error resilience, validation, and structured logging.

---
## 🏗️ Architecture & Technology Stack

- **Primary Language**: `TypeScript`
- **Framework / Runtime**: `JavaScript`
- **Design Pattern**: Modular Clean Architecture / Domain-Driven Design
- **License**: MIT Open Source Attribution

## 📖 Deep-Dive Technical Documentation

# Job Application Assistant (AI-Powered)


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



---
**Powered by [HSINI MOHAMED](https://github.com/hsinidev)**

---
## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hsinidev/job-application-assistant.git
cd job-application-assistant
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application
```bash
npm run dev
```


---

## 👨‍💻 System Architect & Author

<table align="center" style="border: none; background: transparent; width: 100%;">
  <tr>
    <td align="center" width="160" style="border: none; padding: 12px;">
      <img src="https://avatars.githubusercontent.com/u/232697467?v=4" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(99,102,241,0.3); border: 2.5px solid #6366f1;" alt="Hsini Mohamed" />
      <br /><br />
      <b>Hsini Mohamed</b><br />
      <sub>Morocco 🇲🇦</sub>
    </td>
    <td style="border: none; padding: 12px; vertical-align: middle;">
      <h3 style="margin-top: 0;">🚀 System Architect & Full-Stack Engineer</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">
        Specializing in high-performance autonomous AI systems, deterministic multi-agent swarms, enterprise cloud architecture, and modern full-stack engineering.
      </p>
      <p>
        <a href="https://hsini.dev"><img src="https://img.shields.io/badge/Portfolio-hsini.dev-2563eb?style=flat-square&logo=google-chrome&logoColor=white" alt="Portfolio" /></a>
        <a href="mailto:contact@hsini.dev"><img src="https://img.shields.io/badge/Email-contact@hsini.dev-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
        <a href="https://github.com/hsinidev"><img src="https://img.shields.io/badge/GitHub-@hsinidev-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="https://linkedin.com/in/hsinidev/"><img src="https://img.shields.io/badge/LinkedIn-hsinidev-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      </p>
    </td>
  </tr>
</table>

---

## 📄 License & Attribution

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.

<div align="center">
  <sub>⚡ Designed, architected, and maintained with engineering precision by <b><a href="https://hsini.dev">Hsini Mohamed</a></b>.</sub>
</div>
