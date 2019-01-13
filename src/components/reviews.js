import React from 'react'
import { StaticQuery, graphql } from 'gatsby'



const Reviews = () => (
  <div>
    <StaticQuery
      query={graphql`
        query ReviewQuery {
          auto1: file(relativePath: {eq: "images/home/rawpixel-741689-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
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
        				<div className="testimonial-carousel">
        		      <div className="item">
        						<div className="image-box">
        						</div>
        						<div className="text">
                      <h4>Review 1</h4>
                      <p><span className="yelp-review" data-review-id="B4Zt8J0p8Wd5rkCAAdlVEg" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=oU5LKZ9JQ4jaWsXowJhV0A" rel="nofollow noopener">Karen K.</a>s <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?hrid=B4Zt8J0p8Wd5rkCAAdlVEg" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/NyJOv0kkySTVMthQAMrTuQ" rel="nofollow noopener">Century Custom Coach</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span></p>
        						</div>
        					</div>
        					<div className="item">
        						<div className="image-box">
        						</div>
        						<div className="text">
                      <h4>Review 2</h4>
                      <p><span className="yelp-review" data-review-id="ylfeSwu2YlP2C7qLT4rbRQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=FhBqMEBJvaONKu7LFqJgcg" rel="nofollow noopener">John P.</a>s <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?hrid=ylfeSwu2YlP2C7qLT4rbRQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/NyJOv0kkySTVMthQAMrTuQ" rel="nofollow noopener">Century Custom Coach</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span></p>
        						</div>
        					</div>
        					<div className="item">
        						<div className="image-box">
        						</div>
        						<div className="text">
                      <h4>Review 3</h4>
                      <p>	<span className="yelp-review" data-review-id="78uGh1nRpeP9oy70bH5hng" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=HrSYIh46wJ__RBk_dxLljA" rel="nofollow noopener">Kathy S.</a>s <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?hrid=78uGh1nRpeP9oy70bH5hng" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/NyJOv0kkySTVMthQAMrTuQ" rel="nofollow noopener">Century Custom Coach</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span></p>
        						</div>
        					</div>
                  <div className="item">
                    <div className="image-box">
                    </div>
                    <div className="text">
                      <h4>Review 4</h4>
                      <p>blah blah</p>
                    </div>
                  </div>
        				</div>
        			</div>
        		</section>
          </>
        )}
      />
  </div>

)

export default Reviews
