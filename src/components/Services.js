import React, { Component } from 'react'
import icon1 from "../img/svg_icon/1.svg"
import icon2 from "../img/svg_icon/2.svg"
import icon3 from "../img/svg_icon/3.svg"


export default class Hero extends Component {
    render() {
      return (
  
        <div className="service_area" id="services">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title text-center mb-65">
                  <span>Experience and Abilities</span>
                  <h3>Full-Stack Application Development  <br />
                    &amp; Design</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-4">
                <div className="single_service text-center">
                  <div className="icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h3>Development</h3>
                  <p>Certification in Full-Stack development from the University of Washington.  Experienced in the MERN stack and other tools</p> 
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_service text-center">
                  <div className="icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h3>Web design</h3>
                  <p>Certification in UX/UI design from General Assembly. Experience in creating high-fidelity prototypes with tools such as Photoshop and inVision</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_service text-center">
                  <div className="icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h3>Content Creation</h3>
                  <p>Many years of experince in copywriting and script writing.  I have experience producing animated content and b2c copywriting</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  };