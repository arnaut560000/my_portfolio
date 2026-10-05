# Arnaut Ezekiel Alfonso — Portfolio

Personal portfolio for web systems, operational dashboards, mapping, and document workflows.

**Live site:** https://arnaut.vercel.app

## Featured work

- **Talavera E-dental Scheduling:** featured municipal service project with public requests, staff scheduling, role-based access, appointment history, and daily CSV exports. Built with Flask, Supabase/PostgreSQL, and Render.
- **OSY Connect:** offline Python/Tkinter application for youth records, PDF ID cards, reporting, and local backups.
- **Outage Management System:** map-based monitoring with KML/GPX/XLSX inputs, validation, affected-area detection, and interruption records.
- **Apartment Management System:** tenant, unit, payment, and maintenance management.
- **Document Management System:** a prototype for uploads, search, manual status tracking, and status history.
- **RoomAI / Personal AI:** a local AI companion experiment using FastAPI and Ollama, with conversational memory.

Each selected system has a dedicated walkthrough under `/projects/[slug]` and a public source-code link. Existing projects retain their screenshots; Dental and OSY use labeled workflow diagrams. The site does not expose operational records or claim measured business results.

The experience section records the confirmed Talavera Municipal Office role (July 2025–August 2026) and NEECO Engineering Department role (March–June 2025). The downloadable CV is the revised résumé.

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
- `src/components/`: hero, navigation, project cards and workflow visuals, experience, about, AI prototype, contact, and footer.
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
