import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Pulse from 'react-reveal/Pulse'

const LowerBackground = () => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query LowerBannerImageQuery {
          background: file(relativePath: {eq: "images/lower-banner/bg-1.jpg"}) {
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
        <section className="parallax-style padd-1" style={{
                backgroundImage: `url(${data.background.childImageSharp.fluid.src})`}}>
	        <div className="container">
	            <div className="text-center">
	                <h2>Your quality full service autmotive repair, paint and body shop in West L.A.</h2>
	                <div className="text">Thousands of satisfied customers over 30 years.</div>
	                <Pulse><Link to="/contact" className="btn-style-five">Contact Us</Link></Pulse>
	            </div>
	        </div>
	    </section>
        </>
      )}
    />
  </section>
)

export default LowerBackground
