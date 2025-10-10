// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ScrollToTop from "@/components/scroll";
import Footer from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
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
  title: "Zanardo Marcenaria | Marcenaria de Alto Padrão no Rio de Janeiro",
  description: "Marcenaria de alto padrão no Rio de Janeiro. Móveis planejados e projetos sob medida com sofisticação, acabamento premium e parceria com arquitetos premiados.",
  keywords: "marcenaria Rio de Janeiro, móveis planejados RJ, marcenaria sob medida, móveis de alto padrão, acabamento premium",
  robots: "index, follow",
  alternates: { canonical: "https://www.zanardomarcenaria.com.br/" },
  openGraph: {
    title: "Marcenaria de Alto Padrão no Rio de Janeiro",
    description: "Especialistas em móveis planejados sob medida, sofisticação e acabamento premium.",
    url: "https://www.zanardomarcenaria.com.br",
    siteName: "Marcenaria RJ",
    images: [{ url: "https://www.zanardomarcenaria.com.br/og-image.png" }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcenaria de Alto Padrão no Rio de Janeiro",
    description: "Móveis planejados sob medida, sofisticação e acabamento premium.",
    images: ["https://www.zanardomarcenaria.com.br/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${relaway.variable} antialiased`}>
        {/* JSON-LD para SEO LocalBusiness */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Zanardo Marcenaria",
              image: "https://www.zanardomarcenaria.com.br/og-image.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Campos, 24",
                addressLocality: "Rio de Janeiro",
                addressRegion: "RJ",
                postalCode: "21843-163",
                addressCountry: "BR",
              },
              telephone: "+55 21 97000-2758",
              url: "https://www.zanardomarcenaria.com.br",
            }),
          }}
        />

        {/*<!-- Google tag (gtag.js) -->*/}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BZ3S2YHYYB"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BZ3S2YHYYB');
        `}
        </Script>

        <ScrollToTop />
        <Header />

        <main className="pt-[50px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
