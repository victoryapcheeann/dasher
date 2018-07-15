import React, { Component } from 'react';
import Joyride from 'react-joyride';
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
    state = {
    run: false,
    steps: [
      {
        target: '.step1',
        content: 'This is the header!',
        placement: 'bottom',
      },
      {
        target: '.step2',
        content: 'This is the navigation!',
        placement: 'right',
      },
      {
        target: '.step3',
        content: 'This is the yearly report!',
        placement: 'bottom',
      },
      {
        target: '.step4',
        content: 'This is the quaterly report!',
        placement: 'top',
      },
      {
        target: '.step5',
        content: 'This is the weekly report!',
        placement: 'left',
      },
      {
        target: '.step6',
        content: 'This is your achievement!',
        placement: 'top',
      },
    ]
  };

  componentDidMount() {
    this.setState({ run: true });
  }

  callback = (data) => {
    const { action, index, type } = data;
  };

  render() {
    const { steps, run } = this.state;

    return (
      <div className="wrapper">
            <Joyride
             steps={steps}
             run={run}
             continuous
             scrollToFirstStep
             showProgress
             showSkipButton
             callback={this.Callback}
             styles={{
              options: {
                beaconSize: 1,
                beaconOuter: {
                  backgroundColor: 'transparent'
                }
              }
            }}/>
              <header className="main-head">
                <MainHead />
              </header>
              <nav className="main-nav">
                <MainNav />
              </nav>
              <div className="overview step3">
                <Overview />
              </div>
              <div className="step4">
                <div className="content">
                  <Content />
                </div>
                <div className="content2">
                  <Content2 />
                </div>
              </div>
              <div className="content3 step5">
                <Content3 />
              </div>
              <footer className="main-footer step6">
                <MainFooter />
              </footer>
      </div>
    );
  }
}

export default App;
