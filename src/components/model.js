import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Swiper from 'react-id-swiper';


import BackgroundImage from '../images/engine-background.jpg'


const params = {
      slidesPerView: 6,
      spaceBetween: 30,
      loops: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    };


const Model = () => (
  <div>
    <StaticQuery
      query={graphql`
        query ModelImageQuery {
          background: file(relativePath: {eq: "images/image-1.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          audi: file(relativePath: {eq: "images/models/Audi.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          bmw: file(relativePath: {eq: "images/models/BMW.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          ferrari: file(relativePath: {eq: "images/models/Ferrari.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          peugeot: file(relativePath: {eq: "images/models/Peugeot.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          toyota: file(relativePath: {eq: "images/models/toyota-logo2.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          rollsroyce: file(relativePath: {eq: "images/models/rolls-royce-logo.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          chevy: file(relativePath: {eq: "images/models/chevy1.png"}) {
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
      <section className="models-section" style={{backgroundImage:`url(${BackgroundImage})`, border:"1px solid #000"}}>
        <div className="auto-container">
            <div className="sponsors-outer">
                <Swiper {...params}>
                  <figure className="image-box"><Img fluid={data.audi.childImageSharp.fluid} alt="Audi Logo"/></figure>
                  <figure className="image-box"><Img fluid={data.bmw.childImageSharp.fluid} alt="BMW Logo"/></figure>
                  <figure className="image-box"><Img fluid={data.peugeot.childImageSharp.fluid} alt="Peugeot Logo"/></figure>
                  <figure className="image-box"><Img fluid={data.ferrari.childImageSharp.fluid} alt="Ferrari Logo"/></figure>
                  <figure className="image-box"><Img fluid={data.toyota.childImageSharp.fluid} alt="Toyota Logo"/></figure>
                  <figure className="image-box"><Img fluid={data.rollsroyce.childImageSharp.fluid} alt="Rolls Royce Logo"/></figure>
                  <figure className="image-box"><Img fluid={data.chevy.childImageSharp.fluid} alt="Chevy Logo"/></figure>
                </Swiper>
            </div>
        </div>
    </section>
          </>
        )}
      />
  </div>
)

export default Model
