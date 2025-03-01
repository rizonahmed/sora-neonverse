import React from 'react';
import icon from './assets/binance.png';

const data = [
  { rank: 1, name: 'Kimi Ai', cap: '$0.020', token: 'BNB', progress: 0 },
  { rank: 2, name: 'Squid Game II', cap: '$0.020', token: 'BNB', progress: 0 },
  { rank: 3, name: 'Changning Zhao', cap: '$0.016', token: 'BNB', progress: 100 },
  { rank: 4, name: 'BNB Snowboard', cap: '$0.002', token: 'BNB', progress: 0 },
  { rank: 5, name: 'Dumb Boy', cap: '$0.000', token: 'BNB', progress: 0 },
];

const Table = () => {
  return (
    <div className='bg-[#15130F]'>
      <div className="px-2 pt-10 md:py-20 md:w-11/12 md:px-12 mx-auto">
        {/* ✅ Only Content-Wrapped Border */}
        <div className="inline-flex space-x-4 mb-4 overflow-x-auto md:border md:border-[#3A3434] p-2 rounded-full">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-xs md:text-[20px] whitespace-nowrap">
            Progress Ranking
          </button>
          {['24 Hours Gainers Ranking', 'MarketCap Ranking', '24 Hours Trading Volume'].map((tab, index) => (
            <button key={index} className="text-gray-400 hover:text-white px-4 py-2 text-xs md:text-[20px] whitespace-nowrap">
              {tab}
            </button>
          ))}
        </div>

        {/* Responsive Table */}
        <div className="bg-[#1C1A16] rounded-xl md:rounded-3xl border border-[#3A3434] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-white text-left text-xs md:text-[18px]">
              <thead >
                <tr className="border-b-2  border-[#3A3434] ">
                  <th className="p-2 py-5 md:py-6 md:px-14 text-left">#</th>
                  <th className='text-[10px] sm:text-[12px] md:text-[18px]'>Token Name</th>
                  <th className='text-[10px] sm:text-[12px] md:text-[18px]'>Market Cap</th>
                  <th className="text-left text-[10px] sm:text-[12px] md:text-[18px] ">Raised Token</th>
                  <th className='text-[10px] sm:text-[12px] md:text-[18px]'>Progress</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.rank} className={`border-b-2 border-[#3A3434] text-xs md:text-[20px] md:py-4 ${item.rank === 3 ? 'bg-[#24221E]' : ''}`}>
                    <td className="p-2 py-5 md:py-6 md:px-14">{item.rank}</td>
                    <td >{item.name}</td>
                    <td>{item.cap}</td>
                    <td className="table-cell text-left align-middle">
                      <div className="inline-flex items-center space-x-1">
                        <img src={icon} alt="BNB" className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{item.token}</span>
                      </div>
                    </td>

                    <td>
                      <div className="flex items-center space-x-2">
                        <span>{item.progress}</span>
                        <div className="w-20 md:w-40 h-2 bg-[#24221E] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400 transition-all"
                            style={{ width: `${item.progress > 0 ? item.progress : 5}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
