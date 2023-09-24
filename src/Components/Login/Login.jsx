import React, { useState } from "react";

import { Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Joi from "joi";

import "./Login.css";

const Login = ({ showLpog, onCloselogin }) => {
  const [user, setUser] = useState({
    email: "",

    password: "",
  });

  const [Errors, setErros] = useState([]);

  const [ListErrors, setListErrors] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const navogator = useNavigate();

  const [userData, setUserData] = useState([]);

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  // const handleShow = () => setShow(true);

  // ========= api ========

  async function HandelApi() {
    try {
      const response = await axios.post(
        "http://localhost:3000/userd/signin",
        user
      );

      if (response.data.status === "success") {
        setIsLoading(false);

        navogator("/");
      } else {
        setIsLoading(false);

        setErros(response.data.message);
      }
    } catch (error) {
      setIsLoading(false);

      setErros(error);

      console.error("Error:", error);
    }
  }

  // async function HandelApito() {

  //     try {

  //       const  response= await axios.get("http://localhost:3000/user");

  //       console.log(response);

  //       setUserData(response.data.data)

  //     } catch (error) {

  //       setIsLoading(false);

  //       console.error("Error:", error);

  //     }

  //   }

  console.log(userData);

  // ============ handel form submitations ============

  function HandelFormSubmit(e) {
    e.preventDefault();

    const validate = validateLoginForm();

    if (validate.error) {
      setIsLoading(false);

      setListErrors(validate.error.details);
    } else {
      setIsLoading(true);

      HandelApi();

      //   HandelApito()
    }
  }

  // =========== handel user inputs ===========

  function HandelUserInputs(ev) {
    let myUser = { ...user };

    // NewUser[e.target.name] =e.taeget.value

    // setUser(NewUser)

    myUser[ev.target.name] = ev.target.value;

    setUser(myUser);

    console.log(user);
  }

  // ========== validate Login Form ======

  function validateLoginForm() {
    const schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "org", "gov"] },
        })
        .required(),

      password: Joi.string().required().min(8),
    });

    return schema.validate(user, { abortEarly: false });
  }

  console.log(Errors);

  return (
    <div>
      <span
        className="btn "
        style={{ border: "1px solid #444" }}
        onClick={showLpog}
      >
        login
      </span>

      <Modal show={showLpog} onHide={onCloselogin}>
        {/* <Modal.Header closeButton>

     

        </Modal.Header> */}

        <div className="d-flex align-items-center justify-content-between mt-2  ">
          <span
            className="mx-2  span_Modal_Login fw-bold  mt-2 d-flex align-items-center justify-content-center"
            onClick={onCloselogin}
          >
            X
          </span>

          <h6 className="col-8 mt-2 fw-bold">Login</h6>
        </div>

        <Modal.Body>
          <form onSubmit={HandelFormSubmit}>
            <div className="form-group">
              <input
                onChange={HandelUserInputs}
                className="form-control my-4  border-none p-3"
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </div>

            {/* ========= handel error */}

            {ListErrors.filter((err) => err.context.label == "email")[0]
              ?.message ? (
              <div className="  text-danger  my-1 ">
                {
                  ListErrors.filter((err) => err.context.label == "email")[0]
                    ?.message
                }
              </div>
            ) : (
              ""
            )}

            {/* ========= handel error */}

            <div className="form-group">
              <input
                onChange={HandelUserInputs}
                className="form-control my-4  border-none p-3"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>

            {/* ========= handel error */}

            {ListErrors.filter((err) => err.context.label == "password")[0]
              ?.message ? (
              <div className="  text-danger  my-1 ">
                {
                  ListErrors.filter((err) => err.context.label == "password")[0]
                    ?.message
                }
              </div>
            ) : (
              ""
            )}

            {/* ========= handel error */}

            <div className="form-group">
              <button type="submit" className="w-100 my-3 py-3 btn btn-danger">
                {isLoading == true ? (
                  <i className="fa fa-spinner fa-spin"></i>
                ) : (
                  "Agree And Supmit"
                )}
              </button>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
