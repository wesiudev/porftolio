"use client";
import Link from "next/link";
import { Parallax } from "react-parallax";
import TextSwitcher from "../TextSwitcher";
import { HomeTitle } from "../HomeTitle";

export default function Hero({ dictionary }: { dictionary: any }) {
  return (
    <Parallax
      blur={10}
      bgImage="path/to/image.jpg"
      bgImageAlt="the cat"
      strength={200}
    >
      <main className="bg-heroImage bg-cover bg-purple-500 h-full flex flex-col justify-between relative w-full px-3 lg:px-0 lg:w-3/4 mx-auto min-h-screen ">
        <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] h-max sm:w-max duration-200 z-50 flex justify-center items-center text-center sm:text-left text-xl font-bold sm:text-2xl lg:text-3xl">
          <TextSwitcher dictionary={dictionary["TextSwitcher"]} />
        </div>

        <div className="fixed left-0 top-0 bg-gradient-to-br from-gray-500 via-gray-300 to-gray-500 background-animate delay-1000 h-full w-full"></div>
        <HomeTitle />
      </main>
    </Parallax>
  );
}
