//importing dependencies and pictures
import React, {Component} from 'react';
import aboutImage from '../images/6.jpg';
import './aboutbody.css'

class AboutBody extends Component {

  render() {
    //renders the content and images
    return (
      <div className="body-container about-container">
      {/* Adding a back button */}
        <div className="backToHome">
          <button className="tab-button backToHomeButton"><a href="/">Back to Home</a></button>
        </div>
        <div className="about-layout">
        <div className="about-image">
          <img src={aboutImage} />
        </div>
         {/* The content to be displayed*/}
        <div className="about-text">
          Wildlife trading is a major issue that has a direct impact on the animals involved as well as an indirect
          impact on biodiversity, endangered species and environmental issues. We are using a wildlife trade
          database to visualize trading in the countries, which shows how animals are imported and exported
          globally, as well as the purpose of wildlife trading with different countries, which focuses on legal and
          illegal trading like selling some species as pets and some species, are traded as products of their body
          parts, and illegal trading involves poaching and hunting of animals which leads to the extinction of
          species and biodiversity loss. Through data visualization of wildlife trading, we can create awareness to
          society, which helps the government and citizens to easily understand the data and highlights useful
          information. We use different tools and methods to perform data visualization like Altair, Matplotlib,
          PyCharm, Dash etc. which help to understand the data, connect any dataset, and can perform
          visualizations.
          <br/>
          <br/>
          <br/>
          PROJECT MEMBERS:
          <br/>
          Akshitha Reddy Suram
          <br/>
          Gayathri Padira
          <br/>
          Sindhu Marneni
          <br/>
          Spandhana Badekol
        </div>
        </div>
      </div>
    );

  };
}

export default AboutBody;
