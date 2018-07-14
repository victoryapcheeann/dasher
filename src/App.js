import React, { Component } from 'react';
import './AppStyling/App.css';
import './AppStyling/Grid.css';
import './AppStyling/Queries.css';

import MainHead from './Components/MainHead/MainHead';
import MainNav from './Components/MainNav/MainNav';
import Overview from './Components/Overview/Overview'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
              <header className="main-head">
                <MainHead />
              </header>
              <nav className="main-nav">
                <MainNav />
              </nav>
              <div className="overview">
                <Overview />
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
