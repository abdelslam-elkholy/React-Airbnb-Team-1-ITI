import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./LoginAndSecurity.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function LoginAndSecurity() {
  return (
    <>
      <div className="loginAndsec d-flex flex-column justify-content-center container-lg p-5 ">
        <div className="login ">
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
                Login & security
              </a>
            </p>
          </div>
          <h2 className="fw-bold">Login & security</h2>
        </div>
        <div className="w-100 mt-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            {/* <Row> */}
            {/* <Col sm={3}> */}
            <div className="loginLeft">
              <div className="titles border-bottom">
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className=" border-0 loginBtn">
                      <h6 className="fw-medium ">LOGIN</h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className=" border-0 loginBtn">
                      <h6 className="fw-medium ">LOGIN REQUSETS</h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className=" border-0 loginBtn">
                      <h6 className="fw-medium ">SHARED ACCESS</h6>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            {/* </Col> */}
            {/* <Col sm={9}> */}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="d-flex loginbox justify-content-between  ">
                  <div className="loginLeft  d-flex flex-column mt-5">
                    <div className=" mt-3 pb-4 border-bottom">
                      <h4 className="fw-bold mb-5">Login</h4>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span>Password</span>
                          <span className="text-secondary">
                            Last updated 22 days ago
                          </span>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="loginLink text-decoration-none  fw-semibold"
                          >
                            <h6>Update</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-3  pb-4 border-bottom">
                      <h4 className="fw-bold mb-5 mt-4">Social accounts</h4>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span>Facebook</span>
                          <span className="text-secondary">Not connected</span>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="loginLink text-decoration-none  fw-semibold"
                          >
                            <h6>Connect</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-3  pb-4 border-bottom">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span>Google</span>
                          <span className="text-secondary">Connected</span>
                        </div>
                        <div>
                          <a
                            href="#"
                            className=" text-secondary text-decoration-none  fw-semibold"
                          >
                            <h6>Disonnect</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-3  pb-4 border-bottom">
                      <h4 className="fw-bold mb-5 mt-3">Device history</h4>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <svg
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="false"
                            aria-label="Desktop device"
                            focusable="false"
                            style={{
                              height: "30px",
                              width: "30px",
                              display: "block",
                              fill: "currentcolor;",
                            }}
                          >
                            <path d="m22.5 2h-21c-.8271484 0-1.5.6728516-1.5 1.5v14c0 .8271484.6728516 1.5 1.5 1.5h8.5v3h-5.5c-.2763672 0-.5.2236328-.5.5s.2236328.5.5.5h15c.2763672 0 .5-.2236328.5-.5s-.2236328-.5-.5-.5h-5.5v-3h8.5c.8271484 0 1.5-.6728516 1.5-1.5v-14c0-.8271484-.6728516-1.5-1.5-1.5zm-21 1h21c.2753906 0 .5.2241211.5.5v11.5h-22v-11.5c0-.2758789.2241211-.5.5-.5zm11.5 19h-2v-3h2zm9.5-4h-21c-.2758789 0-.5-.2246094-.5-.5v-1.5h22v1.5c0 .2753906-.2246094.5-.5.5z"></path>
                          </svg>{" "}
                          <div className="d-flex ms-3 flex-column">
                            <span>Session</span>
                            <span className="text-dark">
                              September 9, 2023 at 01:32
                            </span>
                          </div>
                        </div>

                        <div>
                          <a
                            href="#"
                            className="loginLink text-decoration-none  fw-semibold"
                          >
                            <h6>Log out device</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="loginRight loginRightLogin border  p-4 ">
                    <div className="pb-2">
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                        style={{
                          height: "40px",
                          width: "40px",
                          display: "block",
                          fill: "rgb(255, 180, 0)",
                        }}
                      >
                        <path d="m5 20.5a.5.5 0 0 1 -.5.5h-.5v.5a.5.5 0 0 1 -1 0v-.5h-.5a.5.5 0 0 1 0-1h .5v-.5a.5.5 0 0 1 1 0v .5h.5a.5.5 0 0 1 .5.5zm1.5 1.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm16-20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-2.58 4.87a13.41 13.41 0 0 1 -6.76-3.2.37.37 0 0 0 -.63.26l.08 16.22a.38.38 0 0 0 .55.32 11.98 11.98 0 0 0 7.07-13.31.37.37 0 0 0 -.31-.3z"></path>
                        <path
                          d="m14.39 8.32a1.93 1.93 0 0 0 -3.66 0l-2.42 4.85a3.09 3.09 0 0 0 -.4 1.61 2.36 2.36 0 0 0 2.23 2.23 3.95 3.95 0 0 0 2.42-1.06 3.95 3.95 0 0 0 2.42 1.06 2.36 2.36 0 0 0 2.23-2.23 3.09 3.09 0 0 0 -.4-1.61zm-2.72 4.38c0-.05.01-1.23.89-1.23s.88 1.18.88 1.23a3.25 3.25 0 0 1 -.88 1.83 3.25 3.25 0 0 1 -.89-1.83zm3.31 3.31a2.92 2.92 0 0 1 -1.71-.77 4.3 4.3 0 0 0 1.17-2.54 2.02 2.02 0 0 0 -1.8-2.22l-.08-.01a2.02 2.02 0 0 0 -1.89 2.15l.01.08a4.29 4.29 0 0 0 1.17 2.54 2.92 2.92 0 0 1 -1.71.77 1.36 1.36 0 0 1 -1.23-1.23 2.13 2.13 0 0 1 .29-1.16l2.42-4.85c.33-.65.55-.76.94-.76s.61.11.94.76l2.42 4.85a2.13 2.13 0 0 1 .29 1.16 1.36 1.36 0 0 1 -1.23 1.23zm7.01-10.35a.5.5 0 0 0 -.43-.4 13.03 13.03 0 0 1 -8.68-4.57.52.52 0 0 0 -.77 0 13.03 13.03 0 0 1 -8.68 4.57.5.5 0 0 0 -.43.4c-1.58 8.19 1.55 14.02 9.3 17.31a.5.5 0 0 0 .39 0c7.75-3.29 10.87-9.11 9.3-17.31zm-9.49 16.3c-7.1-3.09-9.91-8.25-8.57-15.76a13.98 13.98 0 0 0 8.57-4.43 13.98 13.98 0 0 0 8.57 4.43c1.33 7.51-1.48 12.67-8.57 15.76z"
                          fill="#484848"
                        ></path>
                      </svg>
                      <h5 className="fw-bold mt-2">
                        Let&apos;s make your account more secure
                      </h5>
                      <h6 className="fw-bold mt-2">
                        <span>Your account security:</span>
                        <span className="text-secondary">Low</span>
                      </h6>
                      <p className="mt-4 ">
                        We&apos;re always working on ways to increase safety in
                        our community. That&apos;s why we look at every account
                        to make sure it&apos;s as secure as possible.
                      </p>
                    </div>
                    <div className="border-bottom w-25 mb-4"></div>
                    <button className="btn text-white improveBtn">
                      <h6 className="p-1">Improve</h6>
                    </button>
                  </div>
                </div>
                {/*  */}
                <div className=" mt-3  pb-4 border-bottom">
                  <h4 className="fw-bold mb-5">Account</h4>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Deactivate your account</span>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-danger loginLink text-decoration-none fw-normal"
                      >
                        Deactivate
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex loginbox justify-content-between  ">
                  <div className="loginLeft  d-flex flex-column mt-5">
                    <div className=" mt-3 pb-2 ">
                      <h4 className="fw-bold mb-5">Login requests</h4>
                      <p>
                        Team members may have to enter a verification code when
                        they log in to this account for the first time. Approve
                        or decline their login requests on this page.
                      </p>
                    </div>
                    <div className=" mt-3 pb-4 border-bottom">
                      <h5 className="fw-semibold mb-4">Pending requests</h5>
                    </div>
                    <div className=" mt-3 pb-4 border-bottom">
                      <h5 className="fw-semibold mb-4">Approved requests</h5>
                    </div>
                    <div className=" mt-3 pb-4 border-bottom">
                      <h5 className="fw-semibold mb-4">Satisfied requests</h5>
                    </div>
                    <div className=" mt-3 pb-4 border-bottom">
                      <h5 className="fw-semibold mb-4">Declined requests</h5>
                    </div>
                  </div>
                  <div className="loginRight loginRightLogin border  p-4 ">
                    <div className="pb-2">
                      <svg
                        viewBox="0 0 24 24"
                        role="presentation"
                        aria-hidden="true"
                        focusable="false"
                        style={{
                          height: "40px",
                          width: "40px",
                          display: "block",
                          fill: "rgb(255, 180, 0)",
                        }}
                      >
                        <path d="m5 20.5a.5.5 0 0 1 -.5.5h-.5v.5a.5.5 0 0 1 -1 0v-.5h-.5a.5.5 0 0 1 0-1h .5v-.5a.5.5 0 0 1 1 0v .5h.5a.5.5 0 0 1 .5.5zm1.5 1.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm16-20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-2.58 4.87a13.41 13.41 0 0 1 -6.76-3.2.37.37 0 0 0 -.63.26l.08 16.22a.38.38 0 0 0 .55.32 11.98 11.98 0 0 0 7.07-13.31.37.37 0 0 0 -.31-.3z"></path>
                        <path
                          d="m14.39 8.32a1.93 1.93 0 0 0 -3.66 0l-2.42 4.85a3.09 3.09 0 0 0 -.4 1.61 2.36 2.36 0 0 0 2.23 2.23 3.95 3.95 0 0 0 2.42-1.06 3.95 3.95 0 0 0 2.42 1.06 2.36 2.36 0 0 0 2.23-2.23 3.09 3.09 0 0 0 -.4-1.61zm-2.72 4.38c0-.05.01-1.23.89-1.23s.88 1.18.88 1.23a3.25 3.25 0 0 1 -.88 1.83 3.25 3.25 0 0 1 -.89-1.83zm3.31 3.31a2.92 2.92 0 0 1 -1.71-.77 4.3 4.3 0 0 0 1.17-2.54 2.02 2.02 0 0 0 -1.8-2.22l-.08-.01a2.02 2.02 0 0 0 -1.89 2.15l.01.08a4.29 4.29 0 0 0 1.17 2.54 2.92 2.92 0 0 1 -1.71.77 1.36 1.36 0 0 1 -1.23-1.23 2.13 2.13 0 0 1 .29-1.16l2.42-4.85c.33-.65.55-.76.94-.76s.61.11.94.76l2.42 4.85a2.13 2.13 0 0 1 .29 1.16 1.36 1.36 0 0 1 -1.23 1.23zm7.01-10.35a.5.5 0 0 0 -.43-.4 13.03 13.03 0 0 1 -8.68-4.57.52.52 0 0 0 -.77 0 13.03 13.03 0 0 1 -8.68 4.57.5.5 0 0 0 -.43.4c-1.58 8.19 1.55 14.02 9.3 17.31a.5.5 0 0 0 .39 0c7.75-3.29 10.87-9.11 9.3-17.31zm-9.49 16.3c-7.1-3.09-9.91-8.25-8.57-15.76a13.98 13.98 0 0 0 8.57-4.43 13.98 13.98 0 0 0 8.57 4.43c1.33 7.51-1.48 12.67-8.57 15.76z"
                          fill="#484848"
                        ></path>
                      </svg>
                      <h5 className="fw-bold mt-2">Keep your account secure</h5>
                      <p className="mt-4 ">
                        Only respond to requests from people you know. Hackers
                        might want to access your account by mimicking a team
                        member&apos;s email.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className="d-flex loginbox justify-content-between  ">
                  <div className="loginLeft  d-flex flex-column mt-5">
                    <div className=" mt-3 pb-2 ">
                      <h4 className="fw-bold mb-5">Shared access</h4>
                      <p>
                        Review each request carefully before approving access.
                        We’ll email your employee or co-worker a 4-digit code
                        that lets them log into your account with their trusted
                        device.
                      </p>
                    </div>
                  </div>
                  <div className="loginRight loginRightLogin border rounded-4 p-4 ">
                    <div className="pb-2">
                      <svg
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "48px",
                          width: "48px",
                          fill: "rgb(227, 28, 95)",
                          stroke: "currentcolor",
                        }}
                      >
                        <g>
                          <g stroke="none">
                            <path
                              d="M27 5l.585.005c4.29.076 8.837.984 13.645 2.737l.77.288V35.4l-.008.13a1 1 0 0 1-.47.724l-.116.06L27 42.716V25a1 1 0 0 0-.883-.993L26 24H12V8.029l.77-.286c4.797-1.75 9.336-2.658 13.62-2.737L27 5z"
                              fillOpacity="0.2"
                            ></path>
                            <path d="M27 1c5.599 0 11.518 1.275 17.755 3.816a2 2 0 0 1 1.239 1.691L46 6.67V35.4a5 5 0 0 1-2.764 4.472l-.205.097-15.594 6.93L27 47l-2.461-1h2.451a.01.01 0 0 0 .007-.003L27 45.99v-1.085l15.218-6.763a3 3 0 0 0 1.757-2.351l.019-.194.006-.196V6.669l-.692-.278C37.557 4.128 32.121 3 27 3S16.443 4.128 10.692 6.391L10 6.67 9.999 24H8V6.669a2 2 0 0 1 1.098-1.786l.147-.067C15.483 2.275 21.401 1 27 1z"></path>
                          </g>
                          <g fill="none" strokeWidth="2">
                            <path d="M4 24h22a1 1 0 0 1 1 1v20.99a.01.01 0 0 1-.01.01H4a1 1 0 0 1-1-1V25a1 1 0 0 1 1-1z"></path>
                            <path d="M21 25v-5a6 6 0 1 0-12 0v5"></path>
                            <circle cx="15" cy="35" r="2"></circle>
                          </g>
                        </g>
                      </svg>
                      <h6 className="fw-bold mt-2">
                        Adding devices from people you trust
                      </h6>
                      <p className="mt-4 ">
                        When you approve a request, you grant someone full
                        access to your account. They’ll be able to change
                        reservations and send messages on your behalf.
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

export default LoginAndSecurity;
