import React, { Component } from 'react';
import './Content.css';
import './Queries.css';
import themeColor from '../../Color'

import { BarChart, Bar, ReferenceLine, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import FaArrowCircleOUp from 'react-icons/lib/fa/arrow-circle-o-up';
import FaArrowCircleODown from 'react-icons/lib/fa/arrow-circle-o-down';

const data = [
      {name: 'Apr', Stock: 4000, Bonds: 2400, amt: 2400},
      {name: 'May', Stock: 9000, Bonds: 1398, amt: 2210},
      {name: 'Jun', Stock: -2000, Bonds: -1800, amt: 2290}
];

class Content extends Component {
  render() {
      return (
        <div className="contentChartContainer">
          <BarChart width={300} height={200} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis dataKey="name" stroke="black"/>
               <YAxis stroke="black"/>
               <Tooltip
                cursor={false}
                labelStyle={{color: 'black'}}
               />
               <Legend />
               <Bar dataKey="Stock" fill="#f9d423" />
               <Bar dataKey="Bonds" fill="#24d292" />
            </BarChart>
          <div className="contentChartStyle">
            <span>Quarterly Performance <br/> Stock & Bond</span>
            <div className="columnStyle">
              <div className="contentChartDescriptionStyle">
                <span>Stock</span>
                <span className="contentChartIconStyle">
                  <FaArrowCircleOUp size={20} color={'themeColor'}/>
                  <span>54.64%</span>
                </span>
              </div>
              <div className="contentChartDescriptionStyle">
                <span>Bond</span>
                <span className="contentChartIconStyle">
                  <FaArrowCircleOUp size={20} color={'themeColor'}/>
                  <span>4.64%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Content;
