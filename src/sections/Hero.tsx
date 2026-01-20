import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Container from '../components/Container';
import IconLink from '../components/IconLink';
import { IMAGE_PLACEHOLDERS, SITE } from '../data/site';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -z-10 -left-24 top-10 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 -right-24 top-24 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl" />


      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* No hero animation (per request) */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              {SITE.name}
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-semibold text-slate-700">
              {SITE.headline}
            </p>

            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              {SITE.intro.line1}
              <br />
              {SITE.intro.line2}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <IconLink href={SITE.links.github} label="GitHub" variant="github" icon={<Github className="h-4 w-4" />} />
              <IconLink href={SITE.links.linkedin} label="LinkedIn" variant="linkedin" icon={<Linkedin className="h-4 w-4" />} />
              <IconLink href={`mailto:${SITE.email}`} label="Email" variant="email" icon={<Mail className="h-4 w-4" />} />
            </div>

            <div className="mt-10 flex items-center gap-3 text-slate-500">
              <div className="h-px w-10 bg-slate-300" />
              <span className="text-sm font-semibold">Scroll down</span>
            </div>
          </div>

          <div className="relative">
            {/* Accent circles */}
            <div className="pointer-events-none absolute -left-6 top-6 h-16 w-16 rounded-full bg-blue-200/60" />
            <div className="pointer-events-none absolute right-2 top-2 h-10 w-10 rounded-full bg-yellow-200/70" />
            <div className="pointer-events-none absolute -right-4 bottom-10 h-14 w-14 rounded-full bg-indigo-200/60" />

            <div className="mx-auto w-full max-w-sm">
              <div className="relative mx-auto aspect-square w-72 sm:w-80 overflow-hidden rounded-full ring-4 ring-white shadow-soft">
                <img
                  src={IMAGE_PLACEHOLDERS.profile}
                  alt="Portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
