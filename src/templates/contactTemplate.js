import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'


export default function Contact({ data }) {

  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
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
                <Link className="active" to="/pages/body-shop">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-info-area padd-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="contact-info" >
                            <div className="icon-box"><i className="flaticon-location"></i></div>
                            <h5>{ frontmatter.street }</h5>
                            <span>{ frontmatter.city }</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="contact-info" >
                            <div className="icon-box"><i className="flaticon-smartphone-call"></i></div>
                            <h5>{ frontmatter.phone }</h5>
                            <span>{ frontmatter.hours }</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="contact-info" >
                            <div className="icon-box"><i className="flaticon-message"></i></div>
                            <h5><small>{ frontmatter.email }</small></h5>
                            <span>{ frontmatter.tag }</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    </Layout>
  )
}

export const contactQuery = graphql`
  query($path: String!) {
   markdownRemark(frontmatter: { path: { eq: $path } }) {
     html
     frontmatter {
       title
       street
       city
       phone
       hours
       email
       tag
       image {
         childImageSharp {
           fluid(maxWidth: 2000){
             ...GatsbyImageSharpFluid_tracedSVG
           }
         }
       }
     }
    }
  }
`
