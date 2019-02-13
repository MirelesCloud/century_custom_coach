import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


import Layout from '../components/layout'

export default function ServicesHomeTemplate({ data }) {
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
                <Link to="/services" className="active">services</Link>
              </li>
            </ul>
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

export const homeServicesQuery = graphql`
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
        service {
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
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
