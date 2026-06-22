"use client";

import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

function format(v: number, decimals: number) {
  const f = v.toFixed(decimals);
  const [int, dec] = f.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${grouped}.${dec}` : grouped;
}

export default function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduce) spring.jump(to);
    else mv.set(to);
  }, [inView, reduce, to, mv, spring]);

  useEffect(
    () => spring.on("change", (v) => setDisplay(format(v, decimals))),
    [spring, decimals],
  );

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
