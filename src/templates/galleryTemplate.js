import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Masonry from 'react-masonry-component'
import Slider from 'react-slick'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }



export default function Gallery({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    };

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

      <Masonry
          className={'single-service padd-1'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          imagesLoadedOptions={imagesLoadedOptions}
      >
          {data.shopGallery.edges.map((img, idx) =>  (
            <div className="col-lg-3 col-md-4 col-xs-6" key={idx} >
              <div  className="d-block mb-4 h-100 gallery" >
                <Img className="slider-for" fluid={img.node.childImageSharp.fluid}/>
              </div>
            </div>
          ))}
      </Masonry>

      <Slider {...settings}>
        {data.shopGallery.edges.map((img, idx) =>  (
          <div className="col-lg-3 col-md-4 col-xs-6" key={idx} >
            <div  className="d-block mb-4 h-100 gallery" >
              <Img className="slider-for" fluid={img.node.childImageSharp.fluid}/>
            </div>
          </div>
        ))}
      </Slider>


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
