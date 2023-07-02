import { Locale, i18n } from "../../i18n-config";
import "../../app/styles/globals.css";
import Header from "../components/header";
import { getDictionary } from "../../get-dictionary";
import localFont from "next/font/local";
import { Providers } from "../../redux/Provider";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={`${cocosharp.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

const cocosharp = localFont({
  src: [
    {
      path: "../../fonts/BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../fonts/Bold.ttf",
      weight: "700",
    },
    {
      path: "../../fonts/ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../../fonts/LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});
