import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'

import '../font/flaticon.css'
import Navbar from  './navbar'

const HeaderTemplate = ({siteTitle}) => (
  <section>
    <Navbar/>
    <div className="header-upper">
		    <div className="container">
		        <div className="clearfix">
		            <div className="pull-left logo-outer">
		                <div className="logo-box" style={{marginTop: "5rem"}}>
                      <Fade right>
                        <Link to="/"><h1 id="title" style={{color:"#000"}}><strong>Century<span style={{color:" #c21605"}}>Custom</span>Coach</strong></h1></Link>
                      </Fade>
		                </div>
		            </div>
		            <div className="pull-right upper-right clearfix" >
		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-phone"></span></div>
		                    <ul className="list-unstyled" id="header-upper">
		                        <li><strong>Call Us</strong></li>
		                        <li id="header-upper">(310) 478-5855</li>
		                    </ul>
		                </div>
		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-pin"></span></div>
		                    <ul className="list-unstyled">
		                        <li><strong>Our Address</strong></li>
		                        <li id="header-upper">2237 Barry Ave, Los Angeles, CA 90064</li>
		                    </ul>
		                </div>
		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-clock"></span></div>
		                    <ul className="list-unstyled">
		                        <li><strong>Working Hour</strong></li>
		                        <li id="header-upper">Mon- Fri : 8 am - 6 pm</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
  </section>
)

const Header = () => (
  <div className="boxed_wrapper">
    <HeaderTemplate/>
  </div>
)

export default Header
