import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import getImage from "../states/imageMapper";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin

const MAX_TEXT_LENGTH = 25;
const SCROLL_DURATION = 60; // Duration of one scroll in seconds

const CategoriesCarouselStates = () => {
  const categories = useSelector((state) => state.categories.list);
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: false });

      tl.to(carouselRef.current, {
        scrollTo: {
          x: carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
        },
        duration: SCROLL_DURATION,
        ease: "none",
        paused: isPaused,
      });

      return () => tl.kill();
    }
  }, [isPaused]);

  const formatText = (text) => {
    if (text.length > MAX_TEXT_LENGTH) {
      return `${text.substring(0, MAX_TEXT_LENGTH)}...`;
    }
    return text;
  };

  return (
    <div className="relative">
      <div
        className="flex overflow-x-scroll whitespace-nowrap py-4 no-scrollbar"
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)} // Pause on hover
        onMouseLeave={() => setIsPaused(false)} // Resume on hover out
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/states/${category.id}`}
            className="inline-block mx-2 flex flex-col items-center justify-center cursor-pointer"
            style={{ width: "120px", height: "180px" }}
          >
            <div className="relative mb-2 flex items-center justify-center w-24 h-24">
              <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src={getImage(category.imageName)}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-center text-sm font-semibold mt-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {formatText(category.name)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCarouselStates;
