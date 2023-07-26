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
      <UserDetails />
    </div>
  );
}
