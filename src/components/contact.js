import React from 'react'

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name}!`)
  }
  render() {
    return (
        <form id="contact-form" name="contact_form" className="default-form" onSubmit={this.handleSubmit} >
          <div className="row clearfix">
              <div className="col-md-6 col-sm-6 col-xs-12">

                  <div className="form-group style-two">
                      <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control"  placeholder="Your Name" required=""/>
                  </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group style-two">
                      <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control required email"  placeholder="Your Email" required=""/>
                  </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group style-two">
                      <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} className="form-control"  placeholder="Phone"/>
                  </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                      <input type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange} className="form-control"  placeholder="Subject"/>
                  </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group style-two">
                      <textarea name="message" value={this.state.message} onChange={this.handleInputChange} className="form-control textarea required" placeholder="Message"></textarea>
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
    )
  }
}


export default ContactForm
