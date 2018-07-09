import React, { Component } from 'react';
import './App.css';
import './Grid.css';
import './Nav&Profile.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
              <header className="main-head">
                <div>
                  The search bar
                </div>
                <div>
                  <span>The bell</span>
                  <button>LOG OUT</button>
                </div>
              </header>
              <nav className="main-nav">
                  <div className="columnStyle">
                    <h2>Dasher</h2>
                    <img src='./image.png' />
                    <h3>Ann Colins</h3>
                    <span>Super Saver</span>
                    <button>Upgrade to pro</button>
                    <span>437</span>
                    <span>savings completed</span>
                  </div>
                  <ul className="navStyle">
                      <li><a href="">Purchases</a></li>
                      <li><a href="">Clients</a></li>
                      <li><a href="">Company</a></li>
                      <li><a href="">Statistics</a></li>
                      <li><a href="">Incomes</a></li>
                      <li><a href="">Livechat</a></li>
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
