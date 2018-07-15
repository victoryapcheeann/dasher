import React, { Component } from 'react';
import './SavingChart.css';
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer  } from 'recharts';
import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';

const data = [
      {name: 'May', uv: 300},
      {name: 'Jun', uv: 200},
      {name: 'Jul', uv: 500},
      {name: 'Aug', uv: 700, pv: 4800, amt: 218},
      {name: 'Sep', uv: 1000, pv: 3800, amt: 2500},
      {name: 'Oct', uv: 900},
];

class SavingChart extends Component {
  render() {
      return (
        <div className="savingChartContainer">
          <div className="savingChartStyle">
            <span className>Yearly Savings</span>
            <div className="rowStyle">
              <div className="savingChartDescriptionStyle">
                <span className='textIncreaseColor'>2018: $16,344</span>
                <span>2017: $8,172</span>
              </div>
              <div className="savingChartIconStyle">
                <FaArrowCircleOUp size={20} color={"#74ebd5"}/>
                <span>200%</span>
              </div>
            </div>
          </div>
            <LineChart width={300} height={100} data={data}>
              <defs>
                <linearGradient id="CoolGradient2" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="lightgreen" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#39F3BB" stopOpacity={1} />
                </linearGradient>
                <XAxis/>
              </defs>
              <Line type="monotone" dataKey="uv" stroke='url(#CoolGradient2)' strokeWidth={5} dot={false}/>
            </LineChart>
        </div>
      );
  }
}

export default SavingChart;
