"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ColumnsPhotoAlbum, RenderImageContext, RenderImageProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // CSS do Lightbox
import "react-photo-album/columns.css"; // CSS do react-photo-album
import { lightboxSlides, portfolioPhotos } from "@/app/data/home-porfolio";


// Função para renderizar imagens do react-photo-album usando Next.js Image
function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="animate-fadeIn"
      />
    </div>
  );
}

export default function PortfolioPhotosPage() {
  const [index, setIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-gray-50">
      <ColumnsPhotoAlbum
        photos={portfolioPhotos}
        render={{ image: renderNextImage }}
        spacing={10}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={lightboxSlides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </main>
  );
}
