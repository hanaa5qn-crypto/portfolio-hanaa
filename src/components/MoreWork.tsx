"use client";

import Reveal from "./Reveal";

const projects = [
  {
    n: "03",
    title: "Logistics & Limo Platform",
    role: "Freelance Web Developer",
    period: "2026 — Present",
    desc: "A responsive booking platform for a regional logistics & transport company. Built booking-request interfaces that streamlined inbound lead capture for the ops team, deployed on Render with mobile/desktop performance tuning.",
    tags: ["React", "Node.js", "Python", "HTML5"],
    accent: "from-cyan/20 to-violet/10",
  },
  {
    n: "04",
    title: "Buudii — Clothing Brand",
    role: "Founder & Operator",
    period: "2023 — 2025",
    desc: "Founded an independent e-commerce clothing brand. Owned brand positioning, sourcing, and digital marketing — plus custom analytics I built myself to track traffic, surface top products, and steer inventory & ad spend.",
    tags: ["Shopify", "Analytics", "Marketing", "Ops"],
    accent: "from-magenta/20 to-violet/10",
  },
];

export default function MoreWork() {
  return (
    <section className="section-pad relative py-12 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} y={36}>
            <article className="glass glass-hover group relative h-full overflow-hidden rounded-3xl p-7 sm:p-8">
              <div
                className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-5 flex items-start justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {p.n}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {p.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-cyan">{p.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[0.7rem] text-fg/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
