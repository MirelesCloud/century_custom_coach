import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Swiper from 'react-id-swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'



export default function Reviews({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const params = {
        slidesPerView: 3,
        spaceBetween: 20,
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

  return (
    <Layout>
      <section className="testimonial">
        <div className="container">
          <div className="sec-title">
            <h2>Client <span>Feedback</span></h2>
          </div>
          <div className="row">
            <Swiper {...params}>

            <div className="col-md-4">
              <div className="item">
                <div className="image-box">
                  <Img fluid={ frontmatter.reviews.review1.image.childImageSharp.fluid }  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>
                </div>
                <div className="text">
                 <h4>{ frontmatter.reviews.review1.name }</h4>
                 <div className="icon">
                  <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                  <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                  <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                  <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                  <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 </div>
                 <p>{ frontmatter.reviews.review1.text }</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
               <div className="image-box">
                 <Img fluid={ frontmatter.reviews.review2.image.childImageSharp.fluid }  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>


              </div>
              <div className="text">
               <h4>{ frontmatter.reviews.review2.name }</h4>
               <div className="icon">
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                </div>
                <p>{ frontmatter.reviews.review2.text }</p>
               </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item">
                <div className="image-box">
                  <Img fluid={ frontmatter.reviews.review3.image.childImageSharp.fluid }  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>


                </div>
                <div className="text">
                 <h4>{ frontmatter.reviews.review3.name }</h4>
                 <div className="icon">
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
               </div>
               <p>{ frontmatter.reviews.review3.text }</p>
            </div>
          </div>
            </div>
              <div className="col-md-4">
                <div className="item">
                  <div className="image-box">
                    <Img fluid={ frontmatter.reviews.review4.image.childImageSharp.fluid }  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>


                  </div>
                  <div className="text">
                   <h4>{ frontmatter.reviews.review4.name }</h4>
                   <div className="icon">
                     <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                     <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                     <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                     <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                     <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 </div>
                 <p>{ frontmatter.reviews.review4.text }</p>
                </div>
              </div>
            </div>
          <div className="col-md-4">
            <div className="item">
              <div className="image-box">
                <Img fluid={ frontmatter.reviews.review5.image.childImageSharp.fluid }  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>

              </div>
                <div className="text">
                 <h4>{ frontmatter.reviews.review5.name }</h4>
                 <div className="icon">
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   </div>
                  <p>{ frontmatter.reviews.review5.text }</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <div className="image-box">
                <Img fluid={ frontmatter.reviews.review6.image.childImageSharp.fluid }  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>


              </div>
              <div className="text">
               <h4>{ frontmatter.reviews.review6.name }</h4>
               <div className="icon">
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                 <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
             </div>
             <p>{ frontmatter.reviews.review6.text }</p>
          </div>
        </div>
      </div>
    </Swiper>
        </div>
        <div className="sec-title mt-5">
          <h4>Read more amazing Yelp reviews or leave a comment yourself <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?osq=century+custom+coach" target="_blank" rel="noopener noreferrer">here</a></h4>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export const reviewsQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        reviews {
          review1 {
            name
            text
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          review2 {
            name
            text
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          review3 {
            name
            text
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          review4 {
            name
            text
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          review5 {
            name
            text
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          review6 {
            name
            text
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
