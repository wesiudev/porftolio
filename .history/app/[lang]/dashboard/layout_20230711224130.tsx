import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { Providers } from "../../../redux/Provider";
import Head from "../../components/headers/head";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="bg-blue-100 min-h-screen w-full">
      <Head
        title="Panel administracyjny"
        description="Zarządzaj treścią na swojej stronie."
      />{" "}
      {children}
    </div>
  );
}
