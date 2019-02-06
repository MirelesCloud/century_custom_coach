import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import Layout from '../components/layout'

const StoreLocation = withScriptjs(withGoogleMap(() => {
  return (
      <GoogleMap
        defaultZoom={15}
        center={ { lat:  33.838063, lng: -118.361041 } }
      >
        <Marker position={ { lat:  33.838063, lng: -118.361041 } }/>
      </GoogleMap>
    );
  }
))

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
        <section className="contact_us padd-7">
           <div className="container">
               <div className="sec-title text-center">
                   <h2>Get In <span>Touch</span></h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p>
               </div>
               <div className="default-form-area">
                   <form id="contact-form" name="contact_form" className="default-form" action="sendmail.php" method="post">
                       <div className="row clearfix">
                           <div className="col-md-6 col-sm-6 col-xs-12">

                               <div className="form-group style-two">
                                   <input type="text" name="form_name" className="form-control"  placeholder="Your Name" required=""/>
                               </div>
                           </div>
                           <div className="col-md-6 col-sm-6 col-xs-12">
                               <div className="form-group style-two">
                                   <input type="email" name="form_email" className="form-control required email"  placeholder="Your Email" required=""/>
                               </div>
                           </div>
                           <div className="col-md-6 col-sm-6 col-xs-12">
                               <div className="form-group style-two">
                                   <input type="text" name="form_phone" className="form-control"  placeholder="Phone"/>
                               </div>
                           </div>
                           <div className="col-md-6 col-sm-6 col-xs-12">
                               <div className="form-group">
                                   <input type="text" name="form_subject" className="form-control"  placeholder="Subject"/>
                               </div>
                           </div>
                           <div className="col-md-12 col-sm-12 col-xs-12">
                               <div className="form-group style-two">
                                   <textarea name="form_message" className="form-control textarea required" placeholder="Message"></textarea>
                               </div>
                           </div>
                       </div>
                       <div className="contact-section-btn text-center">
                           <div className="form-group style-two">
                               <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
                               <button className="btn-style-five" type="submit" data-loading-text="Please wait...">send message</button>
                           </div>
                       </div>
                   </form>
               </div>
           </div>
       </section>
       <section className="contact_details sec-padd">
        <div className="home-google-map">
          <StoreLocation
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDhq6DDmH0nylqeC3vifVoSyWrUmRFj_7U&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `350px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
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
