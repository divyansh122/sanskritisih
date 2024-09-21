import React, { useState, useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import { artist1, artist2, artist3 } from "../assets/images/images"; // Adjust the imports as needed
import carouselContent from "../states/artistSpotlightData.json"; // Adjust the path as necessary

// Create a mapping for the images
const imageImports = {
  artist1: artist1,
  artist2: artist2,
  artist3: artist3,
  // Add other mappings as needed
};

const SideCarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextSlide = () => {
    setFadeOut(true); // Trigger fade-out animation
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
      setFadeOut(false); // Reset fade state for the next slide
    }, 500); // Duration of fade-out animation
  };

  const prevSlide = () => {
    setFadeOut(true); // Trigger fade-out animation
    setTimeout(() => {
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + carouselContent.length) % carouselContent.length
      );
      setFadeOut(false); // Reset fade state for the next slide
    }, 500); // Duration of fade-out animation
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  useEffect(() => {
    // Animate fade in when activeIndex changes
    if (!fadeOut) {
      gsap.fromTo(".fade-slide", { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }
  }, [activeIndex, fadeOut]);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center w-full">
        Artist Spotlight
      </h1>
      <div className="flex justify-center mt-10">
        <div className="relative w-[900px] h-[500px] mb-10 bg-white shadow-md flex items-center">
          <button className="absolute left-[-50px] z-10" onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M15.78 18.78a.75.75 0 01-1.06 0l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 111.06 1.06L10.56 12l5.22 5.22a.75.75 0 010 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="w-1/2 h-full">
            <img
              className={`object-cover w-full h-full fade-slide ${
                fadeOut ? "opacity-0" : ""
              }`} // Add fade-slide class for animation
              src={
                imageImports[carouselContent[activeIndex].src] ||
                carouselContent[activeIndex].src + ".png"
              } // Use the mapped image
              alt={carouselContent[activeIndex].alt}
            />
          </div>
          <div className="border-l border-gray-300 h-full"></div>
          <div className="w-1/2 h-full flex items-center justify-center flex-col bg-[#9E080D] text-white">
            <h2 className="text-3xl font-bold pl-4 text-left">
              {carouselContent[activeIndex].heading}
            </h2>
            <p className="mt-10 text-justify px-4">
              {carouselContent[activeIndex].text}
            </p>
          </div>
          <button className="absolute right-[-50px] z-10" onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M8.22 18.78a.75.75 0 001.06 0l6-6a.75.75 0 000-1.06l-6-6a.75.75 0 10-1.06 1.06L13.44 12l-5.22 5.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideCarouselComponent;
