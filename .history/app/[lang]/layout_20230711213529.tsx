import { Locale, i18n } from "../../i18n-config";
import "../../app/styles/globals.css";
import localFont from "next/font/local";
import { Providers } from "../../redux/Provider";
import FurtherHeader from "../components/headers/furtherHeader";
import { getDictionary } from "../../get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  viewport: "width=device-width, initial-scale=1",
};
export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html className="scrollbarBlack" lang={params.lang}>
      <body className={`${cocosharp.variable} font-sans scrollbarBlack`}>
        <FurtherHeader
          location="technologies"
          lang={params.lang}
          dictionary={dictionary}
        />
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
