import React from "react"
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Navbar from './navbar'
import Intro from './intro'



const Header = ({siteTitle}) => (
  <header>
    <div class="top-bar">
		    <div class="container">
		        <div class="clearfix">
		            <ul class="top-bar-text float_left">
		                <li><i class="fa fa-phone"></i>(310) 478-5855</li>
		                <li><i class="fa fa-envelope"></i>CenturyCustomCoach@gmail.com</li>
		            </ul>
		        </div>
		    </div>
		</div>
    <div className="header-upper">
		    <div className="container">
		        <div style={{display:"block"}}>

		            <div className="pull-left logo-outer">
		                <div className="logo-box">
                      <Fade right>
                        <h1 style={{fontSize:"3.3vw"}}><strong>Century<span style={{color:" #c21605"}}>Custom</span>Coach</strong></h1>
                      </Fade>
		                </div>
		            </div>

		            <div className="pull-right upper-right clearfix">


		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-phone-call"></span></div>
		                    <ul className="list-unstyled">
		                        <li><strong>Call Us</strong></li>
		                        <li>(310) 478-5855</li>
		                    </ul>
		                </div>


		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-location"></span></div>
		                    <ul className="list-unstyled">
		                        <li><strong>Our Address</strong></li>
		                        <li>2237 Barry Ave, Los Angeles, CA 90064</li>
		                    </ul>
		                </div>


		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-clock"></span></div>
		                    <ul className="list-unstyled">
		                        <li><strong>Working Hour</strong></li>
		                        <li>Mon- Fri : 8 am - 6 pm</li>
		                    </ul>
		                </div>

		            </div>

		        </div>
		    </div>
		</div>
    <Navbar/>
    <Intro/>
  </header>
)

export default Header
