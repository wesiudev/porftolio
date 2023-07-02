"use client";

import { useSelector } from "react-redux";
import { RootState, store } from "../../../../redux/store";
import Image from "next/image";
import { setCurrentImageID } from "../../../../redux/stateSlice";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";

export const ImagesSlider = () => {
  const { currentImages, currentImage } = useSelector(
    (state: RootState) => state.state
  );
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.keyCode === 27) {
        store.dispatch(setCurrentImageID(-1));
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
          onClick={(e: any) => store.dispatch(setCurrentImageID(-1))}
          className="fixed w-screen h-screen left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-black bg-opacity-70 z-[1001]"
        >
          <div className="flex items-center h-full relative">
            <button
              className="absolute right-12 top-12 z-50 text-2xl text-white bg-slate-600 hover:bg-slate-500 rounded-md px-3 py-2"
              onClick={() => store.dispatch(setCurrentImageID(-1))}
            >
              <code>ESC</code>
            </button>

            {currentImages.map((image: any, idx: number) => (
              <Image
                unoptimized
                onClick={(e) => {
                  store.dispatch(setCurrentImageID(idx));
                  e.stopPropagation();
                }}
                src={image.src}
                alt="Something went wrong"
                width={1920}
                height={1080}
                className={`w-2/4 
                ${
                  currentImage === idx &&
                  "absolute scale-150 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] z-50 drop-shadow-xl shadow-black"
                }
                ${
                  currentImage !== idx &&
                  "filter brightness-50 hover:brightness-100 z-0 "
                }
                  `}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
