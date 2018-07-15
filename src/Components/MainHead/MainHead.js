import React, { Component } from 'react';
import './MainHead.css';
import './Queries.css';
import './Icon.css';

import MdHelpOutline from 'react-icons/lib/md/help-outline'
import FaLineChart from 'react-icons/lib/fa/line-chart'
import MdMailOutline from 'react-icons/lib/md/mail-outline'

class MainHead extends Component{
  render() {
    return (
      <div className="subHeadContainer">
        <div className="rowStyle">
          <div>
            <div className="dashboard"></div>
          </div>
          Dasher
        </div>
        <div className="headerIconContainer">
          <div className="headIconPaddingStyle">
            <MdHelpOutline size={20} color={"transparent"} className="headIconStyle step1"/>
            <span>Tour</span>
          </div>
          <div className="headIconPaddingStyle">
            <FaLineChart size={20} color={"themeColor"} className="headIconStyle"/>
            <span>Analyse</span>
          </div>
          <div className="headIconPaddingStyle">
            <MdMailOutline size={20} color={"themeColor"} className="headIconStyle"/>
            <span>Inbox</span>
          </div>
        </div>
        <div className="rowStyle">
          <img className="profilePic iconPaddingStyle" src='./image.png'/>
          <span>Colin Ann</span>
        </div>
      </div>
    );
  }
}


export default MainHead;
