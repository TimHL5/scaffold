'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: 'icon' | 'full';
}

export default function CopyButton({ text, className = '', variant = 'icon' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === 'full') {
    return (
      <button
        onClick={handleCopy}
        className={`w-full border border-vermillion/30 hover:bg-vermillion/10 text-vermillion rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${className}`}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      className={`p-2 hover:bg-white/[0.05] rounded-lg transition-colors text-gray-400 hover:text-white ${className}`}
      title="Copy to clipboard"
    >
      {copied ? (
        <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
}
