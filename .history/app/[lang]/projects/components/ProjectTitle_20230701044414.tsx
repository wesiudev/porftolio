"use client";
import "intersection-observer";
import { useIsVisible } from "react-is-visible";
import Link from "next/link";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
interface ProjectTitleProps {
  title: string;
  link: string;
}

export const ProjectTitle = ({ title, link }: ProjectTitleProps) => {
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);

  return (
    <div ref={nodeRef} className="h-max w-max">
      <div className="h-16 w-full px-2 py-2">
        <div className="flex flex-row w-full gap-3">
          <div className="w-max px-2 flex flex-row items-center bg-slate-700">
            <code className="text-yellow-300 text-3xl">JS</code>{" "}
            <span className="text-lg pl-2">index.js</span>
          </div>
          <div className="w-max px-2 flex flex-row items-center bg-slate-700">
            <code className="text-yellow-300 text-3xl">JS</code>{" "}
            <span className="text-lg pl-2">index.js</span>
          </div>
          <div className="w-max px-2 flex flex-row items-center bg-slate-700">
            <code className="text-yellow-300 text-3xl">JS</code>{" "}
            <span className="text-lg pl-2">index.js</span>
          </div>
        </div>
      </div>
      <Link target="_blank" href={link}>
        <code className="text-green-500 mr-3">{"() => {"}</code>{" "}
        <div className="flex flex-row sm:py-3 lg:py-6">
          <span className="text-purple-500 mr-3 ml-12 hidden lg:block">
            return
          </span>

          <span className="ml-12 lg:ml-3 mt-3 sm:mt-0 text-xl sm:text-5xl">
            {isVisible && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`${title}`).start();
                }}
              />
            )}
          </span>
        </div>
        <code className="text-green-500 mr-3">{"};"}</code>{" "}
      </Link>
    </div>
  );
};
