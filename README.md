# Arnaut Ezekiel Alfonso — Portfolio

Personal portfolio for web systems, operational dashboards, mapping, and document workflows.

**Live site:** https://arnaut.vercel.app

## Featured work

- **Outage Management System:** map-based monitoring with KML/GPX/XLSX inputs, validation, affected-area detection, and interruption records.
- **Apartment Management System:** tenant, unit, payment, and maintenance management.
- **Document Management System:** a prototype for uploads, search, manual status tracking, and status history.
- **Personal AI:** an assistant prototype exploring productivity, planning, and reminders.

Each management system has a dedicated walkthrough under `/projects/[slug]`. These describe the functionality and show existing screenshots; they do not expose live operational records or claim measured business results.

## Development

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js.

```sh
npm run lint
npm run build
npm start
```

## Stack and structure

Next.js App Router, React, Tailwind CSS, and Lucide icons.

- `src/app/`: homepage, project walkthroughs, metadata, global styles, and compatibility routes.
- `src/components/`: hero, navigation, project cards, about, AI prototype, contact, and footer.
- `src/data/projects.js`: shared project content and screenshot imports.
- `screenshots/`: original project images. Next Image generates responsive optimized variants.
- `public/`: downloadable CV, existing social-preview assets, robots.txt, and sitemap.xml.

## Contact behavior

The labeled form prepares a `mailto:` draft. The visitor must send it from their email application. No email is submitted or stored by the website. Direct email, phone, Facebook, and copy-email actions are also available. No API keys or service configuration are required.

## Content updates

Edit project descriptions and workflows in `src/data/projects.js`. Add only verified demo/source URLs and measured results. Update the existing PDF at `public/Arnaut_online.pdf` to replace the CV.

If the production domain changes, update `src/app/layout.js`, `public/robots.txt`, `public/sitemap.xml`, and `public/facebook.html` together.

## Deployment

The repository retains its existing Next.js deployment structure. A GitHub-connected Vercel project can build with `npm run build`; Netlify configuration is preserved for compatibility. `/share`, `/facebook.html`, and known legacy `/media/` image URLs remain available.

## Accessibility

Visible form labels, keyboard focus indicators, a skip link, an accessible mobile menu with Escape dismissal, and reduced-motion styling are included. Project content and navigation render without client-side animation dependencies.
