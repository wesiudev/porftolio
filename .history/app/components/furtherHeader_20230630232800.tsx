"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaHamburger,
  FaLinkedin,
  FaPlay,
  FaReadme,
  FaUserCircle,
  FaYoutube,
} from "react-icons/fa";
import { ImBookmark } from "react-icons/im";
import { LinkRoute } from "./RouteLink";

type FurtherHeaderProps = {
  location: string;
  lang: string;
  dictionary: any;
};
export default function FurtherHeader({
  location,
  lang,
  dictionary,
}: FurtherHeaderProps) {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;

      // Define a threshold value to determine when to show the header
      const threshold = 100;

      // Update the state based on the scroll position
      setShowHeader(scrollPosition > threshold);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-20 w-full bg-slate-600 fixed top-0 left-0 duration-200 z-[1501] ${
        showHeader ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="w-[90vw] lg:w-3/4 h-full mx-auto flex flex-row items-center justify-between">
        <div className="w-full group hidden sm:block">
          <div className="w-max relative">
            <div className="w-max text-white flex flex-col items-center cursor-default">
              <FaPlay className="h-5 w-5 text-red-400 mr-2" /> Watch me code
            </div>
            <div className="translate-y-[-50vh] opacity-0  group-hover:opacity-100 group-hover:translate-y-0 hover:translate-y-12  ease-in-out absolute left-[50%] -translate-x-[50%] p-6 w-max pt-12 z-[5]">
              <div className="flex flex-col bg-white text-black px-6 py-6 relative rounded-lg text-xl">
                <div className="bg-white h-7 w-7 rotate-45 absolute left-[50%] -translate-x-[50%] -top-3" />

                <Link
                  className="hover:bg-gray-300 duration-200 w-full pl-2 flex flex-row items-center relative py-1 justify-start"
                  href="https://www.youtube.com/@wesiudev"
                  target="_blank"
                >
                  <FaYoutube className="mr-2 text-red-600 h-6 w-6" />
                  <span className="flex flex-row justify-between w-full">
                    @wesiudev{" "}
                    <span className="text-gray-200 w-max pr-2">PL</span>
                  </span>
                </Link>
                <Link
                  className="hover:bg-gray-300 duration-200 w-full pl-2 flex flex-row items-center relative py-1 justify-start "
                  href="https://www.youtube.com/@HighDefinitionCode"
                  target="_blank"
                >
                  <FaYoutube className="h-6 w-6 mr-2 text-red-600" />
                  <span className="flex flex-row justify-between w-full">
                    @HighDefinitionCode{" "}
                    <span className="text-gray-200 ml-4 w-max pr-2">ENG</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white w-full h-full flex items-center rounded-md bg-slate-600">
          <div className="sm:group relative w-max sm:mx-auto">
            <div className="hidden sm:block font-bold text-xl z-[150]bg-slate-700 px-3 py-2 rounded-md cursor-default">
              wesiu.<span className="text-green-500 leading-relaxed">dev</span>
            </div>
            <div className="sm:hidden font-bold text-xl z-[150]  px-3 py-2 rounded-md cursor-default">
              wesiu.
              <span className="text-green-500 leading-relaxed underline underline-offset-4">
                dev
              </span>
            </div>
            <div className="translate-y-[-50vh] opacity-0  group-hover:opacity-100 group-hover:translate-y-0 hover:translate-y-12  ease-in-out absolute left-[50%] -translate-x-[50%] p-6 w-max pt-12 z-[5]">
              <div className="flex flex-col bg-white text-black px-6 py-6 relative rounded-lg text-xl">
                <div className="bg-white h-7 w-7 rotate-45 absolute left-[50%] -translate-x-[50%] -top-3" />

                <Link
                  className="hover:bg-gray-200 duration-200 w-full pr-6 pl-2 flex flex-row items-center relative py-1 justify-start"
                  href={`https://www.wesiu.dev/${lang}`}
                >
                  <ImBookmark className="w-max mr-2 text-green-400" />
                  Portfolio
                </Link>
                <Link
                  className="hover:bg-gray-200 duration-200 w-full pr-6 pl-2 flex flex-row items-center relative py-1 justify-start"
                  href={`https://www.wesiu.dev/${lang}/blog`}
                >
                  <FaReadme className="w-max mr-2 text-orange-400" />
                  Blog
                </Link>
                <Link
                  className="hover:bg-gray-200 duration-200 w-full pr-6 pl-2 flex flex-row items-center relative py-1 justify-start"
                  href="https://www.linkedin.com/in/wesiudev/"
                  target="_blank"
                >
                  <FaLinkedin className="w-max mr-2 text-blue-400" />
                  LinkedIn
                </Link>
                <Link
                  className="hover:bg-gray-200 duration-200 w-full pr-6 pl-2 flex flex-row items-center relative py-1 justify-start"
                  href="https://www.github.com/wesiudev"
                  target="_blank"
                >
                  <FaGithub className="w-max mr-2 text-gray-600" /> GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <LinkRoute
            lang={lang}
            to="/clients"
            className="hidden sm:flex items-center p-3 bg-gradient-to-br from-green-500 hover:from-green-400 to-gray-500 hover:to-gray-400 rounded-md w-max text-white"
          >
            <FaUserCircle className="text-2xl mr-2" />
            <code className="">{dictionary["Header"].clients}</code>
          </LinkRoute>
          <button>
            <FaHamburger className="text-yellow-400 h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
