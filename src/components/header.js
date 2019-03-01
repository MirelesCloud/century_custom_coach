import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Navigation from  './navbar'


const Header = ({ siteTitle, menuLinks }) => (
  <section>
    <header className="top-bar pt-0">
		    <div className="container">
		        <div className="clearfix">
		            <ul className="top-bar-text float_left">
		            </ul>
		        </div>
		    </div>
		</header>
    <div className="header-upper">
		 <div className="container">
      <div className="clearfix">
        <div className="pull-left logo-outer">
          <div className="logo-box d-none d-md-block">
            <Fade right>
              <Link to="/"><h1 id="title" style={{color:"#000", fontSize: "5rem"}}><strong>Century<span style={{color:" #c21605"}}>Custom</span>Coach</strong></h1></Link>
            </Fade>
          </div>
            <div className="logo-box d-md-none text-center" style={{marginTop: "1rem"}}>
              <Fade left>
                <Link to="/" id="title-heading" >
                  <h1 className="m-0" style={{color:"#000", fontSize: "5rem"}}>Century</h1>
                  <h1 className="m-0"><span style={{color:" #c21605", fontSize: "5rem"}}>Custom</span></h1>
                  <h1 style={{color:"#000", fontSize: "5rem"}}>Coach</h1>
                </Link>
              </Fade>
              <hr/>
            </div>
          </div>
        <div className="pull-right upper-right clearfix" >
          <div className="upper-column info-box">
            <div className="icon-box"><span><FontAwesomeIcon icon={faPhoneVolume} className="fa-2x m-2" /></span></div>
            <ul className="list-unstyled" id="header-responsive">
              <li><strong>Call Us</strong></li>
              <li id="header-responsive"><a href="tel:1-310-478-5855">(310) 478-5855</a></li>
            </ul>
          </div>
          <div className="upper-column info-box">
            <div className="icon-box"><span><FontAwesomeIcon icon={faMapMarkerAlt} className="fa-2x m-2" /></span></div>
            <ul className="list-unstyled">
              <li><strong>Our Address</strong></li>
              <li id="header-responsive">2237 Barry Ave, Los Angeles, CA 90064</li>
            </ul>
          </div>
          <div className="upper-column info-box">
            <div className="icon-box"><span><FontAwesomeIcon icon={faClock} className="fa-2x m-2" /></span></div>
            <ul className="list-unstyled">
              <li><strong>Working Hour</strong></li>
              <li id="header-responsive">Mon- Fri : 8 am - 6 pm</li>
            </ul>
          </div>
        </div>
      </div>
		 </div>
		</div>
    <Navigation/>
  </section>
)

export default Header
