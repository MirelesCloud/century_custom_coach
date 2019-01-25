import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../components/header'
import Layout from '../components/layout'
import Footer from '../components/footer'


const EngineReplaceTemplate = () => (
  <StaticQuery
    query={graphql`
      query EngineReplaceQuery {
        banner: file(relativePath: {eq: "images/engine.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        feature: file(relativePath: {eq: "images/ss.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        example: file(relativePath: {eq: "images/sst.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <Header/>
      <section className="page-banner" style={{
              backgroundImage: `url(${data.banner.childImageSharp.fluid.src})`}}
              >
        <div className="container">
          <div className="content">
            <h2>Engine Replacement</h2>

          </div>
        </div>
      </section>
      <section className="single-service padd-1">
        <div className="container">
          <figure className="image-holder">
            <Img fluid={data.feature.childImageSharp.fluid} />
          </figure>
          <div className="text">
            <h2>Engine Replace</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="two-column">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <figure className="image-box">
                    <Img fluid={data.example.childImageSharp.fluid} />
                  </figure>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="content">
                    <h2>Car Observation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <br/>
                    <ul>
                      <li><a href="/">Expert Mechanic</a></li>
                      <li><a href="/">Quick Service</a></li>
                      <li><a href="/">24 Hour Service</a></li>
                      <li><a href="/">Home Service</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </>
    )}
    />
)

const EngineReplace = () => (
  <Layout>
    <EngineReplaceTemplate/>
  </Layout>
)

export default EngineReplace
