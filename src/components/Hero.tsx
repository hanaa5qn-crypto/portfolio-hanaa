"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  // Framer Motion Magnet Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [-250, 250], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-250, 250], [-8, 8]), springConfig);
  const moveX = useSpring(useTransform(x, [-250, 250], [-25, 25]), springConfig);
  const moveY = useSpring(useTransform(y, [-250, 250], [-25, 25]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-24 pb-20 md:py-0"
    >
      {/* Background Hero Heading */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="hero-heading w-full z-0 font-bold mix-blend-screen select-none relative top-[-5vh]">
          KHANSUMBER
        </h1>
      </div>

      {/* Portrait card in the center */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Available Pill */}
        <div className="mb-8 z-20">
          <span className="pill">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Available for freelance &amp; collaborations · San Francisco
          </span>
        </div>

        {/* Magnet Wrapper */}
        <div
          ref={portraitRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="magnet-wrap group z-10 cursor-pointer"
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{
              x: moveX,
              y: moveY,
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            className="w-[280px] sm:w-[320px] md:w-[440px] aspect-[4/5] overflow-hidden rounded-2xl relative shadow-2xl transition-transform duration-300 ease-out"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/80 via-transparent to-transparent z-10" />
            <img
              alt="Portrait of Khansumber"
              className="w-full h-full object-cover select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVk8T7RDLP_FWa9hwjZ2WKi20Az_jvyOi9Dwf2mQgnL8uieufTfcWkgUshYueKnc8Olk_R7DnTD5whVWhGtbQKK1g04nLNatz8pPd6JQgs9-6x111fEAv7CbWMp-ZZidiw094h38D1EN5cd4a3Z7-R5SQD82KypVa_iQKG2n8Z8cCtMJOKIEtpYBQyTKBigqQWbWC5cxkqF453rUn8P9LBDDx21Libstmm4ZeTzGRA4yYio1wKgSysrnxRl4hoVXTCSAP8pya0PFTX"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating/Bottom details */}
      <div className="w-full max-w-7xl mx-auto px-6 md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2 md:flex md:justify-between md:items-end gap-12 z-20 mt-12 md:mt-0">
        
        {/* Left Side: Bio & Tickers */}
        <div className="flex flex-col gap-4 max-w-lg md:text-left text-center">
          <div className="flex items-center justify-center md:justify-start gap-2 font-mono text-sm text-muted">
            <span>I&apos;m a</span>
            <span className="relative inline-flex h-6 min-w-[12ch] justify-center md:justify-start overflow-hidden text-left">
              <motion.span
                key={idx}
                initial={{ y: reduce ? 0 : 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-grad font-bold"
              >
                {roles[idx]}
              </motion.span>
            </span>
          </div>

          <p className="text-body-md text-on-surface-variant leading-relaxed">
            I build things end-to-end — from <span className="text-fg font-medium">Gridwave</span>, a German language-learning platform, to <span className="text-fg font-medium">algorithmic futures trading systems</span>. Design, frontend, backend, deploy.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 font-mono text-[10px] text-muted mt-2">
            <span className="text-fg/60">LIVE MARKETS</span>
            {tickers.map((t) => (
              <span
                key={t}
                className="rounded border border-line bg-white/[0.03] px-1.5 py-0.5"
              >
                {t}
              </span>
            ))}
            <span className="text-cyan">·</span>
            <span>Win target ~50% @ up to 1:&lt;10 R:R</span>
          </div>
        </div>

        {/* Right Side: CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 mt-8 md:mt-0">
          <a href="#work" className="btn-grad text-sm font-semibold uppercase tracking-wider">
            View my work
          </a>
          <a href="#contact" className="btn-ghost text-sm font-semibold uppercase tracking-wider">
            Get in touch
          </a>
          <a
            href="/Khansumber_Altankhuyag_Resume.pdf"
            download
            className="btn-ghost text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <svg
              width="14"
              height="14"
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
        </div>
      </div>
    </section>
  );
}
