import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

import Feature from './feature'



const IntroTemplate = () => (
    <StaticQuery
      query={graphql`
        query ImageQuery {
          auto1: file(relativePath: {eq: "images/home/rawpixel-741689-unsplash.jpg"}) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          auto2: file(relativePath: {eq: "images/home/whereslugo-465120-unsplash.jpg"}) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          auto3: file(relativePath: {eq: "images/home/david-hellmann-600264-unsplash.jpg"}) {
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
        <div className="rev_slider_wrapper">
          <div className="rev_slider">
            <Carousel infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={2000} dynamicHeight={false} showThumbs={false} showArrows={false} showIndicators={false}>
              <div >
                <Fade top>
                  <Img fluid={data.auto1.childImageSharp.fluid} alt="header"/>
                </Fade>

                 <div className="carousel-header-container">
                   <Slide bottom>
                     <h1 className="carousel-header">Full <span style={{color:"#c21605"}}>Service</span> Automotive <span style={{color:"#c21605"}}>Repair</span> and Maintenance</h1>
                   </Slide>
                 </div>
              </div>
                 <div>
                   <Img fluid={data.auto2.childImageSharp.fluid} alt="header 2"/>
                  <div className="carousel-header-container">
                   <h1 className="carousel-header">Expert <span style={{color:"#c21605"}}>Paint</span>  and <span style={{color:"#c21605"}}>Body</span> Shop</h1>
                  </div>
                </div>
                <div>
                  <Img fluid={data.auto3.childImageSharp.fluid} alt="header 3"/>
                  <div className="carousel-header-container">
                    <h1 className="carousel-header">We <span style={{color:"#c21605"}}>Service</span>  All Makes and <span style={{color:"#c21605"}}>Models</span> </h1>
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
