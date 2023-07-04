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
      className={`min-h-screen min-w-screen relative flex-col`}
    >
      <div
        className={`linear-gradient px-3 w-full text-center lg:px-0 lg:w-3/4 mx-auto h-max text-white flex flex-col justify-center items-center rounded-lg`}
      >
        <h1 className="text-xl sm:text-2xl lg:text-4xl py-3">
          {dictionary.CustomerHook.h1}
        </h1>
        <h2 className="text-lg sm:text-2xl pb-3 px-12">
          {dictionary.CustomerHook.h2}
        </h2>
      </div>
      <div className="w-full flex flex-col mt-6 px-3 lg:px-0 lg:w-3/4 mx-auto bg-white rounded-lg">
        <h1 className="text-4xl w-max mx-auto">
          {dictionary.CustomerHook.toolH1}
        </h1>
        <div className="grid grid-cols-3">
          {dictionary.CustomerHook.templates.map(
            (template: any, index: number) => {
              <div></div>;
            }
          )}
        </div>
      </div>
    </section>
  );
}
