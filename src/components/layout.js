import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Feature from './feature'
import About from './about'
import Model from './model'
import Services from './services'
import LowerBackground from './lower-banner'
import Gallery from './gallery'
import Reviews from './reviews'
import LastBanner from './final-banner'
import Footer from './footer'



const Layout = ({children}) => (
  <div >

    <StaticQuery
      query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "images/home/nikolay-tchaouchev-785292-unsplash.jpg"}) {
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
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header image={data.site.siteMetadata.title}/>
          <Feature/>
          <About/>
          <Model/>
          <Services/>
          <LowerBackground/>
          <Gallery/>
          <Reviews/>
          <LastBanner/>
          <Footer/>
        </>
      )}
    />

  </div>
)

export default Layout
