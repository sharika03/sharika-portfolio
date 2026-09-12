# Sharika Dubey — Portfolio

Personal portfolio site for a Technical Lead. Dark, editorial, leadership-focused.

- **Live:** https://sharika03.github.io/sharika-portfolio/
- **Repo:** https://github.com/sharika03/sharika-portfolio
- **Local path:** `~/Desktop/sharika/sharika-portfolio`

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. Statically exported and published to GitHub Pages by GitHub Actions on every push to `main`. There is no server, no database, and no animation library — all motion is hand-rolled in `src/hooks`.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (once, or after pulling a `package.json` change) |
| `npm run dev` | Dev server with hot reload at http://localhost:3000 |
| `npm run lint` | ESLint — must be clean before pushing |
| `npm run build` | Type-check and produce the static site in `out/` |
| `npm run preview` | Serve the built `out/` folder at http://localhost:3000 |
| `npm run resume:pdf` | Regenerate `public/resume.pdf` from `resume/resume.html` |

## Editing content

**Almost everything you'll want to change is in one file: [`src/content/profile.ts`](src/content/profile.ts).**

No section component contains hardcoded copy. Edit that file and the hero, metrics, case studies, timeline, certifications, education, footer, and contact section all update together. Each export below maps to one part of the page.

### `profile`

Name, title, tagline, contact details, location, and the About paragraphs.

