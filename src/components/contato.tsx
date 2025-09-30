// components/ContactSection.tsx
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function Contato() {
  return (
    <section>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-relaway mb-6 mt-12">Contato</h2>
        <p className="text-gray-700 mb-8">
          Entre em contato com a <strong>Zanardo Marcenaria</strong> para projetos sob medida e móveis de alto padrão no Rio de Janeiro.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/zanardomarcenaria/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition"
          >
            <FaInstagram className="w-5 h-5" />
            Instagram
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/5521970002758"
            target="_blank"
            className="flex items-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </Link>

          {/* Telefone fixo */}
          <Link
            href="tel:+5521970002758"
            className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition"
          >
            <FaPhone className="w-5 h-5" />
            (21) 97000-2758
          </Link>
        </div>
      </div>
    </section>
  );
}
