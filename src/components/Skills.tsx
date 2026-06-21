"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const groups = [
  {
    title: "Languages & Frameworks",
    items: ["Python", "JavaScript", "React", "SQL", "HTML5", "CSS3", "Node.js"],
  },
  {
    title: "Data & Libraries",
    items: ["Pandas", "NumPy", "REST APIs", "Advanced Excel"],
  },
  {
    title: "Platforms & Tools",
    items: ["Git", "GitHub", "Render", "Netlify", "Vercel", "Shopify"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Toolkit
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Skills &amp; <span className="text-grad">stack</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08} y={30}>
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-xl border border-line bg-white/[0.03] px-3.5 py-2 text-sm text-fg/85 transition-colors hover:border-violet/50 hover:text-fg"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
