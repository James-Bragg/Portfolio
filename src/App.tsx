import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrandIcon, Icon } from "./components";
import { profile } from "./data";

function useCursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
        document.documentElement.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
}

function Footer() {
  return (
    <footer className="relative mt-24 border-t border-ink-700/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-subtle">
            © {new Date().getFullYear()} · Built with React, TypeScript &
            Tailwind CSS
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn btn-ghost px-3"
          >
            <BrandIcon name="github" className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn btn-ghost px-3"
          >
            <BrandIcon name="linkedin" className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="btn btn-ghost px-3"
          >
            <Icon name="mail" />
          </a>
          <Link to="/contact" className="btn btn-primary ml-2">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const { pathname } = useLocation();
  useCursorSpotlight();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <button
        type="button"
        onClick={() => document.getElementById("content")?.focus()}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 btn btn-primary"
      >
        Skip to content
      </button>
      <Navbar />

      <main
        id="content"
        tabIndex={-1}
        key={pathname}
        className="page-enter outline-none mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 pt-20"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
