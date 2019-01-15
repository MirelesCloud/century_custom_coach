import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => (
  <div>
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
          }
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
  							     <p>...This is definitely the place I will be taking my car from this point on. #HappyCustomer </p>
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
    							   <h4>Karen S.</h4>
    							   <div className="icon">
                       <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                       <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                       <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                       <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                       <i className="fa fa-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></i>
                   </div>
    							 <p>...Danny and his crew at the shop always do an amazing job. I can't thank them enough. I will always bring my car in here if I ever need a body shop again... </p>
    						</div>
    					</div>
            </div>
				</div>
        <div className="sec-title mt-5">
          <h4>Read more amazing Yelp reviews or leave a comment yourself <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?osq=century+custom+coach" target="_blank" rel="noopener noreferrer">here</a></h4>
        </div>
			</div>
		</section>
          </>
        )}
      />
  </div>

)

export default Reviews
