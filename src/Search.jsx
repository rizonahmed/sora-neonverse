import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import chanpeng from './assets/changpeng.png';
import dumb from './assets/dumb.png';
import bnb from './assets/bnb.png';
import kimi from './assets/kimi.png';
import snowboard from './assets/snowboard.png';
import squid from './assets/squid.png';
import x from './assets/x.png';
import telegram from './assets/telegram.png';
import internet from './assets/internet.png';
import binance from './assets/binance.png';

const data = [
  { img: chanpeng, name: 'Changpeng Zhao', cap: '0.02', chain: 'BNB', progress: 100 },
  { img: dumb, name: 'Dumb Boy', cap: '0.00', chain: 'BNB', progress: 0 },
  { img: bnb, name: 'BNB Snowboard', cap: '0.00', chain: 'BNB', progress: 0 },
  { img: kimi, name: 'Kimi Ai', cap: '0.00', chain: 'BNB', progress: 0 },
  { img: snowboard, name: 'BNB Snowboard', cap: '0.00', chain: 'BNB', progress: 0 },
  { img: squid, name: 'Squid Game III', cap: '0.00', chain: 'BNB', progress: 0 },
];

const Search = () => {
  const topRow = data.slice(0, 4);
  const bottomRow = data.slice(4);

  return (
    <div className='bg-[#12100C]'>
      <div className="min-h-screen py-16 p-6 md:w-11/12 mx-auto md:px-14">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search Token"
              className="bg-[#1C1E18] border border-gray-700 text-white py-2 pl-10   rounded-full w-full outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            {['Creation Time', 'Order: Desc', 'Time'].map((filter, idx) => (
              <button key={idx} className="flex items-center bg-[#1C1A16] border border-gray-700 text-white px-2 md:px-4 py-2 text-[11px] lg:text-lg rounded-xl md:rounded-full">
                {filter}
                <IoIosArrowDown className="ml-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Top Row Cards (4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topRow.map((item, index) => (
            <div key={index} className="bg-[#1C1A16] rounded-xl p-5 shadow-md border border-gray-700">
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-lg mb-4" />
              <div className='flex justify-between'>
                {/* h3 text truncate করে দেওয়া হলো */}
                <h3 className="text-white font-semibold text-lg truncate overflow-hidden whitespace-nowrap max-w-[150px]">
                  {item.name}
                </h3>

                {/* Buttons */}
                <div className='flex gap-2'>
                  <button className='bg-[#0583C6] py-1 px-2 rounded-3xl text-xs text-white'>Audit</button>
                  <button className='bg-[#08956B] py-1 px-3 rounded-3xl text-xs text-white'>kyc</button>
                </div>
              </div>


              <p className="text-gray-400 text-sm mt-1 flex justify-between">
                Market Cap:
                <span className="text-white pt-2">{item.cap}</span>
              </p>
              <p className="text-gray-400 text-sm mt-1 flex justify-between pb-3">
                Chain: <span className="text-white flex items-center gap-1">
                  <img src={binance} alt="Binance" className="w-4 h-4" /> {item.chain}
                </span>
              </p>

              {/* Icons and Progress Bar */}
              <div className='border-t border-gray-500 py-3 flex justify-between items-start'>
                {/* Progress Bar */}
                <div className="flex flex-col w-[70%]">
                  <div className='flex justify-between pb-1'>
                    <p className='text-white'>
                      {index === 0 || index === data.length - 1
                        ? item.name.split(' ')[1]
                        : index === 2
                          ? item.name.split(' ')[1]?.slice(0, 4) // দ্বিতীয় শব্দের প্রথম ৪টা অক্ষর
                          : item.name.split(' ')[0]}
                    </p>
                    <p className="text-yellow-400 text-sm mt-1">{item.progress}%</p>
                  </div>


                  {/* Progress bar */}
                  <div className="w-full bg-gray-700 h-2 rounded-full mt-1 relative">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${item.progress === 0 ? 'bg-yellow-500' : 'bg-yellow-400'
                        }`}
                      style={{ width: `${item.progress > 0 ? item.progress : 5}%` }}
                    ></div>

                  </div>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-3 pt-5  pl-3">
                  <img src={x} alt="X" className="w-6 h-6 cursor-pointer" />
                  <img src={telegram} alt="Telegram" className="w-6 h-6 cursor-pointer" />
                  <img src={internet} alt="Website" className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row Cards (2 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomRow.map((item, index) => (
            <div key={index} className="bg-[#1C1A16] rounded-xl p-5 shadow-md border border-gray-700">
              <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-lg mb-4" />
              <div className='flex justify-between items-center'>
                {/* h3 text truncate */}
                <h3 className="text-white font-semibold text-lg truncate overflow-hidden whitespace-nowrap max-w-[150px]">
                  {item.name}
                </h3>

                {/* Buttons */}
                <div className='flex gap-2'>
                  <button className='bg-[#0583C6] py-1 px-2 rounded-3xl text-xs text-white'>Audit</button>
                  <button className='bg-[#08956B] py-1 px-3 rounded-3xl text-xs text-white'>kyc</button>
                </div>
              </div>


              <p className="text-gray-400 text-sm mt-1 flex justify-between">
                Market Cap:
                <span className="text-white pt-2">{item.cap}</span>
              </p>
              <p className="text-gray-400 text-sm mt-1 flex justify-between pb-3">
                Chain: <span className="text-white flex items-center gap-1">
                  <img src={binance} alt="Binance" className="w-4 h-4" /> {item.chain}
                </span>
              </p>

              {/* Progress Bar with Percentage Above */}
              <div className='border-t border-gray-500 py-3 flex justify-between items-start'>
                {/* Progress Bar */}
                <div className="flex flex-col w-[70%]">
                  <div className='flex justify-between pb-1'>
                    <p className='text-white'> SG3</p>
                    <p className="text-yellow-400 text-sm mt-1">{item.progress}%</p>
                  </div>

                  <div className="w-full bg-gray-700 h-2 rounded-full mt-1 relative">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${item.progress === 0 ? 'bg-yellow-500' : 'bg-yellow-400'
                        }`}
                      style={{ width: `${item.progress > 0 ? item.progress : 5}%` }}
                    ></div>

                  </div>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-3 pt-5  pl-3">
                  <img src={x} alt="X" className="w-6 h-6 cursor-pointer" />
                  <img src={telegram} alt="Telegram" className="w-6 h-6 cursor-pointer" />
                  <img src={internet} alt="Website" className="w-6 h-6 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
