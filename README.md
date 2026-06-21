# Khansumber Altankhuyag — Portfolio

Personal portfolio site for Khansumber Altankhuyag — full-stack developer & founder
based in San Francisco.

**Live:** https://khansumber-portfolio.vercel.app

## Highlights

- **Gridwave (gridwave.me)** — a German language-learning platform built solo, end-to-end
- **Automated Futures Trading Bot** — Python algo bot (ICT microstructure, volume profile,
  Bookmap order flow, risk engine)
- **Buudii** — e-commerce clothing brand (founder)
- **Logistics & Limo platform** — freelance React/Node build

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll-reveal & micro-interactions
- Deployed on [Vercel](https://vercel.com)

Design direction: bold gradient-modern — animated aurora mesh background, glassmorphic
cards, one signature violet → cyan → magenta gradient throughout.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
src/
  app/            # routes, metadata, OG image, robots, sitemap
  components/     # Hero, Gridwave, TradingBot, MoreWork, About, Skills, Contact, ...
public/           # résumé PDF + static assets
.resume-src/      # HTML source for the downloadable résumé (re-render via Chrome headless)
```
