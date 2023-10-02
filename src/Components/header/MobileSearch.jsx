import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FaSearch } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonBase } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./OptionsTab.css";
import Checkbox from "@mui/material/Checkbox";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function MobileSearch() {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 52,
    height: 32,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#222",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 27,
      height: 27,
    },
    "& .MuiSwitch-track": {
      borderRadius: 50 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#222",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 320,
          border: "1px solid #ccc",
          borderRadius: 20,
        }}
      >
        <IconButton sx={{ p: "10px" }}>
          <FaSearch />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
        <IconButton sx={{ p: "10px" }} onClick={handleClickOpen}>
          <VscSettings />
        </IconButton>
      </Paper>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          sx={{ mx: "auto", p: 2, fontSize: 16, fontWeight: 700 }}
          id="customized-dialog-title"
        >
          Filters
        </DialogTitle>
        <DialogContent dividers>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <div className=" p-2">
                  <h4 className="m-0 py-3">Type of place</h4>
                  <p className="text-secondary">
                    Search rooms, entire homes, or any type of place.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="btn-group  mx-auto">
                      <a
                        href="#"
                        className="btn btn-outline-dark px-5 py-3 active"
                        aria-current="page"
                      >
                        Any type
                      </a>
                      <a href="#" className="btn btn-outline-dark px-5 py-3">
                        Room
                      </a>
                      <a href="#" className="btn btn-outline-dark px-5 py-3">
                        Entire home
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-top p-2">
                  <h4 className="m-0 py-3">Price range</h4>
                  <p className="text-secondary">
                    The average nightly price is $244
                  </p>
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-5 py-3 d-flex justify-content-center align-items-center">
                      <div className="input-group">
                        <input
                          type="text"
                          className="p-1 border form-control"
                          placeholder="$min price"
                          aria-label="Amount (to the nearest dollar)"
                        />
                      </div>
                    </div>
                    <div
                      className=" d-flex justify-content-center align-items-center"
                      style={{ width: "1%" }}
                    >
                      <span>–</span>
                    </div>
                    <div className="col-5 py-3 d-flex justify-content-center align-items-center">
                      <div className="input-group ">
                        <input
                          type="text"
                          className="p-1 border form-control "
                          placeholder="$max price"
                          id="floatingInputValue"
                          aria-label="Amount (to the nearest dollar)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top p-2">
                  <h4 className="m-0 py-3">Type of place</h4>
                  <div className="row">
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />{" "}
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Entire place
                      </label>
                      <p className="ps-4 lh-sm">
                        <small className="text-secondary">
                          A place all to yourself
                        </small>
                      </p>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        Room
                      </label>
                      <p className="ps-4 lh-sm">
                        <small className="text-secondary">
                          Your own room, plus access to shared spaces
                        </small>
                      </p>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />{" "}
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        Shared room
                      </label>
                      <p className="ps-4 lh-sm">
                        <small className="text-secondary">
                          A sleeping space and common areas that may be shared
                          with others
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-top p-2">
                  <h4 className="m-0 py-3">Rooms and beds</h4>
                  <p className="m-0 py-3">Bedrooms</p>
                  <p className="d-flex flex-wrap gap-1">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 active px-4"
                      data-bs-toggle="button"
                    >
                      Any
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      3
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      5
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      6
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      7
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      8+
                    </button>
                  </p>
                  <p className="m-0 py-3">Any</p>
                  <p className="d-flex flex-wrap gap-1">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 active px-4"
                      data-bs-toggle="button"
                    >
                      Any
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      3
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      5
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      6
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      7
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      8+
                    </button>
                  </p>
                  <p className="m-0 py-3">Bathrooms</p>
                  <p className="d-flex flex-wrap gap-1">
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 active px-4"
                      data-bs-toggle="button"
                    >
                      Any
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      3
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      5
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      6
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      7
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-dark rounded-pill ms-2 px-4"
                      data-bs-toggle="button"
                    >
                      8+
                    </button>
                  </p>
                </div>
                <div className="border-top p-2">
                  <h4 className="m-0 py-3">Property type</h4>
                  <p className="d-inline-flex gap-1 w-100">
                    <div className="row flex-wrap w-100">
                      <div className="col-lg-3 col-6 ">
                        <button
                          type="button"
                          className="btn btn-outline-dark rounded  p-3  text-start border-dark-subtle w-100 filterProprty"
                          data-bs-toggle="button"
                        >
                          <div className="d-flex flex-column justify-content-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              className="bi bi-house-door mb-4"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                            </svg>
                            <h6>House</h6>
                          </div>
                        </button>
                      </div>
                      <div className="col-lg-3 col-6">
                        <button
                          type="button"
                          className="btn btn-outline-dark rounded  p-3 col-3 border-dark-subtle text-start w-100 filterProprty"
                          data-bs-toggle="button"
                          aria-pressed="true"
                        >
                          <div className="d-flex flex-column justify-content-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              className="bi bi-buildings-fill mb-4"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z" />
                            </svg>
                            <h6>Apartment</h6>
                          </div>
                        </button>
                      </div>
                      <div className="col-lg-3 col-6">
                        <button
                          type="button"
                          className="btn btn-outline-dark rounded  p-3 col-3 border-dark-subtle text-start w-100 filterProprty"
                          data-bs-toggle="button"
                        >
                          <div className="d-flex flex-column justify-content-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              className="bi bi-house-exclamation mb-4"
                              viewBox="0 0 16 16"
                            >
                              <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                              <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                            </svg>
                            <h6>Guesthouse</h6>
                          </div>
                        </button>
                      </div>
                      <div className="col-lg-3 col-6">
                        <button
                          type="button"
                          className="btn btn-outline-dark rounded  p-3 col-3 border-dark-subtle text-start w-100 filterProprty"
                          data-bs-toggle="button"
                        >
                          <div className="d-flex flex-column justify-content-between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="currentColor"
                              className="bi bi-building mb-4"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                            </svg>
                            <h6>Hotel</h6>
                          </div>
                        </button>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="border-top p-2">
                  <h4 className="m-0 py-3">Accessibility features</h4>
                  <h6 className="m-0 py-3">Guest entrance and parking</h6>
                  <div className="row">
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        Step-free guest entrance
                      </label>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        Accessible parking spot
                      </label>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        Guest entrance wider than 32 inches
                      </label>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        Step-free path to the guest entrance
                      </label>
                    </div>
                    <div className="col-12 py-3">
                      <button type="button" className="btn btn-link text-black">
                        <h6 className="m-0">Show more</h6>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-top p-2">
                  <h4 className="m-0 py-3">Top tier stays</h4>
                  <div className="row">
                    <div className="col-12 py-3">
                      <div className="row">
                        <div className="col-6 ps-3">
                          <p className=" lh-sm  m-0">Superhost</p>
                          <p className=" lh-sm m-0 text-secondary">
                            Stay with recognized Hosts
                          </p>
                          <button
                            type="button"
                            className="btn btn-link text-black ps-0 pt-0"
                          >
                            <p className="m-0">Learn more</p>
                          </button>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                          <div className="form-check form-switch d-flex justify-content-end align-items-center pe-3">
                            <FormControlLabel
                              control={
                                <IOSSwitch sx={{ m: 0 }} defaultChecked />
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 py-3">
                      <div className="row">
                        <div className="col-6 ps-3">
                          <p className=" lh-sm  m-0">Airbnb Plus</p>
                          <p className=" lh-sm m-0 text-secondary">
                            Every Plus home is reviewed for quality
                          </p>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                          <div className="form-check form-switch d-flex justify-content-end align-items-center pe-3">
                            <FormControlLabel
                              control={
                                <IOSSwitch sx={{ m: 0 }} defaultChecked />
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-top p-2">
                  <h4 className="m-0 py-3">Host language</h4>
                  <div className="row">
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />{" "}
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        English
                      </label>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />{" "}
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        French
                      </label>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />{" "}
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        German
                      </label>
                    </div>
                    <div className="col-6 py-3">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          color: "#222",
                          "&.Mui-checked": { color: "#222" },
                        }}
                      />{" "}
                      <label
                        className="form-check-label "
                        for="flexCheckDefault"
                      >
                        Japanese
                      </label>
                    </div>
                    <div className="col-12 py-3">
                      <button type="button" className="btn btn-link text-black">
                        <h6 className="m-0">Show more</h6>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="justify-content-between px-3">
          <ButtonBase
            type="button"
            className="btn btn-link text-black"
            autoFocus
            onClick={handleClose}
          >
            <h6 className="m-0">Clear all</h6>
          </ButtonBase>
          <ButtonBase
            type="button "
            className="btn btn-dark btn-lg"
            data-bs-dismiss="modal"
            onClick={handleClose}
          >
            <h6 className="m-0">Show</h6>
          </ButtonBase>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
