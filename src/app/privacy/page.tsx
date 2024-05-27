"use client";

import PrivacyPolicyMarkdown from './privacy-policy.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Privacy() {
  return (
    <main 
    className="relative flex min-h-screen flex-col justify-between" 
    style={{
        padding: '1rem',
        maxWidth: '800px',
        gap: '1rem',
        margin: '0 auto'
      }}
    >
      <ReactMarkdown>
       {PrivacyPolicyMarkdown}
      </ReactMarkdown>
    </main>
  );
}
