export default function About({ dictionary }: { dictionary: any }) {
  return (
    <h1 data-aos="fade-bottom" className="w-max mx-auto text-3xl">
      {dictionary["About"].title}
    </h1>
  );
}
