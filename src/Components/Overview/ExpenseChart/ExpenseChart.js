import React, { Component } from 'react';
import './ExpenseChart.css';
import { LineChart, Line, Tooltip, XAxis } from 'recharts';

import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';
const data = [
      {name: 'May', uv: 1000},
      {name: 'Jun', uv: 1200},
      {name: 'Jul', uv: 2000},
      {name: 'Aug', uv: 900},
      {name: 'Sep', uv: 400},
      {name: 'Oct', uv: 200},
];

class ExpenseChart extends Component {
  render() {
      return (
        <div className="expenseChartContainer">
          <div className="expenseChartStyle">
            <span className>Yearly Expense</span>
            <div className="rowStyle">
              <div className="expenseChartDescriptionStyle">
                <span className='textDecreaseColor'>2018: $5,344</span>
                <span>2017: $8,172</span>
              </div>
              <div className="expenseChartIconStyle">
                <FaArrowCircleODown size={20} color={"#ed6ea0"}/>
                <span>34.60%</span>
              </div>
            </div>
          </div>
          <LineChart width={300} height={100} data={data}>
            <defs>
              <linearGradient id="CoolGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ed6ea0" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ffafbd" stopOpacity={1} />
              </linearGradient>
              <XAxis/>
            </defs>
            <Line type="monotone" dataKey="uv" stroke='url(#CoolGradient)' strokeWidth={5} dot={false}/>
          </LineChart>
        </div>
      );
  }
}

export default ExpenseChart;
