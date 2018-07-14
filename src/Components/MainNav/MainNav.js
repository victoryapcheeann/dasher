import React, { Component } from 'react';
import './MainNav.css';
import './Queries.css'

import FaCartArrowDown from 'react-icons/lib/fa/money'
import FaUserPlus from 'react-icons/lib/fa/user-plus'
import FaBank from 'react-icons/lib/fa/bank'
import FaBarChart from 'react-icons/lib/fa/bar-chart'
import FaMoney from 'react-icons/lib/fa/money'
import FaWechat from 'react-icons/lib/fa/wechat'

class mainNav extends Component {
  render() {
    return (
      <div className="subNavContainer">
        <ul className="navStyle" style={{listStyle:'none'}}>
            <li className="navItemStyle">
              <FaCartArrowDown size={20} color={"white"} className="navIconStyle"/>
              Purchases
            </li>
            <li className="navItemStyle">
              <FaUserPlus size={20} color={"white"} className="navIconStyle"/>
              Clients
            </li>
            <li className="navItemStyle">
              <FaBank size={20} color={"white"} className="navIconStyle"/>
              Loans
            </li>
            <li className="navItemStyle">
              <FaBarChart size={20} color={"white"} className="navIconStyle"/>
              Statistics
            </li>
            <li className="navItemStyle">
              <FaMoney size={20} color={"white"} className="navIconStyle"/>
              Incomes
            </li>
        </ul>
      </div>
    );
  }
}

export default mainNav;
