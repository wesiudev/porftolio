import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { Form } from "./Form";
export default async function ClientsPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <section className="flex flex-col lg:flex-row min-h-screen lg:h-screen items-center font-sans relative">
        <div className="bg-gradient-to-br linear-gradient flex w-full lg:w-1/2 h-[60vh] lg:h-screen relative pt-12 lg:pt-0">
          <div className="  lg:w-full lg:mx-6 xl:mx-12 flex items-center justify-center text-center">
            <div className="lg:bg-white text-white lg:text-black flex flex-col items-center justify-center py-12 z-[1500] rounded-lg px-12">
              <h1 className="text-2xl lg:text-3xl w-[90vw] lg:w-full ">
                {dictionary["Auth"].h1}
              </h1>
              <h2 className="text-xl mt-6 ">{dictionary["Auth"].h2}</h2>
            </div>
          </div>
        </div>

        <div
          className="bg-white w-full  lg:w-1/2 h-max px-6 lg:px-14 xl:px-12 pb-24 lg:pb-0
      flex items-center justify-center z-[1500] lg:absolute right-0 lg:top-[50%] lg:-translate-y-[50%] lg:rounded-l-lg"
        >
          <Form dictionary={dictionary} />
        </div>
      </section>
    </>
  );
}
