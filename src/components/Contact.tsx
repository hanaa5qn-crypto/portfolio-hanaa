"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal y={40}>
          <div className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
            <div
              className="absolute inset-0 -z-10 opacity-70"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(124,58,237,0.25), transparent 70%)",
              }}
            />
            <span className="pill mx-auto mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              Open to freelance &amp; full-time
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s build something
              <br />
              <span className="text-grad">worth shipping.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-muted">
              Need a developer who can take a product from idea to live — design,
              code, and deploy? I&apos;m based in San Francisco and reply fast.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:hanaa5qn@gmail.com"
                className="btn-grad"
              >
                hanaa5qn@gmail.com
              </motion.a>
              <a href="tel:+14158602088" className="btn-ghost">
                415-860-2088
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
                Download résumé
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
              <span>📍 San Francisco, CA</span>
              <a
                href="https://gridwave.me"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-fg"
              >
                gridwave.me ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
