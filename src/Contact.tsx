import React, { useState } from 'react';
import { BrandIcon, Icon, PageHeader, Reveal, StatusPill } from './components';
import { profile } from './data';
import { trackPointer, useUkTime } from './lib';

const channels = [
  { label: 'GitHub', value: 'github.com/James-Bragg', href: profile.github, icon: <BrandIcon name="github" /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/james-bragg', href: profile.linkedin, icon: <BrandIcon name="linkedin" /> },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: <Icon name="phone" className="h-5 w-5" /> },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const time = useUkTime();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <PageHeader
        index="03"
        label="Contact"
        title={
          <>
            Let’s build <span className="text-gradient">something good.</span>
          </>
        }
        lead="I'm available for freelance projects and open to entry-level roles across the technology sector. Reach out and I'll get back to you."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div onMouseMove={trackPointer} className="card spotlight relative h-full overflow-hidden p-6 sm:p-10">
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="relative">
              <StatusPill>{profile.status}</StatusPill>
              <p className="label mt-8">Email is the fastest way to reach me</p>
              <a
                href={`mailto:${profile.email}`}
                className="link mt-3 inline-block break-all font-display text-2xl font-semibold tracking-tight sm:text-4xl"
              >
                {profile.email}
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  <Icon name="mail" />
                  Send an email
                </a>
                <button type="button" onClick={copyEmail} className="btn btn-ghost">
                  <Icon name={copied ? 'check' : 'copy'} className={`h-4 w-4 ${copied ? 'text-emerald-400' : ''}`} />
                  <span aria-live="polite">{copied ? 'Copied!' : 'Copy address'}</span>
                </button>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-700/80 pt-6 text-sm">
                <div>
                  <dt className="label">Based in</dt>
                  <dd className="mt-1.5 flex items-center gap-1.5 text-fg">
                    <Icon name="pin" className="h-4 w-4 text-subtle" />
                    Corby, UK
                  </dd>
                </div>
                <div>
                  <dt className="label">Local time</dt>
                  <dd className="mt-1.5 font-mono text-fg">{time}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5 lg:col-span-5">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={80 + i * 80} className="flex-1">
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                onMouseMove={trackPointer}
                className="card spotlight group flex h-full items-center gap-4 p-6 transition duration-500 hover:-translate-y-0.5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-ink-600 bg-ink-800 text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                  {channel.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="label block">{channel.label}</span>
                  <span className="mt-1 block truncate text-fg">{channel.value}</span>
                </span>
                <Icon
                  name="arrow-up-right"
                  className="h-5 w-5 shrink-0 text-subtle transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
