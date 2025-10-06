import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Head from "next/head";
import ScrollToTop from "@/components/scroll";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const relaway = Raleway({
  variable: '--font-relaway',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Zanardo Marcenaria",
  description: "Marcenaria de alto padrão no Rio de Janeiro. Móveis planejados e projetos sob medida com sofisticação, acabamento premium e parceria com arquitetos premiados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${relaway.variable} antialiased`}
      >
        <Head>
          <title>Zanardo Marcenaria | Marcenaria de Alto Padrão no Rio de Janeiro</title>
          <meta name="description"
            content="Marcenaria de alto padrão no Rio de Janeiro. Móveis planejados e projetos sob medida com sofisticação, acabamento premium e parceria com arquitetos premiados."
          />

          <meta
            name="keywords"
            content="marcenaria Rio de Janeiro, móveis planejados RJ, marcenaria sob medida, móveis de alto padrão, acabamento premium"
          />

          <script
            type="application/ld+json"
            // O conteúdo precisa ser uma string
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Zanardo Marcenaria",
                "image": "https://www.zanardomarcenaria.com.br/og-image.png",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Campos, 24",
                  "addressLocality": "Rio de Janeiro",
                  "addressRegion": "RJ",
                  "postalCode": "21843-163",
                  "addressCountry": "BR"
                },
                "telephone": "+55 21 97000-2758",
                "url": "https://www.zanardomarcenaria.com.br"
              })
            }}
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:title" content="Marcenaria de Alto Padrão no Rio de Janeiro" />
          <meta
            property="og:description"
            content="Especialistas em móveis planejados sob medida, sofisticação e acabamento premium."
          />
          <meta property="og:url" content="https://www.zanardomarcenaria.com.br" />
          <meta property="og:site_name" content="Marcenaria RJ" />
          <meta property="og:image" content="https://www.zanardomarcenaria.com.br/og-image.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Marcenaria de Alto Padrão no Rio de Janeiro" />
          <meta
            name="twitter:description"
            content="Móveis planejados sob medida, sofisticação e acabamento premium."
          />
          <meta property="twitter:url" content="https://www.zanardomarcenaria.com.br/"></meta>
          <meta name="twitter:image" content="https://www.zanardomarcenaria.com.br/og-image.png" />


          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />

          {/* Canonical */}
          <link rel="canonical" href="https://www.zanardomarcenaria.com.br/" />
        </Head>
        <ScrollToTop /> {/* aqui fica o scroll */}

        <Header />

        <div className="pt-[50px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
