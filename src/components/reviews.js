import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Swiper from 'react-id-swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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

const ReviewsTemplate = () => (
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
				      <div className="row">
                <Swiper {...params}>

                <div className="col-md-4">
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
		            <div className="col-md-4">
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
					      <div className="col-md-4">
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
                  <div className="col-md-4">
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
              <div className="col-md-4">
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
              <div className="col-md-4">
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
        </Swiper>
    				</div>
            <div className="sec-title mt-5">
              <h4>Read more amazing Yelp reviews or leave a comment yourself <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?osq=century+custom+coach" target="_blank" rel="noopener noreferrer">here</a></h4>
            </div>
    			</div>
    		</section>
          </>
        )}
      />
)

const Reviews = () => (
  <div>
    <ReviewsTemplate/>
  </div>
)

export default Reviews
