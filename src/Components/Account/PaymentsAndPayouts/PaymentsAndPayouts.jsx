import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./PaymentsAndPayouts.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import { useState } from "react";

function PaymentsAndPayouts() {
  return (
    <>
      <div className="paymentAndPayout d-flex flex-column justify-content-center container-lg p-5 ">
        <div className="payment text-decoration-none">
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
                Payments & payouts
              </a>
            </p>
          </div>
          <h2 className="fw-bold">Payments & payouts</h2>
        </div>
        <div className="w-100 mt-4">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            {/* <Row> */}
            {/* <Col sm={3}> */}
            <div className="payLeft">
              <div className="titles border-bottom">
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="me-4 border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        Payments
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        Payouts
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
                  <div className="payLeft  d-flex flex-column mt-5">
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-bold ">Your payments</h4>
                      <p> Keep track of all your payments and refunds.</p>
                      <button className="btn btn-dark text-white mt-3">
                        <h6 className="p-1 ">Manage payments</h6>
                      </button>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-bold ">Payment methods</h4>
                      <p className="text-secondary">
                        Add a payment method using our secure payment system,
                        then start planning your next trip.
                      </p>
                      <button className="btn btn-dark text-white mt-3">
                        <h6 className="p-1 ">Add payments method</h6>
                      </button>
                    </div>
                    <div className=" mt-5 pb-5 ">
                      <h4 className="fw-bold ">Airbnb gift credit</h4>
                      <button className="btn btn-dark text-white mt-2">
                        <h6 className="p-1 ">Add gift card</h6>
                      </button>
                    </div>
                    <div className=" mt-5 pb-5 ">
                      <h4 className="fw-bold border-bottom pb-3">Coupons</h4>
                      <div className="d-flex justify-content-between py-3 border-bottom mb-3">
                        <div>
                          <p>Your coupons</p>
                        </div>
                        <div>
                          <p>0</p>
                        </div>
                      </div>
                      <button className="btn btn-dark text-white mt-2">
                        <h6 className="p-1 ">Add coupon</h6>
                      </button>
                    </div>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
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
                          stroke: "currentcolor;",
                        }}
                      >
                        <g>
                          <g stroke="none">
                            <path
                              d="m41.999 10v24h-4.287l1.01-.6546823c.242375-.158375.3706719-.3933125.3998895-.6646172l.0064994-.1183828c.004513-1.4230639-2.4648559-3.6737529-5.4115565-1.9238459l-.1928324.1198459-5.278 3.2416823-2.2539866.0005578c.1712874-1.0118843-.1666572-1.9090959-.8837185-1.9909612l-.1084949-.0060789-19.0018-.0005177.001-22.003z"
                              fillOpacity=".2"
                            ></path>
                            <path d="m44 6c1.0543618 0 1.9181651.81587779 1.9945143 1.85073766l.0054857.14926234v28c0 1.0543618-.8158778 1.9181651-1.8507377 1.9945143l-.1492623.0054857h-12.446l3.079-2h9.367v-28h-40v24.0033177c-.51283584 0-.93550716.3860402-.99327227.8833788l-.00672773.1166212-.00007248 4.729076c-.55177975-.3192182-.93689844-.8944853-.9928825-1.5633277l-.00704502-.169066v-28c0-1.0543618.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm-20 9c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm-15-5c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1-1-.4477153-1-1 .44771525-1 1-1z"></path>
                          </g>
                          <g fill="none" strokeWidth="2">
                            <path d="m24.9998 32.0035177c1.3716282 0 1.5099129 2.8120004-.3683588 4.2183752l8.8925588-5.4635752c3.031-1.968 5.609.35 5.6043889 1.804-.0013889.321-.1293889.602-.4063889.783l-17.2344901 11.1920163c-.947203.6151103-2.110299.8011277-3.2021.5121216l-14.54130246-3.8491683c-.43862489-.1161066-.74410744-.5129735-.74410744-.9667052v-7.2302644c0-.5522848.44771525-1 1-1z"></path>
                            <path d="m13.9998 37.0035177h8.051c1.2682235 0 2.2021119-.4127594 2.8457108-1.0010914"></path>
                          </g>
                        </g>
                      </svg>
                      <h6 className="fw-semibold mt-2">
                        Make all payments through Airbnb
                      </h6>
                      <p className="mt-2 ">
                        <span className="text-secondary">
                          Always pay and communicate through Airbnb to ensure
                          you're protected under our
                        </span>
                        <span>
                          <a href="# " className="text-dark">
                            Terms of Service, Payments Terms of Service
                          </a>
                        </span>
                        <span className="text-secondary">
                          , cancellation, and other safeguards
                        </span>
                        <span>
                          <a href="#" className=" text-black">
                            Learn more
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-5">
                    <div className=" mt-5 pb-5 ">
                      <h4 className="fw-bold ">How you’ll get paid</h4>
                      <p>
                        Add at least one payout method so we know where to send
                        your money.
                      </p>
                      <button className="btn btn-dark text-white mt-2">
                        <h6 className="p-1 ">Set up payments</h6>
                      </button>
                    </div>
                  </div>
                  <div className="payRight payRightpay border rounded-4 p-4 ">
                    <div className="pb-2">
                      <h5 className="fw-bold mt-2">Need help?</h5>
                      <div className="d-flex justify-content-between my-3">
                        <div>
                          <span>
                            <a href="#" className="text-dark ">
                              When you'll get your payout
                            </a>
                          </span>
                        </div>
                        <div>
                          <a href="#" className="text-dark ">
                            <IoIosArrowForward size={"20px"} />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between my-3">
                        <div>
                          <span>
                            <a href="#" className="text-dark ">
                              How payouts work
                            </a>
                          </span>
                        </div>
                        <div>
                          <a href="#" className="text-dark ">
                            <IoIosArrowForward size={"20px"} />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          <span>
                            <a href="#" className="text-dark ">
                              Go to your transaction history
                            </a>
                          </span>
                        </div>
                        <div>
                          <a href="#" className="text-dark ">
                            <IoIosArrowForward size={"20px"} />
                          </a>
                        </div>
                      </div>
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

export default PaymentsAndPayouts;
