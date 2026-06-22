"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";

const features = [
  "Liquidity sweeps",
  "Fair value gaps",
  "Low-volume nodes",
  "Order flow filter",
  "Volume profile",
  "ICT market structure",
];

// Real backtest results — pulled from ict-backtest.vercel.app (NQ, base config)
const stats = [
  { value: 41.3, decimals: 1, suffix: "%", label: "Win rate · NQ 1m" },
  { value: 1.6, decimals: 1, label: "Profit factor" },
  { value: 2.7, decimals: 1, suffix: "%", label: "Max drawdown" },
];

const results = [
  { m: "NQ · 1m", t: "12,712", wr: "41.3%", pf: "1.6", ret: "+809%", dd: "−2.7%" },
  { m: "NQ · 5m", t: "3,869", wr: "38.1%", pf: "1.76", ret: "+525%", dd: "−6.0%" },
  { m: "NQ · 15m", t: "1,497", wr: "34.3%", pf: "1.87", ret: "+351%", dd: "−4.9%" },
];

// Real equity curve: $100K → $908K over 12,712 NQ 1m trades
const EQUITY_LINE =
  "M0.0,130.0 L7.2,128.0 L16.7,123.6 L26.3,119.7 L38.2,117.6 L50.1,114.9 L62.1,112.2 L74.0,108.3 L86.0,104.8 L97.9,100.5 L109.9,96.9 L121.8,92.6 L133.7,91.0 L145.7,84.3 L157.6,80.0 L169.6,76.8 L181.5,74.4 L193.4,69.5 L205.4,64.4 L217.3,58.6 L229.3,45.8 L241.2,35.3 L253.1,30.4 L265.1,28.4 L277.0,23.7 L289.0,22.8 L300.9,16.0 L312.8,14.4 L320.0,12.0";
const EQUITY_AREA = `${EQUITY_LINE} L320,140 L0,140 Z`;

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
              {/* chart viz — real equity curve */}
              <div className="order-2 lg:order-1">
                <div className="glass relative overflow-hidden rounded-2xl p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">
                      EQUITY CURVE
                    </span>
                    <span className="font-mono text-xs text-cyan">
                      $100K → $908K
                    </span>
                  </div>
                  <div className="mb-3 font-mono text-[0.65rem] text-muted">
                    +809% · 12,712 trades · 3-yr NQ backtest
                  </div>
                  <svg
                    viewBox="0 0 320 140"
                    className="h-32 w-full"
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
                      d={EQUITY_LINE}
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
                      d={EQUITY_AREA}
                      fill="url(#eqf)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </svg>

                  {/* breadth across timeframes */}
                  <table className="mt-4 w-full border-collapse font-mono text-[0.62rem] sm:text-[0.68rem]">
                    <thead>
                      <tr className="text-muted">
                        <th className="py-1 text-left font-normal">Market</th>
                        <th className="py-1 text-right font-normal">Trades</th>
                        <th className="py-1 text-right font-normal">PF</th>
                        <th className="py-1 text-right font-normal">Return</th>
                        <th className="py-1 text-right font-normal">Max DD</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r) => (
                        <tr key={r.m} className="border-t border-line">
                          <td className="py-1.5 text-left text-fg/80">{r.m}</td>
                          <td className="py-1.5 text-right text-fg/70">{r.t}</td>
                          <td className="py-1.5 text-right text-fg/70">{r.pf}</td>
                          <td className="py-1.5 text-right text-cyan">{r.ret}</td>
                          <td className="py-1.5 text-right text-fg/70">{r.dd}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                  A Python engine that detects ICT market microstructure on NQ
                  futures and executes on algorithmic signals, with a real risk
                  layer — dynamic equity tracking and trailing drawdown control.
                  I backtested it over{" "}
                  <span className="font-semibold text-fg">
                    3 years of NQ data
                  </span>{" "}
                  across three timeframes and multiple signal filters —{" "}
                  <span className="font-semibold text-fg">
                    18,000+ trades
                  </span>{" "}
                  — and shipped the analytics dashboard to read every result.
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
                          decimals={s.decimals}
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

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://ict-backtest.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-grad text-sm"
                  >
                    View backtest ↗
                  </a>
                  <span className="flex flex-wrap gap-2 font-mono text-[0.7rem] text-muted">
                    <span className="rounded bg-white/5 px-2 py-1">Python</span>
                    <span className="rounded bg-white/5 px-2 py-1">Pandas</span>
                    <span className="rounded bg-white/5 px-2 py-1">NumPy</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
