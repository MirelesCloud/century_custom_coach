import React from "react"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import { graphql } from 'gatsby'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '../css/special.css'
import '../css/contact.css'
import '../css/responsive.css'
import '../css/owl.css'


import Layout from "../components/layout"

const TemplateWrapper = ({data}) => (
  <section>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Layout>
    </Layout>
  </section>
)

export default TemplateWrapper

export const pageQuery = graphql`
  query testQuery {
    imageHair: file(relativePath: {eq: "images/hair9.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageGallery: allFile(filter: {absolutePath: {regex: "\/images/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
