import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
              <header className="main-head">The header</header>
              <div className="profile">Profile</div>
              <nav className="main-nav">
                  <ul>
                      <li><a href="">Nav 1</a></li>
                      <li><a href="">Nav 2</a></li>
                      <li><a href="">Nav 3</a></li>
                  </ul>
              </nav>
              <div className="overview">
                Overview
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