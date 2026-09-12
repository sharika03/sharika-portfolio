# Sharika Dubey — Portfolio

Personal portfolio site for a Technical Lead. Next.js 15 App Router, TypeScript, Tailwind CSS v4, statically exported and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Editing content

All copy lives in one file: [`src/content/profile.ts`](src/content/profile.ts). Update the resume there and every section (hero, metrics, case studies, timeline, certifications, education, contact) picks it up. No section component hardcodes text.

## Resume PDF

The downloadable resume is generated from [`resume/resume.html`](resume/resume.html) into `public/resume.pdf` using local Chrome:

```bash
npm run resume:pdf
```

Edit `resume/resume.html` and re-run the command after any resume change, so the PDF and the site stay in step.

## Deploying to GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It runs on every push to `main`, builds a static export into `out/`, and publishes it.

One-time setup on GitHub:

1. Create an empty repository (no README, no .gitignore).
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push `main`. The workflow builds and deploys.

The workflow resolves the base path automatically:

- Repo named `<username>.github.io` deploys to the domain root with no base path.
- Any other repo name deploys under `/<repo-name>` and sets `NEXT_PUBLIC_BASE_PATH` accordingly.

To reproduce a project-page build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
npx serve out          # or any static server
```

## Notes

- `output: "export"` in [`next.config.ts`](next.config.ts) means no server runtime: no API routes, server actions, or image optimization.
- `public/.nojekyll` stops GitHub Pages from stripping the `_next` directory.
- The contact form has no backend. It composes the message and hands it to the visitor's mail client via `mailto:`. To send server-side instead, replace `handleSubmit` in [`src/components/Contact.tsx`](src/components/Contact.tsx) with a POST to your endpoint.
- Animations are hand-rolled (`src/hooks`) rather than pulled from a library, and all of them respect `prefers-reduced-motion`.
