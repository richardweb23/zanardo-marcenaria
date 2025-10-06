import PortfolioPhotosPage from "@/components/photos-portfolio";
import { styles } from "../data/styles";

export const metadata = {
  title: "Portfólio Zanardo Marcenaria | Móveis Planejados RJ",
  description:
    "Explore o portfólio da Zanardo Marcenaria: móveis planejados sob medida e marcenaria de alto padrão no Rio de Janeiro. Projetos residenciais e comerciais exclusivos.",
  openGraph: {
    title: "Portfólio Zanardo Marcenaria | Móveis Planejados RJ",
    description:
      "Conheça nossos projetos de marcenaria de alto padrão e móveis planejados sob medida, realizados no Rio de Janeiro. Design, funcionalidade e acabamento premium.",
    url: "https://www.zanardomarcenaria.com.br/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio Zanardo Marcenaria | Móveis Planejados RJ",
    description:
      "Conheça nossos projetos de marcenaria de alto padrão e móveis planejados sob medida, realizados no Rio de Janeiro. Design, funcionalidade e acabamento premium.",
  },
  alternates: {
    canonical: "https://www.zanardomarcenaria.com.br/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-10 mb:py-20 mb:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${styles.h1}`}>Portfólio Zanardo Marcenaria</h1>
        <p className="text-md text-gray-700 leading-relaxed mb-12">
          Explore nossos projetos exclusivos de <strong>móveis planejados e marcenaria de alto padrão</strong> na Zona Sul do Rio de Janeiro. Cada projeto une <strong>design sofisticado, funcionalidade e acabamento premium</strong>, mostrando a excelência do nosso trabalho.
        </p>


        <PortfolioPhotosPage />

        <h2 className={`${styles.h2} mt-12`}>Por que escolher a Zanardo Marcenaria?</h2>
        <p className="text-md text-gray-700 leading-relaxed mb-6">
          Trabalhamos em <strong>parceria com arquitetos premiados</strong>, garantindo soluções personalizadas que valorizam cada ambiente. Nossa equipe alia tradição artesanal à tecnologia moderna, oferecendo projetos <strong>duráveis, elegantes e únicos</strong>.
        </p>
        <p className="text-md text-gray-700 leading-relaxed mb-12">
          Desde 2015, transformamos espaços em ambientes sofisticados e funcionais, sempre prezando por <strong>qualidade, prazo e excelência em cada detalhe</strong>.
        </p>
      </div>
    </main>
  );
}
