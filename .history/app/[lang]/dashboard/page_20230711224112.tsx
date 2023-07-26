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
      <div className=" w-full lg:w-max p-3 bg-blue-200 border-[2px] border-blue-400 rounded-lg">
        <h1 className="text-3xl lg:text-5xl">{dictionary["Dashboard"].h1}</h1>
        <div>
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
