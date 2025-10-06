import { config } from "@/app/data/config";

// === Dados das fotos ===
const rawPortfolioPhotos = [
  { src: "01.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "03.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "04.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "05.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "06.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "09.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "10.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "11.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "12.1920x1280.jpg", alt: "Zanardo Marcenaria" },
  { src: "13.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "14.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "15.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "16.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "17.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "18.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "20.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "21.1920x2880.jpg", alt: "Zanardo Marcenaria" },
  { src: "21.1920x2880.jpg", alt: "Zanardo Marcenaria" },
];

// Função para gerar objetos Photo para react-photo-album
function generatePhotos(files: { src: string; alt?: string }[]) {
  return files.map(({ src, alt }) => {
    const match = src.match(/^(.+)\.(\d+)x(\d+)\.(\w+)$/);
    if (!match) throw new Error(`Arquivo inválido: ${src}`);
    const [, , w, h] = match;
    return {
      src: `${config.imgPath}/portfolio-home/${src}`,
      width: parseInt(w, 10),
      height: parseInt(h, 10),
      alt,
    };
  });
}

export const portfolioPhotos = generatePhotos(rawPortfolioPhotos);

// Array para Lightbox (só precisa de src e alt)
export const lightboxSlides = portfolioPhotos.map(p => ({ src: p.src, alt: p.alt || "" }));