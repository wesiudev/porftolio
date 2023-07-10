"use client";

export const HomeTitle = () => {
  return (
    <div
      className={`h-max w-max 
          absolute bottom-12 sm:bottom-[15vh] lg:bottom-[8vh] xl:bottom-[5vh] duration-300 -translate-x-[50%] left-[50%] flex flex-col select-none`}
    >
      <span
        className={`text-zinc-800
            text-6xl sm:text-8xl lg:text-9xl font-sans font-bold  drop-shadow-lg shadow-black duration-500`}
      >
        <code>wesiu</code>
        <span
          className={`
             visible mx-1 duration-500 ease-in-out  text-zinc-800 delay-500
          }`}
        >
          .
        </span>
        <code>dev</code>
      </span>
      <div className="flex justify-between w-full mt-3">
        {" "}
        <code
          className={`text-black w-max font-extralight italic drop-shadow-lg shadow-black`}
        >
          web
        </code>
        <code
          className={`"text-black w-max font-extralight italic drop-shadow-lg shadow-black`}
        >
          dev
        </code>{" "}
      </div>
    </div>
  );
};
