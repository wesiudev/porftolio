"use client";
import { useEffect, useRef } from "react";
import { useIsVisible } from "react-is-visible";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CustomerHook({ dictionary }: { dictionary: any }) {
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <section
      ref={nodeRef}
      className={`${isVisible ? "min-h-screen" : ""} min-w-screen relative `}
    >
      <div
        className={`${
          isVisible
            ? "fixed py-12 top-0 lg:top-20 left-[50%] -translate-x-[50%] bg-gradient-to-r from-green-500 to-blue-500 "
            : ""
        } px-3 w-full text-center lg:px-0 lg:w-3/4 mx-auto h-max text-white flex flex-col justify-center items-center`}
      >
        <h1 className="text-xl sm:text-2xl lg:text-4xl">
          {dictionary.CustomerHook.h1}
        </h1>
        <h2 className="text-lg sm:text-xl">{dictionary.CustomerHook.h2}</h2>
      </div>
    </section>
  );
}