import { ImagesSlider } from "./components/ImagesSlider";

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ImagesSlider />
      {children}
    </>
  );
}
