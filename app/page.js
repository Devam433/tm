"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Footer } from "./components/Footer";

export default function HomePage() {
  const sliderImages = [
    { src: "/images/TMHomeBg1.jpg", alt: "Talent Showcase 1" },
    { src: "/images/TMHomeBg2.jpg", alt: "Talent Showcase 2" },
    { src: "/images/TMHomeBg3.jpg", alt: "Talent Showcase 3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <>
    <div className=" absolute top-0 left-0 h-screen w-screen overflow-hidden z-0">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              priority={index === currentSlide}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <header className="text-center">
          <h1 className="text-5xl font-bold">Talent Management</h1>
        </header>

        {/* Transparent "Book Now" Button */}
        <div className="mt-10">
          <a
            href="#book-now"
            className="bg-transparent border-2 border-white text-white py-2 px-8 rounded-full text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Book Now
          </a>
        </div>
                {/* Transparent "Book Now" Button */}
                <div className="mt-32">
          <a
            href="#book-now"
            className="bg-transparent border-2 border-white text-white py-2 px-8 rounded-full text-lg hover:bg-white hover:text-black transition duration-300 mt-44"
          >
            Want to be managed by us ?
          </a>
        </div>
      </main>

      {/* Prevent horizontal scroll */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style>
    </div>
        <Footer className="absolute bottom-0 left-0 w-full bg-black opacity-95"/>
    </>
  );
}
