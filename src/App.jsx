import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Dining from "./components/Dining";
import Awards from "./components/Awards";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Rooms />
      <Dining />
      <Awards />

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <h4 className="font-serif text-2xl">Château Lumière</h4>
              <p className="mt-2 text-sm text-gray-600">
                Loire Valley, France
                <br />
                Open year‑round • Private estate
              </p>
            </div>
            <div>
              <h5 className="mb-3 text-sm font-semibold">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +33 1 23 45 67 89</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> reservations@chateaulumierre.fr</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 text-sm font-semibold">Explore</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><a href="#suites" className="hover:underline">Suites & Rooms</a></li>
                <li><a href="#dining" className="hover:underline">Dining</a></li>
                <li><a href="#book" className="hover:underline">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 text-sm font-semibold">Follow</h5>
              <div className="flex gap-3 text-gray-700">
                <a href="#" aria-label="Instagram" className="rounded-full border border-gray-200 p-2 hover:bg-gray-50"><Instagram className="h-4 w-4" /></a>
                <a href="#" aria-label="Facebook" className="rounded-full border border-gray-200 p-2 hover:bg-gray-50"><Facebook className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Château Lumière. All rights reserved.</p>
            <p>Designed with care in France.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
