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
      <section className="flex flex-col md:flex-row min-h-screen sm:h-screen items-center font-sans relative">
        <div className="bg-gradient-to-br linear-gradient flex w-full sm:w-3/4 h-[60vh] sm:h-screen relative pt-12 sm:pt-0">
          <div className="  sm:w-3/4 flex items-center justify-center text-center">
            <div className="sm:bg-white text-white sm:text-black flex flex-col items-center justify-center py-12 z-[1500] rounded-lg">
              <h1 className="text-2xl sm:text-3xl w-[90vw] sm:w-3/4 ">
                Zaloguj się do swojego konta strony, aby zarządzać treścią.
              </h1>
              <h2 className="text-xl sm:w-3/4 mt-6 ">
                Dodawaj, edytuj i usuwaj swoje posty na blogu, wyświetlaj
                statystyki, strony oraz zarządzaj produktami.
              </h2>
            </div>
          </div>
        </div>

        <div
          className="bg-white w-full sm:max-w-full sm:w-1/4 xl:w-1/4 h-max px-6 sm:px-14 xl:px-12 pb-24 sm:pb-0
      flex items-center justify-center z-[1500] sm:absolute right-0 sm:top-[50%] sm:-translate-y-[50%] sm:rounded-l-lg"
        >
          <Form dictionary={dictionary} />
        </div>
      </section>
    </>
  );
}
