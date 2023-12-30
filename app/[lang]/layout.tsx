import { Locale, i18n } from "../../i18n-config";
import "../../app/styles/globals.css";
import localFont from "next/font/local";
import { getDictionary } from "../../get-dictionary";
import { Metadata } from "next";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export const metadata: Metadata = {
  icons: [
    {
      url: "/favicon.ico",
      sizes: "32x32",
      type: "image/x-icon",
    },
  ],

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
        {children}
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
