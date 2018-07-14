import React, { Component } from 'react';
import './Content.css';
import './Queries.css';

import { BarChart, Bar, ReferenceLine, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';

const data = [
      {name: 'Apr', stock: 4000, bonds: 2400, amt: 2400},
      {name: 'May', stock: 9000, bonds: 1398, amt: 2210},
      {name: 'Jun', stock: -2000, bonds: -1800, amt: 2290}
];

class Content extends Component {
  render() {
      return (
        <div className="contentChartContainer">
          <BarChart width={300} height={200} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis dataKey="name" tick={{ fill: 'white' }} stroke="white"/>
               <YAxis tick={{ fill: 'white' }} stroke="white"/>
               <Tooltip
                cursor={false}
                itemStyle={{backgroundColor: '#432c39', margin:'15px -15px -15px -15px', padding:'5px'}}
                labelStyle={{backgroundColor: '#432c39', margin:'-15px', padding: '5px'}}
               />
               <Legend />
               <ReferenceLine y={0} stroke='white'/>
               <Bar dataKey="stock" fill="#a8edea" />
               <Bar dataKey="bonds" fill="#fed6e3" />
            </BarChart>
          <div className="contentChartStyle">
            <span>Quarterly Performance <br/> Stock & Bond</span>
            <div className="columnStyle">
              <div className="contentChartDescriptionStyle">
                <span>Stock</span>
                <span className="contentChartIconStyle">
                  <FaArrowCircleOUp size={20} color={"lightgreen"}/>
                  <span className="textIncreaseColor">54.64%</span>
                </span>
              </div>
              <div className="contentChartDescriptionStyle">
                <span>Bond</span>
                <span className="contentChartIconStyle">
                  <FaArrowCircleOUp size={20} color={"#ffecd2"}/>
                  <span className="textNoChangeColor">4.64%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Content;
