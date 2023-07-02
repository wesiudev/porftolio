"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "../head";
import { ScrollButton } from "../projects/components/ScrollButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Technologies({ dictionary }: { dictionary: any }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  const cutSentence = (sentence: string) => {
    if (sentence.length <= 120) {
      return sentence;
    } else {
      return (
        sentence.substring(0, 120).trim().split(" ").slice(0, -1).join(" ") +
        "..."
      );
    }
  };
  return (
    <>
      <Head
        title={dictionary.MetaData["TechnologiesTitle"]}
        description={dictionary.MetaData["TechnologiesDescription"]}
      />
      <div
        className={`sm:rounded-t-[125px] lg:rounded-t-[250px] w-full bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600 min-h-screen flex flex-col relative overflow-x-hidden pb-24`}
      >
        <div className="h-screen flex flex-col items-center justify-center w-full lg:w-3/4 lg:flex-row lg:mx-auto lg:mt-0 ">
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
            <div
              data-aos="fade-down"
              className="h-[30vh] w-full overflow-hidden flex items-center justify-center lg:hidden my-6 relative"
            >
              <h1 className="absolute left-[50%] bg-black bg-opacity-30 lg:bg-transparent lg:p-0 p-6 -translate-x-[50%] top-[50%] -translate-y-[50%] text-center lg:text-left w-full  sm:w-3/4 mx-auto lg:mx-0 text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg shadow-black text-white font-bold">
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
              className="w-4/5 mt-12 mb-6 lg:mt-0 lg:mb-0  lg:w-full lg:pr-12 text-center lg:text-left mx-auto lg:mx-0 text-xl sm:text-2xl lg:pt-12 drop-shadow-lg shadow-black text-white"
            >
              {dictionary["TechnologiesPage"].h2}
            </h2>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="w-full flex justify-center lg:block"
            >
              <ScrollButton to="1">
                <span className="text-xl mx-auto h-max lg:text-2xl text-white flex flex-row items-center p-3 hover:to-gray-400 rounded-md bg-green-500 hover:bg-green-400 w-max mt-8 lg:mx-0">
                  {dictionary.TechnologiesPage.button}
                </span>
              </ScrollButton>
            </div>
          </div>
          <div className="h-[90vh] w-1/2 items-center justify-center -skew-x-12 lg:flex hidden  rounded-lg">
            <Image
              unoptimized
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-556239?alt=media&token=01e2ea65-c473-4808-a935-dbb03e81c7ab"
              alt="Technologies Hero Image"
              width={1024}
              height={1024}
              className="pl-12 w-full scale-150 group-hover:-translate-y-3 group-hover:scale-105 duration-100 py-6 mx-auto"
            />
          </div>
        </div>
        <div className="w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto transition-all duration-100 relative overflow-hidden">
          <div className="absolute -top-24 " id="1"></div>
          {dictionary["Technologies"].map((tech: any, idx: number) => (
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              key={idx}
              className="relative  bg-white flex flex-col duration-75 group rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-3 cursor-pointer"
            >
              <h1 className="text-2xl pb-2 cursor-default absolute left-5 top-5 text-gray-600">
                {tech.name}
              </h1>
              <div className="flex items-center justify-center py-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 h-[25vh] rounded-t-md">
                <Image
                  unoptimized
                  src={tech.image}
                  alt="Technology thumbnail"
                  width={256}
                  height={256}
                  className="w-1/3 group-hover:-translate-y-3 group-hover:scale-105 duration-100 "
                />
              </div>
              <div className="flex flex-col relative">
                <Link
                  href={tech.link}
                  target="_blank"
                  className="pl-3 py-2 text-blue-300 flex flex-row items-center w-max"
                >
                  {dictionary["TechnologiesPage"].docs}
                </Link>
                <div className="min-h-[12vh] w-full">
                  <h2 className=" text-black p-3 min-h-[10vh] cursor-default">
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
