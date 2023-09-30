import React, { useEffect, useState } from "react";
import "./ProfileSettings.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import axios from "axios";
import Cookies from "js-cookie";

const ProfileSettings = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const authToken = Cookies.get("authToken");

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get("http://localhost:3000/users/getMe", {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getUserData();
  }, []);

  // ===== delete token====
  function deletToken() {
    Cookies.remove("authToken");
  }
  // ======== end Fitch user data ===========
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
        {authToken ? (
          <ul
            className={`dropdown-menu border-none shadow Header_profile_icon_menu ${
              isOpen ? "show" : ""
            } dropdown-menu-reverse`}
          >
            <div className="border-bottom my-2">
              <li className="dropdown-item my-2 fw-bold">Messages</li>
              <li className="dropdown-item my-2 fw-bold">Trips</li>
              <li className="dropdown-item my-2 fw-bold"> Wishlists</li>
            </div>
            <div className="border-bottom my-2 ">
              <li className="dropdown-item my-2 text_gary">Airbnb your home</li>
              <li className="dropdown-item my-2 text_gary">Account</li>
            </div>
            <li className="dropdown-item my-2 text_gary">Help Center</li>
            <li className="dropdown-item my-2 text_gary" onClick={deletToken}>
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
          show={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
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
