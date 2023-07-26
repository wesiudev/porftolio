import { MdSpaceDashboard } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { BiSolidMessageAltEdit } from "react-icons/bi";

export default function Navigation() {
  return (
    <div className="w-max text-left flex flex-col bg-white rounded-xl p-6 m-6">
      <button className="flex flex-row items-center p-3">
        <div className="h-max w-max bg-blue-200 p-1">
          <MdSpaceDashboard className="w-8  h-8" />{" "}
        </div>
        <span> Panel administracyjny </span>
      </button>
      <button className="flex flex-row items-center p-3">
        <div className="h-max w-max bg-blue-200 p-1">
          <BsFillBarChartFill className="w-8  h-8" />{" "}
        </div>
        <span> Statystyki</span>
      </button>
      <button className="flex flex-row items-center p-3">
        <div className="h-max w-max bg-blue-200 p-1">
          <BiSolidMessageAltEdit className="w-8  h-8" />
        </div>
        <span> Blog</span>
      </button>
    </div>
  );
}
