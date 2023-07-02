"use client";
import { useIsVisible } from "react-is-visible";
import Link from "next/link";
import { Animate } from "./components/Animate";
import Image from "next/image";
import { ProjectTitle } from "./components/ProjectTitle";
import { ImageInteraction } from "./components/ImageInteraction";
import { ScrollButton } from "./components/ScrollButton";
import Head from "../head";
import { useRef } from "react";

export default function ProjectsPage({ dictionary }: { dictionary: any }) {
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);
  return (
    <>
      <Head
        title={dictionary.MetaData["ProjectsTitle"]}
        description={dictionary.MetaData["ProjectsDescription"]}
      />
      <div
        className={`w-full h-max lg:min-h-screen bg-gradient-to-t from-gray-600 via-gray-400 to-gray-600 flex items-center relative overflow-hidden`}
      >
        <Animate>
          <div className="w-full mx-auto px-3 lg:px-0 lg:w-3/4 h-full relative overflow-hidden">
            <div
              className="absolute top-24 sm:top-40 lg:top-60 left-0 w-4 h-full"
              ref={nodeRef}
            />
            <div className="flex flex-col w-full sm:w-4/5 mx-auto">
              <div className="flex flex-col h-max lg:h-screen justify-center relative select-none">
                <div className="h-max flex flex-col justify-center rounded-md">
                  <code className="text-7xl lg:text-8xl pb-2 text-green-400 sm:mt-6">
                    {"{"}
                  </code>
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white mx-auto lg:mx-0 w-max mt-3 sm:mt-0">
                    <span className="pl-0 lg:pl-32 font-light">
                      <span className="text-green-400">{"/"}</span>
                      {dictionary.ProjectsPage.h1}
                    </span>
                  </h1>
                  <div className="relative flex flex-col text-lg text-center lg:text-left sm:text-2xl w-full italic font-extralight pt-6 text-gray-200 drop-shadow-lg shadow-black">
                    <span className="pl-0 lg:pl-32 mt-6 w-3/4 lg:w-full mx-auto ">
                      {dictionary.ProjectsPage.h2}
                    </span>

                    <span className="pl-0 lg:pl-32 mt-6 not-italic font-bold text-green-500">
                      {dictionary.ProjectsPage.h2b}{" "}
                    </span>
                    <ScrollButton to="1">
                      <span
                        className="text-xl ml-auto mr-auto lg:ml-32 h-max lg:text-2xl text-white flex flex-row items-center p-3 hover:to-gray-400 rounded-md bg-green-500 hover:bg-green-400
                      w-max mt-6 lg:mx-0"
                      >
                        {dictionary.ProjectsPage.button}
                      </span>
                    </ScrollButton>

                    <div className="mt-3 sm:mt-6 flex flex-row w-full relative items-center">
                      <code className="text-7xl lg:text-8xl pb-2 text-green-400 mr-5 not-italic">
                        {"}"}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600 background-position text-white pb-24">
        <div className="w-full px-3 lg:px-0 lg:w-3/4 mx-auto">
          {dictionary.ProjectsThumbnails.map((thumbnail: any, idx: number) => (
            <div
              id={(idx + 1) as unknown as string}
              className={`${idx > 0 && "pt-24"}
              ${idx === 0 && "pb-12"}
               flex flex-col pt-12 drop-shadow-lg shadow-black bg-opacity-50 rounded-md min-h-[30vh]`}
            >
              <div className="bg-slate-600 p-6 text-3xl sm:text-5xl italic font-light drop-shadow-lg shadow-black flex flex-col gap-6">
                <ProjectTitle title={thumbnail.title} link={thumbnail.link} />
              </div>
              <div className="w-max mx-auto lg:mx-0 text-3xl sm:text-5xl lg:text-7xl font-bold mt-24  flex flex-row items-center">
                {"<>"}
                {thumbnail.title2b} {"</>"}
              </div>
              <div className="flex flex-col mt-16">
                <div className="text-2xl">{dictionary.ProjectsPage.stack}</div>
                <div className="flex flex-row flex-wrap w-full gap-3">
                  {thumbnail.stack.map((stackItem: any, idx: number) => (
                    <div className="p-3 bg-slate-800 mt-3" key={idx}>
                      {stackItem}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full h-full mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {thumbnail.images.map((image: any, idx: number) => (
                    <div key={idx}>
                      <img
                        src={image.src}
                        alt="Project Image"
                        className="w-full rounded-md drop-shadow-md shadow-black"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-12">
                <span className="text-4xl lg:text-6xl">
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
      </div>
    </>
  );
}
