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
          <section class="testimonial">
        			<div class="container">
        				<div class="sec-title">
        					<h2>Client <span>Feedback</span></h2>
        				</div>

        				<div class="testimonial-carousel">

        		      <div class="item">
        						<div class="image-box">

        						</div>

        						<div class="text">



                      <span class="yelp-review" data-review-id="B4Zt8J0p8Wd5rkCAAdlVEg" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=oU5LKZ9JQ4jaWsXowJhV0A" rel="nofollow noopener">Karen K.</a>s <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?hrid=B4Zt8J0p8Wd5rkCAAdlVEg" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/NyJOv0kkySTVMthQAMrTuQ" rel="nofollow noopener">Century Custom Coach</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span>

        						</div>
        					</div>
        					<div class="item">

        						<div class="image-box">

        						</div>

        						<div class="text">
        							<span class="yelp-review" data-review-id="ylfeSwu2YlP2C7qLT4rbRQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=FhBqMEBJvaONKu7LFqJgcg" rel="nofollow noopener">John P.</a>s <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?hrid=ylfeSwu2YlP2C7qLT4rbRQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/NyJOv0kkySTVMthQAMrTuQ" rel="nofollow noopener">Century Custom Coach</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span>
        						</div>
        					</div>

        					<div class="item">
        						<div class="image-box">

        						</div>

        						<div class="text">
        							<span class="yelp-review" data-review-id="78uGh1nRpeP9oy70bH5hng" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=HrSYIh46wJ__RBk_dxLljA" rel="nofollow noopener">Kathy S.</a>s <a href="https://www.yelp.com/biz/century-custom-coach-los-angeles?hrid=78uGh1nRpeP9oy70bH5hng" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/NyJOv0kkySTVMthQAMrTuQ" rel="nofollow noopener">Century Custom Coach</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span>
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
