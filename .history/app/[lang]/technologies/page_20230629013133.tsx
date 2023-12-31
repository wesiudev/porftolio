import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full bg-gray-400 min-h-screen flex flex-col pb-24">
      <div className="pt-48 w-full ">
        <div className="w-full bg-gradient-to-r from-green-500 via-red-500 to-blue-500 background-animate-technologies py-6">
          <h1 className="text-center w-full px-3 sm:px-0 sm:w-3/4 mx-auto text-5xl sm:text-6xl lg:text-8xl drop-shadow-lg shadow-black text-white font-bold">
            {dictionary["TechnologiesPage"].h1}
          </h1>
          <h2 className="w-4/5 sm:w-3/5 lg:w-[95vw] text-center mx-auto text-xl sm:text-2xl lg:text-4xl pt-12  drop-shadow-lg shadow-black text-white">
            {dictionary["TechnologiesPage"].h2}
          </h2>
        </div>
      </div>
      <div className="w-3/4  grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto mt-24 transition-all duration-100">
        {dictionary["Technologies"].map((tech, idx) => (
          <div
            key={idx}
            className="relative p-3 bg-white flex flex-col duration-75 cursor-pointer group"
          >
            <h1 className="text-2xl">{tech.name}</h1>
            <div className="flex items-center justify-center py-6 bg-gradient-to-r from-gray-300 via-white to-gray-300 h-[20vh]">
              <Image
                src={tech.image}
                alt="Technology name"
                width={256}
                height={256}
                className="w-1/3 group-hover:-translate-y-3 group-hover:scale-105 duration-100"
              />
            </div>
            <div className="flex flex-col relative">
              <Link
                href={tech.link}
                target="_blank"
                className="py-2 text-blue-300 flex flex-row items-center"
              >
                {dictionary["TechnologiesPage"].docs}
              </Link>
              <div className="min-h-[12vh] w-full">
                <h2 className="bg-slate-500 text-white p-3 min-h-[10vh] visible group-hover:invisible">
                  {cutSentence(tech.description)}
                </h2>
                <h2 className="bg-slate-500 text-white p-3 min-h-[10vh] hidden group-hover:block group-hover:absolute z-[999] left-0 top-10  duration-100">
                  {tech.description}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
