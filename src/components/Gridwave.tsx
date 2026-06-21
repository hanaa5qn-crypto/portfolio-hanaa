"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const roles = ["Product Design", "Frontend", "Backend", "Database", "Deploy"];

export default function Gridwave() {
  return (
    <section id="work" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                01 · Flagship
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                Selected work
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal y={40}>
          <article className="glass glass-hover group relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              {/* copy */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-grad text-2xl font-bold">Gridwave</span>
                  <span className="pill !py-1 text-[0.7rem]">
                    German learning platform
                  </span>
                </div>

                <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                  A web platform that makes learning German feel like a game —
                  structured lessons, drills, and progress tracking. I designed,
                  built, and shipped{" "}
                  <span className="font-semibold text-fg">
                    literally everything
                  </span>
                  : the UX, the interface, the backend, the data model, and the
                  deployment.
                </p>

                <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {roles.map((r) => (
                    <li
                      key={r}
                      className="rounded-xl border border-line bg-white/[0.02] px-3 py-2.5 text-center text-sm text-fg/80"
                    >
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="https://gridwave.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-grad text-sm"
                  >
                    Visit gridwave.me ↗
                  </a>
                  <span className="font-mono text-xs text-muted">
                    Solo build · end-to-end ownership
                  </span>
                </div>
              </div>

              {/* browser mockup */}
              <div className="relative">
                <motion.div
                  initial={{ rotateX: 8, rotateY: -8, opacity: 0, y: 30 }}
                  whileInView={{ rotateX: 0, rotateY: 0, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                  className="glass overflow-hidden rounded-2xl shadow-2xl"
                  style={{ perspective: 1000 }}
                >
                  <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-magenta/70" />
                    <span className="h-3 w-3 rounded-full bg-cyan/70" />
                    <span className="h-3 w-3 rounded-full bg-violet/70" />
                    <span className="ml-3 flex-1 rounded-md bg-black/30 px-3 py-1 font-mono text-[0.7rem] text-muted">
                      gridwave.me
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden p-6">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/30 blur-3xl" />
                    <div className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-cyan/25 blur-3xl" />
                    <div className="relative flex h-full flex-col">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-grad text-lg font-bold">
                          Gridwave
                        </span>
                        <span className="font-mono text-[0.65rem] text-muted">
                          🔥 12-day streak
                        </span>
                      </div>
                      <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "68%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.4 }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg,#7c3aed,#22d3ee,#ec4899)",
                          }}
                        />
                      </div>
                      <div className="grid flex-1 grid-cols-2 gap-3 pt-1">
                        {[
                          ["Der / Die / Das", "Articles"],
                          ["Akkusativ", "Cases"],
                          ["Konjugation", "Verbs"],
                          ["Wortschatz", "Vocab"],
                        ].map(([t, s]) => (
                          <div
                            key={t}
                            className="rounded-xl border border-line bg-white/[0.03] p-3"
                          >
                            <div className="text-sm font-semibold text-fg">
                              {t}
                            </div>
                            <div className="font-mono text-[0.65rem] text-muted">
                              {s}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
