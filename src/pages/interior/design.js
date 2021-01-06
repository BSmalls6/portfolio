import React, { Component } from 'react'
import Header from "../../components/homepage/header";

import Footer from "../../components/homepage/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/NavBar';
import styleSheet from './style.css';
import velleThumb from '../../img/velleThumb.png';
import wallThumb from '../../img/wallThumbsmall.png';
import compassThumb from '../../img/compassThumbsmall.png';
import favrThumb from '../../img/favrimgThumbs.png';
import vidThumb from '../../img/writingthumbsmall.png';
import blogThumb from '../../img/myblogpostThumb.png';




export default class Design extends Component {
    render() {
        
        return (

            <div className='bigContainer'>
            <Header />
            <div style={styleSheet}>
            <Navbar bg="light" className="text-center">
    <span style={styleSheet} className="banner">My Best Work</span>
  </Navbar>
  
            </div>
            <section>
            <CardDeck>
  <Card style={styleSheet} className="cards">
    <a href="https://velledental.com/" target='_blank' rel='nofollow noopener noreferrer'><Card.Img variant="top" src={velleThumb} className='image'  /></a>
    <div className="middle">
    <div className="text"><a href='www.velledental.com'>Visit Site</a></div>
  </div>
    <Card.Body>
      <Card.Title>Velle Dental</Card.Title>
      <Card.Text>
        Elegant, simple design for an upscale client with a target audience of patients seeking elective dental procedures. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Website Design and Content</small>
    </Card.Footer>
  </Card>
  <Card style={styleSheet} className="cards">
  <a href="https://farvbarter.herokuapp.com/" target='_blank' rel='nofollow noopener noreferrer'><Card.Img variant="top" src={favrThumb} className='image favrImg' /></a>
    <Card.Body>
      <Card.Title>Favr</Card.Title>
      <Card.Text>
        A custom, from scratch full-stack application that connects people looking to barter goods and services without the use of money.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">UX Design and Full Stack Development</small>
    </Card.Footer>
  </Card>
  <Card style={styleSheet} className="cards">
  <a href="https://vimeo.com/309792129" target='_blank' rel='nofollow noopener noreferrer'><Card.Img variant="top" src={vidThumb} className='image' /></a>
    <Card.Body>
      <Card.Title>Animated Educational Videos</Card.Title>
      <Card.Text>
        I Researched, wrote and produced a series of five animated videos for Medical continuing education.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Video Production</small>
    </Card.Footer>
  </Card>
</CardDeck>
            </section>

            <section className='row2' style={styleSheet}>
            <CardDeck>
  <Card style={styleSheet} className="cards">
  <a href="https://www.sesamecommunications.com/blog/the-best-shots-tech-specs-for-videos-of-practices/" target='_blank' rel='nofollow noopener noreferrer'><Card.Img variant="top" src={blogThumb} className='image'  /></a>
    <Card.Body>
      <Card.Title>Marketing-focused Blog Content</Card.Title>
      <Card.Text>
        I wrote a series of blog posts on best-practices regarding video content on websites.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Content Writing</small>
    </Card.Footer>
  </Card>
  <Card style={styleSheet} className="cards">
  <a href="https://www.statesborobraces.com/" target='_blank' rel='nofollow noopener noreferrer'><Card.Img variant="top" src={wallThumb} className='image' /></a>
    <Card.Body>
      <Card.Title>Wall Orthodontics</Card.Title>
      <Card.Text>
        Minimalist, video oriented website with large, bold calls to action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Website Design and Content</small>
    </Card.Footer>
  </Card>
  <Card style={styleSheet} className="cards">
  <a href="https://www.compassdentalartscali.com/" target='_blank' rel='nofollow noopener noreferrer'><Card.Img variant="top" src={compassThumb} className='image' /></a>
    <Card.Body>
      <Card.Title>Compass Dental Arts</Card.Title>
      <Card.Text>
        Dark-themed, geometric website with pops of color and animation.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Website Design and Content</small>
    </Card.Footer>
  </Card>
</CardDeck>
            </section>
            
            <Footer/>
    
            
          </div>
                
              
                )
                    }
}