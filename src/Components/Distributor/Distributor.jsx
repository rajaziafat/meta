import React from 'react'
import { PieChart, Pie,Cell} from 'recharts';

function Distributor() {
    const data = [
      {name: 'Team', students: 25.0,},
      {name: 'Technical scripter', students: 15.0,},
      {name: 'Geek-i-knack', students: 10.0 ,},
      {name: 'Geek-o-mania', students: 5.9,},
      {name: 'Geek-o-mania', students: 2.5,},
      {name: 'Geek-o-mania', students: 12.5,},
      {name: 'Geek-o-mania', students: 30.0,},
    ];
    const COLORS = ['#0066AC', '#46D362', '#FF543E', '#339EE3','#3962FF','#FF9100','#C048F3'];
    return (
        <div className="flex flex-col items-center text-white mt-10 sm:px-3 px-0">
        <h1 className="lg:text-[60px] md:text-[52px] sm:text-[40px] text-[28px] font-black mt-20 text-center">TOKEN <span className="text-[#FFFA7E]">DISTRIBUTION</span></h1>
        <p className="sm:text-[14px] text-[12px] text-center">Total supply $MetaEstate: 1 Billion (1,000,000,000)</p>
        <div className="relative sm:mt-0 mt-3">
          <div className="absolute sm:top-[10%] top-[7%] right-[60%] sm:rotate-0 rotate-6 z-50 flex items-end">
            <div>
            <p className="md:text-[12px] sm:text-[9px] text-[8px] mr-2">STAKING</p>
                <h1 className="md:text-[22px] sm:text-[16px] text-[14px] mr-2">15.0%</h1>
            </div>
            <div className="md:w-40 sm:w-20 w-12 h-[1px] bg-white"></div>
          </div>
          <div className="absolute sm:top-[30%] top-[24%] right-[72%] sm:rotate-0 rotate-6 z-50 flex items-end">
            <div>
            <p className="md:text-[12px] sm:text-[9px] text-[8px] mr-2 w-[100%]">PUBLIC SALE</p>
                <h1 className="md:text-[22px] sm:text-[16px] text-[14px] mr-2">10.0%</h1>
            </div>
            <div className="sm:w-28 w-12 h-[1px] bg-white"></div>
          </div>
          <div className="absolute sm:top-[47%] top-[44%] sm:right-[72%] right-[74%] z-50 sm:rotate-0 rotate-3 flex items-center">
            <div>
            <p className="md:text-[12px] sm:text-[9px] text-[8px] mr-2 w-[120%]">SEED INVESTOR</p>
                <h1 className="md:text-[22px] sm:text-[16px] text-[14px] mr-2">5.9%</h1>
            </div>
            <div className="sm:w-32 w-12 h-[1px] bg-white"></div>
          </div>
          <div className="absolute sm:top-[62%] top-[62%] right-[83%] sm:rotate-0 rotate-2 z-50 flex items-center">
            <div>
            <p className="md:text-[12px] sm:text-[9px] text-[6px] mr-2 w-[130%]">ANGEL INVESTOR</p>
                <h1 className="md:text-[22px] sm:text-[16px] text-[10px] mr-2">2.5%</h1>
            </div>
            <div className="sm:w-24 w-10 h-[1px] bg-white"></div>
          </div>
          <div className="absolute sm:top-[78%] top-[75%] right-[68%] z-50 flex items-center">
            <div>
            <p className="md:text-[12px] sm:text-[9px] text-[7px] mr-2 w-[150%]">COMMUNITY , MAKETING</p>
                <h1 className="md:text-[22px] sm:text-[16px] text-[14px] mr-2">12.5%</h1>
            </div>
            <div className="sm:w-36 w-14 h-[1px] bg-white"></div>
          </div>
          <div className="absolute top-[30%] sm:right-[-25%] right-[-10%] z-50 flex items-center">
            <div className="sm:w-36 w-14 h-[1px] bg-white"></div>
            <div className="flex flex-col items-end">
            <p className="md:text-[12px] sm:text-[9px] text-[8px]">TEAM</p>
                <h1 className="md:text-[22px] sm:text-[16px] text-[14px] ml-2">30.0%</h1>
            </div>
          </div>
          <div className="absolute top-[65%] sm:right-[-25%] right-[-10%] z-50 flex items-end">
            <div className="sm:w-36 w-14 h-[1px] bg-white"></div>
            <div className="flex flex-col items-end">
            <p className="md:text-[12px] sm:text-[9px] text-[8px]  w-[100%]">MARKETPLACE</p>
                <h1 className="md:text-[22px] sm:text-[16px] text-[14px] ml-2">30.0%</h1>
            </div>
          </div>
        <PieChart width={400} height={400} className="md:flex hidden">
          <Pie data={data} dataKey="students">
        {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
        </PieChart>
        <PieChart width={300} height={300} className="md:hidden sm:flex hidden">
          <Pie data={data} dataKey="students">
        {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
        </PieChart>
        <PieChart width={200} height={200} className="sm:hidden flex">
          <Pie data={data} dataKey="students">
        {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
        </PieChart>
        </div>
        </div>
    )
}

export default Distributor
