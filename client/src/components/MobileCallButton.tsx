import { Phone } from "lucide-react";

export default function MobileCallButton() {
  return (
    <a
      href="tel:800-741-6056"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 md:hidden animate-pulse"
      aria-label="Call Hero Handyman Pro"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold">Call Now</span>
    </a>
  );
}
