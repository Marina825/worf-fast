import React, { useState, useEffect } from "react";
import imgMain from "../image/img-main.svg";
import iconCutlery from "../image/iconCutlery.svg";
import iconUFO from "../image/iconUFO.svg";
import iconInfinity from "../image/iconInfinity.svg";
import imgMacbook from "../image/imgMacbook.svg";
import imgBoards from "../image/boards.svg";
import { useTheme } from "./ThemeContext";
const Main = () => {
  const { isDarkTheme } = useTheme();
  const text =
    "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
    }
  }, [currentIndex]);
  return (
    <div
      className={
        isDarkTheme ? "main-content dark-theme" : "main-content light-theme"
      }
    >
      <div className="main-content-top">
        <button className="button-animation" data-text="Awesome">
          <span className={isDarkTheme ? "dark-text" : " light-text"}>
            &nbsp;Features&nbsp;
          </span>
          <span aria-hidden="true" className="hover-text-animation">
            &nbsp;Features&nbsp;
          </span>
        </button>

        <div>
          <h4
            className={
              isDarkTheme
                ? "text-content-header dark-text"
                : "text-content-header light-text"
            }
          >
            {displayText}
          </h4>
        </div>

        <div className="main-content-middle-desktop">
          <img
            src={imgMain}
            alt="img-main"
            className="imageContentHeader imageContentMain"
          />
          <div className="main-content-middle">
            <div className="block-content-main">
              <img
                src={iconCutlery}
                alt="icon-cutlery"
                className="img-block-content"
              />
              <h2
                className={
                  isDarkTheme
                    ? "title-content-block dark-text"
                    : "title-content-block light-text"
                }
              >
                A single source
              </h2>
              <p
                className={
                  isDarkTheme
                    ? "text-content-block dark-text"
                    : "text-content-block light-text"
                }
              >
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>

            <div className="block-content-main">
              <img
                src={iconUFO}
                alt="icon-cutlery"
                className="img-block-content"
              />
              <h2
                className={
                  isDarkTheme
                    ? "title-content-block dark-text"
                    : "title-content-block light-text"
                }
              >
                Intuitive interface
              </h2>
              <p
                className={
                  isDarkTheme
                    ? "text-content-block dark-text"
                    : "text-content-block light-text"
                }
              >
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>

            <div className="block-content-main">
              <img
                src={iconInfinity}
                alt="icon-cutlery"
                className="img-block-content"
              />
              <h2
                className={
                  isDarkTheme
                    ? "title-content-block dark-text"
                    : "title-content-block light-text"
                }
              >
                Or with rules
              </h2>
              <p
                className={
                  isDarkTheme
                    ? "text-content-block dark-text"
                    : "text-content-block light-text"
                }
              >
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
          </div>
        </div>

        <div className="main-content-bottom">
          <button className="button-animation" data-text="Awesome">
            <span className={isDarkTheme ? "dark-text" : " light-text"}>
              &nbsp;Contents&nbsp;
            </span>
            <span aria-hidden="true" className="hover-text-animation">
              &nbsp;Contents&nbsp;
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

        <div className="cards-main">
          <div className="block-content-main-bottom">
            <h1 className="text-content-main headline-main-bottom">Work</h1>
            <div className="text-content-main-bottom">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </div>
            <button className="button-header first-button-header">
              Sign Up
            </button>
            <img
              src={imgMacbook}
              style={{ height: "150px" }}
              alt="img-macbook"
            />
          </div>

          <div className="block-content-main-bottom">
            <h1 className="text-content-main headline-main-bottom">
              Design with real data
            </h1>
            <div className="text-content-main-bottom">
              Ever wondered if you're too reliant on a client for work? Slate
              helps you identify.
            </div>
            <button className="button-header first-button-header">
              Try For Free
            </button>
            <img
              src={imgBoards}
              alt="img-macbook"
              style={{ maxWidth: "300px", height: "150px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
