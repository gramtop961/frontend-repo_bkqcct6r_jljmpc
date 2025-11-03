import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Crown, Phone, Calendar, MapPin } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight || 1;
      const p = Math.min(1.5, Math.max(0, window.scrollY / h));
      setProgress(p);
    };
    const loop = () => {
      onScroll();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Parallax factors: background moves least, front moves most
  const bgY = progress * -40; // slower upward
  const midY = progress * -90;
  const frontY = progress * -140;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Parallax: Background layer (Spline) */}
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${bgY}px, 0)`, willChange: "transform" }}
      >
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Parallax: Midground luminous gradients */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: `translate3d(0, ${midY}px, 0)`, willChange: "transform" }}
      >
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Navigation (static to avoid motion sickness) */}
      <div className="relative z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-yellow-300" />
            <span className="font-serif text-xl tracking-wide">Château Lumière</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {["Suites", "Dining", "Wellness", "Events", "Gallery"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/90 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+33123456789"
              className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur md:flex hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> +33 1 23 45 67 89
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-yellow-300/20 hover:bg-yellow-200"
            >
              <Calendar className="h-4 w-4" /> Book now
            </a>
          </div>
        </nav>
      </div>

      {/* Parallax: Foreground content */}
      <div className="relative z-10">
        <div
          className="mx-auto flex min-h-[72vh] max-w-7xl flex-col items-start justify-center px-6"
          style={{ transform: `translate3d(0, ${frontY}px, 0)`, willChange: "transform" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 text-sm tracking-[0.25em] text-white/85"
          >
            LOIRE VALLEY, FRANCE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl"
          >
            An award‑winning retreat in a 17th‑century château
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-5 max-w-2xl text-lg text-white/90"
          >
            Timeless French elegance, contemporary comfort, and Michelin‑starred cuisine amid rolling vineyards and royal history.
          </motion.p>

          {/* Booking bar */}
          <motion.div
            id="book"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 w-full rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
          >
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-3 md:grid-cols-5">
              <div className="md:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-widest text-white/70">
                  Check‑in
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none backdrop-blur focus:border-white/40"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-widest text-white/70">
                  Check‑out
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none backdrop-blur focus:border-white/40"
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-1 block text-xs uppercase tracking-widest text-white/70">
                  Guests
                </label>
                <select className="w-full rounded-xl border border-white/20 bg-white/10 p-3 text-white outline-none backdrop-blur focus:border-white/40">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} className="text-black">
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-5 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-yellow-300 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-300/20 hover:bg-yellow-200"
                >
                  <Calendar className="h-4 w-4" /> Check availability
                </button>
              </div>
            </form>
          </motion.div>

          {/* Location hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 flex items-center gap-2 text-white/90"
          >
            <MapPin className="h-4 w-4 text-yellow-300" /> 2h from Paris • Private heliport • Vineyard views
          </motion.div>
        </div>
      </div>
    </section>
  );
}
