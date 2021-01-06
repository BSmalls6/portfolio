import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./header";
import Services from "./Services";
import About from "./aboutMe";
import Hero from "./hero";
import PortfolioImages from "./portfolioImages";
import PortfolioStart from "./portfolioStart";
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Homepage extends Component {
    render() {
        return (

            <div>
            <Header />
            <Hero />
            <Services />
            <PortfolioStart />
            <PortfolioImages />
            <About />
            <Footer/>
    
            
          </div>
                
              
                )
                    }
}