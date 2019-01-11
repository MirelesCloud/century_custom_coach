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
                <a href="#"><span class="fa fa-facebook-f"></span></a>
                <a href="#"><span class="fa fa-twitter"></span></a>
                <a href="#"><span class="fa fa-linkedin"></span></a>
                <a href="#"><span class="fa fa-instagram"></span></a>
                <a href="#"><span class="fa fa-pinterest-p"></span></a>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="footer-widget quick-links">
              <h3 class="title">Our Services</h3>
              <ul>
                <li><a href="#">Car Wash</a></li>
                <li><a href="#"> Engine Replace</a></li>
                <li><a href="#">Tire Repair</a></li>
                <li><a href="#">Car Paint</a></li>
                <li><a href="#">Car Observation</a></li>
                <li><a href="#">Home Service</a></li>
                <li><a href="#"> Engine Replace</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="footer-widget opening-hour">
              <h3 class="title">Working Hours</h3>


              <ul class="day-time">
                <li><span>Saturday &nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>9 AM - 5 PM</span></li>
                <li><span>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span> &nbsp;&nbsp;&nbsp;<span>Closed</span></li>
                <li><span>Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>9 AM - 5 PM</span></li>

                <li><span>Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>9 AM - 5 PM</span></li>
                <li><span>Wednesday&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>9 AM - 5 PM</span></li>
                <li><span>Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>9 AM - 5 PM</span></li>
                <li><span>Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</span>&nbsp;&nbsp;&nbsp; <span>9 AM - 5 PM</span></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="footer-widget experts-column">

                              <h3 class="title">Our Experts</h3>
                            <ul>
                <li><a href="#">Denial Alfiz</a></li>
                <li><a href="#">Mithila Akon</a></li>
                <li><a href="#">Robert Zobair</a></li>
                <li><a href="#">Jone Hafiz </a></li>
                <li><a href="#">Albert Muzahidul</a></li>
                <li><a href="#">Kida Nurure</a></li>
                <li><a href="#">Ahmed Kutubil</a></li>
              </ul>
                        </div>
          </div>


        </div>
      </div>

    </div>
  </footer>
)

export default Footer
