import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo-extended.svg";

const AttributionModal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content is-clipped">
        <article className="message">
          <div className="message-header">
            <p>{title}</p>
          </div>
          <div className="message-body">{children}</div>
        </article>
      </div>
      <button
        className="modal-close is-large"
        onClick={closeModal}
        aria-label="close"
      ></button>
    </div>
  );
};

const Footer = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log("BAM");
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img src={logo} alt="AvaData Solutions" style={{ width: "40em" }} />
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
            <div className="columns has-text-centered has-text-grey-dark is-size-7">
              <div class="column">
                Copyright 2020 AvaData Solutions, Inc. All Rights Reserved.{" "}
                <span className="attribution-btn" onClick={this.toggleModal}>
                  Attribution Info
                </span>
              </div>
            </div>
          </div>
        </div>
        <AttributionModal
          title="Copyright and Attribution Information"
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
        >
          <p>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            ,{" "}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect
            </a>{" "}
            and,{" "}
            <a href="https://www.flaticon.com/authors/catkuro" title="catkuro">
              catkuro
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
            .
          </p>
          <p>
            Website Development by Michael Nguyen at{" "}
            <a href="https://nguyenmichael.dev">nguyenmichael.dev</a>{" "}
            and on <a href="https://github.com/nguyen-michael">Github</a>
          </p>
        </AttributionModal>
      </footer>
    );
  }
};

export default Footer;
