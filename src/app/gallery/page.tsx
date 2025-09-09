import React from "react";
import Gallery from "components/galleryWall";
import { Photos } from "assets/data";

export default function GalleryPage() {
  return (
    <div className="mx-4 mt-12 xl:w-5/6">
      <h1 className="text-3xl font-semibold text-center mb-8">Gallery</h1>

      <Gallery photos={Photos} />
    </div>
  );
}
