import React, { Component } from 'react';
import './MainHead.css';

import FaSearch from 'react-icons/lib/fa/search'
import FaBellO from 'react-icons/lib/fa/bell-o'
import MdHelpOutline from 'react-icons/lib/md/help-outline'

class MainHead extends Component{
  render() {
    return (
      <div className="subHeadContainer">
        <div className="searchBarStyle">
          <FaSearch size={15} color={"grey"} className="searchIcon"/>
        </div>
        <div className="rowStyle">
          <MdHelpOutline size={15} color={"grey"} style={{paddingRight: '30px'}}/>
          <FaBellO  size={15} color={"grey"}/>
          <button className="logOutButton">LOG OUT</button>
          <img className="profilePic" src='./image.png'/>
          <span>Ann</span>
        </div>
      </div>
    );
  }
}


export default MainHead;
