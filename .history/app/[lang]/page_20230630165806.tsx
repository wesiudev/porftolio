import { FaBicycle, FaUser } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { CgWebsite } from "react-icons/cg";
import { HomeTitle } from "../components/HomeTitle";
import { LinkRoute } from "../components/RouteLink";
import Head from "./head";
import Header from "../components/header";
import Technologies from "./technologies/page";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    // <div className="bg-red-500">
    //   <LocaleSwitcher />
    //   <p>Current locale: {lang}</p>
    //   <p>
    //     This text is rendered on the server:{" "}
    //     {dictionary["server-component"].welcome}
    //   </p>
    //   <Counter dictionary={dictionary.counter} />
    // </div>

    // <div className="bg-red-500">
    //   <LocaleSwitcher />
    //   <p>Current locale: {lang}</p>
    //   <p>
    //     This text is rendered on the server:{" "}
    //     {dictionary["server-component"].welcome}
    //   </p>
    //   <Counter dictionary={dictionary.counter} />
    // </div>
    <>
      <Header lang={lang} dictionary={dictionary} />
      <Head
        title={dictionary.MetaData["IndexTitle"]}
        description={dictionary.MetaData["IndexDescription"]}
      />
      <main className="h-full flex flex-col justify-between relative w-full px-3 lg:px-0 lg:w-3/4 mx-auto min-h-screen">
        <div className="fixed left-0 top-0 bg-gradient-to-br from-gray-500 via-gray-300 to-gray-500 background-animate delay-1000 h-full w-full"></div>
        <div className="min-h-[50vh] w-max mx-auto flex flex-col justify-end select-none">
          <HomeTitle />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 relative h-max mt-36">
          {/* <div className="absolute -bottom-12 flex flex-row w-max left-[50%] -translate-x-[50%]"><Link
            href="https://www.facebook.com/HighDefinitionCode/"
            className="flex flex-row items-center relative group z-20"
          >
            <div className="absolute left-[100%] w-max scale-0 group-hover:scale-100 ease-in-out duration-200  px-2 bg-blue-500 text-white z-0 rounded-md p-1">
              /HighDefinitionCode
            </div>
            <FaFacebook className="h-8 w-8 text-blue-500" />
          </Link></div> */}

          {/* <LinkRoute to="projects" lang={lang}>
            <div className="flex flex-row h-full items-center w-full bg-zinc-600 hover:bg-zinc-500 bg-opacity-80 p-3 rounded-md text-left">
              <CgWebsite className="h-8 w-8 mr-3 text-white" />
              <div>
                <h2 className={`text-2xl text-white`}>
                  {dictionary["IndexPage"].projects}
                </h2>
                <p
                  className={`m-0  text-sm opacity-50 italic font-light text-gray-200`}
                >
                  {dictionary["IndexPage"].projectsDesc}
                </p>
              </div>
            </div>
          </LinkRoute> */}
          {/* <LinkRoute to="about-me" lang={lang}>
            <div className="flex flex-row h-full items-center w-full bg-zinc-600 hover:bg-zinc-500 bg-opacity-80 p-3 rounded-md text-left">
              <FaUser className="h-8 w-8 mr-3 text-white" />
              <div>
                <h2 className={` text-2xl text-white`}>
                  {dictionary["IndexPage"].aboutMe}
                </h2>
                <p
                  className={`m-0  text-sm opacity-50 italic font-light text-gray-200`}
                >
                  {dictionary["IndexPage"].aboutMeDesc}
                </p>
              </div>
            </div>
          </LinkRoute> */}
          {/* <LinkRoute to="technologies" lang={lang}>
            <div className="flex flex-row h-full items-center w-full bg-zinc-600 hover:bg-zinc-500 bg-opacity-80 p-3 rounded-md text-left">
              <BsGearFill className="h-8 w-8 mr-3 text-white" />
              <div>
                <h2 className={`text-2xl text-white`}>
                  {dictionary["IndexPage"].technologies}
                </h2>
                <p
                  className={`m-0  text-sm opacity-50 italic font-light text-gray-200`}
                >
                  {dictionary["IndexPage"].technologiesDesc}
                </p>
              </div>
            </div>
          </LinkRoute> */}
          {/* <LinkRoute to="hobby" lang={lang}>
            <div className="flex flex-row h-full items-center w-full bg-zinc-600 hover:bg-zinc-500 bg-opacity-80 p-3 rounded-md text-left">
              <FaBicycle className="w-8 h-8 mr-3 text-white" />
              <div>
                <h2 className={`text-2xl text-white`}>
                  {dictionary["IndexPage"].hobby}
                </h2>
                <p
                  className={`m-0  text-sm opacity-50 italic font-light text-gray-200`}
                >
                  {dictionary["IndexPage"].hobbyDesc}
                </p>
              </div>
            </div>
          </LinkRoute> */}
        </div>
        <div className="mt-12">
          <Technologies dictionary={dictionary} />
        </div>
      </main>
    </>
  );
}
