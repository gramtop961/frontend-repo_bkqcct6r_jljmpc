import { motion } from "framer-motion";
import { Crown, Phone, Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=2940&auto=format&fit=crop"
        alt="French castle hotel at golden hour"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      {/* Soft vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Navigation */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-yellow-300" />
            <span className="font-serif text-xl tracking-wide">Château Lumière</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {[
              "Suites",
              "Dining",
              "Wellness",
              "Events",
              "Gallery",
            ].map((item) => (
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

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-sm tracking-[0.25em] text-white/80"
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
          className="mt-5 max-w-2xl text-lg text-white/85"
        >
          Timeless French elegance, contemporary comfort, and Michelin‑starred cuisine amid rolling vineyards and royal history.
        </motion.p>

        {/* Booking bar */}
        <motion.div
          id="book"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 w-full rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-lg"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-3 md:grid-cols-5"
          >
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
          className="mt-6 flex items-center gap-2 text-white/85"
        >
          <MapPin className="h-4 w-4 text-yellow-300" />
          2h from Paris • Private heliport • Vineyard views
        </motion.div>
      </div>
    </section>
  );
}
