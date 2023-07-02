import React, { useState, useEffect } from "react";

const TextSwitcher = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Hello", "World", "React", "Component"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [texts]);

  return <div>{texts[currentIndex]}</div>;
};

export default TextSwitcher;
