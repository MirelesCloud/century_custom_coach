import React from 'react'
//import Modal from 'react-responsive-modal'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Gallery = () => (
  <div>
    <StaticQuery
      query={graphql`
        query GalleryImageQuery {
          gallery1: file(relativePath: {eq: "images/gallery/project1.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gallery2: file(relativePath: {eq: "images/gallery/project2.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          gallery3: file(relativePath: {eq: "images/gallery/project4.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          gallery4: file(relativePath: {eq: "images/gallery/project3.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
        render={data => (
          <>
          <section className="our-projects padd-1">
  			    <div className="sec-title text-center">
  	            <h2>Projects <span>Gallery</span></h2>
  	        </div>

              <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <article className="single-item">
                      <div className="inner-box">
                          <div className="image-box">
                              <Img fluid={data.gallery1.childImageSharp.fluid} alt="Audi Logo"/>
                              <div className="caption">Engine Replace</div>
                              <div className="overlay-box">
                                  <div className="inner">
                                      <a href="projects.html"><i className="flaticon-tool-1"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </article>
                </div>



                <div className="col-md-3 col-sm-6 col-xs-12">
                  <article className="single-item">
                      <div className="inner-box">
                          <div className="image-box">
                              <Img fluid={data.gallery2.childImageSharp.fluid} alt="Audi Logo"/>
                              <div className="caption">Body Repair and Paint</div>
                              <div className="overlay-box">
                                  <div className="inner">
                                      <a href="projects.html"><i className="flaticon-tool-1"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </article>
                </div>

                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <article className="single-item">
                        <div className="inner-box">
                            <div className="image-box">
                                <Img fluid={data.gallery3.childImageSharp.fluid} alt="Audi Logo"/>
                                <div className="caption">Car Repair</div>
                                <div className="overlay-box">
                                    <div className="inner">
                                        <a href="projects.html"><i className="flaticon-tool-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                  </div>

                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <article className="single-item">
                        <div className="inner-box">
                            <div className="image-box">
                                <Img fluid={data.gallery4.childImageSharp.fluid} alt="Audi Logo"/>
                                <div className="caption">Car Observation</div>
                                <div className="overlay-box">
                                    <div className="inner">
                                        <a href="projects.html"><i className="flaticon-tool-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                  </div>



              </div>
        </section>
          </>
        )}
      />
  </div>
)


export default Gallery
