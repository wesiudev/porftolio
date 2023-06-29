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
      <section className="flex flex-col md:flex-row h-screen items-center font-sans relative">
        <div className="bg-gradient-to-br linear-gradient hidden lg:flex w-full  h-screen relative">
          <div className="flex flex-col text-white items-center justify-center lg:w-3/4 xl:w-3/4 text-center">
            <h1 className="text-3xl">
              Zaloguj się do swojego konta strony, aby zarządzać treścią.
            </h1>
            <h2 className="text-xl w-3/4 mt-6">
              Dodawaj, edytuj i usuwaj swoje posty na blogu, wyświetlaj
              statystyki strony oraz zarządzaj produktami.
            </h2>
          </div>
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto lg:w-1/4 xl:w-1/4 h-screen lg:h-max px-6 lg:px-14 xl:px-12
      flex items-center justify-center z-[1500] lg:absolute right-0 lg:top-[50%] lg:-translate-y-[50%] lg:rounded-l-lg"
        >
          <Form dictionary={dictionary} />
        </div>
      </section>
    </>
  );
}
