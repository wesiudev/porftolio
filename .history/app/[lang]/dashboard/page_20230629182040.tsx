import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export async function Dashboard({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div>
      <h1>{dictionary["Dashboard"].h1}</h1>
    </div>
  );
}
