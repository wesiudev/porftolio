"use client";
import "intersection-observer";
import Link from "next/link";
import React, { useRef } from "react";
import { useIsVisible } from "react-is-visible";
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
