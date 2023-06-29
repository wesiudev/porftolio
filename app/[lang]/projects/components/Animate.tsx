"use client";

import { useEffect, useState } from "react";

export const Animate = ({ children }: { children: React.ReactNode }) => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  useEffect(() => {
    setIsAnimationStarted(true);
  }, []);
  return (
    <div
      className={`w-full overflow-x-hidden ${
        isAnimationStarted
          ? "text-zinc-800 translate-x-0 scale-100 ease-in duration-500"
          : "translate-x-[100%] scale-0"
      }`}
    >
      {children}
    </div>
  );
};
