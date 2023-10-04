import React, { useEffect, useState } from "react";
import "./ProfileSettings.css";
import Register from "../Register/Register";
import Login from "../Login/Login";

import { useUser } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const { user, logout } = useUser();

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleAirbnbSetupClick = () => {
    setShowRegisterModal(true);
  };
  const handleAirbnbLoginClick = () => {
    setShowLoginModal(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <div className=" d-flex align-items-center justify-content-center mx-2 ">
      <div className="mx-2 " style={{ fontSize: "18px" }}>
        Airbnb your home
      </div>
      <div className="rightDiv2 mx-2">
        <i className="fa-solid fa-globe fs-5"></i>
      </div>
      <div className="dropdown " onClick={toggleDropdown}>
        <div
          className="main_Header_icon_dropdown  py-2 d-flex align-items-center justify-content-around mx-2 "
          onClick={toggleDropdown}
        >
          <div>
            <i className="fa-solid fa-equals"></i>
          </div>
          <div className="  person_profile " style={{ borderRadius: "50%" }}>
            {" "}
            <i className="fa-regular fa-user" style={{ fontSize: "25px" }}></i>
          </div>
        </div>
        {user ? (
          <ul
            className={`dropdown-menu border-none shadow Header_profile_icon_menu ${
              isOpen ? "show" : ""
            } dropdown-menu-reverse`}
          >
            <div className="border-bottom my-2">
              <li className="dropdown-item my-2 fw-bold">Messages</li>
              <li
                className="dropdown-item my-2 fw-bold"
                onClick={() => navigate("/trips")}
              >
                Trips
              </li>
              <li
                className="dropdown-item my-2 fw-bold"
                onClick={() => navigate("/wishlist")}
              >
                Wishlist
              </li>
            </div>
            <div className="border-bottom my-2 ">
              <li className="dropdown-item my-2 text_gary">Airbnb your home</li>
              <li className="dropdown-item my-2 text_gary">Account</li>
            </div>
            <li className="dropdown-item my-2 text_gary">Help Center</li>
            <li
              className="dropdown-item my-2 text_gary"
              onClick={() => {
                window.location.reload();
                logout();
              }}
            >
              Log Out
            </li>
          </ul>
        ) : (
          <ul
            className={`dropdown-menu border-none shadow Header_profile_icon_menu ${
              isOpen ? "show" : ""
            } dropdown-menu-reverse`}
          >
            <div className="border-bottom my-2">
              <li
                onClick={handleAirbnbLoginClick}
                className="dropdown-item my-2"
              >
                log in
              </li>
              <li
                onClick={handleAirbnbSetupClick}
                className="dropdown-item my-2"
              >
                sign up
              </li>
            </div>
            <li className="dropdown-item my-2">Airbnb your home</li>
            <li className="dropdown-item my-2">Help Center</li>
          </ul>
        )}
      </div>
      <div>
        <Register
          key={1}
          showRegister={showRegisterModal}
          onCloseRegister={() => setShowRegisterModal(false)}
        />
      </div>
      <div>
        <Login
          key={2}
          showLogin={showLoginModal}
          onCloseLogin={() => setShowLoginModal(false)}
        />
      </div>
    </div>
  );
};

export default ProfileSettings;
