import React, {Component} from 'react';
import Screenshot1 from '../screenshots/Screenshot1.png';
import Screenshot2 from '../screenshots/Screenshot2.png';
import Screenshot3 from '../screenshots/Screenshot3.png';
import Screenshot4 from '../screenshots/Screenshot4.png';
import Screenshot5 from '../screenshots/Screenshot5.png';
import './analysisbody.css'

class AnalysisBody extends Component {

  render() {
    
    return (
      <div className="body-container analysis-container">
        <div className="backToHome">
          <button className="tab-button backToHomeButton"><a href="/">Back to Home</a></button>
        </div>
        <div className="analysis-layout">
        <div className="analysis-image">
          <img src={Screenshot1} />
        </div>
        <div className="analysis-image">
          <img src={Screenshot2} />
        </div>
        <div className="analysis-image">
          <img src={Screenshot3} />
        </div>
        <div className="analysis-image">
          <img src={Screenshot4} />
        </div>
        <div className="analysis-image">
          <img src={Screenshot5} />
        </div>
        </div>
      </div>
    );

  };
}

export default AnalysisBody;
