import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSprayCan } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faPinterestSquare, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import Background from '../images/lower-banner/bg-1.jpg'

const LowerBackground = (props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query LowerBannerImageQuery {
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
        <section class="parallax-style padd-1" style={{backgroundImage:`url(${Background})`}}>
	        <div class="container">
	            <div class="text-center">
	                <h2>We are the first and trusted car repair company in your West L.A. The best service is our goal.</h2>
	                <div class="text">Some lorem ipsum subtitle will be here ipsum dolor</div>
	                <a href="contact.html" class="btn-style-five">Contact Us</a>
	                <a href="#" class="btn-style-eight">Learn More</a>
	            </div>
	        </div>
	    </section>
        </>
      )}
    />
  </section>

)

export default LowerBackground
