"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  style?: React.CSSProperties;
}

export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
  style,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const handleChange = useCallback((latest: number) => {
    setDisplayValue(Math.round(latest));
  }, []);

  useEffect(() => {
    const unsubscribe = spring.on("change", handleChange);
    return unsubscribe;
  }, [spring, handleChange]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, value]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}
