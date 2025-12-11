import React, { useState } from 'react';

export const SeoContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mt-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 overflow-hidden text-gray-800 transition-all duration-300">
      
      <div className="relative">
        <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-full opacity-100' : 'max-h-[80px] opacity-80'} overflow-hidden`}>
          
          <div className="p-8 prose prose-lg prose-indigo max-w-none">
            
            {/* Header / Intro */}
            <header className="mb-10 border-b border-gray-200 pb-6">
               <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-4">
                 The Ultimate Guide to AI Job Application Assistants for Electricians in Germany
               </h1>
               <p className="text-gray-500 font-medium">Published by Doodax Team | Expert Insight | October 2025</p>
            </header>

            {/* Table of Contents */}
            <nav className="bg-blue-50 p-6 rounded-xl mb-10 border border-blue-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Table of Contents</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-700 font-medium">
                <li><a href="#introduction" className="hover:text-blue-900 transition-colors">1. Introduction to AI in Recruitment</a></li>
                <li><a href="#why-germany" className="hover:text-blue-900 transition-colors">2. Why Electricians are in High Demand in Germany</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-900 transition-colors">3. How the Job Application Assistant Works</a></li>
                <li><a href="#mastering-german-market" className="hover:text-blue-900 transition-colors">4. Mastering the German "Bewerbung"</a></li>
                <li><a href="#features-deep-dive" className="hover:text-blue-900 transition-colors">5. Deep Dive: Parsing & Generation Features</a></li>
                <li><a href="#benefits" className="hover:text-blue-900 transition-colors">6. Key Benefits for Skilled Trades</a></li>
                <li><a href="#security" className="hover:text-blue-900 transition-colors">7. Data Privacy & Security</a></li>
                <li><a href="#faq" className="hover:text-blue-900 transition-colors">8. Frequently Asked Questions (FAQ)</a></li>
              </ul>
            </nav>

            {/* Main Content Body */}
            <section id="introduction">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">1. Introduction to AI in Recruitment</h2>
              <p>
                The landscape of job hunting has evolved dramatically. In today's competitive job market, specifically within the German skilled trades sector ("Handwerk"), standing out is paramount. 
                Recruiters often spend less than 10 seconds reviewing a CV before making an initial decision. The <strong>Job Application Assistant</strong> at <a href="https://doodax.com" className="text-blue-600 underline">doodax.com</a> leverages 
                state-of-the-art Generative AI (Google Gemini 2.5) to bridge the gap between skilled workers and top-tier employers.
              </p>
              <p>
                By analyzing job descriptions semantically, our tool ensures your cover letter isn't just a template—it's a tailored argument for why <em>you</em> are the perfect fit. This isn't just about translating language; it's about translating <em>value</em>.
              </p>
            </section>

            <section id="why-germany">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">2. Why Electricians are in High Demand in Germany</h2>
              <p>
                Germany is facing a significant shortage of skilled workers ("Fachkräftemangel"), particularly in the electrical and energy sectors. With the country's "Energiewende" (energy transition) in full swing, the demand for solar technicians, 
                industrial electricians, and automation experts is at an all-time high.
              </p>
              <p>
                However, entering the German market requires more than just technical skill. It requires navigating a specific cultural and bureaucratic landscape. A "Bewerbungsschreiben" (cover letter) is expected to be precise, error-free, and directly address the requirements listed in the "Stellenanzeige" (job ad). 
                Doodax.com automates this complexity, allowing international talent to present themselves with native-level fluency.
              </p>
            </section>

            <section id="how-it-works">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">3. How the Job Application Assistant Works</h2>
              <p>
                Our proprietary algorithm simplifies the application process into a seamless workflow designed for efficiency and accuracy:
              </p>
              <ol className="list-decimal pl-6 space-y-4 mb-6">
                <li>
                  <strong>Input Analysis:</strong> You provide your CV content and the text of the job advertisement. This forms the raw dataset for our analysis.
                </li>
                <li>
                  <strong>Entity Extraction:</strong> The AI scans the job posting for critical entities: specific technical skills (e.g., DIN VDE standards, SPS programming, KNX), the hiring manager's name, the unique Job ID, and the company culture keywords.
                </li>
                <li>
                  <strong>Semantic Mapping:</strong> It maps your experience to these requirements, identifying the strongest matching points to highlight. For instance, if the job mentions "Montagebereitschaft" (willingness to travel), the AI scans your CV for past travel or mobile roles.
                </li>
                <li>
                  <strong>Generation:</strong> It synthesizes a professional cover letter in German, adopting a tone that is confident, respectful, and culturally appropriate.
                </li>
              </ol>
            </section>

             <section id="mastering-german-market">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">4. Mastering the German "Bewerbung"</h2>
              <p>
                The German application packet, or "Bewerbungsmappe," is unique. Unlike in the US or UK where a cover letter might be optional, in Germany, it is the heart of your application. It acts as your first introduction.
              </p>
              <p>
                <strong>Key Components of a Winning Letter:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>The Salutation:</strong> Never use "To whom it may concern" if you can avoid it. Our tool finds the contact person's name (e.g., "Sehr geehrte Frau Müller").</li>
                  <li><strong>The Hook:</strong> A strong opening sentence that connects your current status with the company's needs.</li>
                  <li><strong>The Argument:</strong> Connecting your hard skills (wiring, programming, maintenance) with soft skills (reliability, punctuality, German language ability).</li>
                  <li><strong>The Call to Action:</strong> A polite request for an interview ("Vorstellungsgespräch") and mention of your start date.</li>
              </ul>
            </section>

            <section id="features-deep-dive">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">5. Deep Dive: Parsing & Generation Features</h2>
              <p>
                Powered by the Gemini 2.5 Flash model, our system goes beyond simple text replacement. It understands context. If a job asks for "Teamfähigkeit" (teamwork), the AI looks for team-related experiences in your CV and constructs a narrative around them.
                If the job requires specific certification in "Brandmeldeanlagen" (fire alarm systems), the AI ensures this is front and center in your letter.
              </p>
              <p>
                This depth of analysis ensures that your application passes the initial screening by Applicant Tracking Systems (ATS) used by large German engineering firms.
              </p>
            </section>

            <section id="benefits">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">6. Key Benefits for Skilled Trades</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Language Barrier Removal:</strong> Apply with the confidence of a native speaker.</li>
                <li><strong>Time Efficiency:</strong> What used to take hours now takes seconds.</li>
                <li><strong>Higher Response Rates:</strong> Tailored applications are proven to get more interviews than generic templates.</li>
                <li><strong>Formatting Perfection:</strong> The output follows standard DIN 5008 norms for German business letters.</li>
              </ul>
            </section>

            <section id="security">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">7. Data Privacy and Security</h2>
              <p>
                We understand the sensitivity of personal data. Doodax.com operates on a strict <strong>privacy-first</strong> architecture. 
                Your CV data and the job postings you input are processed transiently in memory. They are sent to the AI model for generation and immediately discarded. 
                We do not save, store, or sell your personal career history.
              </p>
              <p>
                Furthermore, we utilize enterprise-grade encryption for data in transit and adhere to strict API security policies to protect the integrity of the service.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900">8. Frequently Asked Questions (FAQ)</h2>
              <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Is Doodax free to use?</h3>
                      <p>Yes, the Job Application Assistant is currently completely free for job seekers to support the global workforce.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Can I use this for English jobs?</h3>
                      <p>Absolutely. While optimized for the German market, the AI supports English, French, Spanish, and over 40 other languages. It detects the language of the job posting and responds accordingly.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">How accurate is the AI?</h3>
                      <p>The AI is highly accurate in grammar and tone. However, as with all AI tools, we recommend reviewing the generated text to ensure all factual details about your life are 100% correct before sending.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">Who created this tool?</h3>
                      <p>This tool was created by <strong>Hsini Mohamed</strong>, a full-stack developer passionate about using technology to empower individuals.</p>
                  </div>
              </div>
            </section>
            
            <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
              <p>Job Application Assistant &copy; 2025 Doodax. All rights reserved.</p>
            </footer>

          </div>
        </div>

        {/* Gradient Overlay for "Read More" effect */}
        {!isOpen && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white z-10 flex items-end justify-center pb-2">
            </div>
        )}
      </div>
      
      {/* Toggle Button */}
      <div className="bg-white p-4 flex justify-center border-t border-gray-100 z-20 relative">
        <button 
            onClick={toggleOpen}
            className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-bold tracking-wide"
        >
            <span>{isOpen ? 'Show Less' : 'Read Full Article'}</span>
            <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
      </div>
    </div>
  );
};