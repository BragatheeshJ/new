import React from "react";
///import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
///import { logoutAction } from "../../redux/actions/auth";

const Navbar = () => {
  ///const navigate = useNavigate();

  ///const dispatch = useDispatch();

  ///const isAuthenticated = useSelector((s) => s.state.isAuthenticated);
  // const handleLogInOut = () => {
  //   const userId = localStorage.getItem("id");
  //   if (userId) {
  //     localStorage.removeItem("id");
  //     dispatch(logoutAction(navigate));
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            <img
              src="imagi.ico"
              aria-label="favicon"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <b>-Advisor</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/howtoapply">
                  How to Apply
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/faqs">
                  FAQS
                </Link>
              </li>


              <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/propertydetails"
                    >
                      Property Details
                    </Link>
                  </li>

{/*
                  <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/emicheck"
                    >
                      Eligibility Checker
                    </Link>
  </li>*/}
                  <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/contactus"
                    >
                      Queries
                    </Link>
                  </li>
              {localStorage.getItem("id") ? (
                <>
                  
                </>
              ) : (
                <>
                 {/*} <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/register"
                    >
                      Register
              </Link>
                  </li>*/}
                </>
              )}

             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
