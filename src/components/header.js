import React from "react"
import Fade from 'react-reveal/Fade'
import Navbar from './navbar'
import Intro from './intro'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Header = ({siteTitle}) => (
  <header>
    <div className="top-bar">
		    <div className="container">
		        <div className="clearfix">
		            <ul className="top-bar-text float_left">
		                <li><i className="fa fa-phone"><FontAwesomeIcon icon={faPhoneVolume}/></i>(310) 478-5855</li>
		                <li><i className="fa fa-envelope"><FontAwesomeIcon icon={faEnvelope}/></i>CenturyCustomCoach@gmail.com</li>
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
                        <h1 className="display-4" id="title"><strong>Century<span style={{color:" #c21605"}}>Custom</span>Coach</strong></h1>
                      </Fade>
		                </div>
		            </div>

		            <div className="pull-right upper-right clearfix">


		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-phone-call"><FontAwesomeIcon icon={faPhoneVolume} className="fa-2x m-2"/></span></div>
		                    <ul className="list-unstyled">
		                        <li><strong>Call Us</strong></li>
		                        <li>(310) 478-5855</li>
		                    </ul>
		                </div>


		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x m-2"/></span></div>
		                    <ul className="list-unstyled">
		                        <li><strong>Our Address</strong></li>
		                        <li>2237 Barry Ave, Los Angeles, CA 90064</li>
		                    </ul>
		                </div>


		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-clock"><FontAwesomeIcon icon={faClock} className="fa-2x m-2"/></span></div>
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
