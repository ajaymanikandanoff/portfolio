# Ajay M — Portfolio

A personal portfolio site built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This creates a `dist/` folder you can deploy to GitHub Pages, Vercel, Netlify, or any static host.

## Where to edit things

Everything you'd want to change — project cards, certifications, tools, contact links, your photo — lives in **one file**:

```
src/data/content.js
```

You don't need to touch any component file to update text or links.

- **Photo**: drop an image into the `public/` folder (e.g. `public/me.jpg`) and set `profile.photo` to `/me.jpg` in `content.js`.
- **Projects**: each entry supports `link` (a live demo URL) or `repo` (a GitHub URL) — if both are empty, the card shows "In progress".
- **Certifications**: add `issuer` and `link` for each language once you have the credential details.

## Structure

```
src/
  components/   One file per section (Header, Hero, About, Projects, Certifications, Tools, Contact, Footer)
  data/         content.js — all editable site content
  index.css     Design system (colors, type, layout) for the whole site
  App.jsx       Assembles the sections
  main.jsx      React entry point
```

## Design

Dark theme (black / charcoal / off-white) with a muted blue accent, Bricolage Grotesque for headings and IBM Plex Sans for body text. No fake stats, testimonials, or proficiency percentages — just what's actually been built so far.
