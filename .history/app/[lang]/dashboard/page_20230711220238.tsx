import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import UserDetails from "./UserDetails";

export default async function Dashboard({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="w-[90vw] lg:w-3/4 mx-auto">
      <div>
        <h1>{dictionary["Dashboard"].h1}</h1>
      </div>
      <div>
        <UserDetails />
      </div>
    </div>
  );
}
