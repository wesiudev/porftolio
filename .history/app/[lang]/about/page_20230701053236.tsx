import Image from "next/image";
import { FaUser } from "react-icons/fa";
import picture from "./picture.jpg";
export default function About({ dictionary }: { dictionary: any }) {
  return (
    <div className="min-h-[25vh] w-[90vw] sm:w-3/4 mx-auto flex flex-col lg:items-center lg:flex-row-reverse relative">
      <div
        data-aos="fade-left"
        className="flex flex-col w-full lg:w-1/2  bg-slate-600 p-3 rounded-md z-50"
      >
        <h1 className="text-3xl text-white flex flex-row items-center pb-5">
          <FaUser className="mr-2" /> {dictionary["About"].title}
        </h1>
        <h2 className="text-lg text-white mx-auto z-50">
          {dictionary["About"].description}
        </h2>
      </div>
      <div
        data-aos="fade-right"
        className="flex items-center justify-center w-full h-max lg:w-1/2 overflow-hidden rounded-md z-50"
      >
        <Image
          src={picture}
          alt="wesiudev Paweł Wessel portfolio picture"
          width={1024}
          height={1024}
          className="rounded-md "
        />
      </div>
    </div>
  );
}
