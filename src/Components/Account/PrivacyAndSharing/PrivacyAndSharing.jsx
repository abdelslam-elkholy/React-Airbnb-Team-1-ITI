import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./PrivacyAndSharing.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import { useState } from "react";
import Form from "react-bootstrap/Form";
import { AiOutlineCheck } from "react-icons/ai";

function PrivacyAndSharing() {
  return (
    <>
      <div className="Privacy and sharing d-flex flex-column justify-content-center container-lg p-5 ">
        <div className="sharing text-decoration-none">
          <div className="d-flex ">
            <p className="fw-medium">
              <a href="#" className="text-black text-decoration-none">
                Account
              </a>
              &nbsp;&nbsp;
            </p>
            <IoIosArrowForward size={"10px"} className="mt-2" />
            <p className="fw-medium">
              &nbsp;&nbsp;
              <a href="#" className="text-black text-decoration-none">
                Privacy and sharing
              </a>
            </p>
          </div>
          <h2 className="fw-bold">Privacy and sharing</h2>
        </div>
        <div className="w-100 mt-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            {/* <Row> */}
            {/* <Col sm={3}> */}
            <div className="payLeft">
              <div className="titles border-bottom">
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        Data
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className="mx-2 border-0 payBtn"
                    >
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        Sharing
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        Services
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            {/* </Col> */}
            {/* <Col sm={9}> */}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <div className=" pb-4 ">
                      <h4 className="fw-semibold ">Manage your account data</h4>
                      <p className=" text-secondary">
                        You can make a request to download or delete your
                        personal data from Airbnb.
                      </p>
                      <div className="d-flex mt-5">
                        <span>Request your personal data&nbsp;</span>
                        <div>
                          <IoIosArrowForward size={"20px"} className="mt-1" />
                        </div>
                      </div>
                      <p className="text-secondary mb-2">
                        We’ll create a file for you to download your personal
                        data.
                      </p>
                      <div className="d-flex mt-5">
                        <span>Delete your account&nbsp;</span>
                        <div>
                          <IoIosArrowForward size={"20px"} className="mt-1" />
                        </div>
                      </div>
                      <p className="text-secondary mb-2">
                        This will permanently delete your account and your data,
                        in accordance with applicable law.
                      </p>
                    </div>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
                    <div className="pb-2">
                      <h5 className="fw-semibold mt-2">Committed to privacy</h5>
                      <p>
                        Airbnb is committed to keeping your data protected. See
                        details in our{" "}
                        <a href="#" className="text-dark fw-semibold">
                          Privacy Policy.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <div className=" pb-4 ">
                      <h4 className="fw-semibold ">Activity sharing</h4>
                      <p className=" text-secondary">
                        Decide how your profile and activity are shown to
                        others.
                      </p>
                      <div className=" mt-5">
                        <span>
                          Include my profile and listing in search engines
                        </span>
                      </div>
                      <p className="text-secondary mb-2">
                        Turning this on means search engines, like Google, will
                        display your profile and listing pages in search
                        results.
                      </p>
                      <input type="checkbox" id="switch1" />
                      <label id="labelPrivacy" htmlFor="switch1">
                        <div className="iconCheck">
                          <AiOutlineCheck
                            style={{ fill: "black !important" }}
                          />
                        </div>
                      </label>
                      <div className=" mt-5">
                        <span>Read Receipts</span>
                      </div>
                      <p className="text-secondary mb-2">
                        When this is on, we’ll show people that you’ve read
                        their messages.{" "}
                        <a href="#" className="text-dark fw-semibold">
                          Learn more
                        </a>
                      </p>
                      <input type="checkbox" id="switch2" />
                      <label id="labelPrivacy" htmlFor="switch2">
                        <div className="iconCheck">
                          <AiOutlineCheck
                            style={{ fill: "black !important" }}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
                    <div className="pb-2">
                      <h5 className="fw-semibold mt-2">Committed to privacy</h5>
                      <p>
                        Airbnb is committed to keeping your data protected. See
                        details in our{" "}
                        <a href="#" className="text-dark fw-semibold">
                          Privacy Policy.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <h4 className="fw-semibold ">Connected services</h4>
                    <p className=" text-secondary">
                      View services that you’ve connected to your Airbnb account
                    </p>
                    <p className="mt-2">No services connected at the moment</p>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
                    <div className="pb-2">
                      <h5 className="fw-semibold mt-2">Committed to privacy</h5>
                      <p>
                        Airbnb is committed to keeping your data protected. See
                        details in our{" "}
                        <a href="#" className="text-dark fw-semibold">
                          Privacy Policy.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
            {/* </Col> */}
            {/* </Row> */}
          </Tab.Container>
        </div>
      </div>
    </>
  );
}

export default PrivacyAndSharing;
