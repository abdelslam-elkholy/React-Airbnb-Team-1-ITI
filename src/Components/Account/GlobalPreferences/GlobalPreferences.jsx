import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./GlobalPreferences.css";

const GlobalPreference = () => {
  return (
    <>
      <div className="personal d-flex flex-column justify-content-center container-lg p-5 ">
        <div className="info ">
          <div className="d-flex ">
            <p className="fw-medium">
              <a href="#" className="text-black text-decoration-none">
                {" "}
                Account
              </a>
              &nbsp;&nbsp;
            </p>
            <IoIosArrowForward size={"10px"} className="mt-2" />
            <p className="fw-medium">
              {" "}
              &nbsp;&nbsp;
              <a href="#" className="text-black text-decoration-none">
                Global preferences
              </a>
            </p>
          </div>
          <h2 className="fw-bold">Global preferences</h2>
        </div>
        <div className="d-flex  justify-content-between  ">
          <div className="personalLeft  d-flex flex-column mt-5">
            <div className=" mt-3 pb-4 border-bottom">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <span className="fw-medium">Preferred language</span>
                  <span>English</span>
                </div>
                <div>
                  <a
                    href="#"
                    className="globalEdit text-decoration-none fw-semibold"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className=" mt-3 pb-4 border-bottom">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <span className="fw-medium">Preferred currency</span>
                  <span>United States dollar</span>
                </div>
                <div>
                  <a
                    href="#"
                    className="globalEdit text-decoration-none fw-semibold"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className=" mt-3 pb-4 border-bottom">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <span className="fw-medium">Time zone</span>
                </div>
                <div>
                  <a
                    href="#"
                    className="globalEdit text-decoration-none fw-semibold"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="golbalRight  border p-4 ">
            <div className="p-0 ">
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "block",
                  fill: "#FFB400",
                }}
              >
                <path d="m21.31 5.91a1.31 1.31 0 1 1 -1.31-1.31 1.31 1.31 0 0 1 1.31 1.31zm-8.31 9.69a1.31 1.31 0 1 0 1.31 1.31 1.31 1.31 0 0 0 -1.31-1.31zm-7-11a1.31 1.31 0 1 0 1.31 1.31 1.31 1.31 0 0 0 -1.31-1.31z"></path>
                <path
                  d="m22 6.5a2.5 2.5 0 0 1 -2 2.45v13.55a.5.5 0 0 1 -1 0v-13.55a2.5 2.5 0 0 1 0-4.9v-2.55a.5.5 0 0 1 1 0v2.56a2.44 2.44 0 0 1 .33.09.5.5 0 0 1 -.33.94h-.01a1.45 1.45 0 0 0 -.99.01 1.49 1.49 0 0 0 0 2.82 1.4 1.4 0 0 0 1 0 1.5 1.5 0 0 0 1-1.41 1.48 1.48 0 0 0 -.09-.52.5.5 0 0 1 .94-.35 2.5 2.5 0 0 1 .16.87zm-7.8 9.83a.5.5 0 0 0 -.29.64 1.48 1.48 0 0 1 .09.52 1.5 1.5 0 0 1 -1 1.41 1.4 1.4 0 0 1 -1 0 1.49 1.49 0 0 1 0-2.82 1.48 1.48 0 0 1 .5-.09 1.52 1.52 0 0 1 .5.08h.01a.5.5 0 0 0 .32-.94 2.46 2.46 0 0 0 -.32-.08v-13.56a.5.5 0 0 0 -1 0v13.55a2.5 2.5 0 0 0 0 4.9v2.55a.5.5 0 0 0 1 0v-2.55a2.5 2.5 0 0 0 1.84-3.32.5.5 0 0 0 -.64-.29zm-7-11a .5.5 0 0 0 -.29.64 1.48 1.48 0 1 1 -1.41-.98 1.47 1.47 0 0 1 .49.08h.01a.5.5 0 0 0 .33-.94 2.44 2.44 0 0 0 -.33-.09v-2.56a.5.5 0 0 0 -1 0v2.55a2.5 2.5 0 0 0 0 4.9v13.55a.5.5 0 0 0 1 0v-13.55a2.5 2.5 0 0 0 1.84-3.32.5.5 0 0 0 -.64-.29z"
                  fill="#484848"
                ></path>
              </svg>
              <h5 className="fw-bold mt-2">Your global preferences</h5>
              <p className="mt-4 ">
                Changing your currency updates how you see prices. You can
                change how you get payments in your payments & payouts
                preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalPreference;
