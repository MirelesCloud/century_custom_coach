import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Swiper from 'react-id-swiper';

const params = {
      slidesPerView: 5,
      spaceBetween: 10,
      loops: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    };

export default function Gallery({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark



  return (
    <Layout>
        <section className="page-banner" style={{
                backgroundImage: `url(${frontmatter.image.childImageSharp.fluid.src})`}}
          >
          <div className="container">
            <div className="content">
              <h2 className="text-uppercase">{ frontmatter.title }</h2>

            </div>
          </div>
        </section>
        <section className="single-service padd-1">
          <div className="row" id='gallery'>
            <Swiper {...params} >
              {data.shopGallery.edges.map((img, index) => (

                  <div className="col-lg-3 col-md-4 col-xs-6" key={index} >
                    <div  className="d-block mb-4 h-100 gallery" >
                      <Img fluid={img.node.childImageSharp.fluid}/>
                    </div>
                  </div>
              ))}
            </Swiper>
          </div>
        </section>
    </Layout>
  )
}

export const galleryQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    shopGallery: allFile(filter: {absolutePath: { regex: "\/images/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
