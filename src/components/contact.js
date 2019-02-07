import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => (
    <Formik
      initialValues={{name:'', email:'', phone:'', subject:'', message:''}}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      >
      {({ isSubmitting }) => (
        <Form className="default-form" name="contact_form" >
          <div className="row clearfix">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="form-group style-two">
                <Field className="form-control" type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="form-group style-two">
                    <Field type="email" name="email" className="form-control required email"  placeholder="Your Email" required=""/>
                    <ErrorMessage name="email" component="div" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="form-group style-two">
                  <Field type="text" name="phone"  className="form-control"  placeholder="Phone"/>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                    <Field type="text" name="subject"className="form-control"  placeholder="Subject"/>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="form-group">
                      <Field type="text" name="subject"  className="form-control"  placeholder="Subject"/>
                  </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="form-group style-two">
                      <textarea name="message" className="form-control textarea required" placeholder="Message"></textarea>
                  </div>
              </div>
            </div>
          </div>
          <button className="btn-style-five" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
)

export default ContactForm
