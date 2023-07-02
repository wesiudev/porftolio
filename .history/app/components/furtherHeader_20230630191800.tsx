"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
        <div className="group text-white w-full h-full flex items-center rounded-md">
          <div className=" relative w-max mx-auto">
            <Link className="font-bold text-xl" href={`/${lang}`}>
              wesiu.<span className="text-green-500 leading-relaxed">dev</span>
            </Link>
            <div className="translate-y-[-20vh] group-hover:translate-y-12 hover:translate-y-12 duration-300 absolute left-[50%] -translate-x-[50%] min-h-[10vh] w-max bg-red-500">
              <div className="flex flex-col">
                <Link href={`1`}>Projekty</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500 w-full"></div>
      </div>
    </div>
  );
}
