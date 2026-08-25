# Wisdom Girls — Event Page

A mobile-first single-page Next.js event hub for:

**കണ്ണൂർ ജില്ലാ വിദ്യാർത്ഥിനി സമ്മേളനം**  
**2026 ആഗസ്റ്റ് 27**  
**മുണ്ടയാട് ഇൻഡോർ സ്റ്റേഡിയം, കണ്ണൂർ**

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Add the feedback form URL

Open `app/page.tsx` and replace:

```ts
feedback: "FORM_URL_HERE"
```

with the actual feedback form URL.

## Deploy to Vercel

Push this folder to GitHub and import the repository into Vercel.

No environment variables are required for the current version.


## If you previously installed dependencies

Delete the old dependency tree and lockfile, then reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

The project intentionally uses `next.config.js` rather than `next.config.ts` to avoid TypeScript config transpilation issues.
