import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const sorted = useMemo(() => {
    return [...projects].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50">
      <Container>
        <SectionHeader title="Projects" subtitle="" />

        <div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
          style={{ gridAutoRows: '1fr' }}
        >
          {sorted.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: (idx % 6) * 0.03 }}
              className="h-full"
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>

        {/* Editing hint removed (requested). If you want it back, we can add a small developer-only comment in the README instead. */}
      </Container>
    </section>
  );
}
