"use client";

import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

export interface Photo {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(-1);

  const handleClick = ({ index: clickedIndex }: { index: number }) => {
    if (typeof window !== "undefined" && window.innerWidth >= 700) {
      setIndex(clickedIndex);
    }
  };

  return (
    <div className="my-gallery xl:max-w-5/6 mx-auto">
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => (containerWidth < 700 ? 1 : 3)}
        onClick={handleClick}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </div>
  );
}
