import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import '../../node_modules/animate.css/animate.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import '../../node_modules/react-id-swiper/src/styles/css/swiper.css'


import '../css/main.css'
import '../css/special.css'
import '../css/contact.css'
import '../css/responsive.css'
import '../css/animate.min.css'
import '../css/fonts/flaticon.css'

import Header from './header'
import Footer from './footer'

const Layout = ({children}) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              url
              menuLinks {
                name
                link
              }
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
              { name: 'description', content: 'Century Custom Coach' },
              { name: 'keywords', content: 'auto mechanic paint and body' },
            ]}
          >
          <meta charSet="utf-8" />

          <link rel="canonical" href={data.site.siteMetadata.url} />
          <script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script>
          <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

            <html lang="en" />
          </Helmet>

          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div className="boxed_wrapper">{children}</div>
          <Footer/>

        </>
      )}
    />
)

export default Layout
