import React, { Component } from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import themeColor from '../../../Color'

const data01 = [
  { week: '01/06', index: 1, saving: 70 },
  { week: '08/06', index: 1, saving: 180 },
  { week: '15/06', index: 1, saving: 150 },
  { week: '22/06', index: 1, saving: 20 },
  { week: '29/06', index: 1, saving: 200 },
  { week: 'now', index: 1, saving: 300 },
];

const parseDomain = () => {
  return [
    0,
    Math.max.apply(null, [
      ...data01.map(entry => entry.saving)
    ])
  ];
};

class SavingBubbleChart extends Component {
  	renderTooltip(props) {
      const { active, payload } = props;

      if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
          <div style={{ backgroundColor: 'white', margin: 0, padding: 5, height: 70 }}>
            <p>{data.week}</p>
            <p><span>Saving: $</span>{data.saving}</p>
          </div>
        );
      }
      return null;
    }

  render() {
    const domain = parseDomain();
    const range = [16, 225];

      return (
        <div>
          <ScatterChart width={300} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
            <XAxis type="category" dataKey="week" name="week" interval={0} tickLine={{ transform: 'translate(0, -6)' }} stroke='black'/>
            <YAxis type="number" dataKey="index" height={10} width={25} tick={false} tickLine={false} axisLine={false} stroke='black'/>
            <ZAxis type="number" dataKey="saving" domain={domain} range={range} />
            <Tooltip cursor={{strokeDasharray: '3 3'}} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
            <Scatter data={data01} fill='themeColor'/>
          </ScatterChart>
        </div>
      );
  }
}

export default SavingBubbleChart;
