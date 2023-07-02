"use client";
import React, { useState, useEffect } from "react";

const TextSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const texts = ["Hello", "World", "React", "Component"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimate(false);
      }, 500); // Duration of the animation in milliseconds
    }, 2000);

    return () => clearInterval(intervalId);
  }, [texts]);

  return <div>{texts[currentIndex]}</div>;
};

export default TextSwitcher;
