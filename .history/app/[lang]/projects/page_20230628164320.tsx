import Link from "next/link";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { Animate } from "./components/Animate";
import Image from "next/image";
import { ProjectTitle } from "./components/ProjectTitle";
import { ImageInteraction } from "./components/ImageInteraction";
import { ScrollButton } from "./components/ScrollButton";
import CoffeeForm from "./components/CoffeeForm/CoffeeForm";
export default async function ProjectsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className=" w-full min-h-screen bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600 background-animate-projects delay-500 flex items-center relative overflow-x-hidden">
        {/* <div className="fixed bottom-12  px-3 left-[50%] -translate-x-[50%] flex flex-row justify-between w-full z-50">
        <Link
        href="/"
        className="group flex flex-row items-center text-white w-max"
        >
          <FaArrowLeft className="mr-1 group-hover:translate-x-[-3px] text-opacity-40 group-hover:text-opacity-100 duration-300 ease-in-out" />
          Home page
          </Link>
          <Link
          href="/about-me"
          className="group flex flex-row items-center text-white w-max"
        >
          About me
          <FaArrowRight className="ml-1 group-hover:translate-x-[3px] text-opacity-40 group-hover:text-opacity-100 duration-300 ease-in-out" />
          </Link>
      </div> */}
        <Animate>
          <div className="w-full mx-auto px-3 lg:px-0 lg:w-3/4 h-full mt-12 relative">
            <div className="flex flex-col w-full">
              <div className="flex flex-col h-screen justify-center relative select-none">
                <div className="h-max flex flex-col justify-center rounded-md">
                  <code className="text-7xl lg:text-8xl pb-2 text-green-400 sm:mt-6">
                    {"{"}
                  </code>
                  <h1 className="text-6xl lg:text-8xl text-white mx-auto lg:mx-0 w-max mt-3 sm:mt-0">
                    <span className="pl-0 lg:pl-32 font-light">
                      <span className="text-green-400">{"/"}</span>
                      {dictionary.ProjectsPage.h1}
                    </span>
                  </h1>
                  <div className="relative flex flex-col text-lg text-center lg:text-left sm:text-2xl w-full  italic font-extralight pt-6 text-gray-200 drop-shadow-lg shadow-black">
                    <span className="pl-0 lg:pl-32 mt-6 w-3/4 lg:w-full mx-auto">
                      {dictionary.ProjectsPage.h2}
                    </span>

                    <span className="pl-0 lg:pl-32 mt-6 not-italic font-bold text-green-500">
                      {dictionary.ProjectsPage.h2b}{" "}
                    </span>
                    <ScrollButton to="1">
                      <span
                        className="text-xl ml-auto mr-auto lg:ml-32 h-max lg:text-2xl text-white flex flex-row items-center p-3 hover:to-gray-400 rounded-md bg-green-500 hover:bg-green-400
                      w-max mt-6 lg:mx-0"
                      >
                        {dictionary.ProjectsPage.button}
                      </span>
                    </ScrollButton>

                    <div className="mt-3 sm:mt-6 flex flex-row w-full relative items-center">
                      <code className="text-7xl lg:text-8xl pb-2 text-green-400 mr-5">
                        {"}"}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </div>
      <div className="w-full min-h-screen flex flex-col bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600 background-position text-white pb-24">
        <div className="w-full px-3 lg:px-0 lg:w-3/4 mx-auto">
          {dictionary.ProjectsThumbnails.map((thumbnail, idx) => (
            <div
              id={(idx + 1) as unknown as string}
              className={`${idx > 0 && "pt-24"}
              ${idx === 0 && "pb-24"}
               flex flex-col pt-12 drop-shadow-lg shadow-black bg-opacity-50 rounded-md min-h-[30vh]`}
            >
              <div className="bg-slate-600 p-6 text-3xl sm:text-5xl italic font-light drop-shadow-lg shadow-black flex flex-col gap-6">
                <ProjectTitle title={thumbnail.title} link={thumbnail.link} />
              </div>
              <div className="w-max mx-auto lg:mx-0 text-3xl sm:text-5xl lg:text-7xl font-extralight mt-24  flex flex-row items-center">
                {"<>"}
                {thumbnail.title2b} {"</>"}
              </div>
              <div className="flex flex-col mt-16">
                <div className="text-2xl">{dictionary.ProjectsPage.stack}</div>
                <div className="flex flex-row flex-wrap w-full gap-3">
                  {thumbnail.stack.map((stackItem, idx) => (
                    <div className="p-3 bg-slate-800 mt-3" key={idx}>
                      {stackItem}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-full h-full mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {thumbnail.images.map((image, idx) => (
                    <>
                      <ImageInteraction
                        imageId={image.id}
                        images={thumbnail.images}
                      >
                        <Image
                          key={idx}
                          src={image.src}
                          alt={image.alt}
                          width={480}
                          height={270}
                          className="w-full rounded-md cursor-zoom-in"
                        />
                      </ImageInteraction>
                    </>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-12">
                <span className="text-4xl lg:text-6xl">
                  {dictionary.ProjectsPage.descriptions}
                </span>
                <span className="text-lg sm:text-xl font-light">
                  {thumbnail.description}
                </span>
                <Link
                  target="_blank"
                  href={thumbnail.link}
                  className="border-l-4 border-green-600 bg-white pl-6 py-6 bg-opacity-5 drop-shadow-none"
                >
                  {dictionary.ProjectsPage.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-12">
          <div className="mt-12 text-white relative w-[90vw] min-h-screen sm:w-3/4 mx-auto overflow-hidden ">
            <div className="text-4xl sm:text-5xl lg:text-8xl mt-12 w-max mx-auto flex flex-row">
              <span className="text-green-500">{"<"}</span>
              <h1>{dictionary["ProjectsPage"].components}</h1>
              <span className="text-green-500 mr-6">{" />"}</span>
            </div>
            <h2 className="italic font-light mt-6 lg:mt-12 text-2xl sm:text-3xl w-max mx-auto">
              {dictionary["ProjectsPage"].components2}
            </h2>
            <div className="w-full bg-slate-400 h-screen mt-24 grid grid-cols-1 sm:grid-cols-2">
              {/* <div>
                <CoffeeForm />{" "}
              </div> */}
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-max">
                <div className="carousel-item">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-222063?alt=media&token=9204efff-9bc4-48f3-8d01-b0eb4ac69dd7"
                    className="rounded-box h-max"
                    width={256}
                    height={256}
                    alt="Carousel Item Wesiu.dev Projects Page"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-225345?alt=media&token=35525abd-dada-4aaa-a2ea-c8f8b823c054"
                    className="rounded-box h-max"
                    width={256}
                    height={256}
                    alt="Carousel Item Wesiu.dev Projects Page"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-225422?alt=media&token=b5cf7513-ed93-4986-a301-21881a7cb680"
                    className="rounded-box h-max"
                    width={256}
                    height={256}
                    alt="Carousel Item Wesiu.dev Projects Page"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-22827?alt=media&token=13452a87-be2b-4d07-a223-4f8f3b3f429d"
                    className="rounded-box h-max"
                    width={256}
                    height={256}
                    alt="Carousel Item Wesiu.dev Projects Page"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-229282?alt=media&token=84ca7c84-1d7c-47b9-8e95-7ea53b69c727"
                    className="rounded-box h-max"
                    width={256}
                    height={256}
                    alt="Carousel Item Wesiu.dev Projects Page"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-221818?alt=media&token=f9b66250-6537-4c1c-8340-b8ae7b9a909a"
                    className="rounded-box h-max"
                    width={256}
                    height={256}
                    alt="Carousel Item Wesiu.dev Projects Page"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-219509?alt=media&token=4f1c602d-8322-41cd-be5a-9ec48511e3a3"
                    className="rounded-box h-max"
                    width={256}
                    height={256}
                    alt="Carousel Item Wesiu.dev Projects Page"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
