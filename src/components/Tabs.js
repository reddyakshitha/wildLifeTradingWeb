import React, {Component} from 'react';
import './tabs.css'

class Tabs extends Component {

  render() {
    
    return (
      <div className="tabs-container">
        <div className="tab1">
          <button className="tab-button button1"><a href="/about">About</a></button>
        </div>
        <div className="tab2">
          <button className="tab-button button2"><a href="/visualizations">Visualizations</a></button>
        </div>
        <div className="tab3">
          <button className="tab-button button2"><a href="https://wildlife-trading.herokuapp.com/" target="_blank">Interactive Visualizations</a></button>
        </div>
      </div>
    );

  };
}

export default Tabs;
