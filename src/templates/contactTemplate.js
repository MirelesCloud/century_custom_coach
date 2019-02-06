import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'


export default function Contact({ data }) {

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <h1>{ frontmatter.title }</h1>

    </Layout>
  )
}

export const contactQuery = graphql`
  query($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path } }) {
     html
     frontmatter {
       title
     }
    }
  }
`
