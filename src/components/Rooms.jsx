import { motion } from "framer-motion";
import { Bath, BedDouble, Ruler } from "lucide-react";

const rooms = [
  {
    title: "Royal Suite Valois",
    img:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d42?q=80&w=2940&auto=format&fit=crop",
    size: "120 m²",
    bed: "King bed",
    bath: "Marble bath",
    price: "€1,250 / night",
  },
  {
    title: "Grand Chambre Loire",
    img:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2940&auto=format&fit=crop",
    size: "65 m²",
    bed: "King or twin",
    bath: "Rain shower",
    price: "€590 / night",
  },
  {
    title: "Tower Suite Renaissance",
    img:
      "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2940&auto=format&fit=crop",
    size: "85 m²",
    bed: "Four‑poster",
    bath: "Freestanding tub",
    price: "€820 / night",
  },
];

export default function Rooms() {
  return (
    <section id="suites" className="relative bg-white py-24 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.25em] text-gray-500">SUITES & ROOMS</p>
            <h2 className="mt-2 font-serif text-4xl">Where heritage meets comfort</h2>
          </div>
          <a
            href="#book"
            className="inline-flex rounded-full border border-gray-200 px-5 py-2 text-sm font-medium hover:bg-gray-50"
          >
            View all accommodations
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {rooms.map((room, idx) => (
            <motion.article
              key={room.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative">
                <img
                  src={room.img}
                  alt={room.title}
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl">{room.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-2"><Ruler className="h-4 w-4" /> {room.size}</span>
                  <span className="inline-flex items-center gap-2"><BedDouble className="h-4 w-4" /> {room.bed}</span>
                  <span className="inline-flex items-center gap-2"><Bath className="h-4 w-4" /> {room.bath}</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-medium">{room.price}</span>
                  <a
                    href="#book"
                    className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black"
                  >
                    Reserve
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
