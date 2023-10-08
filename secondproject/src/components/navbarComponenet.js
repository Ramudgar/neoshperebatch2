import React from "react";
import "./assets/css/nav.css";
import { Link } from "react-router-dom";

function NavbarComponenet() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#!">
            Ecommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item btn btn-primary btn-sm">
                <Link className="nav-link " to="/singup" aria-disabled="true">
                  SignUp
                </Link>
              </li>
              <li className="nav-item btn-success btn btn-sm mx-2">
                <Link className="nav-link " to="/signin" aria-disabled="true">
                  SignIn
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#!" aria-disabled="true">
                  Add Product
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link " href="#!" aria-disabled="true">
             View Product
              </a>
            </li>
            <li className="nav-item btn btn-danger btn-sm">
            <a className="nav-link " href="#!" aria-disabled="true">
             SignOut
            </a>
          </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComponenet;
