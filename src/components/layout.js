import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import Header from './header'
import Footer from './footer'

const Layout = ({children}) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
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
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script>
          <link rel="icon" type="image/png" href="images/favicon/favicon-32x32.png" sizes="32x32"/>
  	      <link rel="icon" type="image/png" href="images/favicon/favicon-16x16.png" sizes="16x16"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"/>
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
