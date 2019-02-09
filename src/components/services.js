import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import '../css/fonts/flaticon.css'

import LowerBackground from './lower-banner'

const ServicesTemplate = (props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query ServiceQuery {
          background: file(relativePath: {eq: "images/services/bg1.png"}) {
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
        <section className="our-services padd-1" style={{
                backgroundImage: `url(${data.background.childImageSharp.fluid.src})`}}>
    <div className="container">
      <div className="sec-title text-center">
                <h2>Our <span>Services</span></h2>
            </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-007-engine"></i>
            </div>
            <div className="content-box">
              <h3>Engine & Transmission</h3>
              <p>Our expert technicians will be able to tell you what is going on under the hood. </p>
              <Link to="/engine/">details <i className="fa fa-caret-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-031-airbrush"></i>
            </div>
            <div className="content-box">
              <h3>Paint & Body Shop</h3>
              <p>Fast, efficient professionals for your vehicle&#39;s paint and dent repair needs.</p>
              <Link to="/body-shop">details <i className="fa fa-caret-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-021-oil"></i>
            </div>
            <div className="content-box">
              <h3>Oil Change</h3>
              <p>Changing your oil and filter regularly is the single most important auto service.</p>
              <Link to="/oil-change">details <i className="fa fa-caret-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-020-brake"></i>
            </div>
            <div className="content-box">
              <h3>Brake Repair</h3>
              <p>Your vehicle’s brakes are the most important safety feature of your vehicle.</p>
              <Link to="/brakes">details <i className="fa fa-caret-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-036-shock-absorber"></i>
            </div>
            <div className="content-box">
              <h3>Suspension & Steering</h3>
              <p>Balance, stability and smoothness ensure a comfortable ride for you and your passengers.</p>

               <Link to="/suspension"> details <i className="fa fa-caret-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-024-car-1"></i>
            </div>
            <div className="content-box">
              <h3>Exhaust Service</h3>
              <p>Properly functioning mufflers and exhaust systems not only sound better, they are better for your car.</p>
              <Link to="/exhaust/">details <i className="fa fa-caret-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-005-voltmeter"></i>
            </div>
            <div className="content-box">
              <h3>Electronics Repair</h3>
              <p>We have top quality electrical service equipment and most knowledgeable mechanics around.</p>
               <Link to="/electronics-repair"> details <i className="fa fa-caret-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="single-item">
            <div className="icon-box">
              <i className="flaticon-012-car-3"></i>
            </div>
            <div className="content-box">
              <h3>Inspection & Diagnostics</h3>
              <p>Stay up to date on recommended factory maintenance and warranty schedule.</p>
                <Link to="/diagnostics"> details <i className="fa fa-caret-right"></i></Link>

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

const Services = () => (
  <div>
    <ServicesTemplate/>
    <LowerBackground/>
  </div>
)

export default Services
