"use client";

import { useEffect, useState } from "react";

type FurtherHeaderProps = {
  location: string;
};
export default function FurtherHeader({ location }: FurtherHeaderProps) {
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
        showHeader ? "-translate-x-0" : "-translate-y-20"
      }`}
    >
      <div className="w-[90vw] lg:w-3/4 mx-auto flex flex-row items-center justify-between">
        <div className="bg-red-500"></div>
        <div className="bg-blue-500 my-auto h-max">WESIUDEV</div>
        <div className="bg-red-500"></div>
      </div>
    </div>
  );
}