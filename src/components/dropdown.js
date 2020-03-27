import React, { Component } from 'react'
// import Dropdown from './dropdown'
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from './Modal'





export default class Header extends Component {
   
   
    render() {
        const divStyle = {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // marginRight: '10px'
          };
          const menuStyle ={
            backgroundColor: '#001D38',
            color: '#0000ff'

          }
        return (
    

<Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={divStyle}>
    Contact
  </Dropdown.Toggle>

  <Dropdown.Menu style={menuStyle}>
    <Dropdown.Item href="#/action-1"><a href='https://www.linkedin.com/in/brennan-smallwood-422155a1/' target="_blank" rel="noopener noreferrer">Linkedin</a></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><a href='https://github.com/BSmalls6' target="_blank" rel="noopener noreferrer">GitHub</a></Dropdown.Item>
    {/* <Dropdown.Item href="#/action-3">Message</Dropdown.Item> */}
  </Dropdown.Menu>
</Dropdown>




        )
    }
}