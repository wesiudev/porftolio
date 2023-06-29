type HeadProps = {
  title: string;
  description: string;
};

export default function Head({ title, description }: HeadProps) {
  return (
    <>
      <title>{`wesiu.dev - Front-end Developer | Homepage`}</title>
      <meta
        name=""
        content="How to do i18n in Next.js 13 within app directory"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}