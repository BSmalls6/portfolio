
import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (

            <div className="about_me">
            <div className="about_large_title d-none d-lg-block">
              About
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                  <div className="about_e_details">
                    <h3>About me</h3>
                    <p>Digital creative capable of researching, designing and developing software, content and more.  Certifications in full-stack development and UX design, as well as a bachelors in digital communication. HTML, CSS, ECMA6, Node.JS, React and more. My strengths include creative problem solving, leadership and idea generation.  </p>
                    <div className="download_cv">
                      <a className="boxed-btn3" href="/cv">Download CV</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="about_img">
                    <div className="color_pattern d-none d-lg-block">
                      <img src="img/about/color_grid.png" alt="" />
                    </div>
                    <div className="my_Pic">
                      <img src="img/about/about.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              
                )
                    }
}