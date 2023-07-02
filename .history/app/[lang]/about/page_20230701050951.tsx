export default function About({ dictionary }: { dictionary: any }) {
  return (
    <div className="min-h-[25vh] w-[90vw] sm:w-3/4 mx-auto">
      <h1 data-aos="fade-up" className="text-3xl text-white w-max mx-auto">
        {dictionary["About"].title}
      </h1>
      <h2 className="text-3xl text-white mx-auto z-50">
        {dictionary["About"].description}
      </h2>
    </div>
  );
}
