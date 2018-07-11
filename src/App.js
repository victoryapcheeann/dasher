import React, { Component } from 'react';
import './App.css';
import './Grid.css';

import FaCartArrowDown from 'react-icons/lib/fa/money'
import FaUserPlus from 'react-icons/lib/fa/user-plus'
import FaBank from 'react-icons/lib/fa/bank'
import FaBarChart from 'react-icons/lib/fa/bar-chart'
import FaMoney from 'react-icons/lib/fa/money'
import FaWechat from 'react-icons/lib/fa/wechat'
import FaSearch from 'react-icons/lib/fa/search'
import FaBellO from 'react-icons/lib/fa/bell-o'
import MdHelpOutline from 'react-icons/lib/md/help-outline'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
              <header className="main-head">
                <div className="searchBarStyle">
                  <FaSearch size={15} color={"grey"} className="searchIcon"/>
                </div>
                <div className="logOutStyle">
                  <MdHelpOutline size={15} color={"grey"} style={{paddingRight: '30px'}}/>
                  <FaBellO  size={15} color={"grey"}/>
                  <button className="logOutButton">LOG OUT</button>
                </div>
              </header>
              <nav className="main-nav">
                  <div className="profileContainer">
                    <div className="profileStyle">
                      <img className="profilePic" src='./image.png'/>
                      <div className="rowStyle">
                        <span className="nameStyle">Ann Colins</span>
                        <div className="circle"></div>
                      </div>
                      <span style={{color: 'grey'}}>Money Manager</span>
                    </div>
                    <div className="profileDetailsStyle">
                      <button className="navBtnStyle">Upgrade to PRO</button>
                      <span>
                        <span className="navNumberStyle">437</span>
                        <span className="navTextStyle">savings</span> <br/>
                        <span className="navTextStyle" style={{marginLeft: '10px'}}>completed</span>
                      </span>
                    </div>
                  </div>
                  <ul className="navStyle" style={{listStyle:'none'}}>
                      <li className="navItem"><FaCartArrowDown size={30} color={"grey"} className="navIcon"/>
                        Purchases</li>
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
              </nav>
              <div className="overview">
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
              <div className="content">
                  <h1>Main article area</h1>
                  <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
              </div>
              <div className="content2">
                  <h1>Main article area</h1>
                  <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
              </div>
              <div className="content3">
                content3
              </div>
              <div className="content4">
                content4
              </div>
              <footer className="main-footer">
                The footer
              </footer>
      </div>
    );
  }
}

export default App;
