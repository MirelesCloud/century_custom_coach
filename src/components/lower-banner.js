import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

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
	                <h2>We are the most trusted car repair company in West L.A. The best service is our goal.</h2>
	                <div className="text">Some lorem ipsum subtitle will be here ipsum dolor</div>
	                <a href="contact.html" className="btn-style-five">Contact Us</a>
	                <a href="https://example.com" className="btn-style-eight">Learn More</a>
	            </div>
	        </div>
	    </section>
        </>
      )}
    />
  </section>
)

export default LowerBackground
