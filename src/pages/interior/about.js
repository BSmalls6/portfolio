import React, { Component } from 'react'
import Header from "../../components/homepage/header";
import Footer from "../../components/homepage/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import styleSheet from './style.css';
import resume from '../../img/resume.pdf'


export default class About extends Component {
    render() {
       
        return (

            <div className='bigContainer'>
            <Header />
            <div style={styleSheet}>
            <Navbar bg="light" className="text-center">
    <span style={styleSheet} className="banner">About Me</span>
  </Navbar>
  
            </div>

            <section style={styleSheet}>

            <Jumbotron fluid className='jumbotron'>
  <h1>Brennan Smallwood</h1>
  <h2>Creative Producer, Designer and Developer</h2>
  <p>
  I am a creative producer capable of designing and developing software, content, websites and more.  I started out in video production before growing into multimedia content.  Working at a tech company developed my passion for user-experience and web design, leading to my first certification.  After designing and launching dozens of websites, I decided to tackle the mystical world of development to create some of my own ideas and to round out my skillset.  Now with certifications in design and development - and a background in content creation - I am comfortable with most aspects of the digital space.  Always learning, always growing; I'm always on the lookout for new projects and collaborations.</p>
  <p>
    <Button className="boxed-btn3 buttons" href={resume} download>Download CV</Button>
    <Button className="boxed-btn3 buttons" href='/portfolio'>My Projects</Button>
  </p>
</Jumbotron>
            </section>
            
            
            <Footer/>
    
            
          </div>
                
              
                )
                    }
}