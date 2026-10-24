import { Link } from 'react-router-dom';
import Terminal from './Terminal';
import { BrandIcon, Chip, Icon, Reveal, SectionLabel, StatusPill } from './components';
import { profile, projects, skillGroups, stats } from './data';
import { asset, trackPointer, useUkTime } from './lib';

const featured = projects.filter(p => p.featured);
const marqueeSkills = skillGroups.filter(g => g.name !== 'People').flatMap(g => g.items);

const Home = () => {
  const time = useUkTime();

  return (
    <>
      {/* Hero */}
      <section className="grid grid-cols-1 items-center gap-12 pt-10 sm:pt-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill>{profile.status}</StatusPill>
              <span className="font-mono text-xs text-subtle">
                Corby, UK · <span className="text-muted">{time}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
              James
              <span className="text-gradient">Bragg</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 font-display text-xl text-fg/90 sm:text-2xl">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted text-pretty">{profile.intro}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn btn-primary group">
                View my work
                <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
              <span className="mx-1 hidden h-6 w-px bg-ink-700 sm:block" aria-hidden />
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn btn-ghost px-3">
                <BrandIcon name="github" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn btn-ghost px-3">
                <BrandIcon name="linkedin" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <figure className="relative mx-auto w-[calc(100%-1rem)] max-w-sm">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-accent/40" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-850">
              <img
                src={asset('james-portrait.webp')}
                alt="Portrait of James Bragg"
                width={900}
                height={1349}
                className="aspect-[4/5] w-full object-cover object-top"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/90 to-transparent" aria-hidden />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <span className="rounded-md bg-ink-950/70 px-2.5 py-1 font-mono text-[0.7rem] text-fg backdrop-blur">
                  BSc (Hons) CS · First Class
                </span>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="mt-20 sm:mt-28">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-700/80 bg-ink-700/80 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="bg-ink-900/95 p-5 sm:p-7">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold text-accent sm:text-4xl">{stat.value}</span>
                <span className="mt-2 block text-sm leading-snug text-muted">{stat.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Skills marquee */}
      <section className="marquee mt-10 overflow-hidden py-2" aria-label="Technologies I use">
        <div className="marquee-track flex w-max gap-3">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <span
              key={i}
              aria-hidden={i >= marqueeSkills.length}
              className="whitespace-nowrap rounded-full border border-ink-700 px-4 py-1.5 font-mono text-xs text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="mt-24 sm:mt-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel index="01">Selected work</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Things I’ve built</h2>
            </div>
            <Link to="/projects" className="link group inline-flex items-center gap-2 text-sm">
              All projects
              <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100} className="h-full">
              <Link
                to="/projects"
                state={{ open: project.slug }}
                onMouseMove={trackPointer}
                className="card spotlight group flex h-full flex-col p-6 transition duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, '0')}</span>
                  <Icon
                    name="arrow-up-right"
                    className="h-5 w-5 text-subtle transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
                <p className="label mt-8">{project.kicker}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map(t => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Terminal */}
      <section className="mt-24 grid grid-cols-1 items-center gap-10 sm:mt-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel index="02">Interactive</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Prefer the command line?</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Explore my skills, projects and experience the way developers do. Type <code className="chip">help</code> to see the
            commands, use <code className="chip">↑</code> for history and <code className="chip">Tab</code> to autocomplete.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <Terminal />
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal className="mt-24 sm:mt-32">
        <section className="card relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Looking for a developer who delivers?</h2>
              <p className="mt-3 text-muted">
                I’m open to entry-level roles across the technology sector and freelance projects. Let’s talk.
              </p>
            </div>
            <a href={`mailto:${profile.email}`} className="btn btn-primary shrink-0 self-start md:self-auto">
              <Icon name="mail" />
              Email me
            </a>
          </div>
        </section>
      </Reveal>
    </>
  );
};

export default Home;
