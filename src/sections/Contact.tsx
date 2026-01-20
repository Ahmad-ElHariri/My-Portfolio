import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import IconLink from '../components/IconLink';
import { SITE } from '../data/site';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50">
      <Container>
        <SectionHeader
          title="Get in Touch"
          subtitle="Open to internships and full-time opportunities in GenAI / AI engineering and workflow automation."
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <IconLink href={`mailto:${SITE.email}`} label="Email" variant="email" icon={<Mail className="h-4 w-4" />} />
          <IconLink href={SITE.links.linkedin} label="LinkedIn" variant="linkedin" icon={<Linkedin className="h-4 w-4" />} />
          <IconLink href={SITE.links.github} label="GitHub" variant="github" icon={<Github className="h-4 w-4" />} />
        </motion.div>

        <div className="mt-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </Container>
    </section>
  );
}
