import { MdSpaceDashboard } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { BiSolidMessageAltEdit } from "react-icons/bi";

export default function Navigation() {
  return (
    <div className="w-max text-left flex flex-col bg-white rounded-xl p-6 m-6">
      <button className="flex flex-row items-center p-3 group">
        <div className="h-max w-max bg-blue-400 p-1 mr-2 rounded-lg text-white duration-100 ease-in group-hover:bg-blue-300 group-hover:drop-shadow-sm shadow-black">
          <MdSpaceDashboard className="w-8 h-8 scale-90 group-hover:scale-100 duration-100 ease-in" />
        </div>
        <span>Panel administracyjny </span>
      </button>
      <button className="flex flex-row items-center p-3 group">
        <div className="h-max w-max bg-blue-400 p-1 mr-2 rounded-lg text-white duration-100 ease-in group-hover:bg-blue-300 group-hover:drop-shadow-sm shadow-black">
          <BsFillBarChartFill className="w-8 h-8 scale-90 group-hover:scale-100 duration-100 ease-in" />
        </div>
        <span>Statystyki</span>
      </button>
      <button className="flex flex-row items-center p-3 group">
        <div className="h-max w-max bg-blue-400 p-1 mr-2 rounded-lg text-white duration-100 ease-in group-hover:bg-blue-300 group-hover:drop-shadow-sm shadow-black">
          <BiSolidMessageAltEdit className="w-8 h-8 scale-90 group-hover:scale-100 duration-100 ease-in" />
        </div>
        <span>Blog</span>
      </button>
    </div>
  );
}
