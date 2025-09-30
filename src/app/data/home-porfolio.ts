
// === Dados das fotos ===
const rawPortfolioPhotos = [
  { src: "05.1920x1280.jpg", alt: "Closet planejado" },
  { src: "01.1920x1280.jpg", alt: "Mesa de madeira sob medida" },
  { src: "02.1920x2880.jpg", alt: "Closet planejado" },
  { src: "03.1920x1280.jpg", alt: "Cozinha premium" },
  { src: "06.1920x1280.jpg", alt: "Cozinha premium" },
];

// Função para gerar objetos Photo para react-photo-album
function generatePhotos(files: { src: string; alt?: string }[]) {
  return files.map(({ src, alt }) => {
    const match = src.match(/^(.+)\.(\d+)x(\d+)\.(\w+)$/);
    if (!match) throw new Error(`Arquivo inválido: ${src}`);
    const [, , w, h] = match;
    return {
      src: `/portfolio-home/${src}`,
      width: parseInt(w, 10),
      height: parseInt(h, 10),
      alt,
    };
  });
}

export const portfolioPhotos = generatePhotos(rawPortfolioPhotos);

// Array para Lightbox (só precisa de src e alt)
export const lightboxSlides = portfolioPhotos.map(p => ({ src: p.src, alt: p.alt || "" }));