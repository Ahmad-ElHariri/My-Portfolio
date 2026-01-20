import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { IMAGE_PLACEHOLDERS } from '../data/site';

export default function Album() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="album" className="py-16 sm:py-20 bg-slate-50">
      <Container>
        <SectionHeader title="Photo Album" subtitle="" />

        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex w-max gap-4 snap-x snap-mandatory">
            {IMAGE_PLACEHOLDERS.album.map((src, i) => (
              <motion.button
                key={src}
                onClick={() => setActive(src)}
                whileHover={{ y: -4 }}
                className="snap-start w-[340px] sm:w-[520px] rounded-2xl bg-white shadow-soft ring-1 ring-slate-200 overflow-hidden"
              >
                <div className="aspect-[16/10] w-full bg-slate-100">
                  <img src={src} alt={`Album ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Minimal lightbox (optional) */}
        <AnimatePresence>
          {active ? (
            <motion.div
              className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4">
                  <div className="text-sm font-semibold text-slate-700">Preview</div>
                  <button
                    onClick={() => setActive(null)}
                    className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200"
                  >
                    Close
                  </button>
                </div>
                <div className="bg-slate-100">
                  <img src={active} alt="Preview" className="max-h-[75vh] w-full object-contain" />
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </section>
  );
}
