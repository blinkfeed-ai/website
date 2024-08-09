'use client'

import TermsAndConditionsMarkdownEN from './terms-and-conditions-en.md'
import TermsAndConditionsMarkdownPL from './terms-and-conditions-pl.md'
import React from 'react'
import ReactMarkdown from 'react-markdown'

enum Language {
  English,
  Polish,
}

export default function TermsAndConditions() {
    const [language, setLanguage] = React.useState<Language>(Language.English);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLanguage(event.target.checked ? Language.Polish : Language.English);
    };

    function Switch() {
        return (
            <div className="flex gap-2 justify-end">
                <label className="text-gray-700">English</label>
                <label className="relative inline-block w-10 h-6 bg-gray-200 rounded-full cursor-pointer">
                <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0"
                    onChange={handleChange}
                    checked={language === Language.Polish}
                />
                <span
                    className="absolute top-1 left-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition-transform duration-300 transform"
                    style={{
                    transform: `translateX(${language === Language.Polish ? '100%' : '0'})`,
                    }}
                ></span>
                </label>
                <label className="text-gray-700">Polish</label>
            </div>
        );
    }

  return (
    <main className='privacy-policy'>
        <Switch />
        {language == Language.Polish ? <ReactMarkdown>{TermsAndConditionsMarkdownPL}</ReactMarkdown> : <ReactMarkdown>{TermsAndConditionsMarkdownEN}</ReactMarkdown>}
    </main>
  )
}
