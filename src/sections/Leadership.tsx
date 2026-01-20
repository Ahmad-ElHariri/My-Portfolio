import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { leadership } from '../data/leadership';

export default function Leadership() {
  const sorted = useMemo(() => {
    return [...leadership].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, []);

  return (
    <section id="leadership" className="py-16 sm:py-20">
      <Container>
        <SectionHeader title="Leadership & Community" subtitle="" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((x, idx) => (
            <motion.div
              key={x.title + x.org}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={x.imageUrl?.startsWith('http') ? x.imageUrl : `https://placehold.co/800x500/png?text=${encodeURIComponent(x.title)}`}
                  alt={x.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{x.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {x.org} • {x.period}
                    </p>
                  </div>
                  {x.status === 'coming_soon' ? (
                    <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
                      Coming Soon
                    </span>
                  ) : null}
                </div>

                <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-slate-700">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
