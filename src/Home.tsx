import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-800 p-8 shadow-2xl">
          <svg className="pointer-events-none absolute -right-28 -top-28 opacity-10" width="420" height="420" viewBox="0 0 420 420" fill="none" aria-hidden>
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0" stopColor="#06b6d4" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <circle cx="210" cy="210" r="200" stroke="url(#g2)" strokeWidth="2" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <section className="md:col-span-2 space-y-6">
              <div className="prose prose-invert max-w-none">
                <h1 className="text-4xl font-extrabold text-cyan-200 leading-tight animate-fade-in-down">
                  Hi, I'm <span className="text-cyan-400">James Bragg</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-up transition-all duration-500" style={{animationDelay: '0.2s'}}>
                  I build polished, accessible interfaces and reliable backend services that deliver exceptional user experiences. With a passion for clean code and scalable architecture, I focus on performance optimization, developer ergonomics, and shipping features that solve real-world problems. My expertise spans modern web technologies, from responsive React applications to efficient data structures and algorithms, always prioritizing accessibility, security, and maintainability to create solutions that stand the test of time.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-md font-medium shadow transition transform hover:scale-105 hover:shadow-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                View projects
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-transparent border border-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-gray-200 transition transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.5s'}}
                >
                  About me
                </Link>
                <a
                  href="mailto:jamesbragg01@outlook.com"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md text-gray-200 transition transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.6s'}}
                >
                  Contact
                </a>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                <div className="p-4 rounded-lg bg-gray-900 border border-gray-800 shadow">
                  <h4 className="text-cyan-300 font-semibold">Quick snapshot</h4>
                  <p className="text-sm text-gray-300 mt-2">Dedicated Software Engineer with a 1st Class BSc in Computer Science from the University of Bedfordshire. Passionate about leveraging technology to solve complex problems, with expertise in full-stack development and a commitment to delivering high-quality, user-centric solutions in fast-paced environments.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-900 border border-gray-800 shadow">
                  <h4 className="text-cyan-300 font-semibold">Highlights</h4>
                  <ul className="text-sm text-gray-300 mt-2 space-y-1">
                    <li>Proficient in modern frameworks like React for dynamic user interfaces and Django for scalable backend services.</li>
                    <li>Experienced in building full-stack applications using technologies such as Python, SQL databases, AWS cloud services, and containerization tools like Docker.</li>
                  </ul>
                </div>
              </div>
            </section>

            <aside className="md:col-span-1 flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg transform transition hover:scale-[1.03] animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <img src="/Portfolio/James.png" alt="James Bragg" className="w-full h-full object-cover" />
              </div>

              <div className="mt-4 w-full bg-gray-850/10 border border-gray-800 rounded-lg p-3 text-left">
                <h3 className="text-xs text-gray-300 uppercase tracking-wide">Contact</h3>
                <p className="mt-2 text-sm text-gray-300">Email: <a href="mailto:jamesbragg01@outlook.com" className="text-cyan-300">jamesbragg01@outlook.com</a></p>
                <p className="mt-1 text-sm text-gray-300">Phone: <a href="tel:07483210270" className="text-cyan-300">07483 210270</a></p>
              </div>
            </aside>
          </div>

          <div className="mt-8 text-sm text-gray-400">Want to see more? Browse projects or read more about my work and experience.</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
