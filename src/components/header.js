import React from "react"
import Fade from 'react-reveal/Fade'

import Intro from './intro'



const Header = ({siteTitle}) => (
  <section>
    <div className="header-upper">
		    <div className="container">
		        <div className="clearfix">
		            <div className="pull-left logo-outer">
		                <div className="logo-box" style={{marginTop: "5rem"}}>
                      <Fade right>
                        <h1 id="title" ><strong>Century<span style={{color:" #c21605"}}>Custom</span>Coach</strong></h1>
                      </Fade>
		                </div>
		            </div>
		            <div className="pull-right upper-right clearfix" >
		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-045-call"></span></div>
		                    <ul className="list-unstyled" id="header-upper">
		                        <li><strong>Call Us</strong></li>
		                        <li id="header-upper">(310) 478-5855</li>
		                    </ul>
		                </div>
		                <div className="upper-column info-box">
		                    <div className="icon-box"><span className="flaticon-047-location"></span></div>
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
    <Intro/>
  </section>
)

export default Header
