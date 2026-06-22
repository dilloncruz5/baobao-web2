import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

type AnimatedCounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

export function AnimatedCounter({
  to,
  suffix = "",
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (value) => {
    return decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString();
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, to, duration]);

  return (
    <span className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}