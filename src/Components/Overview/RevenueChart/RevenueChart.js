import React, { Component } from 'react';
import './RevenueChart.css';
import { LineChart, Line, Tooltip, XAxis } from 'recharts';

import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';
const data = [
      {name: 'May', uv: 21172},
      {name: 'Jun', uv: 15000},
      {name: 'Jul', uv: 8000},
      {name: 'Aug', uv: 35000},
      {name: 'Sep', uv: 20500},
      {name: 'Oct', uv: 22234},
];

class RevenueChart extends Component {
  render() {
      return (
        <div className="revenueChartContainer">
          <div className="revenueChartStyle">
            <span className>Yearly Revenue</span>
            <div className="rowStyle">
              <div className="revenueChartDescriptionStyle">
                <span className="textNoChangeColor">2018: $22,234</span>
                <span>2017: $21,172</span>
              </div>
              <div className="revenueChartIconStyle">
                <FaArrowCircleODown size={20} color={"#ffecd2"}/>
                <span className="textNoChangeColor">1.60%</span>
              </div>
            </div>
          </div>
          <LineChart width={300} height={100} data={data}>
            <defs>
              <linearGradient id="CoolGradient3" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ff9a9e" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ffecd2" stopOpacity={1} />
              </linearGradient>
              <XAxis/>
            </defs>
            <Line type="monotone" dataKey="uv" stroke='url(#CoolGradient3)' strokeWidth={5} dot={false}/>
          </LineChart>
        </div>
      );
  }
}

export default RevenueChart;
