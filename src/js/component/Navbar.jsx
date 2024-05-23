import React from "react";

const Navbar = () => {
  return (


    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <nav className="navbar navbar-expand-lg p-4 bg-dark text-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand px-4 text-white" href="#">Start Bootstrap</a>
          <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar d-md-flex justify-content-md-end pe-4" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-white" href="#" role="button" aria-expanded="false">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>


  );
};
export default Navbar;