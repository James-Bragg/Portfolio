import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Chip, Icon, PageHeader, Reveal, SectionLabel } from './components';
import { ongoing, projects } from './data';
import type { Category, Project } from './data';
import { trackPointer } from './lib';

const filters: ('All' | Category)[] = ['All', 'Web', 'Python', 'Rust', 'Machine Learning', 'Team'];

function ProjectRow({ project, index, open, onToggle }: { project: Project; index: number; open: boolean; onToggle: () => void }) {
  const panelId = `project-${project.slug}`;

  return (
    <article id={project.slug} onMouseMove={trackPointer} className={`card spotlight scroll-mt-24 transition-colors duration-300 ${open ? 'border-accent/30' : ''}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 p-5 text-left sm:gap-6 sm:p-7"
      >
        <span className="pt-1 font-mono text-xs text-subtle">{String(index + 1).padStart(2, '0')}</span>
        <span>
          <span className="label block">{project.kicker}</span>
          <span className="mt-2 block font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
            {project.title}
          </span>
          <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{project.summary}</span>
          <span className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <Chip key={t}>{t}</Chip>
            ))}
          </span>
        </span>
        <span
          className={`grid h-9 w-9 place-items-center rounded-full border transition duration-500 ${
            open ? 'rotate-45 border-accent bg-accent text-ink-950' : 'border-ink-600 text-muted group-hover:border-accent group-hover:text-accent'
          }`}
          aria-hidden
        >
          <Icon name="plus" />
        </span>
      </button>

      <div id={panelId} className="collapse-grid" data-open={open} inert={!open}>
        <div className="overflow-hidden">
          <div className="border-t border-ink-700/80 px-5 pb-6 pt-5 sm:ml-[3.25rem] sm:px-7">
            <ul className="space-y-2.5 text-sm leading-relaxed text-muted sm:text-base">
              {project.points.map(point => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-accent" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            {(project.demo || project.repo) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Visit live site
                    <Icon name="arrow-up-right" />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    View source
                    <Icon name="arrow-up-right" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const Projects: React.FC = () => {
  const location = useLocation();
  const requested = (location.state as { open?: string } | null)?.open;
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [openSlugs, setOpenSlugs] = useState<Set<string>>(() => new Set(requested ? [requested] : []));

  // Arriving from a featured card on the home page: scroll to that project.
  useEffect(() => {
    if (!requested) return;
    const id = window.setTimeout(() => document.getElementById(requested)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 250);
    return () => window.clearTimeout(id);
  }, [requested]);

  const visible = filter === 'All' ? projects : projects.filter(p => p.categories.includes(filter));

  const toggle = (slug: string) =>
    setOpenSlugs(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <>
      <PageHeader
        index="02"
        label="Projects"
        title={
          <>
            Selected work, <span className="text-gradient">start to ship.</span>
          </>
        }
        lead="Projects from my freelance work, university degree and personal interests, spanning web applications, cloud computing, machine learning, and systems programming in Rust. Select a project to see the details."
      />

      <Reveal>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map(f => {
            const count = f === 'All' ? projects.length : projects.filter(p => p.categories.includes(f)).length;
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors duration-300 ${
                  active ? 'border-accent bg-accent text-ink-950' : 'border-ink-600 text-muted hover:border-subtle hover:text-fg'
                }`}
              >
                {f}
                <span className={`font-mono text-xs ${active ? 'text-ink-950/70' : 'text-subtle'}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-8 space-y-4">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i, 5) * 60}>
            <ProjectRow
              project={project}
              index={projects.indexOf(project)}
              open={openSlugs.has(project.slug)}
              onToggle={() => toggle(project.slug)}
            />
          </Reveal>
        ))}
      </div>

      <section className="mt-24">
        <Reveal>
          <SectionLabel index="→">In progress</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">What I’m working on now</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {ongoing.map(item => (
            <Reveal key={item.title}>
              <div className="card h-full border-dashed p-6">
                <div className="flex items-center gap-2 font-mono text-xs text-accent">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
                  in progress
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tech.map(t => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
