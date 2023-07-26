export default function Navigation() {
  return (
    <div className="w-max text-left flex flex-col bg-white rounded-xl p-6 m-6">
      <button className="flex flex-row items-center">
        <span> Panel administracyjny </span>
      </button>
      <button className="flex flex-row items-center">
        <span> Statystyki</span>
      </button>
      <button className="flex flex-row items-center">
        <span> Blog</span>
      </button>
    </div>
  );
}
