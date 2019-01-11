import React from 'react'
import Background from '../images/tires.jpg'

const Footer = () => (
  <footer class="footer bg-style" style={{backgroundImage:`url(${Background})`}}>
    <div class="container">
      <div class="footer-upper">

        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="footer-widget about-widget">
              <figure class="image-box">

              </figure>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna.</p>

              <div class="social-links">
                <a href="https://example.com"><span class="fa fa-facebook-f"></span></a>
                <a href="https://example.com"><span class="fa fa-twitter"></span></a>
                <a href="https://example.com"><span class="fa fa-linkedin"></span></a>
                <a href="https://example.com"><span class="fa fa-instagram"></span></a>
                <a href="https://example.com"><span class="fa fa-pinterest-p"></span></a>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-widget quick-links">
              <h3 class="title">Our Services</h3>
              <ul>
                <li><a href="https://example.com">Car Wash</a></li>
                <li><a href="https://example.com"> Engine Replace</a></li>
                <li><a href="https://example.com">Tire Repair</a></li>
                <li><a href="https://example.com">Car Paint</a></li>
                <li><a href="https://example.com">Car Observation</a></li>
                <li><a href="https://example.com">Home Service</a></li>
                <li><a href="https://example.com"> Engine Replace</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="footer-widget opening-hour">
              <h3 class="title">Working Hours</h3>


              <ul class="day-time">
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
          <div class="col-md-3 col-sm-6">
            <div class="footer-widget experts-column">

                              <h3 class="title">Our Experts</h3>
                            <ul>
                <li><a href="https://example.com">Denial Alfiz</a></li>
                <li><a href="https://example.com">Mithila Akon</a></li>
                <li><a href="https://example.com">Robert Zobair</a></li>
                <li><a href="https://example.com">Jone Hafiz </a></li>
                <li><a href="https://example.com">Albert Muzahidul</a></li>
                <li><a href="https://example.com">Kida Nurure</a></li>
                <li><a href="https://example.com">Ahmed Kutubil</a></li>
              </ul>
                        </div>
          </div>


        </div>
      </div>

    </div>

  </footer>
)

export default Footer
