import React from 'react'
import Helmet from 'react-helmet'
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
import MirelesCloud from './mirelescloud'



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
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <link rel="stylesheet" href="owl-carousel/owl.theme.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"/>
            <html lang="en" />
          </Helmet>
          <div className="boxed_wrapper">
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
            <MirelesCloud/>
          </div>

        </>
      )}
    />

  </div>
)

export default Layout
