import type { Metadata } from "next";
import Image from "next/image";
import { ImageCarousel } from "components/imageCarousel";
import { StandardButton } from "components/standardButton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mt-8">
      <h1 className="sr-only"> Winchester EAgles volleyball club</h1>
      {/* block 1- landing image + text */}
      <div className="flex flex-col px-4 text-center  w-full xl:max-w-5/6">
        <img
          src="/images/hpMain.jpg"
          alt="p2"
          className="w-full h-auto xl:aspect-[3/1] my-2 rounded-2xl object-cover"
        />
        <h2 className="mt-4 font-semibold text-2xl">
          Welcome to Winchester Eagles Volleyball club!
        </h2>
        <p className="px-4 mt-4 text-xl ">
          We are a fun and friendly volleyball club located in Winchester. We
          welcome players of all abilities from beginners to pros. Check out our
          pages below to find out more information about our adult and junior
          teams.
        </p>
      </div>

      {/* block 2- Adults + Juniors */}
      <div className="flex flex-col xl:flex-row gap-8 w-full xl:max-w-5/6 px-4 mt-12 xl:mt-16  mb-8">
        {/* Adults Section */}
        <div className=" flex flex-1 flex-col text-center items-center xl:max-w-[48%]">
          <h2 className="font-bold text-2xl w-1/3 mx-auto border-b-2 border-amber-500 mb-4">
            Adults
          </h2>

          <div className="slider-wrapper w-full mx-auto">
            <ImageCarousel
              slides={[
                {
                  src: "/images/hpAdults1.webp",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults2.webp",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults6.webp",
                  alt: "adults playing volleyball indoor",
                },
                {
                  src: "/images/hpAdults3.webp",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults7.webp",
                  alt: "adults playing volleyball indoor",
                },
                {
                  src: "/images/hpAdults4.webp",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults5.webp",
                  alt: "adults playing volleyball outdoor",
                },
                {
                  src: "/images/hpAdults8.webp",
                  alt: "adults playing volleyball indoor",
                },
              ]}
            />
          </div>

          <p className="px-4 mt-4 text-xl">
            We offer two adult training sessions per week. Check out the adults
            page for information on timings, membership pricing and more!
          </p>

          <StandardButton text="Find Out More" href="/adults" />
        </div>

        {/* Juniors Section */}
        <div className="flex flex-1 flex-col text-center items-center xl:max-w-[48%]">
          <h2 className="font-bold text-2xl w-1/3 mx-auto border-b-2 mt-4 xl:mt-0 border-amber-500 mb-4">
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

          <p className="px-4 mt-4 text-xl">
            We offer training sessions for juniors up to 18 years old. Check out
            the Juniors page for information on timings, membership pricing and
            more!
          </p>

          <StandardButton text="Find Out More" href="/juniors" />
        </div>
      </div>
      {/* block 3- Teams */}
      <div className="flex flex-col  text-center items-center w-full px-4 mt-4 xl:mt-8 xl:max-w-[50%] mx-auto mb-16">
        <h2 className="font-bold text-2xl w-1/3 mx-auto border-b-2 border-amber-500 mb-4">
          Teams
        </h2>
        <div className="slider-wrapper w-full mx-auto">
          <ImageCarousel
            slides={[
              { src: "/images/hpTeams1.webp", alt: " team lineup photo" },
              { src: "/images/hpTeams2.webp", alt: " team lineup photo" },
              { src: "/images/hpTeams3.webp", alt: " team lineup photo" },
              { src: "/images/hpTeams4.webp", alt: " team lineup photo" },
            ]}
          />
        </div>
        <p className="px-4 mt-4 text-xl">
          We run a wide range of teams and enter them into various competitions,
          tournaments, and friendly matches throughout the year. Head to the
          Teams page to learn more and follow their progress throughout the
          season.
        </p>

        <StandardButton text="Discover Teams" href="/teams" />
      </div>
    </div>
  );
}
