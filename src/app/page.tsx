// pages/index.tsx
import Contato from "@/components/contato";
import PortfolioHomePage from "@/components/photos-home";
import Link from "next/link";
import { config } from "./data/config";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          id="inicio"
          className="mx-auto grid md:grid-cols-1"
        >
          <div className="w-full flex pt-0 bg-cover bg-center bg-no-repeat bg-blend-multiply animate-fadeInUp" style={{ backgroundImage: `url(${config.imgPath}/bg-1.jpg)` }}>
            <div className="w-full bg-black/60 pt-8 pb-4 px-6 md:pt-12 md:pb-12 md:px-12 lg:w-[50%] lg:bg-black/50 animate-fadeIn">
              <h1 className="flex text-2xl md:text-5xl text-white font-bold leading-tight font-relaway">
                Zanardo Marcenaria
              </h1>
              <section className="mt-2 md:mt-6 text-sm md:text-lg text-white font-relaway">
                <p className="w-full mb-4 md:mb-6">
                  A <strong>Zanardo Marcenaria</strong> é referência em <strong>marcenaria de alto padrão no Rio de Janeiro</strong>, especializada em <strong>móveis planejados</strong> e <strong>projetos sob medida</strong> que unem <strong>sofisticação, funcionalidade e acabamento premium</strong>.
                </p>

                <p className="w-full mb-4 md:mb-6">
                  Atuamos lado a lado com <strong>arquitetos e designers de interiores</strong>, idealizando e executando <strong>projetos exclusivos</strong> que valorizam cada detalhe. Foi assim que participamos do <strong>premiado Raízes do Norte</strong>, do arquiteto <strong>Cadé Marino (@studio.marino_)</strong>, vencedor do <strong>28º Prêmio Deca na categoria Cozinha para Receber (CASACOR)</strong>, onde tivemos a honra de executar <strong>toda a marcenaria do espaço</strong>.
                </p>

                <p className="w-full mb-4 md:mb-6">
                  Realizamos <strong>projetos residenciais e comerciais</strong>, incluindo <strong>cozinhas, closets, painéis, mobiliário de sala</strong> e <strong>ambientes personalizados</strong>, sempre com <strong>design exclusivo</strong> e <strong>materiais de primeira qualidade</strong>.
                </p>

                <p className="w-full mb-4 md:mb-6">
                  Nosso compromisso é <strong>transformar espaços com elegância, precisão artesanal e credibilidade</strong>, oferecendo <strong>soluções sob medida</strong> para clientes e profissionais que buscam uma <strong>marcenaria de alto padrão no Rio de Janeiro</strong>.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full px-6 py-6 md:py-20 md:px-20 animate-fadeIn">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-black font-relaway mb-2">Sobre Nós</h2>
            <p className="text-gray-500 mb-8">
              A <strong>Zanardo Marcenaria</strong> atua no Rio de Janeiro com <strong>foco em móveis planejados
                de alto padrão</strong>.<br /> Nossos projetos unem <strong>sofisticação, funcionalidade e acabamento premium.</strong>
            </p>
            <Link
              href="/sobre"
              className="inline-block px-6 py-3 bg-yellow-800 text-white rounded-lg shadow hover:bg-black transition"
            >
              Saiba mais
            </Link>
          </div>
        </section>
        {/* Resumo Sobre e1cc9d */}
        <section id="sobre" className="w-full bg-white px-6 py-6 md:py-20 md:px-20 animate-fadeIn">
          <div className="w-full mx-auto text-center">
            <h3 className="text-3xl text-black font-relaway mb-2">Portfólio</h3>
            <p className="text-gray-500 mb-12">
              <strong>Transforme seu espaço com móveis sob medida de alto padrão no Rio de Janeiro.</strong>
              <br />Explore nossos projetos exclusivos e descubra como a <strong>Zanardo Marcenaria</strong> une design, sofisticação e funcionalidade em cada detalhe.
            </p>
            <div className="mb-8">
              <PortfolioHomePage />
            </div>
            <Link
              href="/portfolio"
              className="inline-block px-6 py-3 bg-yellow-800 text-white rounded-lg shadow hover:bg-black transition"
            >
              Ver mais projetos
            </Link>
          </div>
        </section>

        <section id="sobre" className="w-full bg-gray-50 px-6 py-6 md:py-20 md:px-20 pt-6 animate-fadeIn">
          <div className="w-full mx-auto text-center">
            <h3 className="text-3xl text-black font-relaway mb-2">Contato</h3>
            <Contato />
          </div>
        </section>
      </main>
    </>
  );
}
