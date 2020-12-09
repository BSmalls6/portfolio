import React, { Component } from 'react'
// import Dropdown from './dropdown'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Dropdown from './dropdown';

// import FormControl from 'react-bootstrap/FormControl';




export default class Header extends Component {


    render() {
        const divStyle = {
            backgroundColor: '#001D38'
        };
        return (


            <Navbar variant = "dark" sticky = "top" style = { divStyle }>
                <Navbar.Brand href = "#home" > BLS </Navbar.Brand> 
                    <Nav className = "mr-auto">
                        <Nav.Link href = "#home"> </Nav.Link>
                        <Nav.Link href = "#features"> </Nav.Link>
                        <Nav.Link href = "#pricing" > </Nav.Link> 
                    </Nav> 
                <Form inline>
                     <Button variant = "outline-info"> 
                        <Dropdown> </Dropdown>
                     </Button >
                </Form> 
            </Navbar>
        )
    }
}