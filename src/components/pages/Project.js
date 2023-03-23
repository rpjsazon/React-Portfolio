import React from "react";
import CodeSolid from "../utils/code-solid.svg";
import Css3 from "../utils/css3-alt.svg";
import Js from "../utils/js.svg";
import Ricon from "../utils/react.svg";


function Project() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="heading-center">
            <h1>Projects</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card about-contact-card project-cards">
                <div className="card-body">
                  <h5 className="card-title project-title">
                    Bootcamp - Pre-work Study Guide
                  </h5>
                  <div
                    id="carouselCaptions-1"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src=""
                          className="d-block w-100"
                          alt="screenshot-pre-work-guide"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://rpjsazon.github.io/prework-study-guide/"
                    target="_blank"
                    className="project-btn btn btn-dark"
                    rel="noreferrer"
                  >
                    Go to my GitHub Page
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card about-contact-card project-cards">
                <div className="card-body">
                  <h5 className="card-title project-title">
                    Bootcamp - Module 1 Challenge
                  </h5>
                  <div
                    id="carouselCaptions-2"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="img/screenshot-module-1-challenge.JPG"
                          className="d-block w-100"
                          alt="screenshot-module-1-challenge"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://rpjsazon.github.io/module-1-challenge-rpjsazon/"
                    target="_blank"
                    className="project-btn btn btn-dark"
                    rel="noreferrer"
                  >
                    Go to my GitHub Page
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card about-contact-card project-cards">
                <div className="card-body">
                  <h5 className="card-title project-title">
                    Bootcamp - Module 2 Challenge - Portfolio
                  </h5>
                  <div
                    id="carouselCaptions-3"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="img/screenshot-portfolio-desktop.JPG"
                          className="d-block w-100"
                          alt="screenshot-portfolio-desktop"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://rpjsazon.github.io/rpjsazon-portfolio/"
                    target="_blank"
                    className="project-btn btn btn-dark"
                    rel="noreferrer"
                  >
                    Go to my GitHub Page
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card about-contact-card project-cards">
                <div className="card-body">
                  <h5 className="card-title project-title">
                    Bootcamp - Module 3 Challenge - Bootstrap Portfolio
                  </h5>
                  <div
                    id="carouselCaptions-3"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="img/screenshot-bootstrap-desktop.JPG"
                          className="d-block w-100"
                          alt="creenshot-bootstrap-desktop"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://rpjsazon.github.io/Bootstrap-Portolio/"
                    target="_blank"
                    className="project-btn btn btn-dark"
                    rel="noreferrer"
                  >
                    Go to my GitHub Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="container-fluid">
          <div className="heading-center">
            <h1>What's my goal?</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card skill-body">
                <img
                  src={CodeSolid}
                  className="card-img-top skill-img"
                  alt="code-icon"
                />
                <div className="card-body">
                  <p className="card-text">
                    I want to become an expert in software / webpage development
                    by always practicing on how to code and by researching on
                    new tech.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card skill-body">
                <img
                  src={Css3}
                  className="card-img-top skill-img"
                  alt="css-icon"
                />
                <div className="card-body">
                  <p className="card-text">
                    I want to be good at designing webpage by learning the
                    fundamentals of Front-End Development.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card skill-body">
                <img
                  src={Js}
                  className="card-img-top skill-img"
                  alt="javascript-icon"
                />
                <div className="card-body">
                  <p className="card-text">
                    Learning how to code in JavaScript is one of my ultimate
                    goal. By going to this bootcamp, I am hoping that I will
                    learn a lot of JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card skill-body">
                <img
                  src={Ricon}
                  className="card-img-top skill-img"
                  alt="react-icon"
                />
                <div className="card-body">
                  <p className="card-text">
                    I want to learn using react framework. Like JavaScript, I
                    want to become an expert react programmer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
