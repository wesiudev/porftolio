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
      <section className="flex flex-col md:flex-row min-h-screen lg:h-screen items-center font-sans relative">
        <div className="bg-gradient-to-br linear-gradient flex w-full h-[60vh] lg:h-screen relative pt-12 lg:pt-0">
          <div className="flex flex-col text-white items-center justify-center lg:w-3/4 text-center">
            <h1 className="text-2xl lg:text-3xl w-[90vw] lg:w-3/4">
              Zaloguj się do swojego konta strony, aby zarządzać treścią.
            </h1>
            <h2 className="text-xl lg:w-2/4 mt-6">
              Dodawaj, edytuj i usuwaj swoje posty na blogu, wyświetlaj
              statystyki, strony oraz zarządzaj produktami.
            </h2>
          </div>
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto lg:w-1/4 xl:w-1/4 h-max px-6 lg:px-14 xl:px-12
      flex items-center justify-center z-[1500] lg:absolute right-0 lg:top-[50%] lg:-translate-y-[50%] lg:rounded-l-lg"
        >
          <Form dictionary={dictionary} />
        </div>
      </section>
    </>
  );
}
