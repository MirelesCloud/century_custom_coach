import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Fade from 'react-reveal/Fade'

import Feature from './feature'

const IntroTemplate = () => (
    <StaticQuery
      query={graphql`
        query ImageQuery {
          auto1: file(relativePath: {eq: "images/home/rawpixel-741689-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          auto2: file(relativePath: {eq: "images/home/nikolay-tchaouchev-785292-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          auto3: file(relativePath: {eq: "images/home/photodune-3980192-auto-mechanic-at-car-suspension-repair-work-m-1024x681.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <div className="rev_slider_wrapper">
          <div className="rev_slider">
            <Carousel infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={2000} dynamicHeight={true} showThumbs={false}>
              <div >
                 <Img fluid={data.auto1.childImageSharp.fluid} alt="header"/>
                 <div className="carousel-header-container">
                   <Fade left>
                     <h1 className="carousel-header">Full <span style={{color:"#c21605"}}>Service</span> Automotive <span style={{color:"#c21605"}}>Repair</span> and Maintenance</h1>
                   </Fade>
                 </div>

              </div>
                 <div>
                    <Img fluid={data.auto2.childImageSharp.fluid} alt="header 2"/>
                      <div className="carousel-header-container">
                        <Fade right>
                          <h1 className="carousel-header">Expert <span style={{color:"#c21605"}}>Paint</span>  and <span style={{color:"#c21605"}}>Body</span> Shop</h1>
                        </Fade>

                      </div>
                </div>
                <div>
                    <Img fluid={data.auto3.childImageSharp.fluid} alt="header 3"/>
                      <div className="carousel-header-container">
                        <Fade left>
                            <h1 className="carousel-header">We <span style={{color:"#c21605"}}>Service</span>  All Makes and <span style={{color:"#c21605"}}>Models</span> </h1>
                        </Fade>
                      </div>
                </div>
            </Carousel>
          </div>
        </div>
        </>
      )}
      />
)

const Intro = () => (
  <div>
    <IntroTemplate/>
    <Feature/>
  </div>
)

export default Intro
