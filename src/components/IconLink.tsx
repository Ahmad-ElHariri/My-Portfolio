import React from 'react';

type Props = {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: 'github' | 'linkedin' | 'email' | 'website' | 'neutral';
};

export default function IconLink({ href, label, icon, variant = 'neutral' }: Props) {
  const isPlaceholder = href.includes('PLACEHOLDER') || href.includes('COMING_SOON') || href.startsWith('GITHUB_URL_') || href.startsWith('WEBSITE_URL_');

  const base = 'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ring-1';
  const disabled = 'cursor-not-allowed bg-slate-100 text-slate-400 ring-slate-200';

  const variants: Record<string, string> = {
    neutral: 'bg-white text-slate-800 ring-slate-200 hover:-translate-y-0.5 hover:shadow-md',
    github: 'bg-slate-900 text-white ring-slate-900/10 hover:-translate-y-0.5 hover:shadow-md',
    linkedin: 'bg-[#0A66C2] text-white ring-[#0A66C2]/10 hover:-translate-y-0.5 hover:shadow-md',
    email: 'bg-emerald-600 text-white ring-emerald-600/10 hover:-translate-y-0.5 hover:shadow-md',
    website: 'bg-accent text-white ring-accent/10 hover:-translate-y-0.5 hover:shadow-md'
  };

  return (
    <a
      href={isPlaceholder ? undefined : href}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      className={base + ' ' + (isPlaceholder ? disabled : variants[variant])}
      aria-disabled={isPlaceholder}
      title={isPlaceholder ? 'Link coming soon' : label}
      rel={isPlaceholder ? undefined : 'noreferrer'}
      target={isPlaceholder ? undefined : '_blank'}
    >
      <span className={isPlaceholder ? 'text-slate-400' : 'text-inherit'}>{icon}</span>
      <span>{label}</span>
    </a>
  );
}
