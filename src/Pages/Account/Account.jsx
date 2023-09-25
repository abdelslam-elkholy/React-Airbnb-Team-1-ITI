import React from "react";
import {
  AiOutlineIdcard,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { RiSecurePaymentLine, RiGlobalLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";
import { BsToggles } from "react-icons/bs";
import { GiDesk } from "react-icons/gi";
import { LiaChartBarSolid } from "react-icons/lia";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import { BiShieldPlus, BiDollar } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaAirbnb } from "react-icons/fa6";
import "./Account.css";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="account  mt-5">
        <div className="px-4">
          <h1 className="display-5 fs-2 fw-medium">Account</h1>
          <h5 className="fw-normal">
            <span className="fw-medium">Mariam Hehsam,</span>
            &nbsp;mariam@gmail.com. &nbsp;
            <span>
              <a href="#" className="text-black fw-medium">
                Go to profile
              </a>
            </span>
          </h5>
        </div>
        <div className="d-flex justify-content-center">
          <div className="boxes mt-5 d-flex flex-wrap justify-content-start">
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/personalInfo"
                className="text-black text-decoration-none"
              >
                <AiOutlineIdcard size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Personal info</h6>
                  <h6 className="fw-normal text-secondary">
                    Provide personal details and how we can reach you
                  </h6>
                </div>
              </NavLink>
            </div>

            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/loginAndSecurity"
                className="text-black text-decoration-none"
              >
                <RiSecurePaymentLine size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Login & security</h6>
                  <h6 className="fw-normal text-secondary">
                    Update your password and secure your account
                  </h6>
                </div>
              </NavLink>
            </div>

            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/paymentsAndPayouts"
                className="text-black text-decoration-none"
              >
                <MdOutlinePayments size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Payments & payouts</h6>
                  <h6 className="fw-normal text-secondary">
                    Review payments, payouts, coupons, and gift cards
                  </h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/taxes"
                className="text-black text-decoration-none"
              >
                <IoDocumentOutline size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Taxes</h6>
                  <h6 className="fw-normal text-secondary">
                    Manage taxpayer information and tax documents
                  </h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/notifications"
                className="text-black text-decoration-none"
              >
                <HiOutlineSpeakerphone size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Notifications</h6>
                  <h6 className="fw-normal text-secondary">
                    Choose notification preferences and how you want to be
                    contacted
                  </h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/privacyAndSharing"
                className="text-black text-decoration-none"
              >
                <AiOutlineEye size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Privacy & sharing</h6>
                  <h6 className="fw-normal text-secondary">
                    Manage your personal data, connected services, and data
                    sharing settings
                  </h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/globalPreferences"
                className="text-black text-decoration-none"
              >
                <BsToggles size={"35px"} />

                <div className="mt-3">
                  <h6 className="fw-semibold">Global preferences</h6>
                  <h6 className="fw-normal text-secondary">
                    Set your default language, currency, and timezone
                  </h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/travelForWork"
                className="text-black text-decoration-none"
              >
                <GiDesk size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Travel for work</h6>
                  <h6 className="fw-normal text-secondary">
                    Add a work email for business trip benefits
                  </h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/professionalHostingTools"
                className="text-black text-decoration-none"
              >
                <LiaChartBarSolid size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Professional hosting tools</h6>
                  <h6 className="fw-normal text-secondary">
                    Get professional tools if you manage several properties on
                    Airbnb
                  </h6>
                </div>
              </NavLink>
            </div>
            <div className="box mx-2 rounded-4 shadow p-3 mb-4">
              <NavLink
                to="account/referralCreditAndCoupon"
                className="text-black text-decoration-none"
              >
                <HiOutlineGiftTop size={"35px"} />
                <div className="mt-3">
                  <h6 className="fw-semibold">Referral credit & coupon</h6>
                  <h6 className="fw-normal text-secondary">
                    You have $0 referral credits and coupon. Learn more.
                  </h6>
                </div>
              </NavLink>
            </div>
            {/* <Outlet /> */}
          </div>
        </div>
        <div className="continer text-center mt-3">
          <p>Need to deactive your account?</p>
          <h6>
            <a href="#" className="text-black ">
              Take care of that now
            </a>
          </h6>
        </div>
      </div>
      {/* responsive small */}
      <div className="accountSmall container-fluid px-4 mt-5">
        <div>
          <h2 className="display-5 fs-1 fw-medium">Profile</h2>
        </div>
        <div className="showProfile d-flex justify-content-between mt-4 pb-3 border-bottom">
          <div className="d-flex ">
            <div
              style={{
                borderRadius: "50%",
                width: "65px",
                height: "65px",
                // verticalAlign: "middle !important",
              }}
              className="initial  text-bg-dark text-center pt-3 me-3"
            >
              <h4>M</h4>
            </div>
            <div className="d-flex flex-column">
              <span className="fw-semibold fs-4">Mariam</span>
              <span className="text-secondary">Show profile</span>
            </div>
          </div>
          <div className="pt-4">
            <IoIosArrowForward size={"25px"} />
          </div>
        </div>
        <div className="place d-flex justify-content-between mt-4 p-4 border border-2 border-light-subtle rounded-4 shadow">
          <div>
            <h5 className="mt-2">Airbnb your place</h5>
            <span>It’s simple to get set up and start earning.</span>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/pictures/b0021c55-05a2-4449-998a-5593567220f7.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="showProfile d-flex justify-content-between mt-5 pb-3 ">
          <div className="d-flex ">
            <PiUserCircle size={"25px"} />
            <span className=" ms-3">Personal info</span>
          </div>
          <div>
            <IoIosArrowForward size={"25px"} />
          </div>
        </div>
        <div className="showProfile d-flex justify-content-between mt-4 pb-4 border-bottom">
          <div className="d-flex ">
            <AiOutlineSetting size={"25px"} />
            <span className=" ms-3">Account</span>
          </div>
          <div>
            <IoIosArrowForward size={"25px"} />
          </div>
        </div>
        <div className="pt-5">
          <span className="display-5 fs-3 fw-medium">Hosting</span>
          <div className="showProfile d-flex justify-content-between mt-5 pb-5 border-bottom">
            <div className="d-flex ">
              <BsToggles size={"25px"} />
              <span className=" ms-3">Host a home</span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <span className="display-5 fs-3 fw-medium">Support</span>
          <div className="showProfile d-flex justify-content-between mt-5  ">
            <div className="d-flex ">
              <AiOutlineQuestionCircle size={"25px"} />
              <span className=" ms-3">Visit the Help Center</span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
          <div className="showProfile d-flex justify-content-between mt-5  ">
            <div className="d-flex ">
              <BiShieldPlus size={"25px"} />
              <span className=" ms-3">Get help with a safety issue</span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
          <div className="showProfile d-flex justify-content-between mt-5  ">
            <div className="d-flex ">
              <TfiHeadphoneAlt size={"25px"} />
              <span className=" ms-3">Report a neihborhood concern</span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
          <div className="showProfile d-flex justify-content-between mt-5 mb-4 pb-4 border-bottom ">
            <div className="d-flex ">
              <FaAirbnb size={"25px"} />
              <span className=" ms-3">How Airbnb works</span>
            </div>
            <div>
              <IoIosArrowForward size={"25px"} />
            </div>
          </div>
        </div>
        <div className="setting d-flex mb-3">
          <span className="d-flex mx-1 language">
            <RiGlobalLine size={"25px"} /> English(US)
          </span>
          <span className="d-flex payment">
            <BiDollar size={"25px"} className="pe-2" />
            USD
          </span>
        </div>
        <button className="btn logoutbtn border-black text-black rounded-3 mb-4 text-center">
          <h5>Log out</h5>
        </button>
        <div className="help text-center mb-4">
          <h6>
            <a href="#" className="text-black">
              Help & support
            </a>
            &nbsp;&nbsp;
            <a href="#" className="text-black">
              Terms of Service
            </a>
            &nbsp;&nbsp;
            <a href="#" className="text-black">
              Privacy Poilcy
            </a>
            &nbsp;&nbsp;
            <a href="#" className="text-black">
              Your Privacy Choices
            </a>
            &nbsp;&nbsp;
            <svg
              width="26"
              height="12"
              fill="none"
              className="d-inline togglecheck"
            >
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                fill="#fff"
              ></rect>
              <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
              <path
                d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                stroke="#06F"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                stroke="#fff"
                strokeLinecap="round"
              ></path>
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="11"
                rx="5.5"
                stroke="#06F"
              ></rect>
            </svg>
          </h6>
          <h6 className="text-secondary">
            © 2023 Airbnb, Inc. All rights reserved.
          </h6>
        </div>
      </div>
    </>
  );
};

export default Account;
