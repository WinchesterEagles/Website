/* This is the carousel used throughout the site.
the array of images is defined on call  */

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

export function ImageCarousel({ slides }: { slides: CarouselImage[] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2500,
    centerMode: false,
  };

  return (
    <div className="slider-container w-full h-full">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index} className="w-full h-full aspect-video">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={item.src}
                alt={item.alt || `slide-${index}`}
                className="w-auto h-full object-contain rounded-xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
