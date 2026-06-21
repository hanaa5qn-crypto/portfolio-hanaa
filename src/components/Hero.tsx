"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "full-stack developer",
  "founder",
  "systems builder",
  "freelance engineer",
];

const tickers = ["NQ", "ES", "MNQ", "YM"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="section-pad relative flex min-h-screen items-center justify-center pt-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl text-center"
      >
        <motion.div variants={item} className="mb-7 flex justify-center">
          <span className="pill">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Available for freelance &amp; collaborations · San Francisco
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]"
        >
          Khansumber
          <br />
          <span className="text-grad">Altankhuyag</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 flex items-center justify-center gap-2 font-mono text-base text-muted sm:text-lg"
        >
          <span>I&apos;m a</span>
          <span className="relative inline-flex h-7 min-w-[12ch] justify-center overflow-hidden text-left sm:min-w-[14ch]">
            <motion.span
              key={idx}
              initial={{ y: reduce ? 0 : 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-grad font-semibold"
            >
              {roles[idx]}
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          I build things end-to-end — from{" "}
          <span className="text-fg">Gridwave</span>, a German language-learning
          platform I shipped solo, to{" "}
          <span className="text-fg">algorithmic futures trading systems</span>.
          Design, frontend, backend, deploy. All of it.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#work" className="btn-grad">
            View my work
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch →
          </a>
          <a
            href="/Khansumber_Altankhuyag_Resume.pdf"
            download
            className="btn-ghost inline-flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Résumé
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-muted"
        >
          <span className="text-fg/60">LIVE MARKETS</span>
          {tickers.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-white/[0.03] px-2 py-1"
            >
              {t}
            </span>
          ))}
          <span className="text-cyan">·</span>
          <span>algo bot targeting ~50% win @ up to 1:&lt;10 R:R</span>
        </motion.div>
      </motion.div>

      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-9 w-5 justify-center rounded-full border border-line pt-2">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-1.5 w-1 rounded-full bg-muted"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
