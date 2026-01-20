import React, { useEffect, useMemo, useState } from 'react';
import Container from './Container';

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'album', label: 'Album' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'programs', label: 'Programs' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' }
];

export default function Nav() {
  const [active, setActive] = useState<string>('home');
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: [0.1, 0.2, 0.4] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md ring-1 ring-slate-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            className="text-sm font-bold tracking-tight text-slate-900"
            onClick={() => go('home')}
          >
            Ahmad El Hariri
          </button>

          <div className="hidden md:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={
                  'rounded-xl px-3 py-2 text-sm font-semibold transition ' +
                  (active === s.id ? 'text-accent' : 'text-slate-700 hover:text-slate-900')
                }
              >
                {s.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 ring-1 ring-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className={
                    'rounded-xl px-4 py-3 text-left text-sm font-semibold ring-1 ring-slate-200 ' +
                    (active === s.id ? 'text-accent bg-white' : 'text-slate-800 bg-white')
                  }
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
