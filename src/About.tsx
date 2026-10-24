import React from "react";
import { Link } from "react-router-dom";
import { Chip, Icon, PageHeader, Reveal, SectionLabel } from "./components";
import { education, experience, interests, profile, skillGroups } from "./data";
import { asset, trackPointer } from "./lib";

const facts = [
  { label: "Location", value: profile.location },
  { label: "Status", value: profile.status },
  { label: "Driving", value: "Full UK driving licence" },
];

const About: React.FC = () => {
  return (
    <>
      <PageHeader
        index="01"
        label="About"
        title={
          <>
            Developer, team leader,{" "}
            <span className="text-gradient">problem solver.</span>
          </>
        }
        lead="I'm a First-Class Computer Science graduate with experience in software engineering, cloud computing, and project delivery."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-850">
                <img
                  src={asset("james-wide.webp")}
                  alt="James Bragg"
                  width={1400}
                  height={934}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <dl className="divide-y divide-ink-700/80">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 px-5 py-3.5"
                    >
                      <dt className="label">{fact.label}</dt>
                      <dd className="text-right text-sm text-fg">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-4 flex gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-primary flex-1"
                >
                  <Icon name="mail" />
                  Email
                </a>
                <Link to="/projects" className="btn btn-ghost flex-1">
                  Projects
                </Link>
              </div>
            </Reveal>
          </div>
        </aside>

        <div className="space-y-20 lg:col-span-8">
          {/* Bio */}
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                I currently combine{" "}
                <span className="text-fg">freelance web development</span> with
                a{" "}
                <span className="text-fg">
                  shift management role at McDonald's
                </span>
                , where I lead teams, manage operational processes, and solve
                problems under pressure.
              </p>
              <p>
                I've taken a freelance web project from client brief through to
                live deployment, and led university team projects as Project
                Manager using PRINCE2 and Agile. Lately I've been going deeper
                into{" "}
                <span className="text-fg">Rust and systems programming</span>.
              </p>
              <p>
                I'm passionate about emerging technology and supporting others
                through technical challenges.
              </p>
            </div>
          </Reveal>

          {/* Skills */}
          <section>
            <Reveal>
              <SectionLabel index="A">Skills</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                What I work with
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skillGroups.map((group, i) => (
                <Reveal
                  key={group.name}
                  delay={i * 60}
                  className={
                    i === skillGroups.length - 1 ? "sm:col-span-2" : ""
                  }
                >
                  <div
                    onMouseMove={trackPointer}
                    className="card spotlight h-full p-5 transition-colors duration-300"
                  >
                    <h3 className="label">{group.name}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-ink-700 bg-ink-800/70 px-3 py-1.5 text-sm text-fg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <Reveal>
              <SectionLabel index="B">Experience</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                Where I've worked
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-12 border-l border-ink-700 pl-8">
              {experience.map((job, i) => (
                <li key={job.org} className="relative">
                  <Reveal delay={i * 80}>
                    <span
                      className="absolute -left-[2.3rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink-950"
                      aria-hidden
                    />
                    <p className="font-mono text-xs text-accent">
                      {job.period}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {job.role}{" "}
                      <span className="text-subtle">· {job.org}</span>
                    </h3>
                    {job.link && (
                      <a
                        href={job.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link mt-1 inline-flex items-center gap-1 text-sm"
                      >
                        {job.link.label}
                        <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {job.progression && (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {[...job.progression].reverse().map((step, s, all) => (
                          <React.Fragment key={step.role}>
                            <Chip>
                              {step.role} · {step.period.replace(" — ", "–")}
                            </Chip>
                            {s < all.length - 1 && (
                              <Icon
                                name="arrow-right"
                                className="h-3.5 w-3.5 text-subtle"
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span
                            className="mt-2.5 h-px w-3 shrink-0 bg-subtle"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          {/* Education */}
          <section>
            <Reveal>
              <SectionLabel index="C">Education</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                Qualifications
              </h2>
            </Reveal>
            <div className="mt-8 divide-y divide-ink-700/80 border-y border-ink-700/80">
              {education.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[8rem_1fr]">
                    <p className="font-mono text-xs text-subtle sm:pt-1.5">
                      {item.period}
                    </p>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {item.org} ·{" "}
                        <span className="text-accent">{item.grade}</span>
                      </p>
                      {item.detail && (
                        <p className="mt-2 text-sm text-subtle">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section>
            <Reveal>
              <SectionLabel index="D">
                Outside of the tech industry
              </SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                When I'm not coding
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {interests.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div
                    onMouseMove={trackPointer}
                    className="card spotlight h-full p-5 transition-colors duration-300"
                  >
                    <h3 className="font-display font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
