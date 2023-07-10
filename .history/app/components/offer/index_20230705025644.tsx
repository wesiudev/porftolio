"use client";
import { use, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function CustomerHook({ dictionary }: { dictionary: any }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  const [hoveredText, setHoveredText] = useState<any>({
    itemName: "",
    itemDescription: "",
    img: "",
  });
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
      console.log(width);
    }
  }, [width]);
  return (
    <section className={`min-h-screen min-w-screen relative flex-col`}>
      <div
        className={`linear-gradient px-3 w-full text-center lg:px-0 lg:w-3/4 mx-auto h-max text-white flex flex-col justify-center items-center rounded-lg`}
      >
        <h1 className="text-xl sm:text-2xl lg:text-4xl py-3">
          {dictionary.CustomerHook.h1}
        </h1>
        <h2 className="text-lg sm:text-2xl pb-3 px-3 sm:px-12">
          {dictionary.CustomerHook.h2}
        </h2>
      </div>
      {hoveredText.itemName !== "" && (
        <div className="fixed top-0 lg:bottom-6 left-0 lg:h-max w-full z-[5000]">
          <div className="flex flex-col w-full h-screen lg:h-max lg:w-3/4 mx-auto bg-white rounded-t-lg lg:rounded-lg lg:p-6 sm:text-xl lg:text-2xl overflow-scroll pb-12 lg:pb-0">
            <div className="relative lg:hidden">
              <FaArrowAltCircleLeft
                onClick={() =>
                  setHoveredText({ itemName: "", itemDescription: "", img: "" })
                }
                className="h-16 w-16 text-white absolute left-6 top-6 drop-shadow-lg shadow-black"
              />
              <img src={hoveredText.img} alt="Mobile website description" />
            </div>
            <span className="text-xl font-bold pt-6 lg:py-3 p-3">
              {hoveredText.itemName}
            </span>
            <span className="italic py-3 lg:py-3 p-3">
              {hoveredText.itemDescription}
            </span>
            <div className="w-full h-full grid grid-cols-2 gap-3 px-3 lg:hidden ">
              {dictionary.CustomerHook.templates.map(
                (template: any, idx: number) => (
                  <div
                    onClick={() => {
                      setHoveredText({
                        itemName: template.name,
                        itemDescription: template.description,
                        img: template.img2,
                      });
                    }}
                    key={idx}
                    className="bg-white h-max aspect-square rounded-md overflow-hidden relative group"
                  >
                    <img
                      className="filter brightness-[0.62]"
                      src={template.img}
                      alt="Website type image"
                    />
                    <span className="text-sm group-hover:lg:scale-110 duration-150 sm:text-lg text-white absolute z-50 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:text-2xl w-max cursor-default select-none ">
                      {template.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-max flex flex-col mt-6 px-3 lg:px-0 lg:w-3/4 mx-auto rounded-lg z-50">
        <div className="grid grid-cols-2 lg:grid-cols-3 h-max gap-6">
          {dictionary.CustomerHook.templates.map(
            (template: any, idx: number) => (
              <div
                onMouseOver={() =>
                  setHoveredText({
                    itemName: template.name,
                    itemDescription: template.description,
                    img: template.img2,
                  })
                }
                onPointerLeave={() => {
                  width > 1024
                    ? setHoveredText({
                        itemName: "",
                        itemDescription: "",
                        img: "",
                      })
                    : null;
                }}
                key={idx}
                className="bg-white h-max aspect-square rounded-md overflow-hidden relative group"
              >
                <img
                  className="filter brightness-[0.62]"
                  src={template.img}
                  alt="Website type image"
                />
                <span className="text-sm group-hover:lg:scale-110 duration-150 sm:text-lg text-white absolute z-50 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] lg:text-2xl w-max cursor-default select-none ">
                  {template.name}
                </span>
                <button
                  className={`absolute translate-y-12 group-hover:lg:-translate-y-12 duration-200 left-[50%] -translate-x-[50%] bg-green-500 text-white`}
                >
                  {dictionary.CustomerHook.toolButton}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}