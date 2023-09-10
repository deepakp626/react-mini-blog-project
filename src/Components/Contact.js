import React from "react";
import axios from "../Services/instance";

export default function Contact() {
  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const author = event.target.author.value;
    const data = {title,body,author}
    axios.post("posts",data)
    .then((response)=>{
        console.log("post response = ",response)
        event.target.reset()
    }).catch((error)=>{
        console.log("post error = ",error)
    })
  };
  return (
    <main class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <p>
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div class="my-5">
              {/* to get an API token */}
              <form
                id="contactForm"
                data-sb-form-api-token="API_TOKEN"
                onSubmit={submitHandler}
              >
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    name="title"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label for="name">Title</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="email"
                    type="text"
                    name="body"
                    placeholder="Enter your email..."
                    data-sb-validations="required,email"
                  />
                  <label for="email">Body</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-floating">
                  <input
                    class="form-control"
                    id="text"
                    type="tel"
                    name="author"
                    placeholder="Enter your phone number..."
                    // data-sb-validations="required"
                  />
                  <label for="phone">Author</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                {/* <div class="form-floating">
                  <textarea
                    class="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: "12rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label for="message">Message</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div> */}
                <br />
                {/* Submit success message */}

                {/* This is what your users will see when the form */}
                {/* has successfully submitted */}
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* Submit error message */}

                {/* This is what your users will see when there is */}
                {/* an error submitting the form */}
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* Submit Button */}
                <button
                  class="btn btn-primary text-uppercase "
                  id="submitButton"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
