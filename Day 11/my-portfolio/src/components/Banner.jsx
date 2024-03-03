/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import markAnthonyImage from "../images/Mark AnthonyPerillo.png";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src={markAnthonyImage} alt="Mark Anthony Perillo" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Mark Anthony Perillo</h6>
            <h3>Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;