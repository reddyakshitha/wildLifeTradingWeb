import React, {Component} from 'react';
import CarouselComponent from './CarouselContainer';
import Tabs from './Tabs';
import './body.css'

class Body extends Component {

  render() {
    
    return (
      <div className="body-container">
        <CarouselComponent />
        <Tabs />
      </div>
    );

  };
}

export default Body;
