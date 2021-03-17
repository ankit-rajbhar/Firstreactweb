import React from "react";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us </h1>
      </div>
      <div className="con">
        <div1 classNames="container">
          <div classNames="row">
            <div classNames="col-md-6 col-10 mx-auto">
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your first Name"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your last Name"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </form>
              <a className="btn" rehf="">
                Contact
              </a>
            </div>
          </div>
        </div1>
      </div>
    </>
  );
};
export default Contact;
