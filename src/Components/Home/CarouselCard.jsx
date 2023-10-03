import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import instance from "../../AxiosConfig/instance";
import { ButtonBase } from "@mui/material";

// mui icons
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// 3rd party
import SwipeableViews from "react-swipeable-views";

// react icons
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from "../../Themes/commonStyles";
import "./CarouselCard.css";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWishlist,
  addWishlist,
  deleteWishlist,
} from "../../Store/slices/wishlist";

export default function CarouselCard({ location, wishlist }) {
  const dispatch = useDispatch();

  const isInWishlist = wishlist.some((item) =>
    item ? item._id === location._id : false
  );

  const toggleItem = (id) => {
    isInWishlist ? dispatch(deleteWishlist(id)) : dispatch(addWishlist(id));
  };

  // const deleteFromWishlist = (id) => {
  //   dispatch(deleteWishlist(id));
  //   setIsInWishlist(!isInWishlist);
  // };

  // useEffect(() => {
  //   dispatch(fetchWishlist());
  //   setIsInWishlist(wishlist.some((item) => item._id === location._id));
  //   console.log("wishlist", wishlist);
  // }, [isInWishlist]);

  // useEffect(() => {}, []);

  // console.log("isInWishlist", isInWishlist, Date.now() / 1000 / 60 / 60 / 24);
  // console.log(wishlist);

  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const maxSteps = location.images.length; // so that we know how many dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step) => {
    setActiveStep(step); // handle swipe change
  };

  const navigateToDetails = (id) => {
    navigate(`/homedetails/${id}`);
  };

  return (
    <>
      <Box
        className="carouselCard"
        sx={{
          mx: 1.5,
          my: 3.5,
          flexGrow: 1,
          position: "relative",
        }}
      >
        <Box sx={fixedIcon}>
          {isInWishlist ? (
            <AiFillHeart
              size={24}
              color="#FF0000"
              fill="#FF0000"
              onClick={() => toggleItem(location._id)}
            />
          ) : (
            <FaRegHeart
              size={24}
              color="#fff"
              onClick={() => toggleItem(location._id)}
            />
          )}
        </Box>

        {location.images.length && (
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {location.images.map((image, index) => {
              return (
                <div key={index}>
                  <Box
                    component="img"
                    sx={carouselImage}
                    src={`http://localhost:3000/img/houses/${image}`}
                    alt={image}
                  ></Box>
                </div>
              );
            })}
          </SwipeableViews>
        )}

        <Box sx={fixedBottom}>
          <MobileStepper
            sx={{ backgroundColor: "transparent" }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <ButtonBase
                style={{
                  marginBottom: "7.5rem",
                  backgroundColor: "white",
                  color: "gray",
                  opacity: activeStep === maxSteps - 1 ? "0" : "1",
                  padding: 3,
                }}
                size="small"
                sx={carouselDot}
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <KeyboardArrowRight />
              </ButtonBase>
            }
            backButton={
              <ButtonBase
                style={{
                  marginBottom: "7.5rem",
                  backgroundColor: "white",
                  color: "gray",
                  opacity: activeStep === 0 ? "0" : "1",
                  padding: 3,
                }}
                size="small"
                sx={carouselDot}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
              </ButtonBase>
            }
          />
        </Box>

        <Box sx={flexBetween} onClick={() => navigateToDetails(location._id)}>
          <Box sx={{ mt: 2 }}>
            <Typography style={{ fontWeight: "bold" }} component="h3">
              {" "}
              {location.name}
            </Typography>
            <Typography component="h4"> {location.days}</Typography>
            <Typography component="h4"> {location.days}</Typography>
            <Typography style={{ fontWeight: "bold" }} component="h5">
              {" "}
              {location.price}
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            {/* <Box sx={dFlex}>
              {location.isNew ? (
                <React.Fragment>
                  <Typography component="h5">New</Typography>
                  <AiFillStar size={18} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography component="h5"> {location.rating}</Typography>
                  <AiFillStar size={18} />
                </React.Fragment>
              )}
            </Box> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
