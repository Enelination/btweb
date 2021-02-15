import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assests/img/header-bg.jpg";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import AboutDesc from "../Common/AboutDesc";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Studio!"
          subtitle="IT'S NICE TO MEET YOU"
          buttonText="Tell me more"
          link="/services"
          showButton={true}
          image={image}
        />
        <Services />
        <Portfolio />
        <AboutDesc />
        <Team />
      </div>
    );
  }
}
