import React from "react";
import "./RateAndComment.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FcHome } from "react-icons/fc";
import { TbHomeOff } from "react-icons/tb";

const RateAndComment = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="rate d-flex mb-3">
          <AiFillStar className="star" color="yellow" size={"25px"} />
          <AiFillStar className="star" color="yellow" size={"25px"} />
          <AiOutlineStar className="star" color="yellow" size={"25px"} />
          <AiOutlineStar className="star" color="yellow" size={"25px"} />
          <AiOutlineStar className="star" color="yellow" size={"25px"} />
        </div>
        <div className="comment">
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            className="border h-20 w-75"
            placeholder="Comment"
          ></textarea>
        </div>
        <div className="btn btn-secondary fw-medium rounded-1 px-4 py-2">
          Finish
        </div>
      </div>
    </>
  );
};

export default RateAndComment;
