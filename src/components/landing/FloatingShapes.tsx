import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function FloatingShapes() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-24 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-60 bg-gradient-ember animate-drift"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-50"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle at 30% 30%, #FFD166, transparent 60%)" }}
        />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl opacity-40"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "radial-gradient(circle, #FF8C42, transparent 65%)" }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-[18%] h-20 w-20 rounded-full glass-cream shadow-soft"
      />
      <motion.div
        animate={{ y: [0, 22, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[12%] h-14 w-14 rounded-full glass shadow-soft"
      />
    </div>
  );
}
