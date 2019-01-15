import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Background from '../images/image-1.png'

const About = () => (
  <div>
    <StaticQuery
      query={graphql`
        query AboutImageQuery {
          background: file(relativePath: {eq: "images/image-1.png"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
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
          <section className="about-section padd-2" style={{backgroundImage:`url(${Background})`}}>
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
                   </div>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,</p>
                           <p className="style-2">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit.</p>
                           <div className="link_btn">
                               <a href="about.html" className="btn-style-one">read more</a>
                           </div>
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

export default About
