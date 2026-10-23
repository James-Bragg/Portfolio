import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { education, experience, profile, projects, skillGroups } from './data';

interface Entry {
  command: string;
  output: ReactNode;
}

const commands = ['help', 'whoami', 'skills', 'projects', 'experience', 'education', 'contact', 'ls', 'cd', 'clear', 'sudo'];
const pages = ['about', 'projects', 'contact'];

const Accent = ({ children }: { children: ReactNode }) => <span className="text-accent">{children}</span>;
const Dim = ({ children }: { children: ReactNode }) => <span className="text-subtle">{children}</span>;

function run(input: string, navigate: (to: string) => void): ReactNode {
  const [cmd = '', ...args] = input.trim().split(/\s+/);

  switch (cmd.toLowerCase()) {
    case '':
      return null;
    case 'help':
      return (
        <div className="grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-0.5">
          {[
            ['whoami', 'a short introduction'],
            ['skills', 'languages, frameworks & tools'],
            ['projects', 'things I have built'],
            ['experience', 'where I have worked'],
            ['education', 'qualifications'],
            ['contact', 'how to reach me'],
            ['ls', 'list pages'],
            ['cd <page>', 'go to a page'],
            ['clear', 'clear the screen'],
          ].map(([name, text]) => (
            <div key={name} className="contents">
              <Accent>{name}</Accent>
              <Dim>{text}</Dim>
            </div>
          ))}
        </div>
      );
    case 'whoami':
      return (
        <p>
          <Accent>{profile.name}</Accent>, {profile.role.toLowerCase()} based in {profile.location}. First-Class BSc (Hons)
          Computer Science. {profile.status}.
        </p>
      );
    case 'skills':
      return (
        <div className="space-y-0.5">
          {skillGroups.map(group => (
            <p key={group.name}>
              <Accent>{group.name.padEnd(22, ' ')}</Accent>
              {group.items.join(', ')}
            </p>
          ))}
        </div>
      );
    case 'projects':
      return (
        <div className="space-y-0.5">
          {projects.map((p, i) => (
            <p key={p.slug}>
              <Dim>{String(i + 1).padStart(2, '0')} </Dim>
              <Accent>{p.title}</Accent> <Dim>· {p.kicker}</Dim>
            </p>
          ))}
          <p className="pt-1">
            <Dim>Run </Dim>cd projects<Dim> for the details.</Dim>
          </p>
        </div>
      );
    case 'experience':
      return (
        <div className="space-y-0.5">
          {experience.map(job => (
            <p key={job.org}>
              <Accent>{job.role}</Accent> @ {job.org} <Dim>({job.period})</Dim>
            </p>
          ))}
        </div>
      );
    case 'education':
      return (
        <div className="space-y-0.5">
          {education.map(item => (
            <p key={item.title}>
              <Accent>{item.title}</Accent> <Dim>· {item.org}, {item.period} · {item.grade}</Dim>
            </p>
          ))}
        </div>
      );
    case 'contact':
      return (
        <div className="space-y-0.5">
          <p>
            <Dim>email    </Dim>
            <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            <Dim>github   </Dim>
            <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/James-Bragg</a>
          </p>
          <p>
            <Dim>linkedin </Dim>
            <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/james-bragg</a>
          </p>
        </div>
      );
    case 'ls':
      return <p className="text-signal">{pages.map(p => `${p}/`).join('   ')}</p>;
    case 'cd': {
      const target = (args[0] ?? '').replace(/\/$/, '').toLowerCase();
      if (pages.includes(target)) {
        window.setTimeout(() => navigate(`/${target}`), 350);
        return <Dim>Opening {target}…</Dim>;
      }
      if (target === '' || target === '~' || target === '..') return null;
      return <p>cd: no such page: {target}. Try <Accent>ls</Accent>.</p>;
    }
    case 'sudo':
      return args.join(' ') === 'hire james' ? (
        <p>
          Permission granted. Next step: <a className="link text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      ) : (
        <p>Nice try. (Hint: <Accent>sudo hire james</Accent>)</p>
      );
    default:
      return <p>command not found: {cmd}. Type <Accent>help</Accent> to see what I can do.</p>;
  }
}

const intro = 'whoami';

export default function Terminal() {
  const navigate = useNavigate();
  const [history, setHistory] = useState<Entry[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(true);
  const [recall, setRecall] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Type out the first command so visitors see how it works.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finish = () => {
      setHistory([{ command: intro, output: run(intro, navigate) }]);
      setInput('');
      setTyping(false);
    };
    if (reduced) {
      const id = window.setTimeout(finish, 0);
      return () => window.clearTimeout(id);
    }
    const timers: number[] = [];
    intro.split('').forEach((_, i) => {
      timers.push(window.setTimeout(() => setInput(intro.slice(0, i + 1)), 700 + i * 90));
    });
    timers.push(window.setTimeout(finish, 700 + intro.length * 90 + 350));
    return () => timers.forEach(window.clearTimeout);
  }, [navigate]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const submit = () => {
    const command = input.trim();
    if (command.toLowerCase() === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { command, output: run(command, navigate) }]);
    }
    setInput('');
    setRecall(null);
  };

  const past = history.map(h => h.command).filter(Boolean);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit();
    } else if (e.key === 'ArrowUp' && past.length) {
      e.preventDefault();
      const next = recall === null ? past.length - 1 : Math.max(0, recall - 1);
      setRecall(next);
      setInput(past[next]);
    } else if (e.key === 'ArrowDown' && recall !== null) {
      e.preventDefault();
      const next = recall + 1;
      setRecall(next >= past.length ? null : next);
      setInput(next >= past.length ? '' : past[next]);
    } else if (e.key === 'Tab' && input.trim()) {
      const [first, second] = input.trimStart().split(/\s+/);
      const match =
        second !== undefined && first === 'cd'
          ? pages.find(p => p.startsWith(second.toLowerCase()))
          : commands.find(c => c.startsWith(first.toLowerCase()));
      if (match) {
        e.preventDefault();
        setInput(second !== undefined && first === 'cd' ? `cd ${match}` : match);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const prompt = (
    <span className="mr-2 shrink-0 select-none">
      <span className="text-emerald-400">visitor</span>
      <span className="text-subtle">@</span>
      <span className="text-signal">bragg</span>
      <span className="text-subtle">:~$</span>
    </span>
  );

  return (
    <div className="card overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-ink-700/80 bg-ink-900/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-3 font-mono text-xs text-subtle">~/portfolio: zsh</span>
        <span className="ml-auto hidden font-mono text-xs text-subtle sm:inline">try “help”</span>
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        className="h-80 overflow-y-auto px-4 py-4 font-mono text-[0.8rem] leading-relaxed text-muted sm:text-sm"
        role="log"
        aria-live="polite"
        aria-label="Interactive terminal output"
      >
        <p className="text-subtle">Welcome! This terminal is interactive. Type a command and press Enter.</p>
        {history.map((entry, i) => (
          <div key={i} className="mt-3">
            <div className="flex flex-wrap">
              {prompt}
              <span className="text-fg">{entry.command}</span>
            </div>
            {entry.output && <div className="mt-1 whitespace-pre-wrap">{entry.output}</div>}
          </div>
        ))}

        <label className="mt-3 flex items-center">
          {prompt}
          <span className="sr-only">Terminal command</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            readOnly={typing}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-fg caret-accent outline-none focus-visible:outline-none"
          />
        </label>
      </div>
    </div>
  );
}
