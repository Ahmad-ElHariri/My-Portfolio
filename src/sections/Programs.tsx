import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { programs } from '../data/programs';

export default function Programs() {
  const sorted = useMemo(() => {
    return [...programs].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, []);

  return (
    <section id="programs" className="py-16 sm:py-20">
      <Container>
        <SectionHeader title="Programs" subtitle="" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-slate-200"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={p.imageUrl?.startsWith('http') ? p.imageUrl : `https://placehold.co/800x500/png?text=${encodeURIComponent(p.name)}`}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {p.org} • {p.period}
                </p>

                <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-slate-700">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
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
