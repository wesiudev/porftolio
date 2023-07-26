"use client";

import Navigation from "./Navigation";
import Main from "./modals/Main";

export default function Panel() {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <Navigation />
      <Main />
    </div>
  );
}
