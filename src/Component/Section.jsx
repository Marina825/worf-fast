import React from "react";
import Image1 from "../image/Image1.svg";
import Images1 from "../image/image1.1.svg";
import Image2 from "../image/Image2.svg";
import Images2 from "../image/image2.1.svg";
import Image3 from "../image/Image3.svg";
import Images3 from "../image/image3.1.svg";
import Image4 from "../image/Image4.svg";
import Images4 from "../image/image4.1.svg";
import Image5 from "../image/Image5.svg";
import Images5 from "../image/image5.1.svg";
import Image6 from "../image/Image6.svg";
import Images6 from "../image/image6.1.svg";
import Image7 from "../image/Image7.svg";
import Images7 from "../image/image7.1.svg";
import logoApiary from "../image/logos.svg";
import logoAndroid from "../image/logos_android-icon.svg";
import logoBasecamp from "../image/logos_basecamp.svg";
import logoAirbnb from "../image/logos_airbnb.svg";
import logoIbm from "../image/logos_ibm.svg";
import logoAppleAppStore from "../image/logos_apple-app-store.svg";
import imageAvatar from "../image/avatar.svg";
import imageAvatar1 from "../image/avatar1.svg";
import imageAvatar2 from "../image/avatar2.svg";
import imageAvatar3 from "../image/avatar3.svg";
import { useTheme } from "./ThemeContext";

const Section = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={
        isDarkTheme
          ? "section-content dark-theme"
          : "section-content light-theme"
      }
    >
      <div className="section-content-top">
        <button className="button-animation" data-text="Awesome">
          <span className={isDarkTheme ? "dark-text" : " light-text"}>
            &nbsp;Gallery&nbsp;
          </span>
          <span aria-hidden="true" className="hover-text-animation">
            &nbsp;Gallery&nbsp;
          </span>
        </button>
        <p
          className={
            isDarkTheme
              ? "text-content-header dark-text"
              : "text-content-header light-text"
          }
        >
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className="block-images-section hidden-block-images-mobile">
        <img
          src={Image1}
          alt="images-section"
          className="first-image-section"
        />
        <div className="flex-images-section">
          <img
            src={Image6}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Image2}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Image7}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Image3}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Image4}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Image5}
            alt="images-section"
            className="image-section"
          ></img>
        </div>
      </div>

      <div className="block-images-section hidden-block-images-tablet">
        <img
          src={Images6}
          alt="images-section"
          className="first-image-section"
        />
        <div className="flex-images-section">
          <img
            src={Images7}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Images5}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Images4}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Images3}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Images1}
            alt="images-section"
            className="image-section"
          ></img>
          <img
            src={Images2}
            alt="images-section"
            className="image-section"
          ></img>
        </div>
      </div>

      <div className="section-content-middle">
        <div className="section-content-middle-top">
          <button className="button-animation" data-text="Awesome">
            <span className={isDarkTheme ? "dark-text" : " light-text"}>
              &nbsp;Partners&nbsp;
            </span>
            <span aria-hidden="true" className="hover-text-animation">
              &nbsp;Partners&nbsp;
            </span>
          </button>
          <p
            className={
              isDarkTheme
                ? "text-content-header dark-text"
                : "text-content-header light-text"
            }
          >
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="image-logo-section">
          <img
            src={logoAppleAppStore}
            alt="logo-section"
            className="logo-section"
          ></img>
          <img
            src={logoApiary}
            alt="logo-section"
            className="logo-section"
          ></img>
          <img
            src={logoAndroid}
            alt="logo-section"
            className="logo-section"
          ></img>
          <img
            src={logoBasecamp}
            alt="logo-section"
            className="logo-section"
          ></img>
          <img
            src={logoAirbnb}
            alt="logo-section"
            className="logo-section"
          ></img>
          <img src={logoIbm} alt="logo-section" className="logo-section"></img>
        </div>
      </div>
      <div className="section-content-bottom">
        <button className="button-animation" data-text="Awesome">
          <span className={isDarkTheme ? "dark-text" : " light-text"}>
            &nbsp;Testimonials&nbsp;
          </span>
          <span aria-hidden="true" className="hover-text-animation">
            &nbsp;Testimonials&nbsp;
          </span>
        </button>
        <div className="block-comment">
          <div
            className={
              isDarkTheme
                ? "content-block-comment dark-backgrount-comment"
                : "content-block-comment light-backgrount-comment"
            }
          >
            <div className="comment-user-info">
              <img src={imageAvatar} alt="avatar"></img>
              <div className="userDataComment">
                <p className="name-user-comment">Claire Bell</p>

                <p
                  className={
                    isDarkTheme
                      ? "profession-user-comment dark-text"
                      : "profession-user-comment light-text"
                  }
                >
                  Designer
                </p>
              </div>
            </div>

            <p
              className={
                isDarkTheme
                  ? "text-comment-section dark-text"
                  : "text-comment-section light-text"
              }
            >
              I just wanted to share a quick note and let you know that you do a
              really good job. I'm glad I decided to work with you. Wonderful
              experience!
            </p>
          </div>

          <div
            className={
              isDarkTheme
                ? "content-block-comment dark-backgrount-comment"
                : "content-block-comment light-backgrount-comment"
            }
          >
            <div className="comment-user-info">
              <img src={imageAvatar1} alt="avatar"></img>
              <div className="userDataComment">
                <p className="name-user-comment">Philip Watson</p>

                <p
                  className={
                    isDarkTheme
                      ? "profession-user-comment dark-text"
                      : "profession-user-comment light-text"
                  }
                >
                  Coder
                </p>
              </div>
            </div>

            <p
              className={
                isDarkTheme
                  ? "text-comment-section dark-text"
                  : "text-comment-section light-text"
              }
            >
              You’re just awesome! The prices are reasonable, and the service is
              just great. Thank you so much! Highly recommend!
            </p>
          </div>

          <div
            className={
              isDarkTheme
                ? "content-block-comment dark-backgrount-comment"
                : "content-block-comment light-backgrount-comment"
            }
          >
            <div className="comment-user-info">
              <img src={imageAvatar2} alt="avatar"></img>
              <div className="userDataComment">
                <p className="name-user-comment">Ralph Fisher</p>

                <p
                  className={
                    isDarkTheme
                      ? "profession-user-comment dark-text"
                      : "profession-user-comment light-text"
                  }
                >
                  Coder
                </p>
              </div>
            </div>

            <p
              className={
                isDarkTheme
                  ? "text-comment-section dark-text"
                  : "text-comment-section light-text"
              }
            >
              A friend of mine advised you to me, and I definitely liked working
              with you. It was a good experience. Thanks a lot!
            </p>
          </div>
          <div
            className={
              isDarkTheme
                ? "content-block-comment dark-backgrount-comment"
                : "content-block-comment light-backgrount-comment"
            }
          >
            <div className="comment-user-info">
              <img src={imageAvatar3} alt="avatar"></img>
              <div className="userDataComment">
                <p className="name-user-comment">Jorge Murphy</p>

                <p
                  className={
                    isDarkTheme
                      ? "profession-user-comment dark-text"
                      : "profession-user-comment light-text"
                  }
                >
                  Designer
                </p>
              </div>
            </div>

            <p
              className={
                isDarkTheme
                  ? "text-comment-section dark-text"
                  : "text-comment-section light-text"
              }
            >
              You did an amazing job and I wholeheartedly recommend you to
              everyone I know. You are the best!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
