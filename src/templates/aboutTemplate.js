import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


import Layout from '../components/layout'

export default function AboutTemplate({ data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <section className="page-banner" style={{
              backgroundImage: `url(${frontmatter.image.childImageSharp.fluid.src})`}}
              >
        <div className="container">
          <div className="content">
            <h2 className="text-uppercase">{frontmatter.title}</h2>
            <ul className="breadcumb">
              <li>
                <Link to="/">Home</Link>
                <i className="fa fa-chevron-right" aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} className="fa-sm"/></i>
              </li>
              <li>
                <Link to="/about" className="active">about</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about-section padd-1" >
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
               <div dangerouslySetInnerHTML={{ __html: html }} />
             </div>
           </div>
          </div>
       </div>
       </section>
       <section className="features-two padd-4" style={{
                   backgroundImage: `url(${frontmatter.about.background.childImageSharp.fluid.src})`}}>
		    <div className="container">
		        <div className="row">
		            <div className="col-md-4 col-sm-6 col-xs-12">
		                <div className="content">
		                    <h4>{ frontmatter.about.feature.feature1.title }</h4>
		                    <div className="text">
		                        <p>{ frontmatter.about.feature.feature1.desc }</p>
		                    </div>
		                    <div className="link"><i className="fa fa-long-arrow-right"></i>read more </div>
		                </div>
		            </div>
		            <div className="col-md-4 col-sm-6 col-xs-12">
		                <div className="content">
		                    <h4>{ frontmatter.about.feature.feature2.title }</h4>
		                    <div className="text">
		                        <p>{ frontmatter.about.feature.feature2.desc }</p>
		                    </div>
		                    <div className="link"><i className="fa fa-long-arrow-right"></i>read more </div>
		                </div>
		            </div>
		            <div className="col-md-4 col-sm-6 col-xs-12">
		                <div className="content">
		                    <h4>{ frontmatter.about.feature.feature3.title }</h4>
		                    <div className="text">
		                        <p>{ frontmatter.about.feature.feature3.desc }</p>
		                    </div>
		                    <div className="link"><i className="fa fa-long-arrow-right"></i>read more </div>
		                </div>
		            </div>

		        </div>
		    </div>
		</section>

    </Layout>
  )
}

export const aboutQuery = graphql`
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
        about {
          background {
            childImageSharp {
              fluid(maxWidth: 2048) {
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
          feature {
            feature1 {
              title
              desc
            }
            feature2 {
              title
              desc
            }
            feature3 {
              title
              desc
            }
          }
        }
      }
    }
  }
  `
