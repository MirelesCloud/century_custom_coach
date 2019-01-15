import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Background from '../images/tires.jpg'

const Footer = () => (
  <footer className="footer bg-style" style={{backgroundImage:`url(${Background})`}}>
    <div className="container">
      <div className="footer-upper">

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget about-widget">
              <figure className="image-box">

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
)

export default Footer
