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
        <section className="our-services padd-1" style={{backgroundImage:`url(${Background})`}}>
    <div className="container">
      <div className="sec-title text-center">
                <h2>Our <span>Services</span></h2>
            </div>
      <div className="row">


        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-repair-mechanism"></i>

            </div>
            <div className="content-box">
              <h3>Engine Replace</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>
              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-car-washing-machine"></i>
            </div>
            <div className="content-box">
              <h3>Car Wash</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>
              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-transport"></i>
            </div>
            <div className="content-box">
              <h3>Car Observation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>
              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-car-wheel"></i>
            </div>
            <div className="content-box">
              <h3>Tire Repair</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-paint-2"></i>
              <FontAwesomeIcon icon={faSprayCan} className="fa-2x m-2" />
            </div>
            <div className="content-box">
              <h3>Car Paint</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-man-with-car"></i>
            </div>
            <div className="content-box">
              <h3>Home Service</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-malfunction-indicador"></i>
            </div>
            <div className="content-box">
              <h3>Engine Repair</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
            </div>
          </div>

        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-car-with-wrench"></i>
            </div>
            <div className="content-box">
              <h3>Servicing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do.</p>

              <a href="service-single.html"> details <i className="fa fa-caret-right"></i></a>
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
