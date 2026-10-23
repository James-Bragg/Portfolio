import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

// Resolve a file in /public against Vite's base path ("/Portfolio/").
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// Feeds the cursor position to the .spotlight hover glow on cards.
export function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--px', `${e.clientX - rect.left}px`);
  el.style.setProperty('--py', `${e.clientY - rect.top}px`);
}

// True once the element has scrolled into view (never resets).
export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

// Current time in the UK, refreshed every 30 seconds.
export function useUkTime() {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
