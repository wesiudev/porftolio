export default function CustomerHook({ dictionary }: { dictionary: any }) {
  return (
    <section className="min-h-screen min-w-screen">
      <div className="px-6 lg:px-0 lg:w-3/4">
        <h1>{dictionary.CustomerHook.h1}</h1>
        <h2>{dictionary.CustomerHook.h2}</h2>
      </div>
    </section>
  );
}
