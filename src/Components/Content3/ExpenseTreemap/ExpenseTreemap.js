import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ExpenseTreemap.css';
import ReactDOM from 'react-dom';
import { Treemap, Tooltip } from 'recharts';

const data = [
          {
            name: 'Rental',
            children: [
              { name: 'House 1', size: 1302 },
              { name: 'House 2', size: 4593 },
              { name: 'House 3', size: 652 },
              { name: 'House 4', size: 636 },
              { name: 'House 5', size: 6703 },
            ],
          },
          {
            name: 'Taxes',
            children: [
              { name: 'Tax 1', size: 1302 },
              { name: 'Tax 2', size: 4453 }
            ],
          },
          {
            name: 'Daycare',
            children: [
              { name: 'Daycare 1', size: 5138 },
              { name: 'Daycare 2', size: 3824 }
            ],
          },
          {
            name: 'Eating out',
            children: [
              { name: 'Eat 1', size: 2138 },
              { name: 'Eat 2', size: 13824 }
            ],
          },
          {
            name: 'Entertainment',
            children: [
              { name: 'TV 1', size: 11138 },
              { name: 'TV 2', size: 13824 }
            ],
          }
        ];

const COLORS = ['#C70466', '#D0D00F' , '#0A84FF', '#00CC66', '#E58728'];

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
          <p className="tooltiplabel">{`${payload[0].payload.name} : ${payload[0].value}`}</p>
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
            />
          </Treemap>
        </div>
      );
  }
}

export default ExpenseTreemap;
