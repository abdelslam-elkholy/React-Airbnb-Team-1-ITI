import React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
// react icons
import { FaFilter } from 'react-icons/fa';
import { locationsTab } from './data/mock-data';
import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import './OptionsTab.css';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function OptionsTabs() {

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 52,
    height: 32,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#222',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 27,
      height: 27,
    },
    '& .MuiSwitch-track': {
      borderRadius: 50 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#222',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
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
  const [FiltersAnyTypeBTN, setFiltersAnyTypeBTN] = React.useState(true);
  const [FiltersRoomBTN, setFiltersRoomBTN] = React.useState(false);
  const [FiltersEntireHomeBTN, setFiltersEntireHomeBTN] = React.useState(false);

  const FilterByTypeOfPlace = (CurrentOption) => {
      if (CurrentOption == 'AnyType') {
        setFiltersAnyTypeBTN(true);
        setFiltersRoomBTN(false);
        setFiltersEntireHomeBTN(false)
      } else if (CurrentOption == 'Room') {
        setFiltersAnyTypeBTN(false);
        setFiltersRoomBTN(true);
        setFiltersEntireHomeBTN(false)
      } else if (CurrentOption == 'EntireHome') {
        setFiltersAnyTypeBTN(false);
        setFiltersRoomBTN(false);
        setFiltersEntireHomeBTN(true)
      }
  };
  const [FiltersBedroomsAny, setFiltersBedroomsBTNAny] = React.useState(true);
  const [FiltersBedrooms1, setFiltersBedroomsBTN1] = React.useState(false);
  const [FiltersBedrooms2, setFiltersBedroomsBTN2] = React.useState(false);
  const [FiltersBedrooms3, setFiltersBedroomsBTN3] = React.useState(false);
  const [FiltersBedrooms4, setFiltersBedroomsBTN4] = React.useState(false);
  const [FiltersBedrooms5, setFiltersBedroomsBTN5] = React.useState(false);
  const [FiltersBedrooms6, setFiltersBedroomsBTN6] = React.useState(false);
  const [FiltersBedrooms7, setFiltersBedroomsBTN7] = React.useState(false);
  const [FiltersBedrooms8, setFiltersBedroomsBTN8] = React.useState(false);


  const FilterByRoomsAndBeds = (CurrentOption) => {
      if (CurrentOption == 'Any') {
        setFiltersBedroomsBTNAny(true)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 1) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(true)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 2) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(true)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 3) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(true)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 4) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(true)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 5) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(true)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 6) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(true)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 7) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(true)
        setFiltersBedroomsBTN8(false)
      }
      else if (CurrentOption == 8) {
        setFiltersBedroomsBTNAny(false)
        setFiltersBedroomsBTN1(false)
        setFiltersBedroomsBTN2(false)
        setFiltersBedroomsBTN3(false)
        setFiltersBedroomsBTN4(false)
        setFiltersBedroomsBTN5(false)
        setFiltersBedroomsBTN6(false)
        setFiltersBedroomsBTN7(false)
        setFiltersBedroomsBTN8(true)
      }
  };
  const [FiltersBedsNumAny, setFiltersBedsNumAny] = React.useState(true);
  const [FiltersBedsNum1, setFiltersBedsNum1] = React.useState(false);
  const [FiltersBedsNum2, setFiltersBedsNum2] = React.useState(false);
  const [FiltersBedsNum3, setFiltersBedsNum3] = React.useState(false);
  const [FiltersBedsNum4, setFiltersBedsNum4] = React.useState(false);
  const [FiltersBedsNum5, setFiltersBedsNum5] = React.useState(false);
  const [FiltersBedsNum6, setFiltersBedsNum6] = React.useState(false);
  const [FiltersBedsNum7, setFiltersBedsNum7] = React.useState(false);
  const [FiltersBedsNum8, setFiltersBedsNum8] = React.useState(false);


  const FilterByBeds = (CurrentOption) => {
      if (CurrentOption == 'Any') {
        setFiltersBedsNumAny(true)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 1) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(true)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 2) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(true)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 3) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(true)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 4) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(true)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 5) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(true)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 6) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(true)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 7) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(true)
        setFiltersBedsNum8(false)
      }
      else if (CurrentOption == 8) {
        setFiltersBedsNumAny(false)
        setFiltersBedsNum1(false)
        setFiltersBedsNum2(false)
        setFiltersBedsNum3(false)
        setFiltersBedsNum4(false)
        setFiltersBedsNum5(false)
        setFiltersBedsNum6(false)
        setFiltersBedsNum7(false)
        setFiltersBedsNum8(true)
      }
  };
  const [FiltersBathroomsAny, setFiltersBathroomsBTNAny] = React.useState(true);
  const [FiltersBathrooms1, setFiltersBathroomsBTN1] = React.useState(false);
  const [FiltersBathrooms2, setFiltersBathroomsBTN2] = React.useState(false);
  const [FiltersBathrooms3, setFiltersBathroomsBTN3] = React.useState(false);
  const [FiltersBathrooms4, setFiltersBathroomsBTN4] = React.useState(false);
  const [FiltersBathrooms5, setFiltersBathroomsBTN5] = React.useState(false);
  const [FiltersBathrooms6, setFiltersBathroomsBTN6] = React.useState(false);
  const [FiltersBathrooms7, setFiltersBathroomsBTN7] = React.useState(false);
  const [FiltersBathrooms8, setFiltersBathroomsBTN8] = React.useState(false);


  const FilterByBathRooms = (CurrentOption) => {
      if (CurrentOption == 'Any') {
        setFiltersBathroomsBTNAny(true)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 1) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(true)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 2) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(true)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 3) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(true)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 4) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(true)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 5) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(true)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 6) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(true)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 7) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(true)
        setFiltersBathroomsBTN8(false)
      }
      else if (CurrentOption == 8) {
        setFiltersBathroomsBTNAny(false)
        setFiltersBathroomsBTN1(false)
        setFiltersBathroomsBTN2(false)
        setFiltersBathroomsBTN3(false)
        setFiltersBathroomsBTN4(false)
        setFiltersBathroomsBTN5(false)
        setFiltersBathroomsBTN6(false)
        setFiltersBathroomsBTN7(false)
        setFiltersBathroomsBTN8(true)
      }
  };
  const [FiltersPropertyTypeHouse, setFiltersPropertyTypeHouse] = React.useState(false);
  const [FiltersPropertyTypeApartment, setFiltersPropertyTypeApartment] = React.useState(false);
  const [FiltersPropertyTypeGuesthouse, setFiltersPropertyTypeGuesthouse] = React.useState(false);
  const [FiltersPropertyTypeHotel, setFiltersPropertyTypeHotel] = React.useState(false);
  const FilterByPropertyType = (CurrentOption) => {
    if (CurrentOption == 'House') {
      setFiltersPropertyTypeHouse(!FiltersPropertyTypeHouse)
      setFiltersPropertyTypeApartment(false)
      setFiltersPropertyTypeGuesthouse(false)
      setFiltersPropertyTypeHotel(false)

    }
    else if (CurrentOption == 'Apartment') {
      setFiltersPropertyTypeHouse(false)
      setFiltersPropertyTypeApartment(!FiltersPropertyTypeApartment)
      setFiltersPropertyTypeGuesthouse(false)
      setFiltersPropertyTypeHotel(false)

    }
    else if (CurrentOption == 'Guesthouse') {
      setFiltersPropertyTypeHouse(false)
      setFiltersPropertyTypeApartment(false)
      setFiltersPropertyTypeGuesthouse(!FiltersPropertyTypeGuesthouse)
      setFiltersPropertyTypeHotel(false)

    }
    else if (CurrentOption == 'Hotel') {
      setFiltersPropertyTypeHouse(false)
      setFiltersPropertyTypeApartment(false)
      setFiltersPropertyTypeGuesthouse(false)
      setFiltersPropertyTypeHotel(!FiltersPropertyTypeHotel)

    }
   
};

  return (
    <Container maxWidth="xl" className='shadow-sm'>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: 'center',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
        >
          {locationsTab.map((tab) => {
            return <Tab sx={{ fontSize: 12 }} key={tab.id} icon={tab.icon} label={tab.label} />;
          })}
        </Tabs>
        <ButtonBase
          sx={{
            display: { xs: 'none', md: 'block' },
            border: '1px solid #ddd',
            minWidth: 90,
            justifyContent: 'space-between',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
          }}
          variant="outlined" onClick={handleClickOpen}
        >
          {/* <FaFilter /> */}
          Filters
        </ButtonBase>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]

            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle sx={{ mx: "auto", p: 2, fontSize: 16, fontWeight: 700 }} id="customized-dialog-title" >
            Filters
          </DialogTitle>
          <DialogContent dividers >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-body">
                  <div class=" p-2">
                    <h4 class="m-0 py-3">Type of place</h4>
                    <p class="text-secondary">Search rooms, entire homes, or any type of place.</p>
                    <div className='d-flex justify-content-center'>
                      <div class="btn-group  mx-auto">
                        <a href="#" onClick={()=>{FilterByTypeOfPlace('AnyType')}} class={` ${FiltersAnyTypeBTN ? 'active' : ''} btn btn-outline-dark px-5 py-3 `} aria-current="page">Any type</a>
                        <a href="#" onClick={()=>{FilterByTypeOfPlace('Room')}} class={` ${FiltersRoomBTN ? 'active' : ''} btn btn-outline-dark px-5 py-3 `}>Room</a>
                        <a href="#" onClick={()=>{FilterByTypeOfPlace('EntireHome')}} class={` ${FiltersEntireHomeBTN ? 'active' : ''} btn btn-outline-dark px-5 py-3 `}>Entire home</a>
                      </div>
                    </div>
                  </div>
                  <div class="border-top p-2">
                    <h4 class="m-0 py-3">Price range</h4>
                    <p class="text-secondary">The average nightly price is $244</p>
                    <div class="row d-flex justify-content-center align-items-center">
                      <div class="col-5 py-3 d-flex justify-content-center align-items-center">
                        <div class="input-group">
                          <input type="text" class=" p-1 border form-control" placeholder="$min price"
                            aria-label="Amount (to the nearest dollar)" />
                        </div>
                      </div>
                      <div class=" d-flex justify-content-center align-items-center" style={{ width: "1%" }}><span>–</span></div>
                      <div class="col-5 py-3 d-flex justify-content-center align-items-center">
                        <div class="input-group ">
                          <input type="text" class="p-1 border form-control " placeholder="$max price" id="floatingInputValue"
                            aria-label="Amount (to the nearest dollar)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-top p-2">
                    <h4 class="m-0 py-3">Type of place</h4>
                    <div class="row">
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        /> 
                        <label class="form-check-label " for="inlineCheckbox1">
                          Entire place
                        </label>
                        <p class="ps-4 lh-sm">
                          <small class="text-secondary">
                            A place all to yourself
                          </small>
                        </p>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox 
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />

                        <label class="form-check-label " for="flexCheckDefault">
                          Room
                        </label>
                        <p class="ps-4 lh-sm">
                          <small class="text-secondary">
                            Your own room, plus access to shared spaces
                          </small>
                        </p>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />                <label class="form-check-label " for="flexCheckDefault">
                          Shared room
                        </label>
                        <p class="ps-4 lh-sm">
                          <small class="text-secondary">
                            A sleeping space and common areas that may be shared with
                            others
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="border-top p-2">
                    <h4 class="m-0 py-3">Rooms and beds</h4>
                    <p class="m-0 py-3">Bedrooms</p>
                    <p class="d-flex flex-wrap gap-1">
                      <button type="button"  onClick={()=>{FilterByRoomsAndBeds('Any')}} class={` ${FiltersBedroomsAny ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        Any
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(1)}} class={` ${FiltersBedrooms1 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button"
                        aria-pressed="true">
                        1
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(2)}} class={` ${FiltersBedrooms2 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        2
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(3)}} class={` ${FiltersBedrooms3 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        3
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(4)}} class={` ${FiltersBedrooms4 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        4
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(5)}} class={` ${FiltersBedrooms5 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        5
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(6)}} class={` ${FiltersBedrooms6 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        6
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(7)}} class={` ${FiltersBedrooms7 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        7
                      </button>
                      <button type="button" onClick={()=>{FilterByRoomsAndBeds(8)}} class={` ${FiltersBedrooms8 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        8+
                      </button>
                    </p>
                    <p class="m-0 py-3">Beds</p>
                    <p class="d-flex flex-wrap gap-1">
                    <button type="button"  onClick={()=>{FilterByBeds('Any')}} class={` ${FiltersBedsNumAny ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        Any
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(1)}} class={` ${FiltersBedsNum1 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button"
                        aria-pressed="true">
                        1
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(2)}} class={` ${FiltersBedsNum2 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        2
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(3)}} class={` ${FiltersBedsNum3 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        3
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(4)}} class={` ${FiltersBedsNum4 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        4
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(5)}} class={` ${FiltersBedsNum5 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        5
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(6)}} class={` ${FiltersBedsNum6 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        6
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(7)}} class={` ${FiltersBedsNum7 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        7
                      </button>
                      <button type="button" onClick={()=>{FilterByBeds(8)}} class={` ${FiltersBedsNum8 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        8+
                      </button>
                    </p>
                    <p class="m-0 py-3">Bathrooms</p>
                    <p class="d-flex flex-wrap gap-1">
                    <button type="button"  onClick={()=>{FilterByBathRooms('Any')}} class={` ${FiltersBathroomsAny ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        Any
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(1)}} class={` ${FiltersBathrooms1 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button"
                        aria-pressed="true">
                        1
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(2)}} class={` ${FiltersBathrooms2 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        2
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(3)}} class={` ${FiltersBathrooms3 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        3
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(4)}} class={` ${FiltersBathrooms4 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        4
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(5)}} class={` ${FiltersBathrooms5 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        5
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(6)}} class={` ${FiltersBathrooms6 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        6
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(7)}} class={` ${FiltersBathrooms7 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        7
                      </button>
                      <button type="button" onClick={()=>{FilterByBathRooms(8)}} class={` ${FiltersBathrooms8 ? 'active' : ''} btn btn-outline-dark rounded-pill ms-2 px-4`} data-bs-toggle="button">
                        8+
                      </button>
                    </p>
                  </div>
                  <div class="border-top p-2">
                    <h4 class="m-0 py-3">Property type</h4>
                    <p class="d-inline-flex gap-1 w-100">
                      <div class="row flex-wrap w-100">
                        <div class="col-lg-3 col-6 ">
                          <button type="button" onClick={()=>{FilterByPropertyType('House')}} 
                            class={` ${FiltersPropertyTypeHouse ? 'active' : ''} btn btn-outline-dark rounded  p-3  text-start border-dark-subtle w-100 filterProprty`}
                            data-bs-toggle="button">
                            <div class="d-flex flex-column justify-content-between">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-house-door mb-4" viewBox="0 0 16 16">
                                <path
                                  d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                              </svg>
                              <h6>House</h6>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-6">
                          <button type="button" onClick={()=>{FilterByPropertyType('Apartment')}} 
                            class={` ${FiltersPropertyTypeApartment ? 'active' : ''} btn btn-outline-dark rounded  p-3 col-3 border-dark-subtle text-start w-100 filterProprty`}
                            data-bs-toggle="button" aria-pressed="true">
                            <div class="d-flex flex-column justify-content-between">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-buildings-fill mb-4" viewBox="0 0 16 16">
                                <path
                                  d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z" />
                              </svg>
                              <h6>Apartment</h6>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-6">
                          <button type="button" onClick={()=>{FilterByPropertyType('Guesthouse')}} 
                            class={` ${FiltersPropertyTypeGuesthouse ? 'active' : ''} btn btn-outline-dark rounded  p-3 col-3 border-dark-subtle text-start w-100 filterProprty`}
                            data-bs-toggle="button">
                            <div class="d-flex flex-column justify-content-between">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-house-exclamation mb-4" viewBox="0 0 16 16">
                                <path
                                  d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z" />
                                <path
                                  d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                              </svg>
                              <h6>Guesthouse</h6>
                            </div>
                          </button>
                        </div>
                        <div class="col-lg-3 col-6">
                          <button type="button"  onClick={()=>{FilterByPropertyType('Hotel')}} 
                            class={` ${FiltersPropertyTypeHotel ? 'active' : ''} btn btn-outline-dark rounded  p-3 col-3 border-dark-subtle text-start w-100 filterProprty`}
                            data-bs-toggle="button">
                            <div class="d-flex flex-column justify-content-between">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-building mb-4" viewBox="0 0 16 16">
                                <path
                                  d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                <path
                                  d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                              </svg>
                              <h6>Hotel</h6>
                            </div>
                          </button>
                        </div>
                      </div>
                    </p>
                  </div>
                  <div class="border-top p-2">
                    <h4 class="m-0 py-3">Accessibility features</h4>
                    <h6 class="m-0 py-3">Guest entrance and parking</h6>
                    <div class="row">
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />
                        <label class="form-check-label " for="flexCheckDefault">
                          Step-free guest entrance
                        </label>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />
                        <label class="form-check-label " for="flexCheckDefault">
                          Accessible parking spot
                        </label>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />
                        <label class="form-check-label " for="flexCheckDefault">
                          Guest entrance wider than 32 inches
                        </label>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />
                        <label class="form-check-label " for="flexCheckDefault">
                          Step-free path to the guest entrance
                        </label>
                      </div>
                      <div class="col-12 py-3">
                        <button type="button" class="btn btn-link text-black">
                          <h6 class="m-0">Show more</h6>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="border-top p-2">
                    <h4 class="m-0 py-3">Top tier stays</h4>
                    <div class="row">
                      <div class="col-12 py-3">
                        <div class="row">
                          <div class="col-6 ps-3">
                            <p class=" lh-sm  m-0">
                              Superhost
                            </p>
                            <p class=" lh-sm m-0 text-secondary">
                              Stay with recognized Hosts
                            </p>
                            <button type="button" class="btn btn-link text-black ps-0 pt-0">
                              <p class="m-0">Learn more</p>
                            </button>
                          </div>
                          <div class="col-6 d-flex align-items-center justify-content-end">
                            <div class="form-check form-switch d-flex justify-content-end align-items-center pe-3">
                              <FormControlLabel
                                control={<IOSSwitch sx={{ m: 0 }} defaultChecked />}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 py-3">
                        <div class="row">
                          <div class="col-6 ps-3">
                            <p class=" lh-sm  m-0">
                              Airbnb Plus
                            </p>
                            <p class=" lh-sm m-0 text-secondary">
                              Every Plus home is reviewed for quality
                            </p>
                          </div>
                          <div class="col-6 d-flex align-items-center justify-content-end">
                            <div class="form-check form-switch d-flex justify-content-end align-items-center pe-3">
                              <FormControlLabel
                                control={<IOSSwitch sx={{ m: 0 }} defaultChecked />}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-top p-2">
                    <h4 class="m-0 py-3">Host language</h4>
                    <div class="row">
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />                <label class="form-check-label" for="flexCheckDefault">
                          English
                        </label>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />                <label class="form-check-label" for="flexCheckDefault">
                          French
                        </label>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />                <label class="form-check-label" for="flexCheckDefault">
                          German
                        </label>
                      </div>
                      <div class="col-6 py-3">
                        <Checkbox
                          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#222', '&.Mui-checked': { color: '#222' } }}
                        />                <label class="form-check-label" for="flexCheckDefault">
                          Japanese
                        </label>
                      </div>
                      <div class="col-12 py-3">
                        <button type="button" class="btn btn-link text-black">
                          <h6 class="m-0">Show more</h6>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
          <DialogActions className='justify-content-between px-3'>

            <ButtonBase type="button" class="btn btn-link text-black" autoFocus onClick={handleClose}>
              <h6 class="m-0">Clear all</h6>
            </ButtonBase>
            <ButtonBase type="button " class="btn btn-dark btn-lg" data-bs-dismiss="modal" onClick={handleClose}>
              <h6 class="m-0">Show</h6>
            </ButtonBase>
          </DialogActions>
        </BootstrapDialog>
      </Box>

    </Container>
  );
}
