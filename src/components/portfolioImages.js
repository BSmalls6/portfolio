
import React, { Component } from 'react'
import loungeImg from '../img/storefront.png'
import writingImg from '../img/writingthumb.png'
import favrimg from '../img/favrimg.png'
import budgetimg from '../img/budget.png'
import notesimg from '../img/notes.png'
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
                  <img src={loungeImg} alt="lounge" />
                </div>
                {/* <a href="https://uwbootproject2.herokuapp.com/" target="_blank" className="popup popup-image" /> */}
                <div className="portfolio_hover">
                  <div className="title">
                    <h3>StoreFront</h3>

                    <h3>Development | Design</h3>
                    <h3><a style={{color:"white"}} href='https://store-front-best-buy.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed</a> | <a style={{color:"white"}} href='https://github.com/BSmalls6/StoreFront' target='_blank' rel="noopener noreferrer">Github</a></h3>


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
                    <h3>Inform the Public</h3>
                    <h3>Writing | Producing</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_Portfolio">
                <div className="portfolio_thumb">
                  <img src={budgetimg} alt="budgetimg" />
                </div>
                {/* <a href="../img/portfolio/4.png" className="popup popup-image" /> */}
                <div className="portfolio_hover">
                  <div className="title">
                  <h3>Keep track of spending</h3>

                    <h3>Development</h3>
                    <h3><a style={{color:"white"}} href='https://budget-app-uwbc-hw14.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed</a> | <a style={{color:"white"}} href='https://github.com/BSmalls6/homework_14' target='_blank' rel="noopener noreferrer">Github</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-12 col-lg-4">
              <div className="single_Portfolio">
                <div className="portfolio_thumb">
                  <img src={notesimg} alt="notesimg" />
                </div>
                {/* <a href="../img/portfolio/5.png" className="popup popup-image" /> */}
                <div className="portfolio_hover">
                  <div className="title">
                    <h3>Take and Save Notes</h3>
                    <h3>Development</h3>
                    <h3><a style={{color:"white"}} href='https://fitness-tracker-uwbc-hw13.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed</a> | <a style={{color:"white"}} href='https://github.com/BSmalls6/fitness_tracker-13/' target='_blank' rel="noopener noreferrer">Github</a></h3>
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