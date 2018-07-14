import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MainNav.css';

import FaCartArrowDown from 'react-icons/lib/fa/money'
import FaUserPlus from 'react-icons/lib/fa/user-plus'
import FaBank from 'react-icons/lib/fa/bank'
import FaBarChart from 'react-icons/lib/fa/bar-chart'
import FaMoney from 'react-icons/lib/fa/money'
import FaWechat from 'react-icons/lib/fa/wechat'

class mainNav extends Component {
  render() {
    return (
      <div className="subMainNav">
        <ul className="navStyle" style={{listStyle:'none'}}>
            <li className="navItem"><FaCartArrowDown size={30} color={"grey"} className="navIcon"/>
              <br/> Purchases</li>
            <li className="navItem"><FaUserPlus size={30} color={"grey"} className="navIcon"/>
              Clients</li>
            <li className="navItem"><FaBank size={30} color={"grey"} className="navIcon"/>
              Loans</li>
            <li className="navItem"><FaBarChart size={30} color={"grey"} className="navIcon"/>
              Statistics</li>
            <li className="navItem"><FaMoney size={30} color={"grey"} className="navIcon"/>
              Incomes</li>
            <li className="navItem"><FaWechat size={30} color={"grey"} className="navIcon"/>
              Livechat</li>
        </ul>
      </div>
    );
  }
}

export default mainNav;
