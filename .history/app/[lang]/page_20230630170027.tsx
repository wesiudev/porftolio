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
      </main>
      <div className="mt-12">
        <Technologies dictionary={dictionary} />
      </div>
    </>
  );
}