import { motion } from "framer-motion";
import { Star, Wine } from "lucide-react";

export default function Dining() {
  return (
    <section id="dining" className="relative bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.25em] text-gray-500">GASTRONOMIE</p>
            <h2 className="mt-2 font-serif text-4xl leading-tight">
              Michelin‑starred dining celebrating Loire terroir
            </h2>
            <p className="mt-4 max-w-xl text-gray-700">
              Our culinary team crafts seasonal menus from estate gardens and
              neighboring producers. A cellar of rare vintages is curated by our
              head sommelier to pair with each course.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> Michelin Guide 2024</span>
              <span className="inline-flex items-center gap-2"><Wine className="h-4 w-4 text-rose-600" /> 1,200‑label cellar</span>
            </div>
            <a
              href="#book"
              className="mt-8 inline-block rounded-full border border-gray-300 px-5 py-2 text-sm font-medium hover:bg-white"
            >
              Book a table
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=2940&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2940&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1533777168198-6f2aebf0b2df?q=80&w=2940&auto=format&fit=crop",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl ${i % 3 === 0 ? "row-span-2 h-72" : "h-40"}`}
              >
                <img src={src} alt="Dining at the château" className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
