import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Background from '../images/tires.jpg'

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
          toyota: file(relativePath: {eq: "images/models/Toyota.png"}) {
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
          <section className="model-counter" style={{backgroundImage:`url(${Background})`}}>
          <div className="container">
            <div className="row">

                <div className="col-md-2">
                  <Img fluid={data.audi.childImageSharp.fluid} alt="Audi Logo"/>
                </div>
                <div className="col-md-2">
                  <Img fluid={data.bmw.childImageSharp.fluid} alt="BMW Logo"/>
                </div>
                <div className="col-md-2">
                  <Img fluid={data.ferrari.childImageSharp.fluid} alt="Ferrari Logo"/>
                </div>
                <div className="col-md-2">
                  <Img fluid={data.peugeot.childImageSharp.fluid} alt="Peugeot Logo"/>
                </div>
                <div className="col-md-2">
                  <Img fluid={data.toyota.childImageSharp.fluid} alt="Peugeot Logo"/>
                </div>

            </div>
          </div>
      </section>
          </>
        )}
      />
  </div>
)

export default Model
