"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowAltCircleLeft,
  FaClock,
  FaInfoCircle,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import * as Scroll from "react-scroll";
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
  const [chosenProduct, setChosenProduct] = useState<any>("");
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("load", () => setWidth(window.innerWidth));
      console.log(width);
    }
  }, [width]);
  let ScrollLink = Scroll.Link;
  console.log(chosenProduct);
  return (
    <section className={`min-h-screen w-full relative flex-col `}>
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
            className=" flex flex-col w-full h-screen sm:h-max lg:w-3/4 mx-auto drop-shadow-lg shadow-black bg-white rounded-t-lg sm:rounded-lg sm:p-3 sm:text-lg lg:text-xl overflow-scroll pb-12  sm:overflow-hidden"
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
            <div className="flex sm:flex-row items-center h-full relative">
              <Image
                unoptimized
                width={200}
                height={200}
                className="h-64 xl:h-52 hidden md:block rounded-lg"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAM"
                src={hoveredText.img}
                alt="Product"
              />
              <div className="flex flex-col  h-full  ">
                <span className="text-xl font-bold pt-6 sm:py-0 lg:text-2xl p-3 select-none">
                  {hoveredText.itemName}
                </span>
                <span className="italic py-3  select-none lg:text-md p-3">
                  {hoveredText.itemDescription}
                </span>
                <button
                  onClick={() =>
                    setHoveredText({
                      itemName: "",
                      itemDescription: "",
                      img: "",
                    })
                  }
                  className="bg-gray-300 rounded-md w-max px-3 py-1 ml-3 xl:absolute right-3 bottom-3"
                >
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
      <div className="w-full h-max flex flex-col mt-6 px-3 lg:px-0 lg:w-3/4 mx-auto rounded-lg z-50 ">
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

                <ScrollLink
                  to="tool"
                  smooth={true}
                  duration={500}
                  delay={200}
                  onClick={(e: any) => {
                    setChosenProduct(template), e.stopPropagation();
                  }}
                  className={`hover:bg-green-400 w-max px-3 py-2 font-bold absolute translate-y-12 group-hover:lg:-translate-y-16 duration-200 left-[50%] -translate-x-[50%] bg-green-500 text-white`}
                >
                  {dictionary.CustomerHook.toolButton}
                </ScrollLink>
              </div>
            )
          )}
        </div>
      </div>
      <div
        className={`${
          chosenProduct.length !== 0 && "min-h-screen"
        } w-full  bg-gradient-to-br from-slate-600 via-gray-500 to-slate-600 mt-60 p-6 relative `}
      >
        <div className="-top-48" id="tool" />
        {chosenProduct.length !== 0 ? (
          <div className="w-full h-full px-3 lg:px-0 lg:w-3/4 mx-auto">
            <div className="flex flex-col">
              <h1 className="w-max text-4xl mx-auto mt-24 text-white">
                {dictionary.CustomerHook.toolH1}
              </h1>
              <div className="h-1 w-60 linear-gradient mx-auto mt-4 rounded-full" />
              <div className="h-1 w-32 linear-gradient mx-auto mt-3 rounded-full" />
            </div>
            <div className="flex flex-col">
              {/* left */}
              <span className="text-3xl lg:text-4xl mt-12 text-blue-400  font-bold">
                {dictionary.CustomerHook.toolPriceFor}
              </span>{" "}
              <span className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white mt-3">
                {" "}
                {chosenProduct.name}
              </span>
            </div>
            <div className="flex flex-col lg:mt-12 w-full ">
              {/* right */}
              <span className="text-3xl lg:text-4xl mt-12 text-blue-400 font-bold">
                {dictionary.CustomerHook.toolBasicServices}
              </span>{" "}
              <div className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white flex flex-col">
                {/* services */}
                {chosenProduct.services?.map((service: any, idx: number) => (
                  <div
                    style={{ zIndex: 25 - idx }}
                    key={idx}
                    className={`flex flex-col mt-3 ${
                      idx % 2 !== 0 && "items-end"
                    }`}
                  >
                    <div
                      className={`flex flex-row items-center ${
                        idx !== 0 && "mt-6"
                      } ${idx % 2 !== 0 && "flex-row-reverse "}`}
                    >
                      <span className="">{service.name}</span>
                      <div
                        className={`text-white opacity-90 mx-2 text-lg relative group`}
                      >
                        <FaInfoCircle className="w-6 h-6" />
                        <div className="hidden rounded-lg group-hover:block bg-white p-3 text-black absolute left-[50%] -translate-x-[50%] top-12 w-[50vw]">
                          <span className="text-lg">
                            {dictionary.CustomerHook.toolItems.map(
                              (item: any, idx: number) =>
                                service.id === item.id && item.description
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* end of title and info */}
                    <div className={`flex flex-col lg:flex-row  w-full`}>
                      <div
                        className={`w-full flex flex-row mt-4 ${
                          idx % 2 !== 0 && "items-end"
                        } `}
                      >
                        <div className="flex flex-col w-max">
                          <span className="text-5xl text-green-500">
                            Design
                          </span>
                          <span className="text-lg ">
                            {dictionary.CustomerHook.toolEstimatedTime}
                          </span>
                          <span className="flex flex-row items-center">
                            <FaClock className="w-4 h-4 mr-2" />
                            {dictionary.CustomerHook.toolItems.map(
                              (item: any, idx: number) =>
                                service.id === item.id && item.duration
                            )}
                          </span>
                        </div>
                        <div className="flex flex-col w-max">
                          <span className="text-5xl text-blue-400 mt-6">
                            {dictionary.CustomerHook.toolLogic}
                          </span>
                          <span className="text-lg ">
                            {dictionary.CustomerHook.toolEstimatedTime}
                          </span>
                          <span className="flex flex-row items-center">
                            <FaClock className="w-4 h-4 mr-2" />
                            {dictionary.CustomerHook.toolItems.map(
                              (item: any, idx: number) =>
                                service.id === item.id && item.duration
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
