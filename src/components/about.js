import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Model from './model'

const AboutTemplate = () => (
  <div>
    <StaticQuery
      query={graphql`
        query AboutImageQuery {
          background: file(relativePath: {eq: "images/image-1.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          about: file(relativePath: {eq: "images/Danny.jpg"}) {
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
          <section className="about-section padd-2" style={{
                  backgroundImage: `url(${data.background.childImageSharp.fluid.src})`}}>
           <div className="container">
               <div className="row">
                 <div className="col-md-6 col-sm-12 col-xs-12">
                       <div className="single-item">
                           <figure className="image-box">
                             <Img fluid={data.about.childImageSharp.fluid} alt="header"/>
                           </figure>
                       </div>
                   </div>
                   <div className="col-md-6 col-sm-12 col-xs-12">
                       <div className="single-item style-two">
                           <div className="sec-title">
                         <h2 id="about">About  <span>Century<span style={{color:"#000000"}}>Custom</span>Coach</span></h2>
                         <h3>If It Runs On Gas…We’ll Fix It!</h3>
                     </div>
                           <p>Over 30 years experience in all makes and models, foreign and Domestic. We adjust our services to meet the needs of our customers</p>
                           <p className="style-2">We offer complete auto care for your vehicle. Whether it’s time for your next factory recommended maintenance visit, a routine oil change, new tires, or repair services on your brakes, muffler and exhaust, suspension, air conditioner, or any other mechanical or electrical component of your car, Century Custom Coach is in your neighborhood and ready to serve you.</p>

                       </div>
                   </div>
               </div>
           </div>
       </section>
          </>
        )}
      />
  </div>
)

const About = () => (
  <div>
    <AboutTemplate/>
    <Model/>
  </div>
)

export default About
