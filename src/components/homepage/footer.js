import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (



            <footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-md-6">
                        <div className="menu_links">
                            <ul>
                                <li><a href="/about">About</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <div className="socail_links">
                            <ul>
                                <li><a href='https://www.linkedin.com/in/brennan-smallwood-422155a1/' target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin"></i> </a></li>
                                <li><a href='https://github.com/BSmalls6' target="_blank" rel="noopener noreferrer"> <i className="fa fa-github"></i> </a></li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
                           
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>



        )
    }
}