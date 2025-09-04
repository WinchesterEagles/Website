import type { Metadata } from "next";
import Image from "next/image";
import { ImageCarousel } from "components/imageCarousel";
import { StandardButton } from "components/standardButton";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Winchester Eagles Volleyball Club",
  description:
    "Winchester Eagles Volleyball Club - Winchester's home for volleyball. Open to players of all levels. our teams proudly compete in Hampshire's volleyball leagues..",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-8">
      <h1 className="sr-only"> Winchester EAgles volleyball club</h1>
      {/* block 1- landing image + text */}
      <div className="flex flex-col px-4 text-center mb-8 w-full xl:max-w-5/6">
        <img
          src="/images/p2.jpeg"
          alt="p2"
          className="w-full h-auto xl:aspect-[3/1] my-2 rounded-2xl object-cover"
        />
        <p className="px-6 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </p>
      </div>

      {/* block 2- Adults + Juniors */}
      <div className="flex flex-col xl:flex-row gap-8 w-full xl:max-w-5/6 px-4 mt-12  mb-8">
        {/* Adults Section */}
        <div className=" flex flex-1 flex-col text-center items-center xl:max-w-[48%]">
          <h1 className="font-bold text-xl w-1/3 mx-auto border-b-2 border-amber-500 mb-4">
            Adults
          </h1>

          <div className="slider-wrapper w-full mx-auto">
            <ImageCarousel
              slides={[
                {
                  src: "/images/hpAdults1.jpg",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults2.jpg",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults3.jpg",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults4.jpg",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults5.jpg",
                  alt: "adults playing volleyball outdoor",
                },
              ]}
            />
          </div>

          <p className="px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet.
          </p>

          <StandardButton text="Find Out More" href="/adults" />
        </div>

        {/* Juniors Section */}
        <div className="flex flex-1 flex-col text-center items-center xl:max-w-[48%]">
          <h2 className="font-bold text-xl w-1/3 mx-auto border-b-2 border-amber-500 mb-4">
            Juniors
          </h2>

          <div className="slider-wrapper w-full mx-auto">
            <ImageCarousel
              slides={[
                { src: "/images/p1.png", alt: "p1" },
                { src: "/images/p2.jpeg", alt: "p2" },
                { src: "/images/p3.jpeg", alt: "p3" },
              ]}
            />
          </div>

          <p className="px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet.
          </p>

          <StandardButton text="Find Out More" href="/juniors" />
        </div>
      </div>
      {/* block 3- Teams */}
      <div className="flex flex-col  text-center items-center w-full px-4 mt-12  xl:max-w-[50%] mx-auto">
        <h1 className="font-bold text-xl w-1/3 mx-auto border-b-2 border-amber-500 mb-4">
          Teams
        </h1>
        <div className="slider-wrapper w-full mx-auto">
          <ImageCarousel
            slides={[
              { src: "/images/hpTeams1.jpg", alt: " team lineup photo" },
              { src: "/images/hpTeams2.jpg", alt: " team lineup photo" },
              { src: "/images/hpTeams3.jpg", alt: " team lineup photo" },
              { src: "/images/hpTeams4.jpg", alt: " team lineup photo" },
            ]}
          />
        </div>
        <p className="px-6 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet.
        </p>

        <StandardButton text="Discover Teams" href="/teams" />
      </div>
    </div>
  );
}
