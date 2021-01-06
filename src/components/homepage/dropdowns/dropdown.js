import React, { Component } from 'react'
// import Dropdown from './dropdown'
import Dropdown from 'react-bootstrap/Dropdown';
import styleSheet from './style.css';
import {
  BrowserRouter as Link
  // Switch,
  // Route,
  
} from 'react-router-dom'




export default class Header extends Component {
   
   
    render() {
        const divStyle = {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // marginRight: '10px'
            fontFamily: "Muli"
          };
          const menuStyle ={
            backgroundColor: '#001D38',
            color: '#0000ff',
            right: '0',
            left: 'auto',
            fontFamily: "Muli",
            marginRight: '10px'
          }
        return (
    

<Dropdown className="menu" style={styleSheet}>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={styleSheet}>
    Menu
  </Dropdown.Toggle>

  <Dropdown.Menu style={menuStyle}>
  <Dropdown.Item><Link to={'/about'}>About</Link></Dropdown.Item>

  <Dropdown.Item><Link to={'/portfolio'}>Porfolio</Link></Dropdown.Item>
  <Dropdown.Item><Link to={'/contact'}>Contact</Link></Dropdown.Item>

  





    {/* <Dropdown.Item href="#/action-1"><a href='https://www.linkedin.com/in/brennan-smallwood-422155a1/' target="_blank" rel="noopener noreferrer">Linkedin</a></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><a href='https://github.com/BSmalls6' target="_blank" rel="noopener noreferrer">GitHub</a></Dropdown.Item> */}
    {/* <Dropdown.Item href="#/action-3">Message</Dropdown.Item> */}
  </Dropdown.Menu>
</Dropdown>




        )
    }
}