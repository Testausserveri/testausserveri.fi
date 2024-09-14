"use client";

import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export type GalleryImage = { src: string, width: number, height: number }

const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];


export default function ImageGalleryWithLightbox({images}: { images: GalleryImage[] }) {
  console.log("pilluperse", images)
  const slides = images.map(({ src, width, height }: GalleryImage) => ({
    src: src + `?w=${width}&q=75`,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
      src: src + `?w=${breakpoint}&q=75`,
      width: breakpoint,
      height: Math.round((height / width) * breakpoint),
    })),
  }));
  
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={slides}
        rowConstraints={{
          minPhotos: 3,
          maxPhotos: 5
        }}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
