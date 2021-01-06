
import React, { Component } from 'react'
import resume from '../../img/resume.pdf'
import grid from '../../img/about/color_grid.png'
import me from '../../img/about/me.jpg'
export default class About extends Component {
    render() {
        return (

            <div className="about_me" id="about">
            <div className="about_large_title d-none d-lg-block">
              About
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                  <div className="about_e_details">
                    <h3>About me</h3>
                    <p>Digital creative capable of researching, designing and developing software, content, websites and more. Certifications in full-stack development and UX design, as well as a bachelors in digital communication. HTML/CSS, Javascript, Adobe Creative Cloud and more. My strengths include creative problem solving and multimedia content creation. Over 100 unique marketing websites designed and built.</p>
                    <div className="download_cv">
                      <a className="boxed-btn3" href='/about'>Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="about_img">
                    <div className="color_pattern d-none d-lg-block">
                      <img src={grid} alt="color grid" />
                    </div>
                    <div className="my_Pic">
                      <img src={me} alt="picture of me" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              
                )
                    }
}