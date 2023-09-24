import React, { useState } from "react";
import PaymentStyleInfo from "../../Components/Reservation/Payment_Style_Info/PaymentStyleInfo";
import { Link, useNavigate } from "react-router-dom";
import PaymentForm from "../../Components/Reservation/Payment_Form/PaymentForm";
import { FaCcVisa, FaGooglePay, FaPaypal } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import "./PaymentHome.css";
import Footer from "../../Components/Reservation/Footer/Footer";

const PaymentHome = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case "credit":
        navigate("/Credit");
        break;
      case "paypal":
        navigate("PayPal");
        break;
      case "googlepay":
        navigate("GooglePay");
        break;
      default:
        break;
    }
  };
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container-fluid">
      <div className="">
        <div className="head">
          <h1>
            {" "}
            <Link to={"PaymentHome.jsx"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </Link>{" "}
            <span className="mx-2">Request to book</span>
          </h1>
        </div>

        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 mx-4">
            <div>
              <h3>Your trip</h3>
            </div>
            <div className="d-flex align-items-center flex-column my-3 mx-auto border-bottom">
              <div className="d-flex  w-100 flex-column my-2">
                <div className="d-flex align-items-center justify-content-between w-100 ">
                  <span className="bold">Dates</span>
                  <div>
                    <a className=" text-dark">Edit</a>
                  </div>
                </div>
                <span>Sep 14 – 19</span>
              </div>
              <div className="d-flex  w-100 flex-column my-4">
                <div className=" d-flex align-items-center  justify-content-between w-100">
                  <span className="bold">Guests</span>
                  <a className="text-dark" onClick={() => setModalShow(true)}>
                    Edit
                  </a>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>

                <span>1 guest</span>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-between ">
                <h3>Pay with</h3>
                <div className="d-flex align-items-center img_payment">
                  <img
                    className="img__small"
                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                    alt=""
                  />
                  <img
                    className="img__small"
                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg"
                    alt=""
                  />
                  <img
                    className="img__small"
                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                    alt=""
                  />
                  <img
                    className="img__small"
                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_discover.7f05c82f07d62a0f8a69d54dbcd7c8be.svg"
                    alt=""
                  />
                  <img
                    className="img__small"
                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg"
                    alt=""
                  />
                  <img
                    className="img__small"
                    src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="my-3">
                <Form.Select
                  className="shadow-none"
                  size="lg"
                  style={{ padding: "17px 5px" }}
                  onChange={handleSelectChange}
                >
                  <option value="credit">
                    <FaCcVisa style={{ color: "red" }} /> Credit or debit card
                  </option>
                  <option value="paypal">
                    <Link to="/PayPal">
                      <FaPaypal /> PayPal
                    </Link>
                  </option>
                  <option value="googlepay">
                    <Link to="/GooglePay">
                      <FaGooglePay /> Google Pay
                    </Link>
                  </option>
                </Form.Select>
              </div>
            </div>
            <div className="">
              <PaymentForm />
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 fixed_form">
            <PaymentStyleInfo />{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <span className="Close_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: "20px",
            width: "20px",
            stroke: "currentcolor",
            strokeWidth: 3,
            overflow: "visible",
          }}
        >
          <path d="m6 6 20 20M26 6 6 26"></path>
        </svg>
      </span>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center justify-content-between">
        <button
          onClick={props.onHide}
          className="text-dark bg-white pointer "
          style={{ fontSize: "18px", border: "none " }}
        >
          <a className="text-dark " href="">
            Cancle
          </a>
        </button>
        <Button
          onClick={props.onHide}
          className="text-white bg-dark py-2 pointer px-4"
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PaymentHome;
