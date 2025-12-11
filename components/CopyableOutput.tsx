
import React, { useState, useCallback } from 'react';

interface CopyableOutputProps {
  label: string;
  value: string;
  isTextArea?: boolean;
}

const ClipboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const CopyableOutput: React.FC<CopyableOutputProps> = ({ label, value, isTextArea = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if(!value) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [value]);

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <button
          onClick={handleCopy}
          className={`flex items-center space-x-1 px-2 py-1 text-xs rounded-md transition-colors duration-200 ${copied ? 'bg-green-100 text-green-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'}`}
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
             <>
              <ClipboardIcon className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {isTextArea ? (
        <textarea
          readOnly
          value={value}
          className="w-full h-96 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-inner resize-none font-mono text-sm"
        />
      ) : (
        <div className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-inner break-words font-mono text-sm">
          {value || <span className="text-gray-400">Not generated yet.</span>}
        </div>
      )}
    </div>
  );
};
