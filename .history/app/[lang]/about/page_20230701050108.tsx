export default function About({ dictionary }: { dictionary: any }) {
  return (
    <div className="min-h-[25vh] w-[90vw] sm:w-3/4">
      <h1 data-aos="fade-up" className="text-3xl text-white">
        {dictionary["About"].title}
      </h1>
    </div>
  );
}
