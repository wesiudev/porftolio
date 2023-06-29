type HeadProps = {
  title: string;
  description: string;
};

export default function Head({ title, description }: HeadProps) {
  return (
    <>
      <title>{`${title}`}</title>
      <meta
        name={description}
        content="Front-end developer portfolio website. See my projects."
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}