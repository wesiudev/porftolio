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
        <body className={`${cocosharp.variable} font-sans scrollbarBlack`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    );
  }