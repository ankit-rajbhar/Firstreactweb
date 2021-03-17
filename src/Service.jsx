import React from "react";
import icon from "../src/image/android.jpg"
import icon1 from "../src/image/imgg.jpg"
import icon2 from "../src/image/python.jpg"
import icon3 from "../src/image/ios.jpg"
import icon4 from "../src/image/ux.jpg"
import icon5 from "../src/image/imgg.jpg"


const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div claseName="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img src={icon} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Android Development</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Appy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img src={icon1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Digital Marketing</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Appy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img src={icon2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Python</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Appy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img src={icon3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">ios Development</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Appy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img src={icon4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Ux Design</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Appy Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                  <img src={icon5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">React Native</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Appy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
