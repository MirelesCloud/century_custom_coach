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
        center={ { lat:  34.034181, lng:  -118.44647 } }
      >
        <Marker position={ { lat:  34.034181, lng:  -118.44647 } }/>
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
                <div className="row" style={{display:"flex"}}>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="contact-info" >
                            <div className="icon-box"><i className="flaticon-location"></i></div>
                            <h5>{ frontmatter.street }</h5>
                            <span>{ frontmatter.city }</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 ">
                        <div className="contact-info" >
                            <div className="icon-box"><i className="flaticon-smartphone-call"></i></div>
                            <h5>{ frontmatter.phone }</h5>
                            <span>{ frontmatter.hours }</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 ">
                        <div className="contact-info" >
                            <div className="icon-box"><i className="flaticon-message"></i></div>
                            <h5 ><a href="mailto:centurycustomcoach@gmail.com" style={{color:"#fff"}}>{frontmatter.tag}</a></h5>
                            <span>Today</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact_us padd-7">
           <div className="container">
               <div className="sec-title text-center">
                   <h2>Get In <span>Touch</span></h2>
                   <p>Let us know how we can help you with your vehicle today</p>
               </div>
               <div className="default-form-area">
                 <div className="default-form-area">
                     <form name="contact" className="default-form"  action="/success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                       <input type="hidden" name="form-name" value="contact" />
                         <div className="row clearfix">
                           <div className="col-md-6 col-sm-6 col-xs-12">
                             <div className="form-group style-two">
                               <input type="text" name="name" className="form-control" placeholder="Your Name" id="name"/>
                             </div>
                           </div>
                           <div className="col-md-6 col-sm-6 col-xs-12">
                             <div className="form-group style-two">
                               <input type="email" name="email" className="form-control required email" placeholder="Your Email" id="email"/>
                             </div>
                           </div>
                           <div className="col-md-6 col-sm-6 col-xs-12">
                             <div className="form-group style-two">
                               <input type="text" name="phone" className="form-control"  placeholder="Phone" id="phone"/>
                             </div>
                           </div>
                           <div className="col-md-6 col-sm-6 col-xs-12">
                             <div className="form-group">
                               <input type="text" name="ubject" className="form-control" placeholder="Subject" id="subject"/>
                             </div>
                           </div>
                           <div className="col-md-12 col-sm-12 col-xs-12">
                             <div className="form-group style-two">
                               <textarea name="message" className="form-control textarea required" placeholder="Message" id="message"></textarea>
                             </div>
                           </div>
                         </div>
                         <div className="contact-section-btn text-center">
                           <div className="form-group style-two">
                             <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
                             <button className="btn-style-five" type="submit" data-loading-text="Please wait...">send message</button>
                           </div>
                         </div>
                     </form>
                 </div>
               </div>
           </div>
       </section>
       <section className="contact_details sec-padd">
        <div className="home-google-map">
          <StoreLocation
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCqp5IIpnk5kvH5uJ_cTeDbegyVqWn5Dos&v=3.exp&libraries=geometry,drawing,places`}
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
