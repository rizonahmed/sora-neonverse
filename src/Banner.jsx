import React, { useState, useEffect } from "react";
import Nav from "./Nav";

// Slider Images
import sliderone from "./assets/sliderone.png";
import slidertwo from "./assets/slidertwo.png";
import sliderthree from "./assets/sliderthree.png";

import smallone from "./assets/smallone.png";
import smalltwo from "./assets/smalltwo.png";
import smallthree from "./assets/smallthree.png";
// Background Image
import bg from "./assets/bg.png";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([sliderone, slidertwo, sliderthree]);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlides([smallone, smalltwo, smallthree]);
      } else {
        setSlides([sliderone, slidertwo, sliderthree]);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  const getSlideClass = (index) => {
    const leftIndex = (currentIndex - 1 + slides.length) % slides.length;
    const rightIndex = (currentIndex + 1) % slides.length;
    if (index === currentIndex) return "slide-center";
    if (index === leftIndex) return "slide-left";
    if (index === rightIndex) return "slide-right";
    return "slide-hidden";
  };

  return (
    <div
      className="bg-[#12100C]  py-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        position: "relative",
        zIndex: "100",
      }}
    >
      <div>
        <Nav />
        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`
                absolute top-[-20%] sm:top-[-12%] md:top-[-14%] lg:top-[-20%] xl:top-[-20%] 2xl:top-[-10%] h-full flex items-center justify-center
                transition-all duration-1500 ${getSlideClass(index)}
              `}
            >
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain px-5 lg:px-0"
              />
            </div>
          ))}
        </div>
 
       {/* Pagination Dots (Now closer to the slider) */}
<div className="absolute top-7/12 sm:top-8/12 md:top-8/12 lg:top-7/12 xl:top-7/12 2xl:top-9/12  12 left-1/2 transform -translate-x-1/2 flex gap-2">
  {slides.map((_, index) => (
    <span
      key={index}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        index === currentIndex ? "bg-yellow-500 w-6" : "bg-gray-700"
      }`}
    ></span>
  ))}
</div>

      </div>

      {/* Custom CSS for slide positions */}
      <style jsx>{`
  @media (max-width: 768px) {
    div[style*='background-image'] {
      background-image: none !important;
    }
  }

  .slide-center {
    left: 20%;
    width: 58%;
    z-index: 10;
    opacity: 1;
    transition: all 0.75s ease-in-out; /* Adjusted to make the transition smoother */
  }

  @media (max-width: 1024px) {
    .slide-center {
      left: 0;
      width: 100%;
    }
    .slide-hidden, .slide-left, .slide-right {
      display: none;
    }
  }

  @media (min-width: 1025px) {
    /* Left Side - Opacity transition adjusted */
    .slide-left {
      left: -39%;
      width: 58%;
      z-index: 5;
      opacity: 0.7;
      transition: opacity 0.6s ease-out, transform 1s ease-in-out; /* Smooth opacity transition */
    }

    /* Right Side - Opacity transition adjusted */
    .slide-right {
      left: 79%;
      width: 58%;
      z-index: 5;
      opacity: 0.7;
      transition: opacity 0.6s ease-out, transform 1s ease-in-out; /* Smooth opacity transition */
    }

    /* Hidden Slide -> Right Side Transition */
    .slide-hidden {
      left: 110%;
      opacity: 0;
      z-index: 0;
      transition: all 1s ease-out; /* Adjusted to have smooth entry */
    }
  }
`}</style>


    </div>
  );
};

export default Banner;
