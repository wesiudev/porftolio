import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { HomeTitle } from "../components/HomeTitle";
import TextSwitcher from "../components/TextSwitcher";
import { Parallax } from "react-parallax";
import Hero from "../components/hero";
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero dictionary={dictionary} />
    </>
  );
}
