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
    <div className="w-full">
      <div className=" w-full p-6 rounded-lg bg-gray-200">
        <h1 className="text-3xl lg:text-5xl">{dictionary["Dashboard"].h1}</h1>
        <div>
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
