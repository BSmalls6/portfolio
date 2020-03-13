import React, { Component } from 'react'
import Dropdown from './dropdown'

export default class Header extends Component {
   
   
    render() {
        const divStyle = {
            backgroundColor: '#001D38'
          };
        return (



            <div className="navbar fixed-top navbar-dark" style={divStyle} >
        <a class="navbar-brand" href="#">BLS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li>Get in Touch</li>

      <li>
  <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  </a>
<div class="dropdown">
  <button class="dropbtn"><Dropdown/></button>
 
</div>
</div>
      </li>
    </ul>
  </div>
      </div>





        )
    }
}