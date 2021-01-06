
import React, { Component } from 'react'
import backgroundimage1 from "../../img/background.jpg"
var sectionStyle = {
  
  backgroundImage: `url(${backgroundimage1})`
   
};


export default class Hero extends Component {
    render() {
        return (

                    <div className="slider_area heroImage" style={sectionStyle}>
                      <div className="single_slider  d-flex align-items-center slider_bg_1">
                        <div className="shap_pattern d-none d-lg-block">
                        </div>
                        {/* <div className="social_links social_icons">
                          <ul>
                            <li><a href="https://www.linkedin.com/in/brennan-smallwood-422155a1/"> <i className="fa fa-linkedin" /> </a></li>
                            <li><a href="https://github.com/BSmalls6"> <i className="fa fa-github" /> </a></li>
                           
                          </ul>
                        </div> */}
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="col-lg-12">
                              <div className="slider_text text-center">
                                <h3 style={{color:"white"}}>
                                  WoodWorks Digital
                                </h3>
                                <span style={{color:"white"}}>Handcrafted Design and Development ---</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                
              
                )
                    }
}