import Image from "next/image";
import { FaUser } from "react-icons/fa";
import picture from "./picture.jpg";
export default function About({ dictionary }: { dictionary: any }) {
  return (
    <div className="min-h-[25vh] w-[90vw] sm:w-3/4 mx-auto flex flex-col lg:flex-row-reverse">
      <div className="flex flex-col w-full lg:w-1/2 bg-slate-600 p-3 rounded-md z-50">
        <h1
          data-aos="fade-down"
          className="text-3xl text-white flex flex-row items-center pb-5"
        >
          <FaUser className="mr-2" /> {dictionary["About"].title}
        </h1>
        <h2 className="text-lg text-white mx-auto z-50">
          {dictionary["About"].description}
        </h2>
      </div>
      <div className="flex items-center justify-center w-full h-max lg:w-1/2 overflow-hidden rounded-md z-50">
        <Image
          src={picture}
          alt="wesiudev Paweł Wessel portfolio picture"
          width={516}
          height={516}
          className="scale-125"
        />
      </div>
    </div>
  );
}
