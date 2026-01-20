import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';

const cards = [
  {
    title: 'AI Agents & RAG Systems',
    desc: 'Agentic flows, retrieval, structured outputs, and reliability-focused prompting.'
  },
  {
    title: 'Workflow Automation (n8n)',
    desc: 'Operational workflows with webhooks, routing, tool calls, and production patterns.'
  },
  {
    title: 'API Integrations & Backend Delivery',
    desc: 'FastAPI/Node backends, REST integrations, databases, and engineering tooling.'
  },
  {
    title: 'Product-minded Engineering',
    desc: 'Ship end-to-end: define outcomes, build iteratively, and optimize for real usage.'
  }
];

const chips = ['AUB CS', 'GenAI', 'Automation', 'RAG', 'API Integrations', 'n8n'];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          title="About"
          subtitle="Build-first engineering with strong backend fundamentals and a focus on real business outcomes."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              I build GenAI systems and automation workflows that connect to real products and operations.
              My technical foundation includes backend development, clean software engineering practices, and reliable API integrations.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-700">
              I ship end-to-end systems across document/proposal generation, support & workflow automation, and slide/content automation—
              working comfortably with APIs, databases, and engineering tooling.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200"
              >
                <h3 className="text-sm font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
