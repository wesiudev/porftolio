"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowAltCircleLeft,
  FaCheck,
  FaClock,
  FaWindowClose,
} from "react-icons/fa";
import Image from "next/image";
import * as Scroll from "react-scroll";
import { sumNumbersFromString } from "./sumNumbers";
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
  const [isSummary, setIsSummary] = useState<boolean>(false);
  const [chosenProduct, setChosenProduct] = useState<any>("");
  const [expectedTime, setExpectedTime] = useState<any>("");
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("load", () => setWidth(window.innerWidth));
      console.log(width);
    }
  }, [width]);
  let ScrollLink = Scroll.Link;
  var scroll = Scroll.animateScroll;
  function getExpectedTime(template: any) {
    setChosenProduct(template);
    const services = template.services.map((service: any) => service.id);
    const chosenProductServiceTime =
      dictionary.CustomerHook.toolServices.filter((service: any) =>
        services.includes(service.id)
      );
    const timeArray = chosenProductServiceTime.map((service: any) => ({
      logic: service.durationLogic,
      design: service.duration,
    }));
    const totalSum = timeArray.reduce((acc: any, curr: any) => {
      const logicSum = sumNumbersFromString(curr.logic);
      const designSum = sumNumbersFromString(curr.design);
      return acc + logicSum + designSum;
    }, 0);
    setExpectedTime(totalSum);
  }
  function addFunctionalityToTemplate(functionality: any) {
    const alreadyAdded = chosenProduct.services.find(
      (service: any) => service.id === functionality.id
    );
    if (!alreadyAdded) {
      const updatedServices = [...chosenProduct.services];
      updatedServices.push(functionality);
      setChosenProduct({ ...chosenProduct, services: updatedServices });
    }
  }
  function deleteFunctionalityFromTemplate(functionality: any) {
    const updatedServices = chosenProduct.services.filter(
      (service: any) => service.id !== functionality.id
    );
    setChosenProduct({ ...chosenProduct, services: updatedServices });
  }
  const extraServicesPrice =
    chosenProduct &&
    chosenProduct.services.reduce((acc: any, curr: any) => acc + curr.price, 0);
  return (
    <section className={`min-h-screen w-full relative flex-col `}>
      <div
        data-aos="fade-up"
        data-aos-delay={100}
        className={`linear-gradient px-3 w-full text-center lg:px-0 lg:w-3/4 mx-auto h-max text-white flex flex-col justify-center items-center lg:rounded-lg pb-3 sm:mb-6 lg:mb-12`}
      >
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl pb-3 sm:pb-6 pt-6">
            {dictionary.CustomerHook.h1}
          </h1>
          <h2 className="text-lg sm:text-2xl px-3 sm:px-12 pb-3 sm:pb-6">
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
            <div className="w-full h-full grid grid-cols-2 gap-3 sm:hidden ">
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
      <div className="w-[90vw] h-max flex flex-col mt-6 lg:px-0 lg:w-3/4 mx-auto rounded-lg z-50 ">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 h-max gap-6">
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
                    getExpectedTime(template), e.stopPropagation();
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
        } w-full bg-gradient-to-l from-slate-600 via-slate-500 to-slate-600 mt-60 relative `}
      >
        <div className="-top-48" id="tool" />
        {chosenProduct.length !== 0 ? (
          <div className="w-[90vw] lg:w-3/4 h-full   mx-auto">
            <div className="flex flex-col">
              <h1 className="w-max text-4xl sm:text-5xl mx-auto mt-24 text-white">
                {dictionary.CustomerHook.toolH1}
              </h1>
              <div className="h-1 w-60 linear-gradient mx-auto mt-4 rounded-full" />
              <div className="h-1 w-32 linear-gradient mx-auto mt-3 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl lg:text-4xl mt-12 text-blue-400 drop-shadow-lg shadow-black font-bold">
                {dictionary.CustomerHook.toolPriceFor}
              </span>{" "}
              <span className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white mt-3">
                {" "}
                {chosenProduct.name}
              </span>
            </div>
            <div className="flex flex-col lg:mt-12 w-full lg:w-full lg:mx-auto cursor-default select-none">
              <span className="text-3xl lg:text-5xl mt-12 text-blue-400 font-bold drop-shadow-lg shadow-black">
                {dictionary.CustomerHook.toolBasicServices}
              </span>{" "}
              <span className="text-lg md:text-xl mt-2 text-blue-200 font-bold drop-shadow-lg shadow-black">
                {dictionary.CustomerHook.toolBasicServicesDescription}
              </span>{" "}
              <span className="text-lg md:text-xl mt-2 text-blue-200 font-bold drop-shadow-lg shadow-black">
                {dictionary.CustomerHook.toolBasicServicesDescriptionA}
              </span>{" "}
              <div className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white grid md:grid-cols-2 2xl:grid-cols-3 gap-3 mt-12">
                {chosenProduct.services?.map((service: any, idx: number) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={100}
                    key={idx}
                    className={`flex flex-col p-2 py-4 sm:p-3 sm:py-6 2xl:p-6 bg-slate-800 drop-shadow-xl shadow-black rounded-lg`}
                  >
                    <div
                      className={`flex flex-col  items-center text-center mx-auto text-2xl`}
                    >
                      <span className="text-blue-400">{service.name}</span>
                      <div className=" flex items-center justify-center mt-6">
                        <span className="text-lg">
                          {dictionary.CustomerHook.toolServices.map(
                            (item: any, idx: number) =>
                              service.id === item.id && item.description
                          )}
                          {dictionary.CustomerHook.toolAdditional.map(
                            (item: any, idx: number) =>
                              service.isAdditional &&
                              service.id === item.id &&
                              item.description
                          )}
                        </span>
                      </div>
                    </div>
                    {/* end of title and info */}
                    {/* TIME SECTION */}
                    <div className="flex flex-col h-full justify-end ">
                      <span className="text-lg w-max mx-auto mt-6">
                        {dictionary.CustomerHook.toolEstimatedTime}
                      </span>
                      <div className={`flex flex-col lg:flex-row w-full`}>
                        <div
                          className={`w-full flex flex-row items-center  text-2xl`}
                        >
                          <div className="flex flex-col w-1/2 items-end">
                            <span className="text-xl text-green-500">
                              Design
                            </span>

                            <span className="flex flex-row items-center w-max">
                              {dictionary.CustomerHook.toolServices.map(
                                (item: any, idx: number) =>
                                  service.id === item.id && item.duration
                              )}
                              {dictionary.CustomerHook.toolAdditional.map(
                                (item: any, idx: number) =>
                                  service.isAdditional &&
                                  service.id === item.id &&
                                  item.duration
                              )}
                            </span>
                          </div>
                          <FaClock className="w-12 h-12 mx-6 lg:mx-3  2xl:mx-8" />
                          <div className="flex flex-col w-1/2 ">
                            <span className="text-xl text-blue-400 ">
                              {dictionary.CustomerHook.toolLogic}
                            </span>
                            <span className="flex flex-row items-center text-2xl w-max">
                              {dictionary.CustomerHook.toolServices.map(
                                (item: any, idx: number) =>
                                  service.id === item.id && item.durationLogic
                              )}
                              {dictionary.CustomerHook.toolAdditional.map(
                                (item: any, idx: number) =>
                                  service.isAdditional &&
                                  service.id === item.id &&
                                  item.durationLogic
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <span className="text-3xl lg:text-5xl mt-12 text-blue-400 font-bold drop-shadow-lg shadow-black">
                {dictionary.CustomerHook.toolExtraServices}
              </span>{" "}
              <div className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl text-white grid md:grid-cols-2 2xl:grid-cols-3 gap-3 mt-12 relative">
                <div
                  className="h-screen absolute -left-24 -top-[75vh]"
                  id="scrollToGrid"
                ></div>
                {dictionary.CustomerHook.toolAdditional.map(
                  (service: any, idx: number) => (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={100}
                      key={idx}
                      className={`flex flex-col p-2 py-4 sm:p-3 sm:py-6 2xl:p-6 bg-slate-800 drop-shadow-xl shadow-black rounded-lg relative overflow-hidden`}
                    >
                      <div
                        className={`flex flex-col  items-center text-center mx-auto text-2xl`}
                      >
                        <span className="text-blue-400">{service.name}</span>
                        <div className=" flex items-center  justify-center mt-6">
                          <span className="text-lg">{service.description}</span>
                        </div>
                      </div>
                      {/* end of title and info */}
                      {/* TIME SECTION */}
                      <div className="flex flex-col h-full justify-end ">
                        <span className="text-lg w-max mx-auto mt-6">
                          {dictionary.CustomerHook.toolEstimatedTime}
                        </span>
                        <div className={`flex flex-col lg:flex-row w-full`}>
                          <div
                            className={`w-full flex flex-row items-center  text-2xl`}
                          >
                            <div className="flex flex-col w-1/2 items-end">
                              <span className="text-xl text-green-500">
                                Design
                              </span>

                              <span className="flex flex-row w-max">
                                {dictionary.CustomerHook.toolAdditional.map(
                                  (item: any, idx: number) =>
                                    service.id === item.id && item.duration
                                )}
                              </span>
                            </div>
                            <FaClock className="w-12 h-12 mx-6 xl:mx-5 2xl:mx-8" />
                            <div className="flex flex-col w-1/2 ">
                              <span className="text-xl text-blue-400 w-max">
                                {dictionary.CustomerHook.toolLogic}
                              </span>
                              <span className="flex flex-row items-center text-2xl w-max">
                                {dictionary.CustomerHook.toolAdditional.map(
                                  (item: any, idx: number) =>
                                    service.id === item.id && item.durationLogic
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end of time section */}

                      {!chosenProduct.services.includes(service) &&
                        service.isAdditional && (
                          <ScrollLink
                            to="scrollToGrid"
                            smooth={true}
                            duration={500}
                            delay={500}
                            onClick={() => addFunctionalityToTemplate(service)}
                            className="rounded-md w-max mx-auto px-6 py-2 mt-4 mb-2 text-xl bg-green-600 text-white cursor-pointer hover:bg-green-500"
                          >
                            {dictionary.CustomerHook.toolAdd}
                          </ScrollLink>
                        )}

                      <button
                        onClick={() => deleteFunctionalityFromTemplate(service)}
                        className={` text-xl group text-green-400 flex flex-row w-1/2 justify-center  mx-auto items-center bg-white drop-shadow-lg shadow-black px-6 py-2 mt-4 mb-2  rounded-full duration-300 ease-in-out  ${
                          chosenProduct.services.includes(service)
                            ? "scale-100 relative"
                            : "scale-0 absolute -left-36 -top-36"
                        }`}
                      >
                        <FaCheck className="w-5 h-5 mr-2 group-hover:hidden " />{" "}
                        <FaWindowClose className="w-5 h-5 mr-2 hidden group-hover:block text-red-500" />
                        <span className="group-hover:hidden">
                          {" "}
                          {dictionary.CustomerHook.toolAdded}
                        </span>
                        <span className="group-hover:block hidden text-red-500">
                          {dictionary.CustomerHook.toolDelete}
                        </span>
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="w-full text-2xl lg:text-5xl py-12 lg:py-24 flex justify-center">
              <button
                onClick={() => setIsSummary(true)}
                className="bg-green-600 text-white rounded-lg py-6 px-12 w-full 2xl:w-2/3 hover:bg-green-500"
              >
                {dictionary.CustomerHook.toolCheckout}
              </button>
            </div>
          </div>
        ) : null}
        {chosenProduct && isSummary && (
          <div
            onClick={(e: any) => {
              setIsSummary(false);
            }}
            className="fixed h-screen w-full bg-black bg-opacity-90 flex flex-col justify-between left-0 top-0 pt-14"
          >
            <div
              onClick={(e: any) => {
                e.stopPropagation();
              }}
              className={`flex flex-col mt-6 w-[90vw] lg:w-3/4 h-max mx-auto bg-slate-700  rounded-b-lg`}
            >
              {/* price */}
              <div className="flex flex-col lg:flex-row w-full h-max items-center text-white">
                <div className="h-full flex flex-col justify-between w-full lg:p-3 ">
                  <div className="flex flex-col w-full mt-12 lg:mt-0">
                    <span className="lg:text-blue-400 text-3xl md:text-3xl 2xl:text-5xl font-bold drop-shadow-lg shadow-black">
                      {" "}
                      {chosenProduct.name}
                    </span>
                    <span className="text-white text-lg xl:text-xl mt-6 hidden lg:block">
                      {chosenProduct.description}
                    </span>
                    <div className="flex flex-row items-end">
                      <div className="flex ">
                        <span className="text-blue-400 text-xl md:text-3xl  2xl:text-5xl font-bold drop-shadow-lg shadow-black mt-6 lg:mt-12">
                          {dictionary.CustomerHook.toolTime}
                        </span>
                        <span className="text-xl xl:text-4xl mt-3">
                          <span className="text-green-600">{expectedTime}</span>{" "}
                          {dictionary.CustomerHook.toolHours}
                        </span>
                      </div>
                    </div>
                    <button className="max-h-12 w-full lg:w-max  bg-green-600 px-3 py-2 mt-6 hover:bg-green-500 rounded-lg">
                      {dictionary.CustomerHook.toolOrder}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col h-full w-1/3">
                  <div className="h-full w-full md:flex justify-center items-center overflow-hidden hidden">
                    <Image
                      className="rounded-br-lg h-full  w-max object-cover"
                      width={512}
                      height={512}
                      src={chosenProduct.img2}
                      alt="Chosen Website Image..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col mt-6 w-[90vw] lg:w-3/4 mx-auto bg-slate-700 px-3 rounded-t-lg`}
            >
              {/* price */}
              <div className="flex flex-col w-full justify-between items-center gap-y-3 lg:gap-y-0 mb-6 pt-3 text-white">
                <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row sm:justify-between w-full">
                  <div className="flex flex-col mt-3">
                    <span className="text-2xl lg:text-2xl 2xl:text-3xl  text-blue-400 font-bold drop-shadow-lg shadow-black">
                      {dictionary.CustomerHook.toolBasicServices}
                    </span>
                    <span className="text-xl drop-shadow-lg shadow-black ">
                      {expectedTime * 55}
                      {",00"} PLN
                    </span>
                  </div>
                  <div className="flex flex-col mt-3 ">
                    <span className="text-2xl lg:text-2xl 2xl:text-3xl text-blue-400 font-bold drop-shadow-lg shadow-black">
                      {dictionary.CustomerHook.toolExtraServices}
                    </span>
                    <span className="text-xl md:text-center drop-shadow-lg shadow-black ">
                      {extraServicesPrice}
                      ,00 PLN
                    </span>
                  </div>
                  <div className="flex flex-col mt-3 md:items-end">
                    <span className="text-2xl lg:text-2xl 2xl:text-3xl  text-blue-400 font-bold drop-shadow-lg shadow-black">
                      {dictionary.CustomerHook.toolSum}
                    </span>
                    <span className="text-xl  drop-shadow-lg shadow-black ">
                      {expectedTime * 55 + 500}
                      {",00"} PLN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="w-full bg-slate-500 bg-opacity-50 py-24">
        <div className="w-[90vw] lg:w-3/4 mx-auto min-h-[30vh] bg-slate-500">
          {" "}
          asd
        </div>
      </div> */}
    </section>
  );
}
