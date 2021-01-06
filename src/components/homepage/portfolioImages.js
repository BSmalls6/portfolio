
import React, { Component } from 'react'
import writingImg from '../../img/writingthumb.png'
import favrimg from '../../img/favrimg.png'

import velleImg from '../../img/velleThumb.png'
import blogThumb from '../../img/myblogpost.png';
import wallThumb from '../../img/wallThumb.png';


// import Favrpop from '../components/pop-up/favrpop/index'

export default class PortfolioImages extends Component {
  render() {
    return (

      <div className="portfolio_image_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-5">
              <div className="single_Portfolio">
                <div className="portfolio_thumb">
                 <a href="/favr"><img src={favrimg} alt="favrimg" /></a>
                </div>
                {/* <a href="https://farvbarter.herokuapp.com/" target="_blank" className="popup popup-image" /> */}
                <div className="portfolio_hover">
                  <div className="title">
                    <h3>FavR</h3>
                    <h3>Development | Design</h3>
                    <h3><a style={{color:"white"}} href='https://farvbarter.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed</a> | <a style={{color:"white"}} href='https://github.com/CeeJtheDay/barterApp' target='_blank' rel="noopener noreferrer">Github</a></h3>
                    {/* <button><Favrpop>Learn More</Favrpop></button> */}
                  </div>
                </div>
              </div>
              {/* <Favrpop/> */}

            </div>
            <div className="col-xl-7 col-md-7">
              <div className="single_Portfolio">
                <div className="portfolio_thumb">
                  <img src={velleImg} alt="lounge" />
                </div>
                {/* <a href="https://uwbootproject2.herokuapp.com/" target="_blank" className="popup popup-image" /> */}
                <div className="portfolio_hover">
                  <div className="title">
                    <h3>Velle Dental</h3>

                    <h3>Content | Design</h3>
                    <h3><a style={{color:"white"}} href='https://velledental.com/' target='_blank' rel="noopener nofollow noreferrer">Visit Site</a></h3>


                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_Portfolio">
                <div className="portfolio_thumb">
                  <img src={writingImg} alt="writing" />
                </div>
                <a href="https://vimeo.com/309792129" target="_blank" rel="noopener noreferrer" className="popup popup-image" />
                <div className="portfolio_hover">
                  <div className="title">
                    <h3>Animated Content</h3>
                    <h3>Writing | Producing</h3>
                    <h3><a style={{color:"white"}} href='https://vimeo.com/309792129' target='_blank' rel="noopener nofollow noreferrer">View Sample</a></h3>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_Portfolio">
                <div className="portfolio_thumb">
                  <img src={blogThumb} alt="budgetimg" />
                </div>
                {/* <a href="../img/portfolio/4.png" className="popup popup-image" /> */}
                <div className="portfolio_hover">
                  <div className="title">
                  <h3>Written Content</h3>

                    <h3>Research | Writing</h3>
                    <h3><a style={{color:"white"}} href='https://www.sesamecommunications.com/blog/the-best-shots-tech-specs-for-videos-of-practices/' target='_blank' rel="noopener nofollow noreferrer">Visit Blog</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12 col-lg-4">
              <div className="single_Portfolio">
                <div className="portfolio_thumb">
                  <img src={wallThumb} alt="notesimg" />
                </div>
                {/* <a href="../img/portfolio/5.png" className="popup popup-image" /> */}
                <div className="portfolio_hover">
                  <div className="title">
                    <h3>Wall Orthodontics</h3>
                    <h3>Design | Video</h3>
                    <h3><a style={{color:"white"}} href='https://www.statesborobraces.com/' target='_blank' rel="noopener noreferrer">Visit Site</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>

    )
  }
}