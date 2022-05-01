import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Animal1 from '../images/1.jpg';
import Animal2 from '../images/2.jpg';
import Animal3 from '../images/3.jpg';
import Animal4 from '../images/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './body.css'

class CarouselComponent extends Component {

  render() {
    
    return (
        <div className="carousel-container">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div>
                <img src={Animal4} />
            </div>
            <div>
                <img src={Animal2} />
            </div>
            <div>
                <img src={Animal3} />
            </div>
            <div>
                <img src={Animal1} />
            </div>
          </Carousel>
        </div>
    );

  };
}

export default CarouselComponent;
