import React from "react";
import Logo from "../assets/LogoW.png"

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light primBg">
      <div className="container-fluid">
        <a className="navbar-brand primText" href="#">
          <img src={Logo} width={50} alt="ADz" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active primText"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link primText" href="#">
                Link
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active primText"
                aria-current="page"
                href="#"
              >
                LOGIN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link primText" href="#">
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
