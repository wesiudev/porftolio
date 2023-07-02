export default function About({ dictionary }: { dictionary: any }) {
  return (
    <div className="min-h-[25vh] w-[90vw] sm:w-3/4 mx-auto flex flex-col lg:flex-row">
      <h1 data-aos="fade-up" className="text-3xl text-white ">
        {dictionary["About"].title}
      </h1>
      <h2 className="text-3xl text-white mx-auto z-50">
        {dictionary["About"].description}
      </h2>
    </div>
  );
}