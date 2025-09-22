import React from "react";
import Gallery from "components/galleryWall";
import { Photos } from "assets/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "gallery",
  description:
    "Explore the vibrant moments of the Winchester Volleyball Club through our gallery. See thrilling matches, team celebrations, training sessions, and community events that capture the spirit and energy of our players. Stay connected and relive the excitement of every spike, serve, and victory.",

  // Open Graph (social previews)
  openGraph: {
    title: "gallery",
    description:
      "Explore the vibrant moments of the Winchester Volleyball Club through our gallery. See thrilling matches, team celebrations, training sessions, and community events that capture the spirit and energy of our players. Stay connected and relive the excitement of every spike, serve, and victory.",
    url: "https://www.winchestervolleyball.co.uk/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="mx-4 mt-12 xl:w-5/6">
      <h1 className="text-3xl font-semibold font-serif text-blue-900 text-center mb-8">
        Gallery
      </h1>

      <Gallery photos={Photos} />
    </div>
  );
}
