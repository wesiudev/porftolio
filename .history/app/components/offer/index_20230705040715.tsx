"use client";
import { useEffect, useState } from "react";
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
  const [chosenProduct, setChosenProduct] = useState<any>({});
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("load", () => setWidth(window.innerWidth));
      console.log(width);
    }
  }, [width]);
  return (
    <section className={`min-h-screen min-w-screen relative flex-col`}>
      <div
        data-aos="fade-up"
        data-aos-delay={100}
        className={`linear-gradient px-3 w-full text-center lg:px-0 lg:w-3/4 mx-auto h-max text-white flex flex-col justify-center items-center rounded-lg pb-3 sm:mb-6 lg:mb-12`}
      >
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl py-3">
            {dictionary.CustomerHook.h1}
          </h1>
          <h2 className="text-lg sm:text-2xl px-3 sm:px-12 pb-3 sm:pb-6 sm:pt-6">
            {dictionary.CustomerHook.h2}
          </h2>
        </div>
      </div>
      {hoveredText.itemName !== "" && (
        <div className="fixed top-0 sm:top-28 left-0 sm:h-max w-full z-[5000] sm:px-6 lg:px-0">
          <div
            onMouseOver={() =>
              width > 1024 &&
              setHoveredText({
                itemName: hoveredText.itemName,
                itemDescription: hoveredText.itemDescription,
                img: hoveredText.img,
              })
            }
            className=" flex flex-col w-full h-screen sm:h-max lg:w-3/4 mx-auto drop-shadow-lg shadow-black bg-white rounded-t-lg sm:rounded-lg sm:p-6 sm:text-lg lg:text-xl overflow-scroll pb-12 sm:pb-6 sm:overflow-hidden"
          >
            <div className="relative sm:hidden">
              <FaArrowAltCircleLeft
                onClick={() =>
                  setHoveredText({ itemName: "", itemDescription: "", img: "" })
                }
                className="h-16 w-16 text-white absolute left-6 top-6 drop-shadow-lg shadow-black"
              />
              <img src={hoveredText.img} alt="Mobile website description" />
            </div>
            <div className="flex lg:flex-row items-center h-full">
              <img
                className="h-64 xl:h-52 hidden sm:block rounded-lg"
                src={hoveredText.img}
                alt="Product"
              />
              <div className="flex flex-col justify-between h-full bg-red-500">
                <span className="text-xl font-bold pt-6 sm:py-3 lg:pt-0 p-3 lg:text-2xl select-none">
                  {hoveredText.itemName}
                </span>
                <span className="italic py-3 sm:py-0 p-3 select-none lg:text-md">
                  {hoveredText.itemDescription}
                </span>
                <button className="bg-gray-300 m-3 rounded-md w-max px-3 py-1">
                  {dictionary.Navigation.btnClose}
                </button>
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-3 px-3 sm:hidden ">
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
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onClick={() =>
                  setHoveredText({
                    itemName: template.name,
                    itemDescription: template.description,
                    img: template.img2,
                  })
                }
                key={idx}
                className="bg-white h-max aspect-square rounded-md overflow-hidden relative group cursor-pointer"
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
                  onClick={() => setChosenProduct(template)}
                  className={`px-3 py-2 font-bold absolute translate-y-12 group-hover:lg:-translate-y-16 duration-200 left-[50%] -translate-x-[50%] bg-green-500 text-white`}
                >
                  {dictionary.CustomerHook.toolButton}
                </button>
              </div>
            )
          )}
        </div>
        <div className="w-full h-screen bg-slate-600 mt-12 p-6"></div>
      </div>
    </section>
  );
}
