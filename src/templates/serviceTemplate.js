import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'

export default function ServiceTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <section className="page-banner" style={{
              backgroundImage: `url(${frontmatter.image.childImageSharp.fluid.src})`}}
              >
        <div className="container">
          <div className="content">
            <h2 className="text-uppercase">{frontmatter.title}</h2>
            <ul className="breadcumb">
              <li>
                <a href="https://example.com"><Link to="/">Home</Link></a>
                <i className="fa fa-chevron-right" aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} className="fa-sm"/></i>
              </li>
              <li>
                <a className="active" href="https://example.com"><Link to="/pages/body-shop">services</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="single-service padd-1">
        <div className="container">
          <figure className="image-holder">
            <Img fluid={frontmatter.showcase.childImageSharp.fluid} />
          </figure>
          <div className="text">
           <h2>{frontmatter.sub_title}</h2>
            <p>{frontmatter.description}</p>
            <div className="two-column">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <figure className="image-box">
                    <Img fluid={frontmatter.feature.childImageSharp.fluid} />
                  </figure>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="content">
                  <h2>{frontmatter.heading}</h2>
                  <p>{frontmatter.text}</p>
                    <br/>
                    <ul dangerouslySetInnerHTML={{ __html: html }} />
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
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        sub_title
        description
        heading
        text
        image {
          childImageSharp {
            fluid(maxWidth: 2000){
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        showcase {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        feature {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
