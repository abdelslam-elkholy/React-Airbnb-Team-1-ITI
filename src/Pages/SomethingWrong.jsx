import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function SomethingWrong() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);
  return (
    <>
      <div className="w-100 h-80  my-5 text-center bg-slate-400  d-flex align-items-center flex-column justify-content-center">
        <h1 className="mb-5">Ooops .....Something Wrong</h1>
        <p>Something went wrong .... redirecting to home page</p>
        <div>
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="danger" />
        </div>
      </div>
    </>
  );
}
