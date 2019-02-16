
import React from 'react'

const ContactForm = (props) => (
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
)

export default ContactForm
