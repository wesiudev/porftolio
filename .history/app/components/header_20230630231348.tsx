import Link from "next/link";
import { FaGithub, FaUserCircle } from "react-icons/fa";
import { LinkRoute } from "./RouteLink";

export default function Header({
  dictionary,
  lang,
}: {
  dictionary: any;
  lang: any;
}) {
  return (
    <div
      className={`w-full px-8 lg:px-0 lg:w-3/4 flex justify-between py-6 lg:py-12 text-white absolute top-0 left-[50%] -translate-x-[50%] z-[999]`}
    >
      <Link
        href="https://www.github.com/wesiudev"
        target="_blank"
        className="flex items-center  sm:p-3 bg-gradient-to-b hover:bg-gradient-to-br from-gray-600 hover:from-green-500 to-gray-500 hover:to-gray-500 rounded-md w-max"
      >
        <FaGithub className="text-2xl mr-2" />
        <code className="">/wesiudev</code>
      </Link>
      <div className="">
        <LinkRoute
          lang={lang}
          to="/clients"
          className="flex items-center p-3 bg-gradient-to-br from-green-500 hover:from-green-400 to-gray-500 hover:to-gray-400 rounded-md w-max"
        >
          <FaUserCircle className="text-2xl mr-2" />
          <code className="">{dictionary["Header"]?.clients}</code>
        </LinkRoute>
      </div>
    </div>
  );
}
