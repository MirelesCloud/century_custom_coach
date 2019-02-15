import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Success = (props) => (
  <StaticQuery
    query={graphql`
      query SuccessQuery {
        image: file(relativePath: {eq: "images/2017-z-gloss-webpg-banner.png"}) {
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
        <Layout>
          <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
          </Helmet>
          <div  className="container text-center my-4">
            <Img fluid={data.image.childImageSharp.fluid}/>

           <div id="one">
             <div className="my-4">
               <h1>Thank you!</h1>
               <h3>We will get back to you shortly.</h3>
             </div>
           </div>
          </div>
        </Layout>
        </>
      )}
    />
)

export default Success
