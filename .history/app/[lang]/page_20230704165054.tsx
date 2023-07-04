import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { HomeTitle } from "../components/HomeTitle";
import Head from "../components/headers/head";
import Header from "../components/headers/header";
import Technologies from "../components/technologies";
import TextSwitcher from "../components/TextSwitcher";
import ProjectsPage from "../components/projects";
import About from "../components/about";
import CustomerHook from "../components/offer";

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
      <Head
        title={dictionary.MetaData["IndexTitle"]}
        description={dictionary.MetaData["IndexDescription"]}
      />
      <main className="h-full flex flex-col justify-between relative w-full px-3 lg:px-0 lg:w-3/4 mx-auto min-h-screen bg-red-500">
        <Header dictionary={dictionary} lang={lang} />

        <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] h-max sm:w-max duration-200 z-50 flex justify-center items-center text-center sm:text-left text-xl font-bold sm:text-2xl lg:text-3xl">
          <TextSwitcher dictionary={dictionary["TextSwitcher"]} />
        </div>
        <div className="fixed left-0 top-0 background-image h-full w-full"></div>
        <div className="fixed left-0 top-0 bg-gradient-to-br from-gray-500 via-gray-300 to-gray-500 background-animate delay-1000 h-full w-full"></div>
        <HomeTitle />
      </main>
      <div className="mt-12">
        <Technologies dictionary={dictionary} />
      </div>
      {/* <About dictionary={dictionary} /> */}
      <ProjectsPage dictionary={dictionary} />
      <div className="mt-12">
        <CustomerHook dictionary={dictionary} />
      </div>
    </>
  );
}
