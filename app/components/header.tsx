import Link from "next/link";
import { FaGithub, FaUserCircle } from "react-icons/fa";

export default async function Header({
  dictionary,
  position,
}: {
  dictionary: any;
  position: string;
}) {
  if (dictionary !== undefined)
    return (
      <div
        className={`w-full px-3 lg:px-0 lg:w-3/4 flex justify-between py-6 lg:py-12 text-white ${position} top-0 left-[50%] -translate-x-[50%] z-[999]`}
      >
        <Link
          href="https://www.github.com/wesiudev"
          target="_blank"
          className="flex items-center p-3 bg-gradient-to-b hover:bg-gradient-to-br from-gray-600 hover:from-green-500 to-gray-500 hover:to-gray-500 rounded-md w-max"
        >
          <FaGithub className="text-2xl mr-2" />
          <code className="">/wesiudev</code>
        </Link>
        <div className="">
          <Link
            href="/clients"
            className="flex items-center p-3 bg-gradient-to-br from-green-500 hover:from-green-400 to-gray-500 hover:to-gray-400 rounded-md w-max"
          >
            <FaUserCircle className="text-2xl mr-2" />
            <code className="">{dictionary["Header"]?.clients}</code>
          </Link>
        </div>
      </div>
    );
}
