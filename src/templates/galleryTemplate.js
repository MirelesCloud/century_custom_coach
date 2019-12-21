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

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    }
    
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  render() {
    const { markdownRemark } = this.props.data
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
        <section className='single-service padd-1 '>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 mb-1">
                <div className="single-item">
                  <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    fade={true}
                    arrows={false}
                  >
                  {this.props.data.shopGallery.edges.map((img, idx) =>  (
                    <div className="image-box" key={idx} >
                      <Img fluid={img.node.childImageSharp.fluid} style={{
                          display:"block",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "100%",
                          height: "auto"
                        }}/>
                    </div>
                  ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4}
            infinite={true}
            autoplay={true}
            autoplaySpeed={3000}
            swipeToSlide={true}
            focusOnSelect={true}
            slickNext={false}
            arrows={false}
          >
          {this.props.data.shopGallery.edges.map((img, idx) =>  (
            <div  className="col-md-10 col-sm-12 col-xs-12" key={idx} >
              <Img fluid={img.node.childImageSharp.fluid}/>
            </div>
          ))}
          </Slider>
        </section>
        <hr/>
        <Masonry
            className={'single-service padd-1'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            imagesLoadedOptions={imagesLoadedOptions}
        >
            {this.props.data.shopGallery.edges.map((img, idx) =>  (
              <div className="col-lg-2 col-md-2 col-sm-6" key={idx} >
                <div  className="d-block mb-4 h-100 gallery" >
                  <Img className="slider-for" fluid={img.node.childImageSharp.fluid}/>
                </div>
              </div>
            ))}
        </Masonry>
      </Layout>
    )
  }
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
