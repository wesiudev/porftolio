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
      className={`min-h-screen min-w-screen relative pt-36 linear-gradient rotete-45`}
    >
      {/* <div
        className={`linear-gradient px-3 w-full text-center lg:px-0 lg:w-3/4 mx-auto h-max text-white flex flex-col justify-center items-center`}
      >
        <h1 className="text-xl sm:text-2xl lg:text-4xl py-3">
          {dictionary.CustomerHook.h1}
        </h1>
        <h2 className="text-lg sm:text-2xl pb-3">
          {dictionary.CustomerHook.h2}
        </h2>
      </div> */}
    </section>
  );
}
