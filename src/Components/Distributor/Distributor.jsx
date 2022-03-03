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
        <div className="flex flex-col items-center text-white mt-10 px-3">
        <h1 className="lg:text-[60px] md:text-[52px] sm:text-[40px] text-[28px] font-black mt-20 text-center">TOKEN <span className="text-[#FFFA7E]">DISTRIBUTION</span></h1>
        <p className="sm:text-[14px] text-[12px] text-center">Total supply $MetaEstate: 1 Billion (1,000,000,000)</p>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="students" label>
        {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
        </PieChart>
        </div>
    )
}

export default Distributor
