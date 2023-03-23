import React from "react";
import "../css/style.css";

function Home() {
  return (
    <div id="hero" className="jumbotron bgContent">
      <div className="jumbotron-content">
        <p className="lead">
          New to Front-End Development 
          <span> |</span> New to Website Development 
          <span> |</span> EdX Student
        </p>
        <h1 className="display-4">Hi, I'm Robert Patrick Jordan Sazon</h1>
        <hr className="my-4" />
        <p>
          In this challenge, I will demonstrate how to create a simple react portfolio using bootstrap and router libries.
        </p>
      </div>
    </div>
  );
}

export default Home;
