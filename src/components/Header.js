import React, {Component} from 'react';
import './header.css'

class Header extends Component {

  render() {
    
    return (
      <div className="header-container">
        <div className="header-left">
          Scientific Data Visualization
        </div>
        <div className="header-right">
          Wildlife Trading Analysis
        </div>
      </div>
    );

  };
}

export default Header;
