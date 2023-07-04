"use client";
import { useIsVisible } from "react-is-visible";
import Image from "next/image";
import Link from "next/link";
import Head from "../head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

export default function Technologies({ dictionary }: { dictionary: any }) {
  const nodeRefTop = useRef<any>();
  const nodeRefBottom = useRef<any>();
  const isTopVisible = useIsVisible(nodeRefTop);
  const isBottomVisible = useIsVisible(nodeRefBottom);
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <>
      <Head
        title={dictionary.MetaData["TechnologiesTitle"]}
        description={dictionary.MetaData["TechnologiesDescription"]}
      />
      <div
        className={`${
          isTopVisible
            ? "rounded-t-0"
            : "rounded-t-[125px] sm:rounded-t-[250px] lg:rounded-t-[500px] "
        } 
        ${
          isBottomVisible
            ? "rounded-b-0"
            : "rounded-b-[125px] sm:rounded-b-[250px] lg:rounded-b-[500px]"
        } duration-500 w-full bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600 min-h-screen flex flex-col relative overflow-hidden sm:pb-12 lg:pb-24`}
      >
        <div
          className="absolute top-48 lg:top-60 left-0 w-4 h-full"
          ref={nodeRefTop}
        />
        <div
          className="absolute bottom-48 left-0 w-4 h-4"
          ref={nodeRefBottom}
        />
        <div className="h-max flex flex-col items-center justify-center w-full lg:w-3/4 lg:flex-row lg:mx-auto lg:mt-0 ">
          <div className="w-full bg-transparent h-max mx-auto lg:mx-0 ">
            <h1
              data-aos="fade-down"
              data-aos-delay="300"
              className="hidden lg:block text-center lg:text-left w-full px-3 pb-6 sm:px-0 sm:w-3/4 mx-auto lg:mx-0 text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg shadow-black text-white font-bold"
            >
              <span className="text-green-400">{"/*"}</span>
              {dictionary["TechnologiesPage"].h1}
              <span className="text-green-400">{"*/"}</span>
            </h1>
            <div className="h-[30vh] w-full overflow-hidden flex items-center justify-center lg:hidden mb-6 relative">
              <h1 className="absolute left-[50%] bg-black h-full bg-opacity-30 lg:bg-transparent -translate-x-[50%] top-[50%] -translate-y-[50%] text-center lg:text-left w-full flex items-center justify-center sm:w-3/4 mx-auto lg:mx-0 text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg shadow-black text-white font-bold">
                <span className="text-green-400">{"/"}</span>
                {dictionary["TechnologiesPage"].h1}
              </h1>
              <Image
                unoptimized
                src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-556239?alt=media&token=01e2ea65-c473-4808-a935-dbb03e81c7ab"
                alt="Technologies Hero Image"
                width={1024}
                height={1024}
                className="w-full group-hover:-translate-y-3 group-hover:scale-105 duration-100 mx-auto"
              />
            </div>

            <h2
              data-aos="fade-left"
              data-aos-delay="300"
              className="w-4/5 my-12 lg:mt-0 lg:mb-0  lg:w-full lg:pr-12 text-center lg:text-left mx-auto lg:mx-0 text-xl sm:text-2xl lg:pt-12 drop-shadow-lg shadow-black text-white"
            >
              {dictionary["TechnologiesPage"].h2}
            </h2>
          </div>
          <div className="h-[90vh] w-1/2 items-center justify-center -skew-x-12 lg:flex hidden  rounded-lg">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-556239?alt=media&token=01e2ea65-c473-4808-a935-dbb03e81c7ab"
              alt="Technologies Hero Image"
              className="pl-12 w-full scale-150 group-hover:-translate-y-3 group-hover:scale-105 duration-100 py-6 mx-auto"
            />
          </div>
        </div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto transition-all duration-100 relative overflow-hidden">
          <div className="absolute -top-24 " id="1"></div>
          {dictionary["Technologies"].map((tech: any, idx: number) => (
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              key={idx}
              className="relative bg-white flex flex-col duration-75 group sm:rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-3 cursor-pointer"
            >
              <div className="flex items-center justify-center py-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 h-[25vh] sm:rounded-t-md">
                <img
                  src={tech.image}
                  alt="Technology thumbnail"
                  className="w-1/3 group-hover:sm:-translate-y-3 group-hover:sm:scale-105 duration-100 "
                />
              </div>
              <div className="flex flex-col relative">
                <Link
                  href={tech.link}
                  target="_blank"
                  className="pl-3 pt-3 text-blue-300 flex flex-row items-center w-max"
                >
                  {dictionary["TechnologiesPage"].docs}
                </Link>
                <div className="min-h-[12vh] w-full">
                  <h2 className=" text-black p-3 pt-1 min-h-[10vh] cursor-default">
                    {tech.description}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
