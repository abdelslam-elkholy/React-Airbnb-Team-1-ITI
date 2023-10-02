import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Joi from "joi";
import Cookies from "js-cookie";
import "./Login.css";
import { useUser } from "../../Context/UserContext";
import instance from "../../AxiosConfig/instance";

const Login = ({ showLogin, onCloseLogin }) => {
  const { setUser } = useUser();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [Errors, setErrors] = useState([]);
  const [ListErrors, setListErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function HandelApi() {
    try {
      const response = await instance.post("/users/signin", userData);
      setIsLoading(false);

      Cookies.set("token", response.data.token, { expires: 7 });
      onCloseLogin();

      setUser(response.data.user);
      window.location.reload();
    } catch (error) {
      setIsLoading(false);
      setErrors(error.response.data.message);
    }
  }

  function HandelFormSubmit(e) {
    e.preventDefault();

    const validate = validateLoginForm();

    if (validate.error) {
      setIsLoading(false);

      setListErrors(validate.error.details);
    } else {
      setIsLoading(true);

      HandelApi();
    }
  }

  function HandelUserInputs(ev) {
    let myUser = { ...userData };

    myUser[ev.target.name] = ev.target.value;

    setUserData(myUser);
  }

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

    return schema.validate(userData, { abortEarly: false });
  }

  return (
    <div>
      <Modal show={showLogin} onHide={onCloseLogin}>
        <div>
          <div className="d-flex align-items-center mt-2 justify-content-between m-2 row p-2 border-bottom">
            <span
              className="mx-2  span_Modal_register align-items-center fw-bold col-4 d-flex  justify-content-center"
              onClick={onCloseLogin}
            >
              X
            </span>
            <h6 className="col-7 px-4 align-items-center fw-bold">Log in</h6>
          </div>

          <Modal.Body>
            <form onSubmit={HandelFormSubmit}>
              <div className="form-group">
                <h4 className="fw-semibold">Welcome to Airbnb</h4>
                <input
                  onChange={HandelUserInputs}
                  className="form-control mt-4 mb-2 border-none p-3"
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
                  className="form-control mb-4  border-none p-3"
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
                    ListErrors.filter(
                      (err) => err.context.label == "password"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}
              {Errors && <div className="  text-danger  my-1 ">{Errors}</div>}
              {/* ========= handel error */}

              <div className="form-group">
                <button
                  type="submit"
                  className="w-100 my-3 py-3 btn btn-danger AgreeAndSubmit t1dqvypu dir dir-ltr"
                >
                  {isLoading == true ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>
            <div className="_k3vzc58">
              <div className="_16fq9mb">or</div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button
              className="log_facebook d-flex align-items-center justify-content-between container p-2  w-100 mx-2 rounded  btn btn-outline-light "
              style={{ border: "1px solid #000" }}
            >
              <i className="fab fa-facebook  fs-2 text-primary"></i>
              <span className="mx-3 text-dark col-10">
                Contiue withe facebook
              </span>
            </button>
            <button
              className="log_facebook d-flex align-items-center justify-content-around  w-100 mx-2 container p-2 rounded text-dark btn btn-outline-light my-2"
              style={{ border: "1px solid #000" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <span className="mx-3 text-dark col-10">
                Contiue withe Google
              </span>
            </button>
            <button
              className="log_facebook d-flex align-items-center justify-content-around  w-100 mx-2 container p-2 rounded text-dark btn btn-outline-light my-2"
              style={{ border: "1px solid #000" }}
            >
              <i className="fa-brands fa-apple fs-2 text-dark"></i>
              <span className="mx-3 text-dark col-10">Contiue withe Apple</span>
            </button>
            <button
              className="log_facebook d-flex align-items-center justify-content-around  w-100 mx-2 container p-2  rounded text-dark btn btn-outline-light my-2"
              style={{ border: "1px solid #000" }}
            >
              <i className="fa-regular fa-envelope fs-2 "></i>

              <span className="mx-3 text-dark col-10">Contiue withe Email</span>
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
