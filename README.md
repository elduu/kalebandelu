# Amanuel & Saron — Wedding Invitation

A single-page, bilingual (English / Amharic) wedding invitation built with
**React 19 + TypeScript + Vite + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build to /dist
npm run preview   # preview the production build
```

## Project structure

```
index.html                 App shell: meta tags, fonts, no-flash theme script
public/audio/              Drop celebration.mp3 here (background music)
src/
  main.tsx                 Entry point
  App.tsx                  Page composition (header → sections → footer)
  config/event.ts          Date, venue search text, music URL, storage keys
  data/
    navigation.ts          Nav links
    content.ts             Schedule, story, gallery, wishes, gifts, venue links
  i18n/                    English-keyed Amharic dictionary + provider/hook
  hooks/                   useCountdown, useTheme, useBackgroundMusic, useImagePreview
  lib/                     calendar (.ics download), storage, utils
  components/
    layout/                Header, Footer
    controls/              LanguageToggle, ThemeToggle, MusicPlayer
    sections/              One file per page section
    common/                SectionHeading, SectionLabel
    ui/                    Small shadcn-style primitives (button, dialog, …)
  styles/                  theme tokens, base, component utilities, responsive overrides
```

## Customising

- **Change the date/venue:** edit `src/config/event.ts` and `src/data/content.ts`.
- **Add a translation:** add `"English text": "አማርኛ"` to `src/i18n/am.ts`.
  Missing keys fall back to English.
- **RSVP submission:** `src/components/sections/Rsvp.tsx` currently only shows a
  confirmation — hook `handleSubmit` up to your backend or a form service.
- **Music:** place `celebration.mp3` in `public/audio/`.
