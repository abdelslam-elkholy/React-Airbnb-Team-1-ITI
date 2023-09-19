import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import { ButtonBase } from '@mui/material';

// mui icons
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// 3rd party
import SwipeableViews from 'react-swipeable-views';

// react icons
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import {
  flexBetween,
  dFlex,
  carouselDot,
  fixedIcon,
  carouselImage,
  fixedBottom,
} from '../../Themes/commonStyles';
import './CarouselCard.css';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';


export default function CarouselCard({ location }) {


  

    const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = location.locationImages.length; // so that we know how many dots

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
      };
    
      const handleStepChange = (step) => {
        setActiveStep(step); // handle swipe change
      };

  return (
    <>
  
    <Box
      className="carouselCard"
      sx={{
        mx:1.5,
        my:3.5,
        flexGrow: 1,
        position: 'relative',
      }}
    >
      
      <Box sx={fixedIcon} >
        <FaRegHeart size={24} color="#fff"  />
      </Box>

      {location.locationImages.length && (
        <SwipeableViews 
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => {
            return (
              <div  key={step.id}>
                <Box
                  component="img"
                  sx={carouselImage}
                  src={step.url}
                  alt={step.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}

      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: 'transparent' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <ButtonBase
            style={{marginBottom: '7.5rem',backgroundColor:'white',color:'gray',opacity:(activeStep === maxSteps - 1 )?"0":"1",padding:3}}
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
            style={{marginBottom: '7.5rem',backgroundColor:'white',color:'gray',opacity:(activeStep === 0 )?"0":"1",padding:3}}
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

      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography style={{fontWeight:"bold"}} component="h3"> {location.location}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography style={{fontWeight:"bold"}} component="h5"> {location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
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
          </Box>
        </Box>
      </Box>
    </Box>

    </>
  );
}
