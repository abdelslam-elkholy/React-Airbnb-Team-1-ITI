import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Notifications.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import { useState } from "react";
import Form from "react-bootstrap/Form";

function Notifications() {
  return (
    <>
      <div className="texes d-flex flex-column justify-content-center container-lg p-5 ">
        <div className="taxe text-decoration-none">
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
                Notifications
              </a>
            </p>
          </div>
          <h2 className="fw-bold">Notifications</h2>
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
                        Offers and updates
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        Account
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
                      <h4 className="fw-semibold ">Travel tips and offers</h4>
                      <p className=" text-secondary">
                        Inspire your next trip with personalized recommendations
                        and special offers.
                      </p>
                      <p className="mb-1">Inspiration and offers</p>
                      <p className="text-secondary mb-2">On: Email</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
                        </a>
                      </p>
                      <p className="mb-1">Trip planning</p>
                      <p className="text-secondary mb-2">On: Email</p>
                      <p className="border-bottom pb-4">
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
                        </a>
                      </p>
                    </div>
                    <div className=" pb-4 border-bottom">
                      <h4 className="fw-semibold ">Airbnb updates</h4>
                      <p className=" text-secondary">
                        Stay up to date on the latest news from Airbnb, and let
                        us know how we can improve.
                      </p>
                      <p className="mb-1">News and programs</p>
                      <p className="text-secondary mb-2">On: Email</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
                        </a>
                      </p>
                      <p className="mb-1">Feedback</p>
                      <p className="text-secondary mb-2">On: Email</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
                        </a>
                      </p>
                      <p className="mb-1">Travel regulations</p>
                      <p className="text-secondary mb-2">On: Email</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
                        </a>
                      </p>
                    </div>
                    <div className=" mt-4 pb-4 ">
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`default-${type}`} className="mb-3 ">
                            <Form.Check // prettier-ignore
                              type={type}
                              id={`default-${type}`}
                              label={`Unsubscribe from all marketing emails`}
                              className="h5 fw-normal"
                            />
                          </div>
                        ))}
                      </Form>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-4">
                    <div className=" pb-4 ">
                      <h4 className="fw-semibold ">
                        Account activity and policies
                      </h4>
                      <p className=" text-secondary">
                        Confirm your booking and account activity, and learn
                        about important Airbnb policies.
                      </p>
                      <p className="mb-1">Account activity</p>
                      <p className="text-secondary mb-2">On: Email and SMS</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
                        </a>
                      </p>
                      <p className="mb-1">Guest policies</p>
                      <p className="text-secondary mb-2">On: Email and SMS</p>
                      <p className="border-bottom pb-4">
                        <a href="#" className="text-dark fw-semibold ">
                          Edit
                        </a>
                      </p>
                    </div>
                    <div className=" pb-4 border-bottom ">
                      <h4 className="fw-semibold">Reminders</h4>
                      <p className=" text-secondary">
                        Get important reminders about your reservations,
                        listings, and account activity.
                      </p>
                      <p className="mb-1">Reminders</p>
                      <p className="text-secondary mb-2">On: Email and SMS</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
                        </a>
                      </p>
                    </div>
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-semibold mt-2">
                        Guest and Host messages
                      </h4>
                      <p className=" text-secondary">
                        Keep in touch with your Host or guests before and during
                        your trip.
                      </p>
                      <p className="mb-1">Messages</p>
                      <p className="text-secondary mb-2">On: Email and SMS</p>
                      <p>
                        <a href="#" className="text-dark fw-semibold mb-4">
                          Edit
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

export default Notifications;
