"use client";
interface ScrollButtonProps {
  to: string;
  children: React.ReactNode;
}

export const ScrollButton = ({ to, children }: ScrollButtonProps) => {
  const handleClickScroll = () => {
    const element = document.getElementById(to);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <button onClick={() => handleClickScroll()}>{children}</button>;
};
