import React from 'react';
import button from './assets/button.png';
import animationone from './assets/animationone.png';
import animationtwo from './assets/animaitonwo.png';
import hit from './assets/hit.png';
import hit2 from './assets/hit2.png';

const Button = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[100px] bg-[#12100C] pt-20 pb-28 z-[100] -mt-52 sm:-mt-36 md:-mt-36 lg:-mt-52 xl:-mt-52 2xl:-mt-28">
      
      {/* Left Animation (Below Button) */}
      <div className="absolute left-[0%] sm:left-[20%] md:left-[-10%] lg:left-[-5%] 2xl:left-[15%] xl:left-[4%] flex items-center animate-slide-right z-10">
        <img 
          src={hit} 
          alt="Left Mobile" 
          className="h-8 md:hidden" 
        />
        <img 
          src={animationone} 
          alt="Left Animation" 
          className="hidden md:block h-8 md:h-10 lg:h-12" 
        />
      </div>

      {/* Center Button (Higher Z-Index) */}
      <div className="relative animate-button-pulse z-20">
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-40 z-10"></div>
        <img src={button} alt="Create Token" className="relative w-64 md:w-72 z-20" />
      </div>

      {/* Right Animation (Below Button) */}
      <div className="absolute right-[-3%] sm:right-[18%] md:right-[-10%] lg:right-[-5%] xl:right-[4%] 2xl:right-[15%] flex items-center animate-slide-left z-10">
        <img 
          src={hit2} 
          alt="Right Mobile" 
          className="h-8 md:hidden" 
        />
        <img 
          src={animationtwo} 
          alt="Right Animation" 
          className="hidden md:block h-8 md:h-10 lg:h-12" 
        />
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(5%); opacity: 0.7; }
          50% { opacity: 1; }
          100% { transform: translateX(-5%); opacity: 0.7; }
        }

        @keyframes slideRight {
          0% { transform: translateX(-5%); opacity: 0.7; }
          50% { opacity: 1; }
          100% { transform: translateX(5%); opacity: 0.7; }
        }

        @keyframes buttonPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .animate-slide-left {
          animation: slideLeft 3s ease-in-out infinite;
        }

        .animate-slide-right {
          animation: slideRight 3s ease-in-out infinite;
        }

        .animate-button-pulse {
          animation: buttonPulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Button;
