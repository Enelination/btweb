import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assests/img/header-bg.jpg";
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
      </div>
    );
  }
}
