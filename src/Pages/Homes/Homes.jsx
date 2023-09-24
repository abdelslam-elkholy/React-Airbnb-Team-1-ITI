import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import "./Homes.css";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Homes = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const NightCost = 84.037;
  const handleSliderChange = (event, value) => {
    setSliderValue(value);
  };

  const earnings = (NightCost * sliderValue).toLocaleString();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container my-5">
      <div className="row ">
        <div className="col-lg-5 mt-5  col-md-12 col-sm-12">
          <div className="d-flex align-items-center justify-content-center flex-column ">
            <p style={{ fontSize: "50px" }} className="text-danger fw-bold ">
              Airband it.
            </p>
            <div>
              <span
                className="fw-bold"
                style={{ fontSize: "50px", color: "#444" }}
              >
                You could earn
              </span>
            </div>
            <div>
              <span className="fw-bold" style={{ fontSize: "70px" }}>
                ${earnings} CLP
              </span>
            </div>
            <div>
              <p style={{ fontSize: "20px", color: "#444" }}>
                <a href="#" className="fw-bold text-dark">
                  {sliderValue}night
                </a>{" "}
                at an estimated $84,037 CLP a night
              </p>
            </div>

            <div className="mx-2 mt-4">
              <Box sx={{ width: 450 }}>
                <Slider
                  defaultValue={1}
                  min={1}
                  aria-label="Price per night"
                  max={30}
                  style={{
                    color: "#000",
                    width: "100%",
                    transition: "all 0.7s ease",
                    borderRadius: "50%",
                  }}
                  valueLabelDisplay="auto"
                  value={sliderValue}
                  onChange={handleSliderChange}
                  color="secondary"
                />
              </Box>
            </div>
            <div className="">
              <a href="#" style={{ fontSize: "15px", color: "#444" }}>
                Learn how we estimate your earnings
              </a>
            </div>
          </div>
          <div className="my-3 mx-5">
            <div
              className="search_bar_user_place py-3 px-1 row border bg-outline-light "
              onClick={handleOpen}
            >
              <div className="col-2 mx-1">
                <SearchIcon style={{ color: "#e61e4d " }} />
              </div>
              <div className="col-9  d-flex  flex-column felx-start">
                <div className="fw-bold">Cairo</div>
                <div className="" style={{ color: "#444 " }}>
                  Entire Place -bedrooms
                </div>
              </div>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="keep-mounted-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Text in a modal
                    <span onClick={handleClose}>x</span>
                  </Typography>
                  <Typography
                    id="keep-mounted-modal-description"
                    sx={{ mt: 2 }}
                  >
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula.
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div
            id="map-container-google-1"
            className="z-depth-1-half map-container"
            style={{ height: " 100%", width: "100%" }}
          >
            <iframe
              className="rounded"
              src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              style={{ border: "0", width: "100%", height: "50em" }}
              allowFullScreen
            ></iframe>
          </div>
          "
        </div>
      </div>
      <div className="" style={{ margin: "110px auto" }}>
        <div className="my-2 d-flex align-items-lg-center">
          <span className="fw-bold mx-auto " style={{ fontSize: "50px" }}>
            Airbnb it easily with Airbnb Setup
          </span>
        </div>
        <div className="my-5">
          <img
            src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="my-4 row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <span className="fw-bold " style={{ fontSize: "18px" }}>
              {" "}
              One-to-one guidance from a Superhost
            </span>
            <p className="my-3">
              We’ll match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest—by phone, video call,
              or chat.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <span className="fw-bold " style={{ fontSize: "18px" }}>
              {" "}
              An experienced guest for your first booking
            </span>
            <p className="my-3">
              For your first booking, you can choose to welcome an experienced
              guest who has at least three stays and a good track record on
              Airbnb.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <span className="fw-bold " style={{ fontSize: "18px" }}>
              {" "}
              Specialized support from Airbnbt
            </span>
            <p className="my-3">
              New Hosts get one-tap access to specially trained Community
              Support agents who can help with everything from account issues to
              billing support.
            </p>
          </div>
        </div>
      </div>
      <div className="my-5 w-75 mx-auto">
        <div className="my-3 mx-auto" style={{ width: "200px" }}>
          <img
            className="img-fluid "
            src="https://a0.muscache.com/im/pictures/5318dacc-6476-4195-8dd2-b9a66fa2efbb.jpg?im_w=480&im_q=highq"
            alt=""
          />
        </div>
        <div className="my-3 d-flex align-items-center">
          <span className="fw-bold mx-auto " style={{ fontSize: "40px" }}>
            Airbnb it with top‑to‑bottom protection
          </span>
        </div>
        <div className="row my-4 border-bottom">
          <div className="col-8 my-2"></div>
          <div className="col-4 d-flex my-2">
            <span className="mx-2" style={{ fontSize: "25px" }}>
              Airbnb
            </span>
            <span className="mx-2" style={{ fontSize: "25px" }}>
              Competitors
            </span>
          </div>
        </div>
        <div className=" my-4 border-bottom">
          <div className="row">
            <div className="col-8">
              <div className="my-2">
                <h5>Guest identity verification</h5>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <div className="w-50 d-flex ">
                <span className=" mx-2 text-success fw-bold">
                  <CheckIcon style={{ fontSize: "40px" }} />
                </span>
                <span className=" mx-2 text-success fw-bold">
                  <CheckIcon
                    style={{ marginLeft: "100px", fontSize: "40px" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-6 col-md-12 colsm-12 my-2">
              <p>
                Our comprehensive verification system checks details such as
                name, address, government ID and more to confirm the identity of
                guests who book on Airbnb.
              </p>
            </div>
          </div>
        </div>
        <div className=" my-4 border-bottom">
          <div className="row">
            <div className="col-8">
              <div className="my-2">
                <h5>Guest identity verification</h5>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <div className="w-50 d-flex ">
                <span className=" mx-2 text-success fw-bold">
                  <CheckIcon style={{ fontSize: "40px" }} />
                </span>
                <span className=" mx-2 text-success fw-bold">
                  <CheckIcon
                    style={{ marginLeft: "100px", fontSize: "40px" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-6 col-md-12 colsm-12 my-2">
              <p>
                Our comprehensive verification system checks details such as
                name, address, government ID and more to confirm the identity of
                guests who book on Airbnb.
              </p>
            </div>
          </div>
        </div>
        <div className=" my-4 border-bottom">
          <div className="row">
            <div className="col-8">
              <div className="my-2">
                <h5>Guest identity verification</h5>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <div className="w-50 d-flex ">
                <span className=" mx-2 text-success fw-bold">
                  <CheckIcon style={{ fontSize: "40px" }} />
                </span>
                <span className=" mx-2 text-success fw-bold">
                  <CheckIcon
                    style={{ marginLeft: "100px", fontSize: "40px" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-6 col-md-12 colsm-12 my-2">
              <p>
                Our comprehensive verification system checks details such as
                name, address, government ID and more to confirm the identity of
                guests who book on Airbnb.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
