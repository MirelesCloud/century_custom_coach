import React from "react"
import { graphql } from 'gatsby'

import Home from './template/home'
import SEO from '../components/SEO'

import '../../node_modules/animate.css/animate.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css'
import '../css/main.css'
import '../css/special.css'
import '../css/contact.css'
import '../css/responsive.css'
import '../css/animate.min.css'

const TemplateWrapper = ({data}) => (
  <section>
    <SEO/>
    <Home/>
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
