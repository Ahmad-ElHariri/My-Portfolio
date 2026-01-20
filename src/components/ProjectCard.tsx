import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Tag from './Tag';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const comingSoon = project.status === 'coming_soon';
  const imgSrc = project.imageUrl?.startsWith('http')
    ? project.imageUrl
    : `https://placehold.co/800x500/png?text=${encodeURIComponent(project.title)}`;

  const isPlaceholder = (u: string) =>
    u.includes('PLACEHOLDER') || u.includes('COMING_SOON') || u.startsWith('GITHUB_URL_') || u.startsWith('WEBSITE_URL_');

  return (
    <div className="glow-card group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <img
            src={imgSrc}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">{project.summary}</p>
            </div>
            {comingSoon ? (
              <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
                Coming Soon
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            <a
              href={isPlaceholder(project.githubUrl) ? undefined : project.githubUrl}
              onClick={isPlaceholder(project.githubUrl) ? (e) => e.preventDefault() : undefined}
              className={
                'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ring-1 ' +
                (isPlaceholder(project.githubUrl)
                  ? 'cursor-not-allowed bg-slate-100 text-slate-400 ring-slate-200'
                  : 'bg-slate-900 text-white ring-slate-900/10 hover:-translate-y-0.5 hover:shadow-md')
              }
              target={isPlaceholder(project.githubUrl) ? undefined : '_blank'}
              rel={isPlaceholder(project.githubUrl) ? undefined : 'noreferrer'}
              title={isPlaceholder(project.githubUrl) ? 'GitHub link coming soon' : 'GitHub repository'}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={isPlaceholder(project.websiteUrl) ? undefined : project.websiteUrl}
              onClick={isPlaceholder(project.websiteUrl) ? (e) => e.preventDefault() : undefined}
              className={
                'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ring-1 ' +
                (isPlaceholder(project.websiteUrl)
                  ? 'cursor-not-allowed bg-slate-100 text-slate-400 ring-slate-200'
                  : 'bg-accent text-white ring-accent/10 hover:-translate-y-0.5 hover:shadow-md')
              }
              target={isPlaceholder(project.websiteUrl) ? undefined : '_blank'}
              rel={isPlaceholder(project.websiteUrl) ? undefined : 'noreferrer'}
              title={isPlaceholder(project.websiteUrl) ? 'Website link coming soon' : 'Live website'}
            >
              <ExternalLink className="h-4 w-4" />
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
