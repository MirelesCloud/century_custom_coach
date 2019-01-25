import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default function ServiceTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <section className="single-service padd-1">
      <div className="container">
        <div className="text">
          <h2>{frontmatter.title}</h2>
          <h3>{frontmatter.date}</h3>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
