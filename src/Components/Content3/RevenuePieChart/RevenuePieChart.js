import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RevenuePieChart.css';

class RevenuePieChart extends Component {
  render() {
      return (
        <div>
          <Treemap
          	width={300}
            height={150}
            data={data}
            dataKey="size"
            ratio={4/3}
            stroke="#fff"
            fill="#8884d8"
            content={<CustomizedContent colors={COLORS}/>}>
            <Tooltip
             content={<CustomTooltip/>}
            />
          </Treemap>
        </div>
      );
  }
}

export default RevenuePieChart;
