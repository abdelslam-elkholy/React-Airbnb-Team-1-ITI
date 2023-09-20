import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Taxes.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import { useState } from "react";

function Taxes() {
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
                Taxes
              </a>
            </p>
          </div>
          <h2 className="fw-bold">Taxes</h2>
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
                        Taxpayers
                      </h6>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className=" border-0 payBtn">
                      <h6 className="fw-medium payTitles p-2 rounded-3">
                        Tax documents
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
                      <h4 className="fw-semibold ">Taxpayer information</h4>
                      <p className="m-0">
                        Tax info is required for most countries/regions.
                      </p>
                      <p>
                        <a href="#" className="text-dark fw-semibold ">
                          Learn more
                        </a>
                      </p>
                      <button className="btn btn-dark text-white mt-3">
                        <h6 className="p-1 ">Add tax info</h6>
                      </button>
                    </div>
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-semibold ">Value Added Tax (VAT)</h4>
                      <p className="m-0">
                        If you are VAT-registered, please add your VAT ID.
                      </p>
                      <p>
                        <a href="#" className="text-dark fw-semibold ">
                          Learn more
                        </a>
                      </p>
                      <button className="btn btn-dark text-white mt-3">
                        <h6 className="p-1 ">Add VAT ID Number</h6>
                      </button>
                    </div>
                    <div className=" mt-3 pb-4 ">
                      <h4 className="fw-semibold ">Need help?</h4>
                      <span className="m-0">
                        Get answers to questions about taxes in our &nbsp;
                        <a href="#" className="text-dark fw-semibold ">
                          Help Center
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="d-flex paybox justify-content-between  ">
                  <div className="payLeft  d-flex flex-column mt-5">
                    <div className=" mt-3 pb-5 border-bottom">
                      <p>
                        Tax documents required for filing taxes are available to
                        review and download here.
                      </p>
                      <p>
                        You can also file taxes using detailed earnings info,
                        available in the &nbsp;
                        <a href="#" className="text-dark fw-semibold ">
                          earnings summary.
                        </a>
                      </p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2022</h4>
                      <p className="text-secondary">No tax document issued</p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2021</h4>
                      <p className="text-secondary">No tax document issued</p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2020</h4>
                      <p className="text-secondary">No tax document issued</p>
                    </div>
                    <div className=" mt-5 pb-5 border-bottom">
                      <h4 className="fw-semibold">2019</h4>
                      <p className="text-secondary">No tax document issued</p>
                    </div>
                    <div className=" mt-5 pb-5">
                      <p className="pb-5">
                        For tax documents issued prior to 2019,&nbsp;
                        <a href="#" className="text-dark fw-semibold">
                          contact us.
                        </a>
                      </p>
                      <h4 className="fw-semibold">Need help?</h4>
                      <p>
                        Get answers to questions about taxes in our&nbsp;
                        <a href="#" className="text-dark fw-semibold">
                          Help Center.
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

export default Taxes;
