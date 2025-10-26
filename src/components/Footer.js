"use client";

import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import logo from "../../public/logo.jpg";
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h2 className="text-orange-600 font-bold text-2xl mb-4 flex items-center ">
            <Image
              src={logo}
              width={40}
              alt="logo of the site"
              className="rounded-full mr-3"
            />
            StapOf
          </h2>
          <p className="mb-2">394398439</p>
          <p className="mb-2">232 Streakt, Bangladesh</p>
          <a
            href="mailto:info@gmai.com"
            className="underline hover:text-orange-500"
          >
            info@gmai.com
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-orange-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Subscribe for updates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact With Us</h3>
          <button className="mb-6 bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded">
            Get In Touch
          </button>
          <div className="flex space-x-4 text-xl text-gray-400 hover:text-orange-500">
            <a href="#" aria-label="Facebook">
              <IoLogoFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <IoLogoTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <IoLogoInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center text-gray-500 mt-12 text-sm">
        &copy; {new Date().getFullYear()} StapOf Solution Inc. All rights
        reserved. Copy write.
      </div>
    </footer>
  );
}
