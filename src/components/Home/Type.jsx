import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Type({ data }) {
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const experience = data.introduces[0].experience;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperienceIndex((prevIndex) =>
        prevIndex < experience.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [experience]);

  const handleTypewriterComplete = () => {
    setCurrentExperienceIndex((prevIndex) =>
      prevIndex < experience.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <Typewriter
        key={currentExperienceIndex}
        options={{
          strings: [
            data ? experience[currentExperienceIndex] : "Developer",
            "MERN Stack Developer",
            "&",
            "Learning Backend Development",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: false,
          deleteSpeed: 50,
          onComplete: handleTypewriterComplete,
        }}
      />
    </>
  );
}

export default Type;
