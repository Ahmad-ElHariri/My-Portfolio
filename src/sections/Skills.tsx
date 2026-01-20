import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  Database,
  Hammer,
  Layers,
  LineChart,
  Server,
  Workflow,
  Wrench,
  Users
} from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Tag from '../components/Tag';
import { skillGroups } from '../data/skills';

function iconFor(title: string) {
  const t = title.toLowerCase();
  if (t.includes('programming')) return Code2;
  if (t.includes('web development')) return Layers;
  if (t.includes('backend')) return Server;
  if (t.includes('software engineering')) return Hammer;
  if (t.includes('database')) return Database;
  if (t.includes('genai') || t.includes('llm') || t.includes('retrieval')) return Brain;
  if (t.includes('devops')) return Wrench;
  if (t.includes('machine learning') || t.includes('deep learning')) return LineChart;
  if (t.includes('automation') || t.includes('orchestration')) return Workflow;
  if (t.includes('soft skills')) return Users;
  return Layers;
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <SectionHeader title="Skills" subtitle="" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, idx) => {
            const Icon = iconFor(g.title);
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-accent/70" />
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-slate-800 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{g.title}</h3>
                    <div className="mt-1 h-[2px] w-10 rounded-full bg-accent/70" />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Tag key={it}>{it}</Tag>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
