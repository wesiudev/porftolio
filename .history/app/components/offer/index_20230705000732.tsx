"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FadingImage from "./HoverEffect";
import { Canvas } from "@react-three/fiber";

export default function CustomerHook({ dictionary }: { dictionary: any }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <section className={`min-h-screen min-w-screen relative flex-col`}>
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
      <div className="w-full h-max flex flex-col mt-6 px-3 lg:px-0 lg:w-3/4 mx-auto rounded-lg z-50">
        <div className="grid grid-cols-3 h-max gap-6">
          {dictionary.CustomerHook.templates.map(
            (template: any, idx: number) => (
              <div className="bg-white h-max aspect-square rounded-md overflow-hidden relative group">
                <Canvas
                  className="filter brightness-[0.75]"
                  style={{ zIndex: "20", width: "100%", height: "100%" }}
                  camera={{ position: [0, 0, 2], fov: 25 }}
                >
                  <FadingImage
                    heroImage={template.img}
                    secondaryImage={template.img}
                  />
                </Canvas>
                <span className=" text-white absolute z-50 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-2xl w-max cursor-default select-none">
                  {template.name}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
