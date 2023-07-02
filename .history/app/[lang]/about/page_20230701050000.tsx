export default function About({ dictionary }: { dictionary: any }) {
  return (
    <div className="min-h-[25vh]">
      <h1 data-aos="fade-up" className="w-max mx-auto text-3xl text">
        {dictionary["About"].title}
      </h1>
    </div>
  );
}
