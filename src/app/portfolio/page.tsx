import PortfolioPhotosPage from "@/components/photos-portfolio";
import Head from "next/head";
import { styles } from "../data/styles";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfólio Zanardo Marcenaria | Móveis Planejados RJ</title>
        <meta
          name="description"
          content="Explore o portfólio da Zanardo Marcenaria: móveis planejados sob medida e marcenaria de alto padrão no Rio de Janeiro. Projetos residenciais e comerciais exclusivos."
        />
        <meta property="og:title" content="Portfólio Zanardo Marcenaria | Móveis Planejados RJ" />
        <meta
          property="og:description"
          content="Conheça nossos projetos de marcenaria de alto padrão e móveis planejados sob medida, realizados no Rio de Janeiro. Design, funcionalidade e acabamento premium."
        />
        <meta property="og:url" content="https://www.zanardomarcenaria.com.br/portfolio" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen px-6 py-10 mb:py-20 mb:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className={`${styles.h1}`}>Portfólio Zanardo Marcenaria</h1>
          <p className="text-md text-gray-700 leading-relaxed mb-12">
            Explore nossos projetos exclusivos de <strong>móveis planejados e marcenaria de alto padrão</strong> na Zona Sul do Rio de Janeiro. Cada projeto une <strong>design sofisticado, funcionalidade e acabamento premium</strong>, mostrando a excelência do nosso trabalho.
          </p>


          <PortfolioPhotosPage />

          <h2 className={`${styles.h2}`}>Por que escolher a Zanardo Marcenaria?</h2>
          <p className="text-md text-gray-700 leading-relaxed mb-6">
            Trabalhamos em <strong>parceria com arquitetos premiados</strong>, garantindo soluções personalizadas que valorizam cada ambiente. Nossa equipe alia tradição artesanal à tecnologia moderna, oferecendo projetos <strong>duráveis, elegantes e únicos</strong>.
          </p>
          <p className="text-md text-gray-700 leading-relaxed mb-12">
            Desde 2015, transformamos espaços em ambientes sofisticados e funcionais, sempre prezando por <strong>qualidade, prazo e excelência em cada detalhe</strong>.
          </p>
        </div>
      </main>

    </>
  );
}
