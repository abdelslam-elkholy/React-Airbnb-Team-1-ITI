import React, { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Joi from "joi";
import Cookies from "js-cookie";
import "./Login.css";

// import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
const Login = ({ showLogin, onCloseLogin }) => {
  const [user, setUser] = useState({
    email: "",

    password: "",
  });

  const [Errors, setErros] = useState([]);

  const [ListErrors, setListErrors] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [UserData, setUserData] = useState({});

  const navogator = useNavigate();
  const getuserData = useSelector((state) => state.x);
  console.log(getuserData);
  const dispatch = useDispatch();

  // ========= api ========

  async function HandelApi() {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/signin",
        user
      );
      const userData = response.data.data.user;

      console.log(response.data.data.user);
      localStorage.setItem("DATA", userData);
      const token = response.data.token;
      if (response.data.status === "success") {
        setIsLoading(false);
        // Save the token in a cookie
        Cookies.set("authToken", token, { expires: 1 });
        setUserData(userData);

        navogator("/home");
        // window.location.reload();
      } else {
        setIsLoading(false);
        // dispatch(actions.loginUserFail());
        setErros(response.data.message);
      }
    } catch (error) {
      setIsLoading(false);

      setErros(error);

      console.error("Error:", error);
    }
  }
  // let i = localStorage.getItem("DATA");
  // console.log(JSON.stringify(i));
  // dispatch(getuserData(UserData))
  // ================= git data from token by decode it ==============
  //  function getTokenData(){
  //   const authToken= Cookies.get("authToken")
  //   // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGExMjEyYzVmYzZiNTcyYTYyNjllOSIsImlhdCI6MTY5NTgyMDcyMiwiZXhwIjoxNjk3NTQ4NzIyfQ.UCSwWLyGkh_IHomIRAZr9GH8-XkCZC0fLZuFcHnK0Xk"
  //   const decodToken= jwt_decode(authToken)
  //   return decodToken
  //  }
  // useEffect(()=>{
  //   const decodedToken =getTokenData()
  //   if( decodedToken){
  //     console.log(decodedToken);
  //   }
  // },[])

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

  return (
    <div>
      <Modal show={showLogin} onHide={onCloseLogin}>
        <div style={{ overflowY: "auto", height: "80vh", overflowX: "hidden" }}>
          <div className="d-flex align-items-center justify-content-between mt-2 row ">
            <span
              className="mx-3  span_Modal_register fw-bold col-4 mt-2 d-flex align-items-center justify-content-center"
              onClick={onCloseLogin}
            >
              X
            </span>
            <h6 className="col-8 mt-2 fw-bold">log in</h6>
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
                    ListErrors.filter(
                      (err) => err.context.label == "password"
                    )[0]?.message
                  }
                </div>
              ) : (
                ""
              )}

              {/* ========= handel error */}

              <div className="form-group">
                <button
                  type="submit"
                  className="w-100 my-3 py-3 btn btn-danger"
                >
                  {isLoading == true ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    "Agree And Supmit"
                  )}
                </button>
              </div>
            </form>
            <div className="my-2  or_icon">
              <span className="or_icon_or">or</span>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button
              className="log_facebook d-flex align-items-center justify-content-around  w-100 mx-2 py-3 rounded  btn btn-outline-light my-3"
              style={{ border: "1px solid #000" }}
            >
              <i className="fab fa-facebook  fs-2 text-primary"></i>
              <span className="mx-3 text-dark">Contiue withe facebook</span>
            </button>
            <button
              className="log_facebook d-flex align-items-center justify-content-around  w-100 mx-2 py-3 rounded text-dark btn btn-outline-light my-3"
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
              <span className="mx-3 text-dark">Contiue withe Google</span>
            </button>
            <button
              className="log_facebook d-flex align-items-center justify-content-around  w-100 mx-2 py-3 rounded text-dark btn btn-outline-light my-3"
              style={{ border: "1px solid #000" }}
            >
              <i className="fa-brands fa-apple fs-2 text-dark"></i>
              <span className="mx-3 text-dark">Contiue withe Apple</span>
            </button>
            <button
              className="log_facebook d-flex align-items-center justify-content-around  w-100 mx-2 py-3 rounded text-dark btn btn-outline-light my-3"
              style={{ border: "1px solid #000" }}
            >
              <i className="fa-regular fa-envelope fs-2 "></i>

              <span className="mx-3 text-dark">Contiue withe Email</span>
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
