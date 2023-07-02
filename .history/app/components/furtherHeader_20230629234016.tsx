type FurtherHeaderProps = {
  location: string;
};
export default function FurtherHeader({ location }: FurtherHeaderProps) {
  return (
    <div className="fixed top-0 left-[50%] -translate-x-[50%] h-12 w-full border-[2px] border-slate-700 m-5 box-border"></div>
  );
}
