import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Feature = () => (
  <div>
    <StaticQuery
      query={graphql`
        query FeatureImageQuery {
          feature1: file(relativePath: {eq: "images/f1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          feature2: file(relativePath: {eq: "images/f2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          feature3: file(relativePath: {eq: "images/f3.jpg"}) {
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
          <section className="features">
            <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="item">
                      <figure className="image-box">
                        <Img fluid={data.feature1.childImageSharp.fluid} alt="header"/>
                        <div className="overlay">
                          <div className="inner">
                            <a href="#"><i className="flaticon-tool-1"></i></a>
                          </div>
                        </div>
                      </figure>
                      <div className="content">
                        <h4><a href="#">Expert Mechanic</a></h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="item">
                      <figure className="image-box">
                        <Img fluid={data.feature3.childImageSharp.fluid} alt="header"/>
                        <div className="overlay">
                          <div className="inner">
                            <a href="#"><i className="flaticon-tool-1"></i></a>
                          </div>
                        </div>
                      </figure>
                      <div className="content">
                        <h4><a href="#">Pro Body Shop</a></h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="item">
                      <figure className="image-box">
                        <Img fluid={data.feature3.childImageSharp.fluid} alt="header"/>
                        <div className="overlay">
                          <div className="inner">
                            <a href="#"><i className="flaticon-tool-1"></i></a>
                          </div>
                        </div>
                      </figure>
                      <div className="content">
                        <h4><a href="#">Pro Paint Shop</a></h4>
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

export default Feature
