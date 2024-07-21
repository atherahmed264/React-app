import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default dark">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand gold page-scroll" href="#page-top">
            SPARTAN
          </a>
          <img src="img/title.jpeg" height={50} width={60}></img>
          {" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="gold page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="gold page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="gold page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="gold page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="gold page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="gold page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="gold page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
