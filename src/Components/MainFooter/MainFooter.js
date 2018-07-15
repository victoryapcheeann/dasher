import React, { Component } from 'react';
import './MainFooter.css';
import FaWheelchairAlt from 'react-icons/lib/fa/wheelchair-alt';
import FaMoney from 'react-icons/lib/fa/money';
import MdMonetizationOn from 'react-icons/lib/md/monetization-on';
import FaBalanceScale from 'react-icons/lib/fa/balance-scale';
import FaBank from 'react-icons/lib/fa/bank';
import FaFortAwesome from 'react-icons/lib/fa/fort-awesome';
import FaShareAltSquare from 'react-icons/lib/fa/share-alt-square';
import FaAreaChart from 'react-icons/lib/fa/area-chart';

class MainFooter extends Component {
  render() {
    return (
      <div>
        <div class="main-wrapper">
          <div className="footerTitleStyle">Achievement</div>
          <div>
          <div class="badge yellow">
            <div class="circle"><FaMoney size={35} className='medalIconStyle'/></div>
            <div class="ribbon">$5,000 goal</div>
          </div>
          <div class="badge orange">
            <div class="circle"><FaMoney size={35} className='medalIconStyle'/></div>
            <div class="ribbon">$10,000 goal</div>
          </div>
          <div class="badge pink">
            <div class="circle"><MdMonetizationOn size={35} className='medalIconStyle'/></div>
            <div class="ribbon">x2 Income</div>
          </div>
          <div class="badge red">
            <div class="circle"><MdMonetizationOn size={35} className='medalIconStyle'/></div>
            <div class="ribbon">x3 Income</div>
          </div>
          <div class="badge purple">
            <div class="circle"><FaBalanceScale size={35} className='medalIconStyle'/></div>
            <div class="ribbon">-$1000 Cost</div>
          </div>
          <div class="badge teal">
            <div class="circle"><FaBalanceScale size={35} className='medalIconStyle'/></div>
            <div class="ribbon">-$2000 Cost</div>
          </div>
          <div class="badge blue">
            <div class="circle"><FaWheelchairAlt size={35} className='medalIconStyle'/></div>
            <div class="ribbon">0 pain 0 gain</div>
          </div>
          <div class="badge blue-dark">
            <div class="circle"><FaBank size={35} className='medalIconStyle'/></div>
            <div class="ribbon">Zero Debt</div>
          </div>
          <div class="badge green">
            <div class="circle"><FaFortAwesome size={35} className='medalIconStyle'/></div>
            <div class="ribbon">Insurance-d</div>
          </div>
          <div class="badge green-dark">
            <div class="circle"><FaShareAltSquare size={35} className='medalIconStyle'/></div>
            <div class="ribbon">10 x Share</div>
          </div>
          <div class="badge silver">
            <div class="circle"><FaShareAltSquare size={35} className='medalIconStyle'/></div>
            <div class="ribbon">20 x Share</div>
          </div>
          <div class="badge gold">
            <div class="circle"><FaAreaChart size={35} className='medalIconStyle'/></div>
            <div class="ribbon">401K Ready</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default MainFooter;
