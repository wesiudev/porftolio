"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ImBookmark } from "react-icons/im";

type FurtherHeaderProps = {
  location: string;
  lang: string;
};
export default function FurtherHeader({ location, lang }: FurtherHeaderProps) {
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
        <div className="w-full"></div>
        <div className=" text-white w-full h-full flex items-center rounded-md bg-slate-600">
          <div className="group relative w-max mx-auto">
            <Link className="font-bold text-xl z-[150]" href={`/${lang}`}>
              wesiu.<span className="text-green-500 leading-relaxed">dev</span>
            </Link>
            <div className="translate-y-[-50vh] opacity-0  group-hover:opacity-100 group-hover:translate-y-0 hover:translate-y-12  ease-in-out absolute left-[50%] -translate-x-[50%] p-6 w-max pt-12 z-[5]">
              <div className="flex flex-col bg-white text-black px-6 py-6 relative rounded-lg text-xl">
                <div className="bg-white h-7 w-7 rotate-45 absolute left-[50%] -translate-x-[50%] -top-3" />

                <Link
                  className="hover:bg-gray-200 duration-200 w-full px-12 flex flex-row items-center relative py-1 justify-center"
                  href="https://www.wesiu.dev"
                >
                  <ImBookmark className="absolute top-[50%] -translate-y-[50%] left-2 text-green-400" />
                  Portfolio
                </Link>
                <Link
                  className="hover:bg-gray-200 duration-200 w-full px-12 flex flex-row items-center relative py-1 justify-center"
                  href="https://www.wesiu.dev"
                >
                  <FaGithub className="absolute top-[50%] -translate-y-[50%] left-2 text-gray-600" />{" "}
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-full"></div>
      </div>
    </div>
  );
}
