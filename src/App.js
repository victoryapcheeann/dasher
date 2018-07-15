import React, { Component } from 'react';
import './AppStyling/App.css';
import './AppStyling/Grid.css';
import './AppStyling/Queries.css';

import MainHead from './Components/MainHead/MainHead';
import MainNav from './Components/MainNav/MainNav';
import MainFooter from './Components/MainFooter/MainFooter';
import Overview from './Components/Overview/Overview'
import Content from './Components/Content/Content';
import Content2 from './Components/Content2/Content2';
import Content3 from './Components/Content3/Content3';

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
                <Content />
              </div>
              <div className="content2">
                <Content2 />
              </div>
              <div className="content3">
                <Content3 />
              </div>
              <footer className="main-footer">
                <MainFooter />
              </footer>
      </div>
    );
  }
}

export default App;
