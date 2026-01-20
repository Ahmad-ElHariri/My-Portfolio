import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Tag from '../components/Tag';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <SectionHeader title="Experience" subtitle="" />

        <div className="mt-10 grid gap-5">
          {experiences.map((e, idx) => (
            <motion.div
              key={e.role + e.org}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{e.role} — {e.org}</h3>
                  <p className="text-sm text-slate-600">{e.period}{e.location ? ` • ${e.location}` : ''}</p>
                </div>
              </div>

              <ul className="mt-4 list-disc pl-5 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
