import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const accolades = [
  { title: "World Luxury Hotel Awards", year: "2024", note: "Best Heritage Retreat" },
  { title: "Condé Nast Traveler", year: "2023", note: "Gold List" },
  { title: "Michelin Guide", year: "2024", note: "One Star" },
  { title: "Forbes Travel Guide", year: "2024", note: "Five‑Star Recommended" },
];

export default function Awards() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Award className="h-5 w-5 text-yellow-300" />
          <p className="text-xs tracking-[0.25em] text-white/70">AWARDS & PRESS</p>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl">Recognized for excellence worldwide</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {accolades.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center gap-2 text-yellow-300">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <h3 className="mt-4 font-medium text-white/90">{a.title}</h3>
              <p className="text-sm text-white/70">{a.note}</p>
              <p className="mt-2 text-xs text-white/60">{a.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
