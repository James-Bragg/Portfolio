import React from 'react';
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-800 p-6 sm:p-8 shadow-2xl">
          <svg className="pointer-events-none absolute -right-28 -top-28 opacity-10 hidden sm:block" width="420" height="420" viewBox="0 0 420 420" fill="none" aria-hidden>
            <defs>
              <linearGradient id="contactGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <circle cx="210" cy="210" r="200" stroke="url(#contactGrad)" strokeWidth="2" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-lg shadow-lg animate-slide-in-left">
              <h1 className="text-cyan-400 font-extrabold text-2xl sm:text-3xl mb-3 animate-fade-in-down">Get in touch</h1>
              <p className="text-gray-300 text-base sm:text-lg mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>I'm available for freelance projects, contract work, and full-time roles. Reach out and I'll respond within 24 hours.</p>

              <a
                href="mailto:jamesbragg01@outlook.com"
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-3 min-h-[44px] rounded-md shadow transition transform hover:scale-105 animate-fade-in-up text-sm sm:text-base" style={{animationDelay: '0.3s'}}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M2 6.5v11A2.5 2.5 0 0 0 4.5 20h15A2.5 2.5 0 0 0 22 17.5v-11A2.5 2.5 0 0 0 19.5 4h-15A2.5 2.5 0 0 0 2 6.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6.5l-10 7-10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                jamesbragg01@outlook.com
              </a>

              <div className="mt-6 text-xs sm:text-sm text-gray-400">
                <div><strong className="text-gray-200">Timezone:</strong> UK</div>
                <div className="mt-1"><strong className="text-gray-200">Availability:</strong> Open to opportunities</div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-lg shadow-lg animate-slide-in-right">
              <h2 className="text-cyan-300 font-bold text-xl sm:text-2xl mb-4 animate-fade-in-down" style={{animationDelay: '0.2s'}}>Socials & links</h2>
              <p className="text-gray-300 text-base sm:text-lg mb-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>Connect with me on these platforms or view my work.</p>

              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="https://www.linkedin.com/in/james-bragg-0a02a036a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 min-h-[44px] rounded-md transition text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4v-12h4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="8" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/James-Bragg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 min-h-[44px] rounded-md transition text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2C7.03 2 3 6.03 3 11c0 4 2.87 7.37 6.84 8.56.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.19-3.37-1.19-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.5.338 1.9-1.29 2.74-1.02 2.74-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.69.92.69 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A9.02 9.02 0 0 0 21 11c0-4.97-4.03-9-9-9z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">GitHub</span>
                  </a>
                </li>

                <li>
                  <Link
                    to="/projects"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 min-h-[44px] rounded-md transition text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2l3 6 6 .5-4.5 3.8L18 22l-6-3.5L6 22l1.5-9.7L3 8.5 9 8z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Projects</span>
                  </Link>
                </li>
              </ul>

              <div className="mt-6 text-xs sm:text-sm text-gray-400">
                <p>Prefer a direct message? Send a brief note with what you'd like to build and I'll follow up.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;