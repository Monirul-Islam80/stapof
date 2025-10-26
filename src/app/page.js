"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  IoDiamondOutline,
  IoCodeSlash,
  IoChatboxEllipsesOutline,
  IoRocketOutline,
} from "react-icons/io5";
export default function Home() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [headerContentAnimated, setHeaderContentAnimated] = useState(false);
  const controlZoom = () => {
    const scrollY = window.scrollY;
    const newScale = 1 + scrollY * 0.0005;

    setScaleFactor(Math.min(newScale, 1.2));
  };

  useEffect(() => {
    window.addEventListener("scroll", controlZoom);
    setHeaderContentAnimated(true);
    return () => {
      window.removeEventListener("scroll", controlZoom);
    };
  }, []);
  const FeatureCard = ({ icon: Icon, title, description, delay }) => {
    const [ref, isVisible] = useScrollFade(0.3);

    return (
      <div
        ref={ref}
        className={`p-6 pb-12 bg-neutral-800 rounded-xl shadow-lg transition-all duration-1000 ease-out 
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  ${delay}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <Icon className="w-10 h-10 text-orange-600 mb-3" />
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };
  const useScrollFade = (threshold = 0.5) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: threshold,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold]);

    return [ref, isVisible];
  };
  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="relative h-[130vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center transition-transform duration-75 ease-out"
          style={{
            backgroundImage: "url('/bgimg4.jpg')",
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
      <section className="py-30 relative bg-transparent overflow-hidden h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col lg:flex-row gap-12 border p-10 border-gray-200">
            <div className="lg:w-1/2 relative h-[100vh] border-r border-gray-200 pr-10">
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                  style={{
                    backgroundImage: "url('/bgimg3.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>

                <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 text-white">
                  <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                    Empower Your <br /> Business with Modern <br />
                    Digital Solution
                  </h2>
                  <p className="text-lg font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corrupti, in et consectetur maiores perferendis, accusamus
                    aspernatur veniam, cumque est nostrum asperiores ipsam ex
                    quibusdam iure.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 relative pt-8 sm:pt-0">
                <div className="relative sm:col-span-1 -mt-8 sm:-mt-20 sm:ml-8 z-10">
                  <FeatureCard
                    icon={IoDiamondOutline}
                    title="Innovative Design"
                    description="We craft unique, user-centric designs that capture attention and drive engagement, ensuring your brand stands out."
                    delay={100}
                  />
                </div>

                <div className="relative sm:col-span-1">
                  <FeatureCard
                    icon={IoCodeSlash}
                    title="Seamless Development"
                    description="Clean, modern code using Next.js ensures lightning-fast performance and a scalable foundation for future growth."
                    delay={300}
                  />
                </div>

                <div className="relative sm:col-span-1 -mt-8 sm:mt-0">
                  <FeatureCard
                    icon={IoChatboxEllipsesOutline}
                    title="Continuous Support"
                    description="Our partnership doesn't end at launch. We provide ongoing support and iterative improvements to keep you ahead."
                    delay={500}
                  />
                </div>

                <div className="relative sm:col-span-1  -mt-8 sm:mt-16 sm:ml-8 z-10">
                  <FeatureCard
                    icon={IoRocketOutline}
                    title="Performance Optimization"
                    description="We specialize in speed. Your site will be optimized for core web vitals, improving SEO and user satisfaction."
                    delay={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </div>
  );
}
