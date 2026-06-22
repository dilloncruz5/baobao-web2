import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

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
      <div className="glass rounded-full flex items-center justify-between pl-6 pr-6 py-2 shadow-soft">
        <Link
          to="/"
          aria-label="Bao Bao home"
          className="flex items-center"
        >
          <img
            src={logoImg}
            alt="Bao Bao Logo"
            className="h-10 md:h-14 w-auto object-contain"
          />

        </Link>
        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-foreground/80">
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
          className="group relative inline-flex items-center gap-1 md:gap-2 rounded-full bg-primary text-primary-foreground px-3 md:px-5 py-2 text-xs md:text-sm font-medium"
        >
          <span className="relative z-10">Enquiry</span>
          <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          <span className="absolute inset-0 shimmer-mask animate-shimmer opacity-70" />
        </Link>
      </div>
    </motion.nav>
  );
}