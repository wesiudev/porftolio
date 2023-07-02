export default function About({ dictionary }: { dictionary: any }) {
  return (
    <div className="min-h-[25vh] w-[90vw] sm:w-3/4 mx-auto flex flex-col lg:flex-row">
      <div className="flex flex-col w-full lg:w-1/2 bg-slate-600 z-50">
        <h1 data-aos="fade-up" className="text-3xl text-white ">
          {dictionary["About"].title}
        </h1>
        <h2 className="text-lg text-white mx-auto z-50">
          {dictionary["About"].description}
        </h2>
      </div>
    </div>
  );
}
