import React from "react";
import Image1 from "../image/Image1.svg";
import Image2 from "../image/Image2.svg";
import Image3 from "../image/Image3.svg";
import Image4 from "../image/Image4.svg";
import Image5 from "../image/Image5.svg";
import Image6 from "../image/Image6.svg";
import Image7 from "../image/Image7.svg";
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
const Section = ({ isDarkTheme }) => {
  return (
    <div
      className={
        isDarkTheme
          ? "section-content dark-theme"
          : "section-content light-theme"
      }
    >
      <div className="section-content-top">
        <h1
          className={
            isDarkTheme ? "headline-main dark-text" : "headline-main light-text"
          }
        >
          Gallery
        </h1>
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

      <div className="block-images-section">
        <img
          src={Image1}
          alt="images-section"
          className="first-image-section"
        />
        <div className="flex-images-section">
        <img src={Image6} alt="images-section" className="image-section"></img>
        <img src={Image2} alt="images-section" className="image-section"></img>
        <img src={Image7} alt="images-section" className="image-section"></img>
        <img src={Image3} alt="images-section" className="image-section"></img>
        <img src={Image4} alt="images-section" className="image-section"></img>
        <img src={Image5} alt="images-section" className="image-section"></img>
      </div></div>
      <div className="section-content-middle">
        <h1
          className={
            isDarkTheme ? "headline-main dark-text" : "headline-main light-text"
          }
        >
          Partners
        </h1>
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
        <h1
          className={
            isDarkTheme ? "headline-main dark-text" : "headline-main light-text"
          }
        >
          Testimonials
        </h1>
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
