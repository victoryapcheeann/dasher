import React, { Component } from 'react';
import './Content2.css';
import './Queries.css';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine  } from 'recharts';

import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';

const data = [
      {name: 'Apr', Forex: 4000, Futures: 2400, Options: 5500},
      {name: 'May', Forex: 3000, Futures: 1398, Options: 2210},
      {name: 'Jun', Forex: 2000, Futures: 9800, Options: 2290},
      {name: 'Jul', Forex: 2780, Futures: 3908, Options: 2000},
];

class Content2 extends Component {
  render() {
      return (
        <div className="content2ChartContainer">
          <div>
          <AreaChart width={300} height={200} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>

              <XAxis dataKey="name" stroke="black"/>
              <YAxis stroke="black"/>
              <Tooltip
               cursor={false}
               labelStyle={{color: "black"}}
              />
            <Area type='monotone' dataKey='Forex' stackId="1" stroke='#fe5196' fill='#fe5196' className="areaChartContainer"/>
            <Area type='monotone' dataKey='Futures' stackId="1" stroke='#f4d03f' fill='#f4d03f' className="areaChartContainer"/>
            <Area type='monotone' dataKey='Options' stackId="1" stroke='#16a085' fill='#16a085' className="areaChartContainer"/>
            <Legend wrapperStyle={{left: 30, bottom: -15}}/>

          </AreaChart>
        </div>
          <div className="content2ChartStyle">
            <span>Quarterly Performance <br/> Forex, Futuress, Options</span>
            <div className="columnStyle">
              <div className="content2ChartDescriptionStyle">
                <span>Forex</span>
                <span className="content2ChartIconStyle">
                  <FaArrowCircleOUp size={20} color={"themeColor"}/>
                  <span>21.34%</span>
                </span>
              </div>
              <div className="content2ChartDescriptionStyle">
                <span>Futures</span>
                <span className="content2ChartIconStyle">
                  <FaArrowCircleODown size={20} color={"themeColor"}/>
                  <span>42.64%</span>
                </span>
              </div>
              <div className="content2ChartDescriptionStyle">
                <span>Options</span>
                <span className="content2ChartIconStyle">
                  <FaArrowCircleODown size={20} color={"themeColor"}/>
                  <span>14.64%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Content2;
