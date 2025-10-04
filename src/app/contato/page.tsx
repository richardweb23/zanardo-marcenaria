// pages/contato.tsx
import Contato from "@/components/contato";
import Head from "next/head";
import { styles } from "../data/styles";


export default function ContatoPage() {
  return (
    <>
      <Head>
        <title>Contato | Zanardo Marcenaria</title>
        <meta
          name="description"
          content="Entre em contato com a Zanardo Marcenaria, especializada em móveis planejados sob medida e marcenaria de alto padrão no Rio de Janeiro. WhatsApp e Instagram disponíveis."
        />
        <link rel="canonical" href="http://www.zanardomarcenaria.com.br/contato" />
      </Head>

      <main className="min-h-screen px-6 py-10 mb:py-20 mb:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className={`${styles.h1}`}>Contato</h2>
          <p className="text-gray-700 mb-2"><strong>Entre em contato com a Zanardo Marcenaria</strong></p>
          <p className="text-gray-700 mb-6">
            A <strong>Zanardo Marcenaria</strong> atende toda a <strong>Zona Sul do Rio de Janeiro</strong>, oferecendo <strong>projetos de marcenaria de alto padrão</strong> e <strong>móveis planejados sob medida</strong>. Cada projeto combina <strong>design exclusivo, funcionalidade e acabamento premium</strong>, garantindo satisfação total para clientes residenciais e comerciais.
          </p>
          <Contato />
        </div>
      </main>
    </>
  );
}
