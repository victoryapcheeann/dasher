import React, { Component } from 'react';
import './Overview.css';

class Overview extends Component{
  render() {
    return (
      <div className="subOverviewContainer">
        <div className='overviewDateContainer'>
          <div className="overviewDateStyle">Date & Time</div>
          <div>Drop down</div>
        </div>
        <div className="overviewCardStyle">
          <div>Graph/Data</div>
          <div>Graph/Data</div>
          <div>Graph/Data</div>
          <div>Graph/Data</div>
        </div>
      </div>
    );
  }
}


export default Overview;
