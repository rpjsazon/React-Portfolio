import React from "react";
import AboutMePhoto from "../utils/contact-me-photo.png";

function Contact() {
  return (
    <section id="about-contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card about-contact-card">
              <div className="card-body">
              <img src={AboutMePhoto} className="card-img-top" alt="photoofme" />
              </div>
            </div>
          </div>
          
          <div id="about" className="col-lg-8 col-md-8 col-sm-12">
           
            <div className="col">
              <div className="card about-contact-card">
                <div className="card-body">
                  <h5 className="card-title heading-left">About Me</h5>
                    <p className="card-text">
                      Highly skilled IT Support Administrator with almost 7 years of experience. 
                      Maintaining smooth-running software and system performance through astute troubleshooting and issue resolution. 
                      Manages diverse repair and maintenance tasks with precision and care to enhance IT department functionality and optimise overall company productivity.
                      <br />
                      <br />
                      I have a good experience in photography, cinematography, color-grading, video editing, and taking footage using a drone which I do as a hobby. 
                      I cover events, taking street photography, hovering beautiful landscapes with my drone, taking portaits people, and many more. 
                      I won an award in Abu Dhabi, United Arabs Emirates as my photo is selected as one of the top 20 photos in Environment category.
                    </p>
                </div>
              </div>
            </div>
            
            <div id="contact" className="col">
              <div className="card about-contact-card">
                <div className="card-body contact">
                  <h5 className="card-title heading-left">Contact Me</h5>
                    <span className="contact d-block"><i className="fa-solid fa-envelope"></i> rpjsazon@gmail.com</span>
                    <span className="contact d-block"><i className="fa-solid fa-mobile"></i> 074**110***</span>
                    <span className="contact d-block"><i className="fa-brands fa-github"></i> GitHub</span>
                    <span className="contact d-block"><i className="fa-brands fa-linkedin"></i> LinkedIn</span>
                    <span className="contact d-block"><i className="fa-brands fa-facebook"></i> Facebook</span>
                    <span className="contact d-block"><i className="fa-brands fa-instagram"></i> Instagram</span>
                    <span className="contact d-block"><i className="fa-brands fa-youtube"></i> Youtube</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
