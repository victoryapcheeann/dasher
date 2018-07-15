import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ExpenseTreemap.css';
import ReactDOM from 'react-dom';
import { Treemap, Tooltip } from 'recharts';

const data = [
          {
            name: 'Rental',
            children: [
              { name: '1', size: 1302 },
              { name: '2', size: 24593 },
              { name: '3', size: 652 },
              { name: '4', size: 636 },
              { name: '5', size: 6703 },
            ],
          },
          {
            name: 'Property taxes',
            children: [
              { name: '1', size: 1302 },
              { name: '2', size: 24593 }
            ],
          },
          {
            name: 'Daycare',
            children: [
              { name: '1', size: 2138 },
              { name: '2', size: 3824 }
            ],
          },
        ];

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

var createReactClass = require('create-react-class');
const CustomizedContent = createReactClass({
  render() {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'rgba(255,255,255,0)',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ?
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
          >
            {name}
          </text>
          : null
        }
        {
          depth === 1 ?
          <text
            x={x + 4}
            y={y + 18}
            fill="#fff"
            fontSize={16}
            fillOpacity={0.9}
          >
            {index + 1}
          </text>
          : null
        }
      </g>
    );
  }
});

const CustomTooltip  = createReactClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  }
});

class ExpenseTreemap extends Component {
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
             cursor={false}
            />
          </Treemap>
        </div>
      );
  }
}

export default ExpenseTreemap;
