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
              <XAxis dataKey="name" tick={{ fill: 'white' }} stroke="white"/>
              <YAxis tick={{ fill: 'white' }} stroke="white"/>
              <Tooltip
               cursor={false}
               itemStyle={{backgroundColor: '#432c39', margin:'15px -15px -15px -15px', padding:'5px'}}
               labelStyle={{backgroundColor: '#432c39', margin:'-15px', padding: '5px'}}
              />
              <Legend />
            <Area type='monotone' dataKey='Forex' stackId="1" stroke='#45EC99' fill='#45EC99' className="areaChartContainer"/>
            <Area type='monotone' dataKey='Futures' stackId="1" stroke='#FCFC8C' fill='#FCFC8C' className="areaChartContainer"/>
            <Area type='monotone' dataKey='Options' stackId="1" stroke='blueviolet' fill='blueviolet' className="areaChartContainer"/>
          </AreaChart>
        </div>
          <div className="content2ChartStyle">
            <span>Quarterly Performance <br/> Forex, Futuress, Options</span>
            <div className="columnStyle">
              <div className="content2ChartDescriptionStyle">
                <span>Forex</span>
                <span className="content2ChartIconStyle">
                  <FaArrowCircleOUp size={20} color={"white"}/>
                  <span>21.34%</span>
                </span>
              </div>
              <div className="content2ChartDescriptionStyle">
                <span>Futures</span>
                <span className="content2ChartIconStyle">
                  <FaArrowCircleODown size={20} color={"white"}/>
                  <span>42.64%</span>
                </span>
              </div>
              <div className="content2ChartDescriptionStyle">
                <span>Options</span>
                <span className="content2ChartIconStyle">
                  <FaArrowCircleODown size={20} color={"white"}/>
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
