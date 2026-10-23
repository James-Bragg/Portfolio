import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About', index: '01' },
  { to: '/projects', label: 'Projects', index: '02' },
  { to: '/contact', label: 'Contact', index: '03' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-ink-700/70 bg-ink-950/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3" aria-label="James Bragg, home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-display text-sm font-bold text-ink-950 transition-transform duration-300 group-hover:-rotate-6">
            JB
          </span>
          <span className="font-mono text-sm text-muted">
            <span className="text-fg">james</span>
            <span className="text-subtle">@</span>bragg
            <span className="text-accent">:~$</span>
            <span className="caret ml-1 hidden sm:inline-block" aria-hidden />
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `group flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`font-mono text-xs ${isActive ? 'text-accent' : 'text-subtle group-hover:text-accent'}`}>{link.index}</span>
                    {link.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(prev => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-lg text-muted hover:text-fg md:hidden"
          type="button"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className="collapse-grid md:hidden" data-open={open} inert={!open}>
        <ul className="overflow-hidden px-4">
          {links.map(link => (
            <li key={link.to} className="border-t border-ink-700/70 first:border-t-0">
              <NavLink
                to={link.to}
                className={({ isActive }) => `flex items-center gap-3 py-4 font-display text-2xl ${isActive ? 'text-fg' : 'text-muted'}`}
              >
                <span className="font-mono text-xs text-accent">{link.index}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
