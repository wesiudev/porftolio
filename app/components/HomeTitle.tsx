"use client";

import { useState } from "react";

export const HomeTitle = () => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  setTimeout(() => {
    setIsAnimationStarted(true);
  }, 2800);
  setTimeout(() => {
    setIsAnimationFinished(true);
  }, 3100);
  return (
    <>
      <span
        className={`${
          isAnimationStarted
            ? "text-zinc-800 scale-100"
            : "text-gray-400 scale-125"
        } text-6xl sm:text-8xl lg:text-9xl font-sans font-bold  drop-shadow-lg shadow-black duration-500`}
      >
        <code>wesiu</code>
        <span
          className={`${
            isAnimationStarted
              ? "visible mx-1 duration-500 ease-in-out  text-zinc-800 delay-500"
              : "invisible -mx-1 sm:-mx-3 duration-[250ms] ease-in text-zinc-500"
          }`}
        >
          .
        </span>
        <code>dev</code>
      </span>
      <div className="flex justify-between w-full mt-3">
        {" "}
        <code
          className={`${
            isAnimationStarted
              ? "text-black scale-100"
              : "text-transparent scale-150"
          }w-max font-extralight italic drop-shadow-lg shadow-black`}
        >
          web
        </code>
        <code
          className={`${
            isAnimationStarted
              ? "text-black scale-100"
              : "text-transparent scale-150"
          }w-max font-extralight italic drop-shadow-lg shadow-black`}
        >
          dev
        </code>{" "}
      </div>
    </>
  );
};
