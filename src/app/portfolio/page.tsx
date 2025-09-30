import PortfolioPhotosPage from "@/components/photos-portfolio";
import Head from "next/head";

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
        <meta property="og:url" content="http://www.zanardomarcenaria.com.br/portfolio" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://www.zanardomarcenaria.com.br/portfolio" />
      </Head>

      <main className="min-h-screen py-20 px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold font-montserrat mb-6">Portfólio Zanardo Marcenaria</h1>
          <p className="text-md text-gray-700 leading-relaxed mb-12">
            Explore nossos projetos exclusivos de <strong>móveis planejados e marcenaria de alto padrão</strong> na Zona Sul do Rio de Janeiro. Cada projeto une <strong>design sofisticado, funcionalidade e acabamento premium</strong>, mostrando a excelência do nosso trabalho.
          </p>

          <h2 className="text-3xl font-bold font-montserrat mb-6">Por que escolher a Zanardo Marcenaria?</h2>
          <p className="text-md text-gray-700 leading-relaxed mb-6">
            Trabalhamos em <strong>parceria com arquitetos premiados</strong>, garantindo soluções personalizadas que valorizam cada ambiente. Nossa equipe alia tradição artesanal à tecnologia moderna, oferecendo projetos <strong>duráveis, elegantes e únicos</strong>.
          </p>
          <p className="text-md text-gray-700 leading-relaxed mb-12">
            Desde 2015, transformamos espaços em ambientes sofisticados e funcionais, sempre prezando por <strong>qualidade, prazo e excelência em cada detalhe</strong>.
          </p>
        </div>
        <PortfolioPhotosPage />
      </main>

    </>
  );
}
