import React from 'react';
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <main className="min-h-screen rounded-2xl overflow-hidden bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-800 p-6 sm:p-8 shadow-2xl">
          <svg className="pointer-events-none absolute -right-20 -top-24 opacity-10 hidden sm:block" width="420" height="420" viewBox="0 0 420 420" fill="none" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <circle cx="210" cy="210" r="200" stroke="url(#g)" strokeWidth="2" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <aside className="md:col-span-1 flex flex-col items-center text-center">
              <img
                src="/Portfolio/James_2.png" alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top border-4 border-cyan-500 shadow-lg transform transition-transform hover:scale-[1.03] animate-fade-in-down"
              />
              <h1 className="mt-4 text-xl sm:text-2xl font-extrabold text-cyan-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>James Bragg</h1>
              <p className="mt-1 text-xs sm:text-sm text-gray-300 animate-fade-in-up" style={{animationDelay: '0.3s'}}>Software developer — Freelance</p>

              <div className="mt-4 flex gap-2 flex-wrap justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <a
                  href="mailto:jamesbragg01@outlook.com"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-3 py-2 rounded-full text-sm font-medium shadow transition transform hover:scale-105"
                  aria-label="Email James"
                >
                  Email
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-2 rounded-full text-sm font-medium transition transform hover:scale-105"
                >
                  Projects
                </Link>
              </div>

              <div className="mt-6 w-full bg-gray-850/30 border border-gray-800 rounded-lg p-3 text-left animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <h3 className="text-xs text-gray-300 uppercase tracking-wide">Quick info</h3>
                <ul className="mt-2 text-xs sm:text-sm text-gray-300 space-y-1">
                  <li><strong className="text-gray-100">Location:</strong> Corby, Northamptonshire, UK</li>
                  <li><strong className="text-gray-100">Availability:</strong> Open to opportunities</li>
                  <li><strong className="text-gray-100">Driving:</strong> Full UK driving licence</li>
                </ul>
              </div>
            </aside>

            <section className="md:col-span-2 space-y-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-200 animate-fade-in-down">About</h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  I'm a First-Class Computer Science graduate with experience in software engineering, cloud computing, and project delivery. I currently combine freelance web development with a shift management role at McDonald's, where I lead teams, manage operational processes, and solve problems under pressure. I've taken a freelance web project from client brief through to live deployment, and led university team projects as Project Manager using PRINCE2 and Agile. I'm passionate about emerging technology and supporting others through technical challenges. Outside the tech world, I'm enthusiastic about storytelling through film, immersed in tabletop gaming and creative worlds, and always eager to connect with others.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="p-4 rounded-lg bg-gray-900 border border-gray-800 shadow animate-card-reveal transition hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-1">
                  <h4 className="font-semibold text-cyan-300 text-sm sm:text-base">Technical Skills</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'Rust', 'React', 'Django', 'scikit-learn', 'Tailwind', 'AWS', 'SQL Server', 'SQLite', 'Wix', 'Git', 'PRINCE2', 'Agile', 'Scrum', 'Team Leadership', 'Mentoring', 'Problem Solving'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-800/60 text-sm rounded-full text-gray-200">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gray-900 border border-gray-800 shadow animate-card-reveal transition hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-1">
                  <h4 className="font-semibold text-cyan-300 text-sm sm:text-base">Experience</h4>
                  <ol className="relative border-l border-gray-800 ml-2 pl-4 space-y-6 text-xs sm:text-sm text-gray-300">
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Freelance Developer</div>
                    <div className="text-xs text-gray-400">2026 – present | Designed, built and deployed a bespoke business website with online booking and CMS for a local client, managing the full project lifecycle</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Shift Manager — McDonald's</div>
                    <div className="text-xs text-gray-400">2024 – present | Lead shift teams, delegate tasks, track stock against demand forecasts, and troubleshoot equipment faults under time pressure</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Crew Trainer — McDonald's</div>
                    <div className="text-xs text-gray-400">2023 – 2024 | Trained and mentored new team members on procedures and systems</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Crew Member — McDonald's</div>
                    <div className="text-xs text-gray-400">2021 – 2023 | Promoted three times in three years</div>
                  </li>
                </ol>
                </div>
              </div>

              <div className="mt-2 p-4 rounded-lg bg-linear-to-r from-gray-900/40 to-gray-800/30 border border-gray-800 animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                <h4 className="font-semibold text-cyan-300 mb-3 text-sm sm:text-base">Education</h4>
                <ol className="relative border-l border-gray-800 ml-2 pl-4 space-y-6 text-xs sm:text-sm text-gray-300">
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">BSc (Hons) Computer Science — First Class Honours</div>
                    <div className="text-xs text-gray-400">University of Bedfordshire | 2019 – 2022 | Key modules: Databases, AI, Distributed Systems, Software Engineering, Project Management</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">BTEC Level 3 Extended Diploma in Computer Science — Merit, Merit, Merit</div>
                    <div className="text-xs text-gray-400">Tresham College | 2017 – 2019</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">GCSEs & Level 2 BCS ECDL — Distinction</div>
                    <div className="text-xs text-gray-400">Corby Business Academy | 2017 | GCSEs including English, Maths and Computer Science</div>
                  </li>
                </ol>
              </div>

              <div className="mt-2 p-4 rounded-lg bg-linear-to-r from-gray-900/40 to-gray-800/30 border border-gray-800 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h4 className="font-semibold text-cyan-300 mb-3 text-sm sm:text-base">Outside of the Tech Industry</h4>
                <ol className="relative border-l border-gray-800 ml-2 pl-4 space-y-6 text-xs sm:text-sm text-gray-300">
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Exploring Technologies</div>
                    <div className="text-xs text-gray-400">I keep up with new tech trends and experiment with emerging tools—both hardware and software. A lifelong learner passionate about innovation across all domains.</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Gaming & Tabletop RPGs</div>
                    <div className="text-xs text-gray-400">Passionate about both digital and tabletop gaming, particularly D&D and strategy-based games. I enjoy the creative problem-solving and strategic thinking these activities demand.</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Film & Entertainment</div>
                    <div className="text-xs text-gray-400">I enjoy exploring storytelling through movies and various media, appreciating both cinematography and narrative depth across different genres and cultures.</div>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 inline-flex items-center justify-center w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-gray-900"></span>
                    <div className="font-semibold text-gray-100">Social & Community</div>
                    <div className="text-xs text-gray-400">I value spending quality time with friends and family, whether collaborating on projects, sharing experiences, or building meaningful relationships.</div>
                  </li>
                </ol>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <p className="text-xs sm:text-sm text-gray-400">Interested in collaborating or hiring? Let's chat.</p>
                <div className="flex gap-2">
                  <a
                    href="mailto:jamesbragg01@outlook.com"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-md font-medium shadow"
                  >
                    Contact
                  </a>
                  <a
                    href="https://github.com/James-Bragg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent border border-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-gray-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;