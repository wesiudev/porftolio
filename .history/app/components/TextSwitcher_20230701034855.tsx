"use client";
import React, { useState, useEffect } from "react";

const TextSwitcher = ({ dictionary }: { dictionary: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dictionary.length);
        setAnimate(false);
      }, 500); // Duration of the animation in milliseconds
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dictionary]);

  return (
    <div
      className={`flex flex-row items-center text-rotator bg-gradient-to-r from-purple-500 to-rose-500 bg-clip-text text-transparent ${
        animate ? "animate" : ""
      }`}
    >
      {dictionary[currentIndex]}
    </div>
  );
};

export default TextSwitcher;