- `roles` — the array the hero types through, one after another. Add or reorder freely; the typewriter cycles whatever is in it.
- `heroSupport` — the sentence under the big headline.
- `about` — an array of paragraphs. Add or remove entries and the About section re-flows; each paragraph fades in slightly after the one before it.
- `resumeHref` — leave as `/resume.pdf` (see [Resume PDF](#resume-pdf)).

### `metrics`

The Impact Metrics counter cards. Each entry looks like:

```ts
{
  id: "records",
  value: 150,          // the number that counts up
  suffix: "M+",        // appended after the number
  prefix: "~",         // optional, shown before the number
  grouped: true,       // optional, adds thousands separators (400,000)
  label: "Historical Records Managed",
  detail: "Live production message and delivery-status history",
}
```

`value` must be a plain number so the counter can animate to it — put any symbols in `prefix`/`suffix`. To change which three figures appear in the strip under the hero, edit `heroMetricIds` and reference existing metric `id`s.

Cards are laid out four to a row on desktop. The card whose `id` is `teams` is deliberately double-width to make seven cards fill two tidy rows; if you change the number of metrics, adjust that rule in [`src/components/Metrics.tsx`](src/components/Metrics.tsx).

### `skillGroups`

The six categorized skill cards. Each group has a `name` and a flat `items` array rendered as pills. To add a group you also need to add an icon for it in the `groupIcons` map in [`src/components/Skills.tsx`](src/components/Skills.tsx), keyed by the group's `id`.

### `featuredWork`

The case-study cards. Each has a one-paragraph `problem`, `approach`, and `impact` (always visible), plus a `details` array of resume bullets revealed by the "Read Case Study" button, and `tags` for the technology pills.

Deliberate design decision: **there are no repository or "View Code" links anywhere**, because these are enterprise engagements rather than public repos. Keep it that way — add depth through the `details` bullets instead.

### `experience` and `earlyCareer`

The timeline. `experience` holds the current leadership era (ThinkSys), expanded by default, with nested `engagements`. `earlyCareer` holds the 2013–2019 roles, collapsed behind a toggle so the timeline stays readable. Early-career entries can carry an optional `sites` array of client domains, shown as small pills.

To promote a role out of the collapsed group, move its object from `earlyCareer` into `experience`.

### `certifications` and `education`

Credential and degree cards. Certifications intentionally show the issue date only, with no expiry — keep this consistent with `resume/resume.html` if you change it.

### `navItems`

The sticky nav. Each `id` **must** match a section `id` rendered in [`src/app/page.tsx`](src/app/page.tsx), or the link will scroll nowhere and the active-state highlight will misbehave.

Note that the Impact Metrics section uses `id="impact"` and is deliberately *not* in the nav — it reads as part of the About flow. Adding it is a one-line change if you'd rather it be linkable.

## Changing the look

Colors, fonts, and motion are defined as tokens in the `@theme` block at the top of [`src/app/globals.css`](src/app/globals.css). Change them there once rather than editing components.

| Token | Used for |
| --- | --- |
| `--color-accent` / `--color-accent-2` | The teal-to-blue gradient on CTAs, headings, and highlights |
| `--color-ink` | Page background |
| `--color-surface` / `--color-elevated` | Glass card backgrounds |
| `--color-text` | Headings and emphasis |
| `--color-muted` / `--color-subtle` | Body copy and secondary text |

Two cautions. The background token is named `ink`, not `base`, because `text-base` is already a Tailwind font-size utility and the two would collide. And if you change the accent, check contrast against the dark background — the current values clear WCAG AA for body text, and CTA buttons use dark text on the accent fill rather than relying on the glow.

Adding a section means adding it to `page.tsx`, giving it an `id`, and passing the next `index` to `SectionHeading` — those numbers (`01`–`07`) are set per component, not generated.

## Resume PDF

The downloadable resume is **not** generated from `profile.ts`. It's a separate print-styled document at [`resume/resume.html`](resume/resume.html), rendered to `public/resume.pdf` by headless Chrome:

```bash
npm run resume:pdf
```

So after any resume change, edit **both** `src/content/profile.ts` (for the site) and `resume/resume.html` (for the PDF), then re-run the command and commit the regenerated PDF. The script expects `google-chrome` on your `PATH`; if you only have Chromium, swap the binary name in the `resume:pdf` script in `package.json`.

The layout is tuned to fit two A4 pages. If you add enough content to spill onto a third, the `.keep` / `.early .role` / `.edu .role` rules control which blocks are forbidden from splitting across a page break.

## Verify before you push

```bash
npm run lint      # must be clean
npm run build     # must succeed — this is also the type-check
npm run preview   # then open http://localhost:3000
```

`npm run build` is the real gate: it runs TypeScript and will fail the same way CI does, so a clean local build means a clean deploy. Worth eyeballing in the preview:

- The hero counters animate up to `13+`, `10+`, and `~400,000` rather than sitting at zero
- The subtitle types through all three role titles
- Sections fade in as you scroll, and the Early Career group expands
- Narrow the window to phone width and confirm no horizontal scrollbar appears
- Both accordions ("Read Case Study" and Early Career) open and close

`npm run dev` is fine for content edits, but use `npm run build` plus `npm run preview` before pushing, since only the build catches type errors and export problems.

## Pushing changes

```bash
git status                  # review what changed
git add -A
git commit -m "Update experience section"
git push
```

That's it — `main` is already tracking `origin/main`, and pushing triggers the deploy. Give it a minute or two, then hard-refresh the live URL.

Check the deploy at https://github.com/sharika03/sharika-portfolio/actions.

### About this repo's git credentials

You have two GitHub accounts (`sharika03` owns this repo; `sharika0311` holds the token in the global credential store). To stop git from silently using the wrong one, **this repo has its own credential file** and does not read the global one:

```
credential.helper = ""                                          # resets inherited helpers
credential.helper = store --file=~/.git-credentials-sharika03   # this repo only
```

Consequences worth remembering:

- Pushes here authenticate as `sharika03`; your AnyoneHome repos are untouched and keep using the global store and SSH keys.
- If a push ever fails with `403 ... denied to sharika0311`, the wrong credential got used — check `git config --local --get-all credential.helper` still shows the two lines above.
- The token needs **both** `repo` and `workflow` scopes. Without `workflow`, GitHub rejects any push that touches `.github/workflows/`.
- Commits are authored as `sharika.dubey@gmail.com` via this repo's local `user.email`, not your work address.

## How deployment works

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main`: it installs with `npm ci`, builds the static export into `out/`, and publishes it to Pages.

The base path is resolved automatically from the repo name. Because this repo is `sharika-portfolio`, the workflow sets `NEXT_PUBLIC_BASE_PATH=/sharika-portfolio` and the site serves from that subpath. If you ever rename the repo to `sharika03.github.io`, the workflow detects that and uses no base path — no code change needed.

To reproduce a subpath build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/sharika-portfolio npm run build
```

Note that plain `<a href="...">` links do **not** get the base path automatically — only `next/link` and `next/image` do. Anything pointing at a file in `public/` must go through `withBasePath()` from [`src/lib/basePath.ts`](src/lib/basePath.ts), the way the résumé button in `Nav.tsx` does.

## Constraints to keep in mind

- **No server.** `output: "export"` in [`next.config.ts`](next.config.ts) means no API routes, server actions, middleware, or image optimization. Adding any of them breaks the build.
- **The contact form has no backend.** It validates, plays a sending animation, then opens the visitor's mail client with the message pre-composed. To send server-side instead, replace `handleSubmit` in [`src/components/Contact.tsx`](src/components/Contact.tsx) with a POST to a form service — note that this needs to stay a client-side call, since there's no server.
- **`public/.nojekyll` must stay.** Without it GitHub Pages strips the `_next` directory and the site loads unstyled.
- **Respect reduced motion.** Every animation is disabled or snapped to its end state under `prefers-reduced-motion`. If you add motion, extend the media query at the bottom of `globals.css`.
- Scroll reveals depend on JavaScript, so content is hidden until `IntersectionObserver` fires. The text is all present in the server-rendered HTML, so search engines and link previews see it regardless.

## Project structure

```
resume/resume.html          Print-styled resume, source for public/resume.pdf
public/resume.pdf           Generated — do not hand-edit
public/.nojekyll            Required by GitHub Pages
src/content/profile.ts      All site copy — start here
src/app/layout.tsx          Fonts, metadata, Person structured data
src/app/page.tsx            Section order
src/app/globals.css         Design tokens, keyframes, reduced-motion rules
src/components/             One file per section
src/components/ui/          Shared primitives (GlassCard, Reveal, Counter, Section, Icons)
src/hooks/                  useInView, useCountUp, useTypewriter, useScrollSpy
src/lib/                    basePath helper, reduced-motion check
.github/workflows/deploy.yml  Build and publish to Pages
```

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| Workflow fails at `actions/configure-pages` | Pages source isn't set to GitHub Actions. Settings → Pages → Source → GitHub Actions |
| Push rejected, `403 denied to sharika0311` | Wrong account's token. See [git credentials](#about-this-repos-git-credentials) |
| Push rejected mentioning `workflow` scope | Token is missing the `workflow` scope; regenerate it |
| Live site loads unstyled | `public/.nojekyll` is missing, or `NEXT_PUBLIC_BASE_PATH` didn't match the repo name |
| Resume download is stale | Re-run `npm run resume:pdf` and commit `public/resume.pdf` |
| `npm run preview` shows a blank page | You haven't run `npm run build` yet, so `out/` is empty |
