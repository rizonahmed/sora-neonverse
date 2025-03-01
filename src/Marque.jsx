import React from 'react';
import binance from './assets/binance.png';

const Marque = () => {
  return (
    <div className="bg-[#211F19] mt-4 sm:mt-0 lg:mt-4 2xl:mt-0 border-t-[4px] border-b-[4px] border-[#3A3434] py-5 overflow-hidden relative">
      <div className="flex items-center gap-5 whitespace-nowrap animate-marquee">
        {[...Array(2000)].map((_, index) => (
          <h1 key={index} className="text-[#BFBFBF] text-[18px] font-semibold flex items-center gap-5">
            <div className="flex gap-2 ml-10">
              5b9c894 Bought 0.008 of
              <img src={binance} alt="" className="w-6 h-6" />
              BNB
            </div>
          </h1>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-100%); }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @media (max-width: 1024px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
};

export default Marque;
