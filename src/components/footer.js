import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Flash from 'react-reveal/Flash'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        background: file(relativePath: {eq: "images/tires.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <section>
        <div className="boxed_wrapper">
          <section className="last-banner">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-9">
                               <h3>Come to get world class service.</h3>
                           </div>
                           <div className="col-md-3">
                               <Flash><Link to="/contact" className="btn-style-eight pull-right">contact us</Link></Flash>
                           </div>
                       </div>
                   </div>
          </section>
          <footer className="footer bg-style" style={{
                  backgroundImage: `url(${data.background.childImageSharp.fluid.src})`}}>
            <div className="container">
              <div className="footer-upper">

                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="footer-widget about-widget">
                      <figure className="image-box">
                        <h2 ><strong style={{color:"#fff"}}>Century <span style={{color:" #c21605"}}>Custom </span>Coach</strong></h2>
                      </figure>
                      <p>Contact us today and get world class service for your car or truck.  We are here to service you.</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="footer-widget quick-links">
                      <h3 className="title">Our Services</h3>
                      <ul>
                        <li><Link to="/engine"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Engine & Transmission Repair</Link></li>
                        <li><Link to="/body-shop"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Paint & Body Shop</Link></li>
                        <li><Link to="/oil-change"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Oil & Filter Change</Link></li>
                        <li><Link to="/brakes"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Brake Repair</Link></li>
                        <li><Link to="/suspension"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Suspension & Steering</Link></li>
                        <li><Link to="/exhaust"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Muffler & Exhaust Repair</Link></li>
                        <li><Link to="/electronics-repair"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Electrical Repair & Battery</Link></li>
                        <li><Link to="/diagnostics"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Diagnostics & Tune Up</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="footer-widget opening-hour">
                      <h3 className="title">Working Hours</h3>
                      <ul className="day-time">
                          <li><span>Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>8 AM - 6 PM</span></li>
                          <li><span>Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>8 AM - 6 PM</span></li>
                          <li><span>Wednesday&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>8 AM - 6 PM</span></li>
                          <li><span>Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>8 AM - 6 PM</span></li>
                          <li><span>Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>8 AM - 6 PM</span></li>
                          <li><span>Saturday &nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>Closed</span></li>
                          <li><span>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> &nbsp;&nbsp;&nbsp;<span>Closed</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="footer-bottom text-center">
            <div className="copyright-text" aria-label="MirelesCloud">&copy; <a href="https://mirelescloud.com" style={{color:"#fff"}}>MirelesCloud</a> 2019. All Rights Reserved</div>
            <br/>
            <small>Icons made by <a href="https://www.flaticon.com/packs/car-repair-3" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/"  title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 	rel="noopener noreferrer" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></small>
          </div>
        </div>
      </section>
      </>
    )}
    />
)

export default Footer
