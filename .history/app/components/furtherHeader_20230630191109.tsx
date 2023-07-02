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
      <div className="w-[90vw] bg-blue-500 lg:w-3/4 h-full mx-auto flex flex-row items-center justify-between">
        <div className="bg-red-500 w-full"></div>
        <div className="text-white w-full rounded-md">
          <div className="group relative w-max bg-red-500">
            <Link className="font-bold text-xl" href={`/${lang}`}>
              wesiu.<span className="text-green-500 leading-relaxed">dev</span>
            </Link>
          </div>
        </div>
        <div className="bg-red-500 w-full"></div>
      </div>
    </div>
  );
}
