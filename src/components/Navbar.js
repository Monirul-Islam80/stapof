import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../public/logo.jpg";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-transparent shadow-md backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center justify-center rounded-4xl relative overflow-hidden mr-1"
          >
            <Image
              src={logo}
              property={"true"}
              alt="logo of website"
              height={40}
              className="object-contain mr-2.5"
            />
            <span className="text-xl font-bold text-white cursor-pointer hover:text-indigo-600 transition-colors">
              StepOf
            </span>
          </Link>
          <div className="flex space-x-4 items-center justify-center">
            <Link href="#solution">
              <span className="text-white hover:text-indigo-600 transition-colors cursor-pointer">
                Solution
              </span>
            </Link>
            <Link href="#vision">
              <span className="text-white hover:text-indigo-600 transition-colors cursor-pointer">
                Vision
              </span>
            </Link>
            <Link href="#programs">
              <span className="text-white hover:text-indigo-600 transition-colors cursor-pointer">
                Programs
              </span>
            </Link>
            <Link href="#blogs">
              <span className="text-white hover:text-indigo-600 transition-colors cursor-pointer">
                Blogs
              </span>
            </Link>
            <Link href="#More">
              <span className="text-white hover:text-indigo-600 transition-colors cursor-pointer">
                More
              </span>
            </Link>
            <Link href="/login">
              <div className="flex items-center space-x-1 text-white hover:text-indigo-600 transition-colors cursor-pointer">
                <FaUserCircle className="w-6 h-6" />
                <span className="hidden sm:inline">Login</span>
              </div>
            </Link>

            <Link href="#contact">
              <div className="px-4 py-2 text-sm font-semibold text-white border-2 border-amber-50 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105 whitespace-nowrap">
                Get in Touch
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
