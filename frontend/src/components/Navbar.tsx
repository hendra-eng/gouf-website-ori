import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { SITE } from "@/content/site";
import { NAV_ITEMS, type NavItem } from "@/content/nav";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function MegaPanel({ item, onClose }: { item: NavItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full z-50 w-[min(900px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
      data-testid={`nav-mega-${slug(item.label)}`}
    >
      <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-2xl shadow-brand/10" style={{ gridTemplateColumns: item.featured ? "1fr 1fr 0.9fr" : `repeat(${item.columns?.length ?? 1}, 1fr)` }}>
        {item.columns?.map((col) => (
          <div key={col.title} className="p-6">
            <p className="eyebrow mb-4 !text-[10px]">{col.title}</p>
            <ul className="space-y-1">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    onClick={onClose}
                    className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-paper"
                    data-testid={`nav-mega-link-${slug(l.label)}`}
                  >
                    {l.icon && (
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-brand transition-colors group-hover:bg-brand group-hover:text-mint">
                        <l.icon size={16} />
                      </span>
                    )}
                    <span>
                      <span className="block text-sm font-bold text-ink group-hover:text-brand">{l.label}</span>
                      {l.desc && <span className="block text-xs text-inkMuted">{l.desc}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {item.featured && (
          <Link to={item.featured.to} onClick={onClose} className="ledger-bg-dark group flex flex-col justify-between bg-brand-deep p-6 text-white" data-testid={`nav-mega-featured-${slug(item.label)}`}>
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-mint">{item.featured.eyebrow}</p>
              <p className="mt-3 font-display text-lg font-bold leading-snug">{item.featured.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{item.featured.desc}</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-mint">
              {item.featured.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

function DesktopNav() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama" onMouseLeave={() => setActive(null)}>
      {NAV_ITEMS.map((item) =>
        item.path ? (
          <NavLink
            key={item.label}
            to={item.path}
            data-testid={`nav-${slug(item.label)}-link`}
            className={({ isActive }) =>
              `rounded-full px-3.5 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-brand ${isActive ? "text-brand" : "text-inkMuted"}`
            }
          >
            {item.label}
          </NavLink>
        ) : (
          <div key={item.label} className="relative" onMouseEnter={() => setActive(item.label)}>
            <button
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-bold transition-colors hover:bg-white hover:text-brand ${active === item.label ? "bg-white text-brand" : "text-inkMuted"}`}
              aria-expanded={active === item.label}
              onClick={() => setActive(active === item.label ? null : item.label)}
              data-testid={`nav-${slug(item.label)}-trigger`}
            >
              {item.label}
              <ChevronDown size={14} className={`transition-transform duration-200 ${active === item.label ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>{active === item.label && <MegaPanel item={item} onClose={() => setActive(null)} />}</AnimatePresence>
          </div>
        )
      )}
    </nav>
  );
}

function MobileNav() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-1 px-4 py-4">
      {NAV_ITEMS.map((item) =>
        item.path ? (
          <NavLink
            key={item.label}
            to={item.path}
            data-testid={`nav-mobile-${slug(item.label)}-link`}
            className={({ isActive }) => `rounded-xl px-4 py-3 text-base font-bold ${isActive ? "bg-white text-brand" : "text-inkMuted"}`}
          >
            {item.label}
          </NavLink>
        ) : (
          <div key={item.label}>
            <button
              onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-bold text-inkMuted"
              aria-expanded={openGroup === item.label}
              data-testid={`nav-mobile-${slug(item.label)}-trigger`}
            >
              {item.label}
              <ChevronDown size={16} className={`transition-transform ${openGroup === item.label ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {openGroup === item.label && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  {item.columns?.map((col) => (
                    <div key={col.title} className="px-4 pb-3">
                      <p className="eyebrow mb-2 !text-[10px]">{col.title}</p>
                      {col.links.map((l) => (
                        <Link key={l.label} to={l.to} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink" data-testid={`nav-mobile-link-${slug(l.label)}`}>
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      )}
      <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
        <a href={SITE.appUrl} target="_blank" rel="noreferrer" className="btn-light" data-testid="nav-mobile-login-link">
          Masuk ke Aplikasi <ArrowUpRight size={15} />
        </a>
        <Link to="/coba-demo" className="btn-primary" data-testid="nav-mobile-demo-cta-button">
          Coba Demo Terpandu
        </Link>
        <Link to="/demo" className="btn-light" data-testid="nav-mobile-request-demo">Minta Demo Personal</Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl" data-testid="navbar">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="zafeb - beranda" data-testid="nav-logo-link">
          <Logo />
        </Link>
        <DesktopNav />
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.appUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-ink transition-colors hover:text-brand"
            data-testid="nav-login-link"
          >
            Masuk <ArrowUpRight size={15} />
          </a>
          <Link to="/coba-demo" className="btn-primary !py-2.5" data-testid="nav-demo-cta-button">
            Coba Demo
          </Link>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
            data-testid="nav-mobile-panel"
          >
            <MobileNav />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
