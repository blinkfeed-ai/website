"use client";

import PrivacyPolicyMarkdown from './privacy-policy.md';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Privacy() {
  return (
    <main className="privacy-policy">
      <ReactMarkdown>
       {PrivacyPolicyMarkdown}
      </ReactMarkdown>
    </main>
  );
}
