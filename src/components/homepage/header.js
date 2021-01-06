import React, { Component } from 'react'
// import Dropdown from './dropdown'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import logo from '../../img/logo.png'
import DropMenu from'./dropdowns/dropdown'
import styleSheet from './style.css'

// import FormControl from 'react-bootstrap/FormControl';




export default class Header extends Component {


    render() {
        
        return (


            <Navbar variant = "dark" sticky = "top" className='header headroom' style = { styleSheet }>
                <Navbar.Brand href = "/" > <img id="logo" style= {styleSheet} src={logo} alt="logo" /> </Navbar.Brand> 
                    <Nav className = "mr-auto">
                        <Nav.Link href = "#home"> </Nav.Link>
                        <Nav.Link href = "#features"> </Nav.Link>
                        <Nav.Link href = "#pricing" > </Nav.Link> 
                    </Nav> 
                <Form inline>
                     <Button variant = "outline-info"> 
                        <DropMenu> </DropMenu>
                     </Button >
                </Form> 
            </Navbar>
        )
    }
}