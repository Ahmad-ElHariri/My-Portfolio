# Ahmad El Hariri — Portfolio

## Setup

1) Install dependencies

```bash
npm install
```

2) Run locally

```bash
npm run dev
```

3) Build for Netlify

```bash
npm run build
```

## Where to edit content

- Site identity + links: `src/data/site.ts`
- Album photos: `src/data/site.ts` placeholders `ALBUM_01_URL ... ALBUM_10_URL`
- Projects: `src/data/projects.ts` (newest-first via `date`)
- Experience: `src/data/experience.ts`
- Programs: `src/data/programs.ts`
- Skills: `src/data/skills.ts`
- Leadership & Community: `src/data/leadership.ts`

## Replace image placeholders

Replace these placeholder strings with your GitHub raw links:
- `PROFILE_PHOTO_URL`
- `ALBUM_01_URL` ... `ALBUM_10_URL`
- `PROJECT_IMAGE_*_URL`

## Add a new project

Add a new object in `src/data/projects.ts` and set:
- `date` as `YYYY-MM-DD`
- `imageUrl`, `githubUrl`, `websiteUrl`

The grid is responsive by design (3/2/1 columns).
