"use client";
export default function CustomerHook({ dictionary }: { dictionary: any }) {
  return (
    <section className="min-h-screen min-w-screen">
      <div className="px-6 lg:px-0 lg:w-3/4 h-full text-black flex flex-col ">
        <h1 className="text-3xl z-50">{dictionary.CustomerHook.h1}asd</h1>
        <h2 className="text-3xl">{dictionary.CustomerHook.h2}</h2>
      </div>
    </section>
  );
}
