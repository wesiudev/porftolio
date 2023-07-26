import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import { Providers } from "../../../redux/Provider";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html className="scrollbarBlack" lang={params.lang}>
      <body className={`font-sans scrollbarBlack`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
