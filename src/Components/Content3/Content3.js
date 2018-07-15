import React, { Component } from 'react';
import './Content3.css';
import './Queries.css';
import ExpenseTreemap from './ExpenseTreemap/ExpenseTreemap';
import RevenuePieChart from './RevenuePieChart/RevenuePieChart';
import SavingBubbleChart from './SavingBubbleChart/SavingBubbleChart';

class Content3 extends Component {
  render() {
      return (
       <div className="content3Container">
          <div className="content3ChartContainer">
            <div className="columnStyle">
                <ExpenseTreemap />
                <span className="content3ChartDescriptionStyle">Weekly Expense Breakdown</span>
            </div>
          </div>
          <div className="content3ChartContainer">
            <div className="columnStyle">
                <RevenuePieChart />
                <span className="content3ChartDescriptionStyle">Weekly Revenue Breakdown</span>
            </div>
          </div>
          <div className="content3ChartContainer">
            <div className="columnStyle">
                <SavingBubbleChart />
                <span className="content3ChartDescriptionStyle">Weekly saving for past 6 weeks</span>
            </div>
          </div>
        </div>
      );
  }
}

export default Content3;
