import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Slider from 'react-slick'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

let settings = {
  dots: true,
  infinite: true,
  speed: 300,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 8000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
}

const Reviews = () => (
    <StaticQuery
      query={graphql`
        query ReviewQuery {
          review1: file(relativePath: {eq: "images/reviews/sharonb.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          review2: file(relativePath: {eq: "images/reviews/JohnP.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          review3: file(relativePath: {eq: "images/reviews/KathyS.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          review4: file(relativePath: {eq: "images/reviews/TinaV.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          review5: file(relativePath: {eq: "images/reviews/LilyH.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          review6: file(relativePath: {eq: "images/reviews/KarenK.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        }
      `}
        render={data => (
          <>
          <section className="testimonial">
			      <div className="container">
				      <div className="sec-title">
					      <h2>Client <span>Feedback</span></h2>
				      </div>
				      <div className="">

                <Slider {...settings}>
                      <div className="col-md-12 col-sm-12">
                        <div className="item">
        						      <div className="image-box">
                            <Img fluid={data.review1.childImageSharp.fluid} style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>
        						      </div>
        						      <div className="text">
        							     <h4>Sharon B.</h4>
        							     <div className="icon">
                            <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                            <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           </div>
        							     <p>My husband and I were so delighted that our first experience working with this long-standing establishment was a pleasant one. </p>
        						      </div>
        					      </div>
                      </div>
      		            <div className="col-md-12 col-sm-12">
                        <div className="item">
        						     <div className="image-box">
        							    <Img fluid={data.review2.childImageSharp.fluid} style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}} />
        					      </div>
        					    	<div className="text">
        							   <h4>John P.</h4>
        							   <div className="icon">
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                          </div>
        							    <p>Absolutely recommend this body shop. Professional and got the work done well and really fast!</p>
        						     </div>
        				       	</div>
                      </div>
      					      <div className="col-md-12 col-sm-12">
                        <div className="item">
          		    				<div className="image-box">
          							   <Img fluid={data.review3.childImageSharp.fluid}  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>
          					    	</div>
          						    <div className="text">
          							   <h4>Kathy S.</h4>
          							   <div className="icon">
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                         </div>
          							 <p>Danny and his crew at the shop always do an amazing job. I can't thank them enough. I will always bring my car in here if I ever need a body shop again... </p>
          						</div>
          					</div>
                      </div>
                        <div className="col-md-12 col-sm-12">
                          <div className="item">
                            <div className="image-box">
                             <Img fluid={data.review4.childImageSharp.fluid}  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>
                            </div>
                            <div className="text">
                             <h4>Tina V.</h4>
                             <div className="icon">
                               <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                               <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                               <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                               <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                               <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           </div>
                           <p>My car had some damage to the front and the bumper. Though it took a couple of rounds to complete the work successfully the outcome was marvelous and very clean. I absolutely recommend this shop for their professional work and will definitely go back ... </p>
                          </div>
                        </div>
                      </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="item">
                        <div className="image-box">
                         <Img fluid={data.review5.childImageSharp.fluid}  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>
                        </div>
                          <div className="text">
                           <h4>Lily H.</h4>
                           <div className="icon">
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                             </div>
                            <p>Everything from the customer service to the actual work done on the body of the car was perfect! I'm so glad I took my car there and would definitely go back there again if I needed to! </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div className="item">
                        <div className="image-box">
                         <Img fluid={data.review6.childImageSharp.fluid}  style={{width:"100px", margin:"0 auto", borderRadius:"15px 0"}}/>
                        </div>
                        <div className="text">
                         <h4>Karen K.</h4>
                         <div className="icon">
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                           <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                       </div>
                       <p>They worked well with my insurance company, too.  This is the 2nd time they've done body work for my car - I was very pleased with them the 1st time, too.  I will return again if I ever need body work again and I would happily refer friends/family here, too.</p>
                    </div>
                  </div>
                </div>
              </Slider>
    				</div>
            <div className="sec-title mt-5">
              <h4>Read more amazing reviews or leave a comment yourself <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?osq=century+custom+coach" target="_blank" rel="noopener noreferrer">on Yelp here</a></h4>
            </div>
    			</div>
    		</section>
          </>
        )}
      />
)

export default Reviews

Reviews.propTypes = {
  review1: PropTypes.string,
  review2: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
  review5: PropTypes.string,
  review6: PropTypes.string
}
