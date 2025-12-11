import React, { useState, useCallback } from 'react';
import type { FormData, OutputData, ExtractedData } from './types';
import { Input } from './components/Input';
import { TextArea } from './components/TextArea';
import { Spinner } from './components/Spinner';
import { CopyableOutput } from './components/CopyableOutput';
import { GalaxyBackground } from './components/GalaxyBackground';
import { InfoModal } from './components/InfoModal';
import { SeoContent } from './components/SeoContent';
import { extractJobDetails, generateSmartCoverLetter } from './services/geminiService';

const initialFormData: FormData = {
  userName: '',
  contactInfo: '',
  cv: '',
  jobPosting: '',
};

function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [outputData, setOutputData] = useState<OutputData | null>(null);
  const [loadingStep, setLoadingStep] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Modal State
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setLoadingStep('Initializing...');
    setError(null);
    setOutputData(null);
    setExtractedData(null);

    setLoadingStep('Step 1/2: Extracting job details...');
    try {
      const extracted = await extractJobDetails(formData.jobPosting);
      setExtractedData(extracted);

      setLoadingStep('Step 2/2: Writing custom cover letter...');
      const { cv, userName, contactInfo } = formData;
      const generatedText = await generateSmartCoverLetter(
        { cv, userName, contactInfo },
        extracted,
        formData.jobPosting
      );

      const subject = `Bewerbung als ${extracted.jobTitle || 'Specialist'} - Kennziffer ${extracted.jobID || 'N/A'}`;

      setOutputData({
        emailTo: extracted.contactEmail || 'Not Found',
        emailSubject: subject,
        coverLetter: generatedText,
      });

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Operation failed. ${errorMessage}`);
      console.error(err);
    } finally {
      setLoadingStep(null);
    }
  };

  const isLoading = loadingStep !== null;

  const renderModalContent = () => {
    const commonCaution = (
       <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r">
          <div className="flex items-start">
             <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
             </div>
             <div className="ml-3">
                <h3 className="text-lg font-bold text-red-800">CAUTION: IMPORTANT NOTICE</h3>
                <p className="text-sm text-red-700 mt-1">
                   Please be aware that this service uses advanced AI technologies. Ensure you review all generated content. 
                   We do not store your personal data, but you are responsible for the information you submit.
                </p>
             </div>
          </div>
       </div>
    );

    switch (activeModal) {
      case 'About':
        return (
            <div>
                {commonCaution}
                <p className="mb-4"><strong>Job Application Assistant</strong> is an AI-powered platform designed to democratize access to career opportunities.</p>
                <p className="mb-4">Created by Hsini Mohamed, this tool leverages state-of-the-art Generative AI to help candidates present their best selves to potential employers.</p>
                <p className="mt-2">Visit us at <a href="https://doodax.com" className="text-blue-600 underline font-bold">doodax.com</a>.</p>
            </div>
        );
      case 'Contact':
        return (
            <div>
                {commonCaution}
                <p className="text-lg mb-4">We'd love to hear from you!</p>
                <ul className="space-y-3 bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <li className="flex items-center space-x-2">
                        <span className="font-bold w-20">Email:</span> 
                        <a href="mailto:hsini.web@gmail.com" className="text-blue-600 hover:underline">hsini.web@gmail.com</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <span className="font-bold w-20">Website:</span> 
                        <a href="https://doodax.com" className="text-blue-600 hover:underline">doodax.com</a>
                    </li>
                </ul>
            </div>
        );
      case 'Guide':
        return (
            <div>
                {commonCaution}
                <h3 className="font-bold text-xl mb-4">How to use:</h3>
                <ol className="list-decimal ml-5 space-y-3">
                    <li>Enter your full name and contact details in the "Candidate Profile" section.</li>
                    <li>Paste the text content of your CV.</li>
                    <li>Find a job posting online (LinkedIn, StepStone, etc.), select all text, copy it, and paste it into the "Job Posting" field.</li>
                    <li>Click <strong>Generate Application</strong>.</li>
                    <li>Review the generated email subject and German cover letter.</li>
                </ol>
            </div>
        );
      case 'Privacy Policy':
        return (
            <div>
                {commonCaution}
                <h3 className="font-bold text-lg mb-2">Data Protection</h3>
                <p className="mb-4"><strong>Last Updated: October 2025</strong></p>
                <p className="mb-4">At Doodax, we take your privacy seriously. We do not store your personal CV data or the job postings you submit on persistent storage. Data is processed transiently by our AI provider (Google Gemini) solely for the purpose of generating your response.</p>
                <p>Contact: hsini.web@gmail.com</p>
            </div>
        );
      case 'Terms of Service':
        return (
            <div>
                {commonCaution}
                <p className="mb-4">By using this service, you agree that the generated content is for assistance purposes only.</p>
                <p>You are responsible for reviewing and verifying all applications before submission. Doodax is not liable for rejected applications or factual errors in the AI-generated content.</p>
            </div>
        );
      case 'DMCA':
        return (
            <div>
                {commonCaution}
                <p>If you believe content on this site infringes your copyright, please contact us immediately at <a href="mailto:hsini.web@gmail.com" className="text-blue-600 font-bold">hsini.web@gmail.com</a> with the subject line "DMCA Notice".</p>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <GalaxyBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col font-sans text-gray-800">
        
        {/* Navigation Bar */}
        <nav className="w-full bg-white/5 backdrop-blur-md border-b border-white/10 px-6 py-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform">D</div>
                   <span className="text-2xl font-bold text-white tracking-wide drop-shadow-sm">Doodax</span>
                </div>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-blue-100">
                    {['About', 'Guide', 'Contact'].map((item) => (
                        <button 
                            key={item} 
                            onClick={() => setActiveModal(item)} 
                            className="hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </nav>

        <main className="flex-grow p-4 sm:p-6 lg:p-8">
            <div className="max-w-5xl mx-auto">
                <header className="text-center mb-12 py-10 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200 drop-shadow-lg mb-6 tracking-tight">
                        Smart Job Assistant
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        The ultimate AI tool for electricians & skilled trades. <br className="hidden md:block" />
                        Generate professional German cover letters in seconds.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-12">
                    {/* Input Form Card */}
                    <div className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4">
                                <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse"></div>
                                <h2 className="text-3xl font-bold text-gray-800">Candidate Profile</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Input label="Full Name" id="userName" value={formData.userName} onChange={handleChange} placeholder="e.g. Mohamed Hsini" required />
                                <Input label="Contact Details" id="contactInfo" value={formData.contactInfo} onChange={handleChange} placeholder="e.g. +212... | email@..." required />
                            </div>

                            <TextArea label="Your Resume / CV (Text Format)" id="cv" value={formData.cv} onChange={handleChange} placeholder="Paste your full CV content here..." required rows={6} />
                            <TextArea label="Job Advertisement" id="jobPosting" value={formData.jobPosting} onChange={handleChange} placeholder="Paste the complete job description here..." required rows={8} />
                            
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center px-8 py-5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transform transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none border border-blue-500/30"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {loadingStep}
                                    </>
                                ) : (
                                    'Generate Application Now 🚀'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Output Card - Only show if there is output or loading to keep UI clean */}
                    {(outputData || isLoading || error) && (
                    <div className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 flex flex-col min-h-[400px] animate-fade-in-up">
                        <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4">
                             <div className="h-3 w-3 rounded-full bg-green-500"></div>
                             <h2 className="text-3xl font-bold text-gray-800">Results</h2>
                        </div>

                        {isLoading && <Spinner message={loadingStep!} details="AI is analyzing the job requirements..." />}
                        
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-red-800 font-bold">Error</p>
                                        <p className="text-sm text-red-700">{error}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {extractedData && (
                            <div className="mb-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                                <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-500 mb-4">Job Details Extracted</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">Position</p>
                                        <p className="font-bold text-gray-800 text-lg">{extractedData.jobTitle || 'N/A'}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <p className="text-xs text-gray-500 mb-1">Contact Person</p>
                                        <p className="font-bold text-gray-800 text-lg">{extractedData.contactName || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {outputData && (
                            <div className="space-y-8">
                                <CopyableOutput label="To:" value={outputData.emailTo} />
                                <CopyableOutput label="Subject Line:" value={outputData.emailSubject} />
                                <CopyableOutput label="Cover Letter (German)" value={outputData.coverLetter} isTextArea={true} />
                            </div>
                        )}
                    </div>
                    )}
                </div>

                {/* SEO Content Section */}
                <SeoContent />

            </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/60 backdrop-blur-xl text-white mt-16 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                <div>
                    <h4 className="font-bold text-xl mb-4 text-blue-400">Doodax</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">Empowering job seekers with AI technology. Make your next career move with confidence.</p>
                </div>
                <div>
                    <h4 className="font-bold text-xl mb-4 text-blue-400">Legal</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        {['Privacy Policy', 'Terms of Service', 'DMCA'].map((item) => (
                             <li key={item}>
                                <button onClick={() => setActiveModal(item)} className="hover:text-white transition-colors hover:underline">{item}</button>
                             </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-xl mb-4 text-blue-400">Connect</h4>
                    <p className="text-sm text-gray-300 mb-2">hsini.web@gmail.com</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        <a href="https://github.com/hsinidev" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center">
                 <p className="text-gray-500 text-sm">
                    &copy; 2025 Job Application Assistant. All rights reserved. 
                 </p>
                 <p className="mt-3 font-mono text-sm text-indigo-300 flex justify-center items-center gap-2">
                    <span>Powered by</span> 
                    <a href="https://github.com/hsinidev" target="_blank" rel="noreferrer" className="font-bold text-white bg-blue-600/20 px-2 py-1 rounded hover:bg-blue-600 transition-colors">
                        HSINI MOHAMED
                    </a>
                 </p>
            </div>
        </footer>

        {/* Global Modals */}
        <InfoModal 
            title={activeModal || ''} 
            isOpen={!!activeModal} 
            onClose={() => setActiveModal(null)}
        >
            {renderModalContent()}
        </InfoModal>

      </div>
    </>
  );
}

export default App;