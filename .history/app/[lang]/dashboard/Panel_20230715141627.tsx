"use client";

import Navigation from "./Navigation";

export default function Panel() {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <Navigation />
    </div>
  );
}
