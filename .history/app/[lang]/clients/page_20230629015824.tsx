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
      <section className="flex flex-col md:flex-row h-screen items-center font-sans">
        <div className="bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900 hidden lg:flex items-center justify-center w-max mx-auto md:w-3/5 xl:w-2/3 h-screen relative">
          <div className="flex flex-col text-white">
            <h1 className="text-3xl">
              Zaloguj się do swojego konta, aby zarządzać swoją stroną.
            </h1>
            <h2 className="text-xl w-3/4">
              Dodawaj, edytuj i usuwaj swoje posty na blogu, wyświetlaj
              statystyki strony oraz zarządzaj produktami.
            </h2>
          </div>
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-14 xl:px-12
      flex items-center justify-center z-[1500]"
        >
          <Form dictionary={dictionary} />
        </div>
      </section>
    </>
  );
}
