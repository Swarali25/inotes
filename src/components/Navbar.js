import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = (props) => {
  const location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <>
      <div className="col-lg-3 col-md-3  col-xl-2 ">
        <nav className="navbar navbar-dark bg-dark sticky-top">
          <div className="container-fluid flex-column">
            <Link className="navbar-brand" to="/">
              INotes App
            </Link>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/FetchNotes" ? "active" : ""
                    }`}
                    to="/FetchNotes"
                  >
                    Get All Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/favNotes" ? "active" : ""
                    }`}
                    to="/favNotes"
                  >
                    Favourite Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    AboutUs
                  </Link>
                </li>
                
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      onClick={props.toggleMode}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                      style={{color:"white"}}
                    >
                     {props.mode === "dark" ? "LightMode" :"DarkMode"}
                    </label>
                  </div>
                
              </ul>
            </div>

            <div
              className="text-center my-2 mx-2"
              style={{ position: "absolute", bottom: "0px" }}
            >
              <h4 style={{ color: "white" }}>
                Save and access your notes anytime
              </h4>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
