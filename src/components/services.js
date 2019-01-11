import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSprayCan } from '@fortawesome/free-solid-svg-icons'

import Background from '../images/services/bg1.png'

const Services = (props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query ServiceQuery {
          imageHair1: file(relativePath: {eq: "images/home/hair5.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageHair2: file(relativePath: {eq: "images/home/hair3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageHair3: file(relativePath: {eq: "images/home/hair4.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <section class="our-services padd-1" style={{backgroundImage:`url(${Background})`}}>
    <div class="container">
      <div class="sec-title text-center">
                <h2>Our <span>Services</span></h2>
            </div>
      <div class="row">


        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-repair-mechanism"></i>

            </div>
            <div class="content-box">
              <h3>Engine Replace</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>
              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-car-washing-machine"></i>
            </div>
            <div class="content-box">
              <h3>Car Wash</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>
              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-transport"></i>
            </div>
            <div class="content-box">
              <h3>Car Observation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>
              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-car-wheel"></i>
            </div>
            <div class="content-box">
              <h3>Tire Repair</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-paint-2"></i>
              <FontAwesomeIcon icon={faSprayCan} className="fa-2x m-2" />
            </div>
            <div class="content-box">
              <h3>Car Paint</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-man-with-car"></i>
            </div>
            <div class="content-box">
              <h3>Home Service</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-malfunction-indicador"></i>
            </div>
            <div class="content-box">
              <h3>Engine Repair</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="single-item">
            <div class="icon-box">
              <i class="flaticon-car-with-wrench"></i>
            </div>
            <div class="content-box">
              <h3>Servicing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i class="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>


      </div>
    </div>
  </section>
        </>
      )}
    />
  </section>

)

export default Services
