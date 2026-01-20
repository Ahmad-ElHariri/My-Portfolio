import React from 'react';

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
      {/* Intentionally no subtitle to keep sections clean and consistent */}
    </div>
  );
}
