"use client";

import Reveal from "./Reveal";
import Counter from "./Counter";

const facts = [
  { value: 4, suffix: "+", label: "Products shipped" },
  { value: 2, label: "Languages spoken" },
  { value: 100, suffix: "%", label: "Solo-built Gridwave" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            About
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            An <span className="text-grad">economics mind</span> who ships
            software — and the businesses around it.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-4 text-pretty leading-relaxed text-muted">
              <p>
                I&apos;m Khansumber — based in San Francisco, studying Economics
                (ADT) at Berkeley City College. But I learn fastest by building:
                I taught myself to design and code, then used it to launch real
                products people actually use.
              </p>
              <p>
                That ranges from <span className="text-fg">Gridwave</span>, a
                German language-learning platform I built and run entirely
                myself, to a Python{" "}
                <span className="text-fg">algorithmic trading bot</span> with a
                real risk engine, to founding an e-commerce brand and freelancing
                as a web developer.
              </p>
              <p>
                The thread through all of it: I take an idea from zero to
                shipped — design, engineering, data, and the business decisions
                in between. I&apos;m fluent in English and a native Mongolian
                speaker.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="glass flex items-center justify-between rounded-2xl px-5 py-4"
                >
                  <span className="text-grad text-3xl font-bold">
                    <Counter to={f.value} suffix={f.suffix} />
                  </span>
                  <span className="text-right text-sm text-muted">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
