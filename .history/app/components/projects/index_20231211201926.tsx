"use client";
import { useIsVisible } from "react-is-visible";
import Link from "next/link";
import { Animate } from "./components/Animate";
import { ProjectTitle } from "./components/ProjectTitle";
import { ScrollButton } from "./components/ScrollButton";
import Head from "../headers/head";
import { useRef } from "react";

export default function ProjectsPage({ dictionary }: { dictionary: any }) {
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);
  return (
    <>
      
      <div
        className={`w-full h-max lg:min-h-screen  flex items-center relative overflow-hidden`}
      >
        <Animate>
          <section className="w-full mx-auto px-3 lg:px-0 lg:w-3/4 h-full relative overflow-hidden">
            <div
              className="absolute top-24 sm:top-40 lg:top-60 left-0 w-4 h-full"
              ref={nodeRef}
            />
            <div className="flex flex-col w-full sm:w-4/5 mx-auto">
              <div className="flex flex-col h-max py-12 lg:h-screen justify-center relative select-none">
                <div className="h-max flex flex-col justify-center rounded-md">
                  <code className="text-7xl lg:text-8xl pb-2 text-green-400 sm:mt-6">
                    {"{"}
                  </code>
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl text-zinc-800  drop-shadow-lg shadow-black mx-auto lg:mx-0 w-max mt-3 sm:mt-0">
                    <span className="pl-0 lg:pl-32 font-bold ">
                      <span className="text-zinc-800  drop-shadow-lg shadow-black">
                        {"/"}
                      </span>
                      {dictionary.ProjectsPage.h1}
                    </span>
                  </h1>
                  <div className="relative flex flex-col text-lg text-center lg:text-left sm:text-2xl w-full italic font-extralight pt-6 text-black drop-shadow-lg shadow-black">
                    <span className="pl-0 lg:pl-32 mt-6 w-3/4 lg:w-full mx-auto ">
                      {dictionary.ProjectsPage.h2}
                    </span>

                    <span className="pl-0 lg:pl-32 mt-6 not-italic font-bold text-blue-500">
                      {dictionary.ProjectsPage.h2b}{" "}
                    </span>
                    {/* <ScrollButton to="#projects">
                      <span
                        className="text-xl ml-auto mr-auto lg:ml-32 h-max lg:text-2xl text-white flex flex-row items-center p-3 hover:to-gray-400 rounded-md bg-green-500 hover:bg-green-400
                      w-max mt-6 lg:mx-0"
                      >
                        {dictionary.ProjectsPage.button}
                      </span>
                    </ScrollButton> */}

                    <div className="mt-3 sm:mt-6 flex flex-row w-full relative items-center">
                      <code className="text-7xl lg:text-8xl pb-2 text-green-400 mr-5 not-italic">
                        {"}"}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Animate>
      </div>
      <section
        id="#projects"
        className="w-full min-h-screen flex flex-col bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600 background-position text-white pb-24"
      >
        <div className="w-full  lg:px-0 lg:w-3/4 mx-auto">
          {dictionary.ProjectsThumbnails.map((thumbnail: any, idx: number) => (
            <div
              key={idx}
              id={(idx + 1) as unknown as string}
              className={`${idx > 0 && "pt-12"}
              ${idx === 0 && "pb-12"}
               flex flex-col pt-12 drop-shadow-lg shadow-black bg-opacity-50 rounded-md min-h-[30vh]`}
            >
              <div className="bg-slate-600 p-6 text-3xl sm:text-5xl italic font-light drop-shadow-lg shadow-black flex flex-col sm:gap-6">
                <ProjectTitle title={thumbnail.title} link={thumbnail.link} />
              </div>

              <div className="flex flex-col mt-16">
                <div className="grid grid-cols-3  gap-3 px-6 lg:px-0">
                  {thumbnail.stack.map((stackItem: any, idx: number) => (
                    <div
                      className="py-1 px-3 sm:p-2 text-xl lg:p-3 text-center bg-slate-800 mt-3  sm:gap-3"
                      key={idx}
                    >
                      {stackItem}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full h-full mt-12">
                <div className="grid px-6 lg:px-0 grid-cols-1 lg:grid-cols-2 gap-6">
                  {thumbnail.images.map((image: any, idx: number) => (
                    <div key={idx}>
                      <img
                        src={image.src}
                        alt="Project Image"
                        className="w-full lg:rounded-md drop-shadow-md shadow-black"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-12  px-6 lg:px-0 ">
                <span className="text-4xl lg:text-6xl ">
                  {dictionary.ProjectsPage.descriptions}
                </span>
                <span className="text-lg sm:text-xl font-light">
                  {thumbnail.description}
                </span>
                <Link
                  target="_blank"
                  href={thumbnail.link}
                  className="border-l-4 border-green-600 bg-gray-500 pl-6 py-6 bg-opacity-[0.5] drop-shadow-none"
                >
                  {dictionary.ProjectsPage.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
