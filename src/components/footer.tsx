// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black mt-40 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between">
        <div className="mb-6 flex items-center">
          <Image
            src="/logo-branca.svg"
            alt="Zanardo Marcenaria"
            width={120}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Créditos */}
        <div className="text-center text-sm text-gray-400">
          Desenvolvido por{" "}
          <Link
            href="https://www.instagram.com/richardweb23/"
            target="_blank"
            className="text-gray-200 hover:text-white underline"
          >
            @richardweb23
          </Link>
        </div>
      </div>
    </footer>
  );
}
