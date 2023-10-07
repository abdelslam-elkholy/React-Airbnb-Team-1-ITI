import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Joi from "joi";
import "./Register.css";
import instance from "../../AxiosConfig/instance";
const Register = ({ showRegister, onCloseRegister }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [Errors, setErros] = useState("");
  const [ListErrors, setListErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navogator = useNavigate();
  const [userData, setUserData] = useState([]);

  // ========= api ========
  async function HandelApi() {
    try {
      const response = await instance.post("/users/signup", user);

      console.log(response);
      setIsLoading(false);
      Cookies.set("token", response.data.token, { expires: 7 });
      onCloseRegister();
      window.location.reload();
    } catch (error) {
      setIsLoading(false);
      setErros(error.response.data.message);
    }
  }

  console.log(userData);
  // ============ handel form submitations ============
  function HandelFormSubmit(e) {
    e.preventDefault();
    const validate = validateRegisterForm();
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
  // ========== validate Register Form ======
  function validateRegisterForm() {
    const schema = Joi.object({
      name: Joi.string().min(2).max(40).required().trim(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "org", "gov"] },
        })
        .required(),
      password: Joi.string().required().min(8),
      confirmPassword: Joi.string().required().min(8),
    });
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <div>
      <Modal show={showRegister} onHide={onCloseRegister}>
        {/* <Modal.Header closeButton>
      
        </Modal.Header> */}
        <div className="d-flex align-items-center mt-2 justify-content-between m-2 row p-2 w-100 border-bottom">
          <span
            className="mx-2  span_Modal_register align-items-center fw-bold col-4 d-flex  justify-content-center"
            onClick={onCloseRegister}
          >
            X
          </span>
          <h6 className="col-7 px-4 align-items-center fw-bold">Sign up</h6>
        </div>
        <Modal.Body>
          <form onSubmit={HandelFormSubmit}>
            {/* <div className="alert alert-danger">{Errors}</div> */}
            <div className="form-group">
              {/* <label htmlFor=""></label> */}
              <input
                onChange={HandelUserInputs}
                className="form-control mt-4 mb-2 border-none p-3 nameinput"
                type="text"
                name="name"
                placeholder="Enter name"
              />
            </div>
            {/* ========= handel name error */}
            {ListErrors.filter((err) => err.context.label == "name")[0]
              ?.message ? (
              <div className=" text-danger  my-1 ">
                {
                  ListErrors.filter((err) => err.context.label == "name")[0]
                    ?.message
                }
              </div>
            ) : (
              ""
            )}
            {/* ========= handel name error */}
            <div className="form-group">
              <input
                onChange={HandelUserInputs}
                className="form-control mt-4 mb-2 border-none p-3 p-3"
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
                className="form-control mt-4 mb-2 border-none p-3 p-3"
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
              <input
                onChange={HandelUserInputs}
                className="form-control mt-4 mb-2 border-none p-3 p-3"
                type="password"
                name="confirmPassword"
                placeholder="Enter confirmPassword"
              />
            </div>
            {/* ========= handel error */}
            {ListErrors.filter(
              (err) => err.context.label == "confirmPassword"
            )[0]?.message ? (
              <div className="  text-danger  my-1 ">
                {
                  ListErrors.filter(
                    (err) => err.context.label == "confirmPassword"
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
