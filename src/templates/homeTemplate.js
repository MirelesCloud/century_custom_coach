import React from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Fade from 'react-reveal/Fade'
import Swiper from 'react-id-swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'

const params = {
      slidesPerView: 6,
      spaceBetween: 30,
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

export default function HomeTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <section className="rev_slider_wrapper">
        <div className="rev_slider">
          <Carousel infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={2000} dynamicHeight={true} showThumbs={false}>
            <div >
               <Img fluid={ frontmatter.intro.one.image.childImageSharp.fluid } alt="header"/>
               <div className="carousel-header-container">
                 <Fade left>
                   <h1 className="carousel-header">Full <span style={{color:"#c21605"}}>Service</span> Automotive <span style={{color:"#c21605"}}>Repair</span> and Maintenance</h1>
                 </Fade>
               </div>

            </div>
               <div>
                  <Img fluid={ frontmatter.intro.two.image.childImageSharp.fluid } alt="header 2"/>
                    <div className="carousel-header-container">
                      <Fade right>
                        <h1 className="carousel-header">Expert <span style={{color:"#c21605"}}>Paint</span>  and <span style={{color:"#c21605"}}>Body</span> Shop</h1>
                      </Fade>

                    </div>
              </div>
              <div>
                  <Img fluid={ frontmatter.intro.three.image.childImageSharp.fluid} alt="header 3"/>
                    <div className="carousel-header-container">
                      <Fade left>
                          <h1 className="carousel-header">We <span style={{color:"#c21605"}}>Service</span>  All Makes and <span style={{color:"#c21605"}}>Models</span> </h1>
                      </Fade>
                    </div>
              </div>
          </Carousel>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="item">
                <figure className="image-box mb-0">
                  <Img fluid={ frontmatter.features.one.image.childImageSharp.fluid } alt="header"/>
                  <div className="overlay">
                    <div className="inner">
                      <a href="https://example.com"><FontAwesomeIcon icon={faLink} className="fa-2x" style={{color:"#fff"}}/></a>
                    </div>
                  </div>
                </figure>
                <div className="content">
                  <h4><a href="https://example.com">{ frontmatter.features.one.title }</a></h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="item">
                <figure className="image-box mb-0">
                  <Img fluid={ frontmatter.features.two.image.childImageSharp.fluid } alt="header"/>
                  <div className="overlay">
                    <div className="inner">
                      <a href="https://example.com"><FontAwesomeIcon icon={faLink} className="fa-2x" style={{color:"#fff"}}/></a>
                    </div>
                  </div>
                </figure>
                <div className="content">
                  <h4><a href="https://example.com">{ frontmatter.features.two.title }</a></h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="item">
                <figure className="image-box mb-0">
                  <Img fluid={ frontmatter.features.three.image.childImageSharp.fluid} alt="header"/>
                  <div className="overlay">
                    <div className="inner">
                      <a href="https://example.com"><FontAwesomeIcon icon={faLink} className="fa-2x" style={{color:"#fff"}}/></a>
                    </div>
                  </div>
                </figure>
                <div className="content">
                  <h4><a href="https://example.com">{ frontmatter.features.three.title }</a></h4>
                </div>
              </div>
            </div>

          </div>
          </div>
      </section>
      <section className="about-section padd-2" style={{
                  backgroundImage: `url(${frontmatter.about.background.childImageSharp.fluid.src})`}}>
       <div className="container">
           <div className="row">
             <div className="col-md-6 col-sm-12 col-xs-12">
                   <div className="single-item">
                       <figure className="image-box">
                         <Img fluid={frontmatter.about.image.childImageSharp.fluid} alt="header"/>
                       </figure>
                   </div>
               </div>
               <div className="col-md-6 col-sm-12 col-xs-12">
                   <div className="single-item style-two">
                       <div className="sec-title">
                     <h2 id="about">About  <span>Century<span style={{color:"#000000"}}>Custom</span>Coach</span></h2>
                     <h3>If It Runs On Gas…We’ll Fix It!</h3>
                 </div>
                       <p>Over 30 years experience in all makes and models, foreign and Domestic. We adjust our services to meet the needs of our customers</p>
                       <p className="style-2">We offer complete auto care for your vehicle. Whether it’s time for your next factory recommended maintenance visit, a routine oil change, new tires, or repair services on your brakes, muffler and exhaust, suspension, air conditioner, or any other mechanical or electrical component of your car, Century Custom Coach is in your neighborhood and ready to serve you.</p>

                   </div>
               </div>
           </div>
       </div>
       </section>
      <section className="models-section" style={{backgroundImage:`url(${frontmatter.models.image.childImageSharp.fluid.src})`, border:"1px solid #000"}}>
        <div className="auto-container">
          <div className="sponsors-outer">
            <Swiper {...params}>
              <figure className="image-box"><Img fluid={frontmatter.models.model.audi.childImageSharp.fluid} alt="Audi Logo"/></figure>
              <figure className="image-box"><Img fluid={frontmatter.models.model.bmw.childImageSharp.fluid} alt="BMW Logo"/></figure>
              <figure className="image-box"><Img fluid={frontmatter.models.model.ferrari.childImageSharp.fluid} alt="Peugeot Logo"/></figure>
              <figure className="image-box"><Img fluid={frontmatter.models.model.peugeot.childImageSharp.fluid} alt="Ferrari Logo"/></figure>
              <figure className="image-box"><Img fluid={frontmatter.models.model.toyota.childImageSharp.fluid} alt="Toyota Logo"/></figure>
              <figure className="image-box"><Img fluid={frontmatter.models.model.rollsroyce.childImageSharp.fluid} alt="Rolls Royce Logo"/></figure>
              <figure className="image-box"><Img fluid={frontmatter.models.model.chevy.childImageSharp.fluid} alt="Chevy Logo"/></figure>
            </Swiper>
          </div>
        </div>
    </section>
    <section className="our-services padd-1" style={{
            backgroundImage: `url(${frontmatter.service.image.childImageSharp.fluid.src})`}}
            >
      <div className="container">
        <div className="sec-title text-center">
                  <h2>Our <span>Services</span></h2>
              </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-007-engine"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceOne.title } </h3>
                <p>{ frontmatter.service.serviceOne.desc }</p>
                <Link to="/engine/">details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-031-airbrush"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceTwo.title } </h3>
                <p>{ frontmatter.service.serviceTwo.desc }</p>
                <Link to="/body-shop">details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-021-oil"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceThree.title } </h3>
                <p>{ frontmatter.service.serviceThree.desc }</p>
                <Link to="/oil-change">details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-020-brake"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceFour.title } </h3>
                <p>{ frontmatter.service.serviceFour.desc }</p>
                <Link to="/brakes">details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-036-shock-absorber"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceFive.title } </h3>
                <p>{ frontmatter.service.serviceFive.desc }</p>

                 <Link to="/suspension"> details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-024-car-1"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceSix.title } </h3>
                <p>{ frontmatter.service.serviceSix.desc }</p>
                <Link to="/exhaust/">details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-005-voltmeter"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceSeven.title } </h3>
                <p>{ frontmatter.service.serviceSeven.desc }</p>
                 <Link to="/electronics-repair"> details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-item">
              <div className="icon-box">
                <i className="flaticon-012-car-3"></i>
              </div>
              <div className="content-box">
                <h3>{ frontmatter.service.serviceEight.title } </h3>
                <p>{ frontmatter.service.serviceEight.desc }</p>
                  <Link to="/diagnostics"> details <i className="fa fa-caret-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export const homeQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        intro {
          one {
            image {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          two {
            image {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          three {
            image {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        features {
          one {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          two {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          three {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        about {
          background {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          par1
          par2
        }
        models {
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          model {
            audi {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            bmw {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            ferrari {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            peugeot {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            toyota {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            rollsroyce {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            chevy {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
        service {
          image {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          title
          serviceOne {
            title
            desc
          }
          serviceTwo {
            title
            desc
          }
          serviceThree {
            title
            desc
          }
          serviceFour {
            title
            desc
          }
          serviceFive {
            title
            desc
          }
          serviceSix {
            title
            desc
          }
          serviceSeven {
            title
            desc
          }
          serviceEight {
            title
            desc
          }
        }
      }
    }
  }
`
