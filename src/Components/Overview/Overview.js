import React, { Component } from 'react';
import './Overview.css';
import './Queries.css';

import ExpenseChart from './ExpenseChart/ExpenseChart';
import SavingChart from './SavingChart/SavingChart';
import MiniPieChart from './MiniPieChart/MiniPieChart';

class Overview extends Component{
  render() {
    return (
      <div className="subOverviewContainer">
        <div className="overviewCardStyle">
          <div className="overviewGraphContainerStyle">
            <ExpenseChart />
          </div>
          <div className="overviewGraphContainerStyle">
            <SavingChart />
          </div>
          <div className="overviewGraphContainerStyle">
            <MiniPieChart />
          </div>
        </div>
      </div>
    );
  }
}


export default Overview;
