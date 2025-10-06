import Head from "next/head";
import { styles } from "../data/styles";

export default function SobrePage() {
  return (
    <>
      <Head>
        <title>Sobre a Zanardo Marcenaria | Móveis Planejados RJ</title>
        <meta
          name="description"
          content="A Zanardo Marcenaria atua desde 2015 oferecendo móveis planejados sob medida e soluções de marcenaria de alto padrão no Rio de Janeiro. Projetos exclusivos e acabamento premium."
        />
        <meta property="og:title" content="Sobre a Zanardo Marcenaria | Móveis Planejados RJ" />
        <meta
          property="og:description"
          content="Especialistas em móveis planejados sob medida e marcenaria de alto padrão no Rio de Janeiro. Projetos residenciais e comerciais com design exclusivo."
        />
        <meta property="og:url" content="https://www.zanardomarcenaria.com.br/sobre" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.zanardomarcenaria.com.br/sobre" />
      </Head>

      <main className="min-h-screen px-6 py-10 mb:py-20 mb:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className={`${styles.h1}`}>Sobre a Zanardo Marcenaria</h1>

          <p className="text-md text-gray-700 leading-relaxed mb-6">
            Fundada no Rio de Janeiro, a <strong>Zanardo Marcenaria</strong> é referência em <strong>marcenaria de alto padrão</strong>, especializada em <strong>móveis planejados sob medida</strong>. Atendemos clientes exigentes que buscam <strong>sofisticação, funcionalidade e acabamento premium</strong> em cada projeto.
          </p>

          <p className="text-md text-gray-700 leading-relaxed mb-6">
            Trabalhamos em <strong>parceria com arquitetos premiados</strong>, garantindo <strong>soluções exclusivas e personalizadas</strong> que valorizam tanto ambientes residenciais quanto corporativos. Nossa equipe alia a <strong>tradição artesanal</strong> à <strong>tecnologia moderna</strong>, oferecendo móveis duráveis, elegantes e com atenção a cada detalhe.
          </p>

          <p className="text-md text-gray-700 leading-relaxed mb-6">
            Desde 2015, nossa missão é <strong>transformar espaços em ambientes únicos, sofisticados e funcionais</strong>, sempre prezando pela <strong>qualidade dos materiais</strong>, <strong>cumprimento de prazos</strong> e <strong>excelência em todos os processos</strong>.
          </p>

          <p className="text-md text-gray-700 leading-relaxed mb-12">
            Explore nossos projetos e descubra como a <strong>Zanardo Marcenaria</strong> pode criar <strong>soluções exclusivas</strong> que refletem <strong>estilo, conforto e precisão artesanal</strong>.
          </p>

          <h2 className={`${styles.h2}`}>Nossa Missão</h2>
          <p className="text-md text-gray-700 leading-relaxed">
            <strong>Transformar espaços em ambientes únicos, sofisticados e funcionais</strong>.
          </p>
        </div>
      </main>
    </>
  );
}
