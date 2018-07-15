import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data01 = [{name: 'Freelance', value: 400}, {name: 'Job', value: 300},
                  {name: 'Stock', value: 300}, {name: 'Bonds', value: 200}]

const data02 = [{name: 'Mr Lee', value: 100},
                    {name: 'John Do', value: 300},
                   {name: 'Job 1', value: 100},
                   {name: 'Job 2', value: 80},
                  {name: 'AAPL', value: 100},
                  {name: 'FB', value: 200},
                   {name: 'Bond 1', value: 150},
                   {name: 'Bond 2', value: 50}]

const COLORS01 = ['#0088FE', 'Pink', '#FFBB28', '#FF8042'];
const COLORS02 = ['#0088FE', 'Pink', '#FFBB28', '#FF8042'];

class RevenuePieChart extends Component {
  render() {
      return (
        <div className="rowStyle">
          <PieChart width={150} height={90}>
            <Tooltip
             cursor={false}
             itemStyle={{backgroundColor: '#432c39', margin:'-12px', padding:'5px', color:'white'}}
            />
            <Pie data={data01} cx={60} cy={40} outerRadius={30} fill="#8884d8">
              {
                data01.map((entry, index) => <Cell fill={COLORS01[index % COLORS01.length]}/>)
              }
            </Pie>
            <Pie data={data02} cx={60} cy={40} innerRadius={35} outerRadius={45} fill="#82ca9d"/>
          </PieChart>
          <PieChart width={150} height={90}>
            <Pie data={data01} cx={0} cy={0} outerRadius={0}>
              {
                data01.map((entry, index) => <Cell fill={COLORS01[index % COLORS01.length]}/>)
              }
            </Pie>
            <Legend verticalAlign="right" align="left" width="100px" iconType="star"/>
          </PieChart>
        </div>
      );
  }
}

export default RevenuePieChart;
