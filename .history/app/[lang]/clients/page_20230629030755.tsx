import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import { Form } from "./Form";
import Image from "next/image";
export default async function ClientsPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <section className="flex flex-col lg:flex-row min-h-screen lg:h-screen items-center font-sans relative">
        <div className="bg-gradient-to-br linear-gradient flex w-full lg:w-1/2 h-[90vh] lg:h-screen relative pt-12 lg:pt-0">
          <div className="  lg:w-full lg:mx-6 xl:mx-12 flex items-center justify-center text-center">
            <div className="lg:bg-white text-white lg:text-black flex flex-col items-center justify-center py-12 z-[1500] rounded-lg px-6">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/decocanva-408fb.appspot.com/o/image-187166?alt=media&token=71cdb059-605d-44bf-a2b3-4fdba5d7e9c9"
                width={512}
                height={512}
                alt="Workspace with books and a laptop"
                className="rounded-lg w-3/4 lg:w-1/2 scale-100 duration-200"
              />
              <h1 className="text-2xl lg:text-3xl w-[90vw] lg:w-full mt-8">
                {dictionary["Auth"].h1}
              </h1>
              <h2 className="text-xl mt-6 ">{dictionary["Auth"].h2}</h2>
            </div>
          </div>
        </div>

        <div
          className="bg-white w-full  lg:w-1/2 h-max lg:h-screen px-6 lg:px-14 xl:px-12 pb-24 lg:pb-0
      flex items-center justify-center z-[1500]"
        >
          <Form dictionary={dictionary} />
        </div>
      </section>
    </>
  );
}
