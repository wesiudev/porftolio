import { MdSpaceDashboard } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className="w-max text-left flex flex-col bg-white rounded-xl p-6 m-6">
      <button className="flex flex-row items-center">
        <MdSpaceDashboard /> <span> Panel administracyjny </span>
      </button>
      <button className="flex flex-row items-center">
        <BsFillBarChartFill /> <span> Statystyki</span>
      </button>
      <button className="flex flex-row items-center">
        <span> Blog</span>
      </button>
    </div>
  );
}
