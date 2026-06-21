"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";

const features = [
  "Liquidity sweeps",
  "Fair value gaps",
  "Premium / discount arrays",
  "Volume profile",
  "Bookmap / order flow",
  "ICT market structure",
];

const stats = [
  { value: 50, suffix: "%", label: "Target win rate" },
  { value: 10, prefix: "1:<", label: "Reward-to-risk" },
  { value: 4, label: "Futures markets" },
];

export default function TradingBot() {
  return (
    <section className="section-pad relative py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal y={40}>
          <article className="glass glass-hover relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="absolute inset-0 -z-10 opacity-60">
              <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              {/* chart viz */}
              <div className="order-2 lg:order-1">
                <div className="glass relative overflow-hidden rounded-2xl p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">
                      EQUITY CURVE
                    </span>
                    <span className="font-mono text-xs text-cyan">▲ live</span>
                  </div>
                  <svg
                    viewBox="0 0 320 140"
                    className="h-36 w-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="eq" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="50%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="eqf" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,120 L40,108 L80,112 L120,86 L160,92 L200,60 L240,66 L280,34 L320,20"
                      fill="none"
                      stroke="url(#eq)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M0,120 L40,108 L80,112 L120,86 L160,92 L200,60 L240,66 L280,34 L320,20 L320,140 L0,140 Z"
                      fill="url(#eqf)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </svg>
                  <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[0.65rem] text-muted">
                    <span>drawdown ctrl</span>
                    <span className="text-center">trailing stop</span>
                    <span className="text-right">prop-firm rules</span>
                  </div>
                </div>
              </div>

              {/* copy */}
              <div className="order-1 lg:order-2">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    02 · Quant
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-4xl">
                  Automated{" "}
                  <span className="text-grad">Futures Trading Bot</span>
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted">
                  A Python engine that ingests real-time NQ, ES, MNQ &amp; YM
                  futures data and executes on algorithmic signals. It detects
                  ICT market microstructure and ships a real risk layer — dynamic
                  equity-curve tracking and trailing drawdown controls. When the
                  market is ambiguous, it flags for manual review instead of
                  trading blind.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-line bg-white/[0.02] p-3 text-center"
                    >
                      <div className="text-grad text-2xl font-bold sm:text-3xl">
                        <Counter
                          to={s.value}
                          prefix={s.prefix}
                          suffix={s.suffix}
                        />
                      </div>
                      <div className="mt-1 text-[0.7rem] leading-tight text-muted">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-fg/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 font-mono text-[0.7rem] text-muted">
                  <span className="rounded bg-white/5 px-2 py-1">Python</span>
                  <span className="rounded bg-white/5 px-2 py-1">Pandas</span>
                  <span className="rounded bg-white/5 px-2 py-1">NumPy</span>
                  <span className="rounded bg-white/5 px-2 py-1">REST APIs</span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
