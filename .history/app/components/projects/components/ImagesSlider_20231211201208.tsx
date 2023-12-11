"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import { current } from "@reduxjs/toolkit";

export const ImagesSlider = () => {
  const [currentImage, setCurrentImage] = useState(-1);
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.keyCode === 27) {
        setCurrentImage(-1);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <>
      {currentImage !== -1 && (
        <div
          onClick={(e: any) => setCurrentImage(-1)}
          className="fixed w-screen h-screen left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-black bg-opacity-70 z-[1001]"
        >
          <div className="flex items-center h-full relative">
            <button
              className="absolute right-12 top-12 z-50 text-2xl text-white bg-slate-600 hover:bg-slate-500 rounded-md px-3 py-2"
              onClick={() => setCurrentImage(-1)}
            >
              <code>ESC</code>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
