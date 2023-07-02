import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import Image from "next/image";
import Link from "next/link";
import Head from "../head";
import { FaArrowLeft } from "react-icons/fa";
import FurtherHeader from "../../components/furtherHeader";

export default async function technologies({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const cutSentence = (sentence: string) => {
    if (sentence.length <= 120) {
      return sentence;
    } else {
      return (
        sentence.substring(0, 120).trim().split(" ").slice(0, -1).join(" ") +
        "..."
      );
    }
  };
  return (
    <>
      <Head
        title={dictionary.MetaData["TechnologiesTitle"]}
        description={dictionary.MetaData["TechnologiesDescription"]}
      />
      <div className="w-full bg-gray-400 min-h-screen flex flex-col pb-24 relative">
        <FurtherHeader location="technologies" />
        <div className="h-max flex items-center w-full lg:w-3/4 lg:flex-row lg:mx-auto  mt-12">
          <div className="w-full bg-gradient-to-r py-6">
            <h1 className="text-center lg:text-left w-full px-3 sm:px-0 sm:w-3/4 mx-auto lg:mx-0 text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg shadow-black text-white font-bold">
              <span className="text-green-400">{"/"}</span>
              {dictionary["TechnologiesPage"].h1}
            </h1>
            <Image
              unoptimized
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-556239?alt=media&token=01e2ea65-c473-4808-a935-dbb03e81c7ab"
              alt="Technologies Hero Image"
              width={1024}
              height={1024}
              className="w-1/2  group-hover:-translate-y-3 group-hover:scale-105 duration-100 py-6 mx-auto lg:hidden"
            />
            <h2 className="w-4/5 sm:w-3/5 lg:w-full lg:pr-3 text-center lg:text-left mx-auto lg:mx-0 text-xl sm:text-2xl lg:text-4xl pt-12 drop-shadow-lg shadow-black text-white">
              {dictionary["TechnologiesPage"].h2}
            </h2>
          </div>
          <div className="h-[90vh] w-1/3 overflow-hidden flex items-center justify-center">
            <Image
              unoptimized
              src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-556239?alt=media&token=01e2ea65-c473-4808-a935-dbb03e81c7ab"
              alt="Technologies Hero Image"
              width={1024}
              height={1024}
              className="w-full scale-150 group-hover:-translate-y-3 group-hover:scale-105 duration-100 py-6 mx-auto lg:block hidden"
            />
          </div>
        </div>
        <div className="w-3/4  grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-24 transition-all duration-100">
          {dictionary["Technologies"].map((tech, idx) => (
            <div
              key={idx}
              className="relative p-3 bg-white flex flex-col duration-75 group"
            >
              <h1 className="text-2xl pb-2 cursor-default">{tech.name}</h1>
              <div className="flex items-center justify-center py-6 bg-gradient-to-r from-gray-300 via-white to-gray-300 h-[20vh]">
                <Image
                  unoptimized
                  src={tech.image}
                  alt="Technology thumbnail"
                  width={256}
                  height={256}
                  className="w-1/3 group-hover:-translate-y-3 group-hover:scale-105 duration-100"
                />
              </div>
              <div className="flex flex-col relative">
                <Link
                  href={tech.link}
                  target="_blank"
                  className="py-2 text-blue-300 flex flex-row items-center w-max"
                >
                  {dictionary["TechnologiesPage"].docs}
                </Link>
                <div className="min-h-[12vh] w-full">
                  <h2 className="bg-slate-500 text-white p-3 min-h-[10vh] visible group-hover:invisible cursor-default">
                    {cutSentence(tech.description)}
                  </h2>
                  <h2 className="bg-slate-500 text-white p-3 min-h-[10vh] hidden group-hover:block group-hover:absolute z-[999] left-0 top-10  duration-100 cursor-default">
                    {tech.description}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
