// app/portfolio/page.tsx ou pages/portfolio.tsx
"use client";

import { portfolioPhotos } from "@/app/data/home-porfolio";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";


import Image from "next/image";
import { RenderImageContext, RenderImageProps } from "react-photo-album";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
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
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}


export default function PortfolioHomePage() {
  return (
    <ColumnsPhotoAlbum
      photos={portfolioPhotos}
      render={{ image: renderNextImage }}
      spacing={10}
    />
  );
}
