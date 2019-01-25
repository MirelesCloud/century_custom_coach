import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        background: file(relativePath: {eq: "images/tires.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <div className="boxed_wrapper">
        <section className="last-banner">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-9">
                             <h3>Come to get world class service.</h3>
                         </div>
                         <div className="col-md-3">
                             <a href="contact.html" className="btn-style-eight pull-right">contact us</a>
                         </div>
                     </div>
                 </div>
        </section>
        <footer className="footer bg-style" style={{
                backgroundImage: `url(${data.background.childImageSharp.fluid.src})`}}>
          <div className="container">
            <div className="footer-upper">

              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="footer-widget about-widget">
                    <figure className="image-box">
                      <h2 ><strong style={{color:"#fff"}}>Century<span style={{color:" #c21605"}}>Custom</span>Coach</strong></h2>

                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna.</p>


                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="footer-widget quick-links">
                    <h3 className="title">Our Services</h3>
                    <ul>
                      <li><a href="https://example.com"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Car Wash</a></li>
                      <li><a href="https://example.com"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Engine Replace</a></li>
                      <li><a href="https://example.com"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Tire Repair</a></li>
                      <li><a href="https://example.com"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Car Paint</a></li>
                      <li><a href="https://example.com"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Car Observation</a></li>
                      <li><a href="https://example.com"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Home Service</a></li>
                      <li><a href="https://example.com"><FontAwesomeIcon icon={faAngleRight} style={{color:"#c21605"}}/>&nbsp;&nbsp;Engine Replace</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
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
                <div className="col-md-3 col-sm-6">
                  <div className="footer-widget experts-column">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-bottom text-center">
          <div className="copyright-text">Copyright @ <span>MirelesCloud</span> 2019. All Rights Reserved</div>
          <br/>
          <div>Icons made by <a href="https://www.flaticon.com/packs/car-repair-3" title="Pause08">Pause08</a> from <a href="https://www.flaticon.com/"  title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 	rel="noopener noreferrer" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
      </div>
      </>
    )}
    />
)



export default Footer
