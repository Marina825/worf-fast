import React from "react";
import imageFooter from "../image/imageFooter.svg";
import mapFooter from "../image/map-footer.svg";
import logoGeodata from "../image/geodata.svg";
import logoPhone from "../image/phone.svg";
import iconTwitter from "../image/icons-twitter.svg";
import iconFacebook from "../image/icons-facebook.svg";
import iconLinkedin from "../image/icons-linkedin.svg";

const Footer = ({ isDarkTheme }) => {
  return (
    <div
      className={
        isDarkTheme ? "footer-content dark-theme" : "footer-content light-theme"
      }
    >
      <div className="footer-content-top">
        <h1 className="footer-top-header">
          OpenType features and Variable fonts
        </h1>
        <button className="button-header first-button-header">
          Try For Free
        </button>
      </div>
      <div className="block-images-footer">
        <img
          src={imageFooter}
          alt="footer-image"
          className="images-footer"
        ></img>
        <img src={mapFooter} alt="map-footer" className="images-footer"></img>
      </div>

      <div
        className={
          isDarkTheme
            ? "footer-content-contact dark-theme "
            : "footer-content-contact light-theme  "
        }
      >
        <div className="footer-description">
          <h3
            className={
              isDarkTheme
                ? "head-footer-description dark-text"
                : "head-footer-description light-text"
            }
          >
            Fingertipe
          </h3>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Overview
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Features
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Roadmap
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Pricing
          </a>
        </div>

        <div className="footer-description">
          <h3
            className={
              isDarkTheme
                ? "head-footer-description dark-text"
                : "head-footer-description light-text"
            }
          >
            Resources
          </h3>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Overview
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Team
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Vacancy Jobs
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Awards
          </a>
        </div>

        <div className="footer-description">
          <h3
            className={
              isDarkTheme
                ? "head-footer-description dark-text"
                : "head-footer-description light-text"
            }
          >
            About
          </h3>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Head Office
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Subsidiaries
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Support
          </a>
          <a
            href="#"
            className={
              isDarkTheme
                ? "href-footer-description href-text-footer"
                : "href-footer-description light-text"
            }
          >
            Feedback
          </a>
        </div>

        <div className="footer-description-contact">
          <div className="contact-footer">
            <img src={logoGeodata} alt="logoGeodata"></img>
            <p
              className={
                isDarkTheme
                  ? "contact-footer-data dark-text"
                  : "contact-footer-data light-text"
              }
            >
              65806 Briarwood Road San Francisco CA{" "}
            </p>
          </div>
          <div className="contact-footer">
            <img src={logoPhone} alt="logoPhone"></img>
            <p
              style={{ "paddingLeft": "10px" }}
              className={
                isDarkTheme
                  ? "contact-footer-data dark-text"
                  : "contact-footer-data light-text"
              }
            >
              417-865-1442
            </p>
          </div>
          <div className="network-contact">
            <img id="twitterImage"
              src={iconTwitter}
              alt="logo-twitter"
              className="icon-network-contact"
            ></img>
            <img id="facebookImage"
              src={iconFacebook}
              alt="logo-facebook"
              className="icon-network-contact"
            ></img>
            <img id="linkedinImage" src={iconLinkedin} alt="logo-linkedin"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
