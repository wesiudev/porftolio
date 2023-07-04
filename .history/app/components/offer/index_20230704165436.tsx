"use client";
export default function CustomerHook({ dictionary }: { dictionary: any }) {
  return (
    <section className="min-h-screen min-w-screen">
      <div className="px-6 lg:px-0 lg:w-3/4 mx-auto h-full text-black flex flex-col justify-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl z-50">
          {dictionary.CustomerHook.h1}
        </h1>
        <h2 className="text-lg sm:text-xl z-50">
          {dictionary.CustomerHook.h2}
        </h2>
      </div>
    </section>
  );
}
