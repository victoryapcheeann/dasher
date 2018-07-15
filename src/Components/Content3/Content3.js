import React, { Component } from 'react';
import './Content3.css';
import './Queries.css';
import ExpenseTreemap from './ExpenseTreemap/ExpenseTreemap';

class Content3 extends Component {
  render() {
      return (
        <div className="content3ChartContainer">
          <ExpenseTreemap />
          <div className="content3ChartStyle">
            <span>Expense <br/> Breakdown</span>
          </div>
        </div>
      );
  }
}

export default Content3;
