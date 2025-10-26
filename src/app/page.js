"use client";

import { useEffect, useRef, useState } from "react";
import {
  IoDiamondOutline,
  IoCodeSlash,
  IoChatboxEllipsesOutline,
  IoRocketOutline,
} from "react-icons/io5";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const useScrollFade = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px", threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible];
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, isVisible] = useScrollFade(0.3);

  return (
    <div
      ref={ref}
      className={`p-6 flex flex-col justify-between pb-12 min-h-[45vh] bg-neutral-800 rounded-xl shadow-lg transition-all duration-1000 ease-out
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-10 h-10 text-orange-600 mb-3" />
      <div>
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [headerContentAnimated, setHeaderContentAnimated] = useState(false);
  const [bgPosition, setBgPosition] = useState(0);

  const [refSection, isSectionVisible] = useScrollFade(0.3);
  const [refStats, isStatsVisible] = useScrollFade(0.3);

  useEffect(() => {
    setHeaderContentAnimated(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const newScale = 1 + y * 0.0005;
      setScaleFactor(Math.min(newScale, 1.2));
      setBgPosition(y * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <header className="relative h-[110vh] overflow-hidden mb-20">
        <div
          property="ture"
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
          style={{
            backgroundImage: "url('/bgimg5.jpg')",

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

      <section className="py-30 relative bg-transparent overflow-hidden">
        <div className="absolute w-full h-full bg-neutral-900 -z-10 mt-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 p-10 border border-gray-200 bg-black">
            <div className="lg:w-1/2 relative h-screen border-r border-gray-200 pr-10">
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
                    Empower Your <br /> Business with Modern <br /> Digital
                    Solution
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

            <div className="lg:w-1/2 relative overflow-visible h-dvh">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 relative pt-8 sm:pt-0">
                <div className="relative sm:col-span-1 -mt-8 sm:-mt-40 sm:ml-8 z-10">
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

                <div className="relative sm:col-span-1  mt-8 sm:mt-40 sm:ml-8 ">
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

      <section
        className="h-screen flex-1 p-30 flex justify-center items-center"
        ref={refSection}
      >
        <div
          className={`relative border border-neutral-500 inset-0 bg-cover bg-center transition-all duration-300 h-full flex-1 flex justify-center items-center
            ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          style={{
            backgroundImage: "url('/bgimg6.jpg')",
            transitionDelay: "100ms",
          }}
        >
          <h1 className="text-3xl">
            Inovative Solution,
            <br /> Seamless experiences.
          </h1>
        </div>

        <div className="border border-neutral-500 h-full flex-1 flex items-center justify-center">
          <div className="w-2/4">
            <p
              className={`text-[16px] text-gray-600 mb-10 transition-all duration-1000 ease-out delay-400
                ${
                  isSectionVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              dignissimos, unde aspernatur tempore necessitatibus veritatis hic?
              Fugiat, culpa vel dolore sed ullam laudantium labore iure ipsam
              enim soluta corrupti at.
            </p>

            <button
              className={`bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-xl
                hover:bg-orange-700 transition-all duration-1000 ease-out delay-400
                ${
                  isSectionVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out"
          style={{
            backgroundImage: "url('/bgimg7.jpg')",
            backgroundPositionX: `${-bgPosition}px`,
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isStatsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            ref={refStats}
          >
            <h1 className="text-4xl font-extrabold mb-4">
              Experience and Expertise
            </h1>
            <p className="text-gray-300 text-lg">
              Our proven track record and years of experience set us apart.
            </p>
          </div>

          <div className="flex justify-center gap-12">
            {[
              { num: "10+", label: "Years of Experience" },
              { num: "50+", label: "Successful Projects" },
              { num: "15+", label: "Industry Recognitions" },
              { num: "100+", label: "Happy Clients" },
              { num: "24/7", label: "Support Availability" },
              { num: "5", label: "Global Offices" },
            ].map((item, index) => {
              const [statRef, statVisible] = useScrollFade(0.3);
              return (
                <div
                  key={index}
                  ref={statRef}
                  className={`flex flex-col items-center h-40 justify-between pb-2 border-b-4 border-transparent transition-all duration-500 
          ${
            statVisible
              ? "opacity-100 translate-x-0 border-orange-500"
              : "opacity-0 translate-x-[-50px]"
          }
          `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h1 className="text-5xl font-extrabold text-orange-500 mb-3">
                    {item.num}
                  </h1>
                  <p className="text-lg text-gray-300 whitespace-nowrap">
                    {item.label}
                  </p>
                  <div className="h-0.5 bg-orange-600 w-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
