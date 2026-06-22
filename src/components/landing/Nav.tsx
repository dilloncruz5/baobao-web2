import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Story" },
  { to: "/locations", label: "Locations" },
  { to: "/franchise", label: "Franchise" },
] as const;

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]"
    >
      <div className="glass rounded-full flex items-center justify-between pl-6 pr-2 py-2 shadow-soft">
        <Link
          to="/"
          aria-label="Bao Bao home"
          className="font-brand uppercase tracking-tight flex flex-col leading-[0.78] text-[1.4rem] md:text-[1.55rem]"
        >
          <span className="text-primary">Bao</span>
          <span className="text-ink">Bao</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "hover:text-primary transition-colors" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/franchise"
          className="group relative inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-glow overflow-hidden"
        >
          <span className="relative z-10">Franchise with us</span>
          <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          <span className="absolute inset-0 shimmer-mask animate-shimmer opacity-70" />
        </Link>
      </div>
    </motion.nav>
  );
}
