import React, { Component } from "react";
import Field from "../Common/Field";

import { withFormik } from "formik";
import * as Yup from "yup";

const fields = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number",
      },
    ],
    [
      {
        name: "message",
        elementName: "tesxtarea",
        type: "text",
        placeholder: "Your message",
      },
    ],
  ],
};

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <form
            id="contactForm"
            name="sentMessage"
            novalidate="novalidate"
            onSubmit={this.props.handleSubmit}
          >
            <div className="row align-items-stretch mb-5">
              {fields.sections.map((section, sectionIndex) => {
                return (
                  <div className="col-md-6" key={sectionIndex}>
                    {section.map((field, i) => {
                      return (
                        <Field
                          {...field}
                          key={i}
                          value={this.props.values[field.name]}
                          name={field.name}
                          onChange={this.props.handleChange}
                          onBlur={this.props.handleBlur}
                          touched={this.props.touched[field.name]}
                          errors={this.props.errors[field.name]}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <div id="success"></div>
              <button
                className="btn btn-primary btn-xl text-uppercase"
                id="sendMessageButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    message: "",
    phone: "",
  }),
  // validate: (values) => {
  //   const errors = {};
  //   Object.keys(values).map((v) => {
  //     if (!values[v]) {
  //       errors[v] = "Required";
  //     }
  //   });
  //   return errors;
  // },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "name too short")
      .required("You must give us your name"),
    email: Yup.string()
      .email("email invalid")
      .required("please provide an email"),
    phone: Yup.string()
      .min(10, "please check phone number")
      .max(15, "phone number too long")
      .required("we need your phone number"),
    message: Yup.string()
      .min(500, "you need to provide more information")
      .required("message is required"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert("form has been submitted", JSON.stringify(values));
  },
})(Contact);
