import React from "react";
import Logo from "../../../assets/img/logo-black.png";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header--section style--3">
          {/* <!-- Header Topbar Start --> */}
          <div
            className="header--topbar"
            style={{ background: "#5b4ebb", color: "white" }}
          >
            <div className="container">
              {/* <!-- Header Topbar Links Start --> */}
              <ul className="header--topbar-links nav no--stripes float--left">
                <li>
                  <a href="members.php">Find your local contacts</a>
                </li>
                <li>
                  <a href="contact.php">Contact </a>
                </li>
              </ul>
              {/* <!-- Header Topbar Links End --> */}

              {/* <!-- Header Topbar Links Start --> */}
              <ul className="header--topbar-links nav float--right">
                <li>
                  <a
                    href="#"
                    className="btn-link"
                    data-toggle="modal"
                    data-target="#join"
                  >
                    <i className="fa fa-user-o" />
                    Join Community
                  </a>
                  <a
                    href="#"
                    className="btn-link"
                    data-toggle="modal"
                    data-target="#signin"
                  >
                    <i className="fa fa-sign-in" />
                    Sign in
                  </a>
                </li>
              </ul>
              {/* <!-- Header Topbar Links End --> */}
            </div>
          </div>
          {/* <!-- Header Topbar End --> */}

          {/* <!-- Header Navbar Start --> */}
          <div
            className="header--navbar navbar bg-default"
            data-trigger="sticky"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle style--3 collapsed"
                  data-toggle="collapse"
                  data-target="#headerNav"
                >
                  <span className="sr-only">Toggle Navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>

                <div className="header--navbar-logo navbar-brand">
                  <a>
                    <img src={Logo} style={{ cursor: "pointer" }} alt="Logo" />
                  </a>
                </div>
              </div>

              <div
                id="headerNav"
                style={{ color: "#333" }}
                className="navbar-collapse collapse float--right"
              >
                {/* <!-- Header Nav Links Start --> */}
                <ul
                  className="header--nav-links style--3 nav ff--primary"
                  style={{ fontWeight: "600" }}
                >
                  <li className="dropdown active">
                    <a href="index.js">
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="about.js">
                      <span>About Us</span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <span style={{ paddingRight: "4px" }}>Community</span>
                      <i className="fa fa-caret-down"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a href="members.js">
                          <span>Members</span>
                        </a>
                      </li>
                      <li>
                        <a href="groups.js">
                          <span>Groups</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="newsEvents.js">
                      <span>News & Events</span>
                    </a>
                  </li>

                  <li className="dropdown">
                    <a href="blog.js" className="dropdown-toggle">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="contact.js">
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
                {/* <!-- Header Nav Links End --> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
