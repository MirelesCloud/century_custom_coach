import React from "react"
import { graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'

import Home from './template/home'
import SEO from '../components/SEO'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const TemplateWrapper = ({data}) => (
  <section>
    <SEO/>
    <Home/>
    <ScrollToTop showUnder={160} className="scroll-top" style={{
        background:"#c21605",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
      }}
      >
      <FontAwesomeIcon icon={faAngleUp} className="fa-2x ml-3 mt-2 " style={{color:"#fff"}}/>
    </ScrollToTop>
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
