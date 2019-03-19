import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { TypographyStyle } from 'react-typography'
import typography from '../utils/typography'

import '../../node_modules/animate.css/animate.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import '../../node_modules/react-id-swiper/src/styles/css/swiper.css'


import '../css/main.css'
import '../css/responsive.css'
import '../css/animate.min.css'
import '../css/fonts/flaticon.css'

import Header from './header'
import Footer from './footer'

const Layout = ({children}) => (
    <StaticQuery
      query={graphql`
        query siteQuery {
          site {
            siteMetadata {
              title
              url
              description
              image
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
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
            <meta name="application-name" content="&nbsp;"/>
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
           <html lang="en" />
          </Helmet>

          <TypographyStyle typography={typography} />

          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div className="boxed_wrapper">{children}</div>
          <Footer/>
        </>
      )}
    />
)

export default Layout
