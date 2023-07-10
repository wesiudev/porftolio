"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowAltCircleLeft,
  FaCheck,
  FaClock,
  FaFire,
  FaWindowClose,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import * as Scroll from "react-scroll";
import { sumNumbersFromString } from "./sumNumbers";
import { addVisitorRequest } from "../../../firebase";
import PhoneInput from "react-phone-number-input/input";
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
  const [extraServicesPrice, setExtraServicesPrice] = useState<number>(0);
  const [checkAvailability, setCheckAvailability] = useState<boolean>(false);
  const [isPNumberValid, setIsPNumberValid] = useState<boolean>(true);
  const [userData, setUserData] = useState<any>({
    pNumber: 0,
    email: "",
    expectedPrice: 0,
  });
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
  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberRegex = /^\d{10}$/; // Regular expression to match a 10-digit phone number
    return phoneNumberRegex.test(phoneNumber);
  };
  const handlePhoneNumberChange = (e: any) => {
    const inputPhoneNumber = e.target.value;
    setUserData({ ...userData, pNumber: inputPhoneNumber });
    setIsPNumberValid(validatePhoneNumber(inputPhoneNumber));
  };
  function sendRequest() {
    const data = {
      email: userData.email,
      pNumber: userData.pNumber,
      expectedPrice: (expectedTime * 55 + extraServicesPrice).toFixed(2),
    };
    addVisitorRequest(data);
  }

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
            className="flex flex-col w-full h-screen sm:h-max lg:w-3/4 mx-auto drop-shadow-lg shadow-black bg-white rounded-t-lg sm:rounded-lg  sm:text-lg lg:text-xl overflow-scroll sm:overflow-hidden"
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
            <div className="flex sm:flex-row h-full relative">
              <Image
                unoptimized
                width={200}
                height={200}
                className="h-64 xl:h-52 hidden md:block rounded-l-lg"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAM"
                src={hoveredText.img}
                alt="Product"
              />

              <div className="flex flex-col h-full mt-3">
                <span className="text-3xl font-bold pt-6 sm:py-0 lg:text-2xl p-3 select-none text-blue-400">
                  {hoveredText.itemName}
                </span>
                <ScrollLink
                  to="tool"
                  smooth={true}
                  duration={500}
                  delay={200}
                  onClick={(e: any) => {
                    setHoveredText({
                      itemName: "",
                      itemDescription: "",
                      img: "",
                    }),
                      getExpectedTime(
                        dictionary.CustomerHook.templates.find(
                          (template: any) =>
                            template.name === hoveredText.itemName
                        )
                      ),
                      e.stopPropagation();
                  }}
                  className={`hover:bg-green-400 cursor-pointer w-max px-3 py-2 font-bold absolute rounded-lg -translate-y-24 lg:translate-y-12 group-hover:lg:-translate-y-16 duration-200 left-[50%] -translate-x-[50%] bg-green-500 text-white sm:hidden`}
                >
                  {dictionary.CustomerHook.toolButton}
                </ScrollLink>
                <span className="italic  select-none lg:text-md px-3">
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
                  className="bg-gray-300 rounded-md w-max px-3 py-1 ml-3 mb-3 mt-2 md:mb-0"
                >
                  {dictionary.Navigation.btnClose}
                </button>
              </div>
            </div>
            <div className="w-full h-full grid grid-cols-2 gap-3 sm:hidden px-3 mt-3">
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
                  className={`hover:bg-green-400 rounded-lg w-max px-3 py-2 font-bold absolute translate-y-12 group-hover:lg:-translate-y-16 duration-200 left-[50%] -translate-x-[50%] bg-green-500 text-white`}
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
          <div className="w-[90vw] lg:w-3/4 h-full mx-auto">
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
                            onClick={() => {
                              addFunctionalityToTemplate(service),
                                setExtraServicesPrice(
                                  extraServicesPrice + service.price
                                );
                            }}
                            className="rounded-md w-max mx-auto px-6 py-2 mt-4 mb-2 text-xl bg-green-600 text-white cursor-pointer hover:bg-green-500"
                          >
                            {dictionary.CustomerHook.toolAdd}
                          </ScrollLink>
                        )}

                      <button
                        onClick={() => {
                          deleteFunctionalityFromTemplate(service),
                            setExtraServicesPrice(
                              extraServicesPrice - service.price
                            );
                        }}
                        className={` text-xl group text-green-500 flex flex-row w-1/2 justify-center  mx-auto items-center bg-white drop-shadow-lg shadow-black px-6 py-2 mt-4 mb-2  rounded-full duration-300 ease-in-out  ${
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

        <div
          onClick={(e: any) => {
            setIsSummary(false);
            setCheckAvailability(false);
          }}
          className={`${
            chosenProduct && isSummary
              ? "z-[1500] bg-opacity-75"
              : "z-[-500] bg-opacity-0"
          } fixed h-screen w-full bg-black duration-1000 ease-in-out flex flex-col justify-between cursor-pointer left-0 top-0 pt-14 `}
        >
          <div
            onClick={(e: any) => {
              e.stopPropagation();
            }}
            className={`flex flex-col mt-6 w-[90vw] lg:w-3/4 h-max mx-auto bg-slate-700  rounded-b-lg duration-500 cursor-default ${
              chosenProduct && isSummary
                ? "translate-y-0 delay-500"
                : "translate-y-[-100vh]"
            }`}
          >
            {/* price */}
            <div className="flex flex-col md:flex-row w-full h-max items-center text-white">
              <div className="h-full flex flex-col justify-between w-full relative">
                <div
                  className={`absolute left-0 w-full min-h-full p-3 bg-slate-700 rounded-b-lg duration-500 ${
                    checkAvailability
                      ? "-bottom-[70%]  translate-y-[50%] lg:translate-y-12"
                      : "bottom-[100vh] translate-y-[50%] lg:translate-y-12"
                  }`}
                >
                  <h1 className="text-xl">
                    <span className="text-green-500 flex flex-row items-center mb-3 lg:mb-6">
                      {" "}
                      <FaFire className="text-red-500 h-6 w-6 mr-2" /> Aktualnie
                      nie pracuję nad żadnym projektem
                    </span>
                    Wypełnij formularz, a ja skontaktuję się z Tobą w celu
                    ustalenia szczegółów.
                  </h1>
                  <div className="flex items-center justify-center h-full w-full z-[100]">
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-3 w-full lg:mt-12">
                      <div className="flex flex-col mt-3 lg:mt-0">
                        <label
                          htmlFor="contact"
                          className="text-lg lg:text-2xl lg:pb-3"
                        >
                          Email
                        </label>
                        <input
                          placeholder="example@gmail.com"
                          id="contact"
                          type="text"
                          className="p-3 outline-1 outline-blue-500 focus:rounded-none text-black"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="pNumber"
                          className="text-lg lg:text-2xl lg:pb-3"
                        >
                          Numer telefonu
                        </label>
                        <input
                          placeholder="+48 123 456 789"
                          value={userData.pNumber}
                          onChange={(e) => handlePhoneNumberChange(e)}
                          id="pNumber"
                          type="string"
                          className="p-3 outline-1 outline-blue-500 focus:rounded-none text-black"
                        />
                      </div>
                      <div className="flex items-end h-full w-full mt-3 lg:mt-0">
                        <button
                          onClick={sendRequest}
                          className="py-3 lg:py-3 lg:p-3  bg-blue-500 w-full h-3/4 rounded-lg text-white font-bold flex flex-row items-center justify-center text-2xl"
                        >
                          Wyślij
                          <IoSend className="ml-3 h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full mt-3">
                  <span className="lg:text-blue-400 text-3xl md:text-3xl 2xl:text-5xl font-bold drop-shadow-lg shadow-black px-3">
                    {" "}
                    {chosenProduct.name}
                  </span>
                  <span className="text-white text-lg xl:text-xl mt-6 hidden md:block px-3">
                    {chosenProduct.description}
                  </span>
                  <div className="flex flex-row items-end px-3">
                    <div className="flex flex-col">
                      <span className="text-blue-400 text-xl md:text-3xl  2xl:text-5xl font-bold drop-shadow-lg shadow-black mt-6 lg:mt-12">
                        {dictionary.CustomerHook.toolTime}
                      </span>
                      <span className="text-xl xl:text-4xl mt-3">
                        <span className="text-green-600">{expectedTime}</span>{" "}
                        {dictionary.CustomerHook.toolHours}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setCheckAvailability(true)}
                    className={`max-h-12 lg:max-h-24 w-full font-bold bg-green-600 px-3 py-2 lg:py-4 mt-6 hover:bg-green-500 md:rounded-br-none ${
                      !checkAvailability && "sm:rounded-bl-lg rounded-b-lg"
                    }`}
                  >
                    {dictionary.CustomerHook.toolOrder}
                  </button>
                </div>
              </div>
              <div className="flex flex-col h-full w-1/3 ">
                <div className="h-full w-full md:flex justify-center items-center overflow-hidden hidden">
                  <img
                    className="rounded-br-lg h-full w-max object-cover"
                    src={chosenProduct.img2}
                    alt="Chosen Website Image..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col mt-6 w-[90vw] lg:w-3/4 mx-auto bg-slate-700 px-3 rounded-t-lg duration-500 cursor-default ${
              chosenProduct && isSummary && !checkAvailability
                ? "translate-y-0 delay-500"
                : "translate-y-[100vh]"
            }`}
          >
            {/* price */}
            <div className="flex flex-col w-full justify-between items-center gap-y-3 lg:gap-y-0 my-3 text-white">
              <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row sm:justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-2xl lg:text-2xl 2xl:text-3xl  text-blue-400 font-bold drop-shadow-lg shadow-black">
                    {dictionary.CustomerHook.toolBasicServices}
                  </span>
                  <span className="text-xl drop-shadow-lg shadow-black ">
                    {expectedTime * 55}
                    {",00"} PLN
                  </span>
                </div>
                <div className="flex flex-col ">
                  <span className="text-2xl lg:text-2xl 2xl:text-3xl text-blue-400 font-bold drop-shadow-lg shadow-black">
                    {dictionary.CustomerHook.toolExtraServices}
                  </span>
                  <span className="text-xl md:text-center drop-shadow-lg shadow-black ">
                    {extraServicesPrice}
                    ,00 PLN
                  </span>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-2xl lg:text-2xl 2xl:text-3xl  text-blue-400 font-bold drop-shadow-lg shadow-black">
                    {dictionary.CustomerHook.toolSum}
                  </span>
                  <span className="text-xl  drop-shadow-lg shadow-black ">
                    {expectedTime * 55 + extraServicesPrice}
                    {",00"} PLN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
