"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [headerContentAnimated, setHeaderContentAnimated] = useState(false);
  const controlZoom = () => {
    const scrollY = window.scrollY;
    const newScale = 1 + scrollY * 0.0001;

    setScaleFactor(Math.min(newScale, 1.2));
  };

  useEffect(() => {
    window.addEventListener("scroll", controlZoom);
    setHeaderContentAnimated(true);
    return () => {
      window.removeEventListener("scroll", controlZoom);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="relative h-[130vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center transition-transform duration-75 ease-out"
          style={{
            backgroundImage: "url('/bgimg.jpg')",
            backgroundRepeat: "no-repeat",
            transform: `scale(${scaleFactor})`,
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-black/30 p-8 sm:p-16">
          <h1
            className={`text-6xl font-extrabold mb-4 transition-all duration-1000 ease-out 
              ${
                headerContentAnimated
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
          >
            StapOf Solution inc.
          </h1>

          <p
            className={`text-2xl font-light mb-8 transition-all duration-1000 ease-out delay-200 
              ${
                headerContentAnimated
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
          >
            Empowering your Business with <br /> innovative web designs and
            <br /> seamless user experience.
          </p>

          <button
            className={`bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-xl 
              hover:bg-orange-700 transition-all duration-1000 ease-out delay-400
              ${
                headerContentAnimated
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
          >
            Discover More
          </button>
        </div>
      </header>
    </div>
  );
}
