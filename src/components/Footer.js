import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-extended.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="AvaData Solutions"
            style={{ width: "29em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item has-text-centered">
                        Home
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link
                        className="navbar-item has-text-centered"
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link
                        className="navbar-item has-text-centered"
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link
                        className="navbar-item has-text-centered"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
