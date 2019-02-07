import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Gallery({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark


  return (
    <Layout>
        <section className="page-banner" style={{
                backgroundImage: `url(${frontmatter.image.childImageSharp.fluid.src})`}}
          >
          <div className="container">
            <div className="content">
              <h2 className="text-uppercase">{ frontmatter.title }</h2>

            </div>
          </div>
        </section>
        <section className="single-service padd-1">

        </section>

    </Layout>
  )
}

export const galleryQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
