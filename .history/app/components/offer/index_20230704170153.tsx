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
      className={`${isVisible ? "min-h-screen" : ""} min-w-screen`}
    >
      <div
        data-aos="fade-down"
        data-aos-delay="300"
        className={`${
          isVisible ? "fixed bottom-20 -left-[50%] translate-x-[50%]" : ""
        } px-6 lg:px-0 lg:w-3/4 mx-auto h-max text-black flex flex-col justify-center items-center`}
      >
        <h1 className="text-xl sm:text-2xl lg:text-4xl z-50">
          {dictionary.CustomerHook.h1}
        </h1>
        <h2 className="text-lg sm:text-xl z-50">
          {dictionary.CustomerHook.h2}
        </h2>
      </div>
    </section>
  );
}
