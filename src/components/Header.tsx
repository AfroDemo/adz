import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header primText h100">
      <div className="overlay"></div>
      <Navbar />
      <div className="cont">
        <div className="moto">
          <h2 className="h danText">ADz Community</h2>
          <h1 className="hTitle">
            LET'S MOVE <br />
            TOGETHER
          </h1>
          <p className="h">
            Dive into a world where collaboration thrives, <br />
            let's illuminate the path to tech excellence!
          </p>
          <div className="twoBtn d-flex">
            <div className="m-2">
              <a href="" className="btn primBtn primText">
                Register Now
              </a>
            </div>
            <div className="m-2">
              <a href="" className="btn secBtn primText">
                Discover More
              </a>
            </div>
          </div>
        </div>
        <div className="social d-flex">
          <div className="link m-2">
            <a href="" className="icon">
            <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="twitter m-2">
            <a href="" className="icon">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="tube m-2">
            <a href="" className="icon">
            <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
