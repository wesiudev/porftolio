import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
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
    <div className="min-h-screen w-full bg-gray-200">
      <Head
        title="Panel administracyjny"
        description="Zarządzaj treścią na swojej stronie."
      />{" "}
      {children}
    </div>
  );
}
