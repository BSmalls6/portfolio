import React, { Component } from 'react'
import Header from "../../components/homepage/header";
import Footer from "../../components/homepage/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/NavBar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Obfuscate from 'react-obfuscate';



import styleSheet from './style.css';


export default class About extends Component {
    render() {
       
        return (

            <div className='bigContainer'>
            <Header />
            <div style={styleSheet}>
            <Navbar bg="light" className="text-center">
    <span style={styleSheet} className="banner">Contact Me</span>
  </Navbar>
  
            </div>

            <section style={styleSheet}>

            <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Email Me</Card.Title>
      <Card.Text>
        Email:{' '}
        <Obfuscate
        target='_blank' rel='noopener nofollow noreferrer'
      email="smallwoodbrennan@gmail.com"
      headers={{
        subject: 'Please state your reason for contact',
        body: 'Hi Brennan, ...',
      }}
    />
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
  <Card.Body>
      <Card.Title>Find me on Linkden</Card.Title>
      <Card.Text>
        <a href='https://www.linkedin.com/in/brennan-smallwood-422155a1/' target="_blank" rel='noopener nofollow noreferrer'>Click here to check out my Linkden profile</a>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  <Card.Body>
      <Card.Title>Check out my github</Card.Title>
      <Card.Text>
        <a href='https://github.com/BSmalls6' target="_blank" rel='noopener nofollow noreferrer'>Click here to check out some of my projects on Github</a>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
            </section>
            
            
            <Footer/>
    
            
          </div>
                
              
                )
                    }
}