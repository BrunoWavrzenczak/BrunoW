# CLAUDE.md

Context and coding instructions for Claude Code / AI assistants working on **Bruno Wavrzenczak's Portfolio**.

---

## 🚀 Quick Reference Commands

- **Start Dev Server**: `npm run dev`
- **Production Build**: `npm run build`
- **Lint Code**: `npm run lint`
- **Preview Build**: `npm run preview`
- **Deploy to GitHub Pages**: `npm run deploy`

---

## 🛠️ Tech Stack & Architecture

- **React 19** + **Vite 8** + **Tailwind CSS 3.4**
- **Icons**: `lucide-react`, `react-icons/fa`
- **Deployment**: GitHub Pages (`https://BrunoWavrzenczak.github.io/BrunoW/`) via `gh-pages` branch
- **Vite Base Path**: `/BrunoW/` (configured in `vite.config.js`)
- **Single Page Application**: Centralized in [`src/App.jsx`](file:///Users/brunow/Documents/meu_site/src/App.jsx)

---

## 📁 Key File Locations

- **Public Static Files**: `public/`
  - `Bruno_Wavrzenczak_cv_pt.pdf` (Portuguese Resume)
  - `Bruno_Wavrzenczak_cv_en.pdf` (English Resume)
  - `favicon.png`, `favicon.svg`, `icons.svg`
- **Assets / Media**: `src/assets/`
  - `eu.jpeg` (Profile avatar)
  - `eventos/` (Conference/event photos & logos)
  - `projetos/` (Project screenshots & icons)
- **Main Logic & Content**: `src/App.jsx`
  - `t` (i18n translations for `pt` and `en`)
  - `profile` (Personal details, avatar, CV URL)
  - `academic` (Education, publications, academic roles)
  - `experience` (Work/consulting roles and achievements)
  - `projects` (Lab/extension projects)
  - `events` (Conferences and networking)

---

## 📋 Critical AI Guidelines & Rules

1. **Bilingual Requirement (PT & EN)**:
   - Always update both Portuguese (`pt`) and English (`en`) dictionary keys and data fields when adding or updating any text.

2. **Base Path & Asset Links**:
   - The site is hosted under `/BrunoW/`.
   - Use relative paths or `${import.meta.env.BASE_URL}filename` when referencing files from `public/`.

3. **CV Updates vs Layout Changes**:
   - If the user asks to update CV files, only replace/commit the PDFs in `public/` unless changes to site content/layout are explicitly requested.

4. **Linting & Unused Imports**:
   - ESLint is strict about unused imports (`no-unused-vars`). Always ensure all imported icons and modules are actively used.
   - Run `npm run lint` and `npm run build` to verify every change.

5. **Deployment Workflow**:
   - Build is generated into `dist/`.
   - Run `npm run deploy` to publish the latest `dist/` to the `gh-pages` branch.
