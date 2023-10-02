import React, { useState } from "react";
// import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// react icons
import { IoSearchCircleSharp } from "react-icons/io5";
import { pink } from "@mui/material/colors";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import Modal from "@mui/material/Modal";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { ButtonBase, Tab, Tabs } from "@mui/material";
import Container from "@mui/material/Container";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import "./LocationSearch.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LocationSearch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value2, setValue2] = React.useState([0]);

  const handleChange2 = (event, newValue) => {
    value2.push(newValue);
    setValue2(value2);
  };
  const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "dashed" },
            style: {
              textTransform: "none",
              border: `2px dashed`,
            },
          },
          {
            props: { variant: "dashed", color: "secondary" },
            style: {
              border: `4px dashed `,
            },
          },
        ],
      },
    },
  });
  const choices = [
    { id: 1, text: "Anywhere" },
    { id: 2, text: "Any week" },
    { id: 3, text: "Add guest", withIcon: true },
  ];
  const [isHiden, setIsHiden] = useState(false);
  const [isFlexible, setIsFlexible] = useState(false);
  const toggleSearchBar = () => {
    setIsHiden(!isHiden);
    console.log(isHiden);
  };
  const toggleDate = () => {
    setIsFlexible(!isFlexible);
    console.log(isFlexible);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const createHandleMenuClick = (menuItem) => {
  //     return () => {
  //         console.log(`Clicked on ${menuItem}`);
  //     };
  // };

  // const [modalDisplay, setModalDisplay] = useState('none');

  // const closeModal = () => {
  //     setModalDisplay('none');
  // };

  // const handleModalClick = (event) => {
  //     if (event.target === modalRef.current) {
  //         closeModal();
  //     }
  // };
  const [moveInOptionsSearchLocation, setmoveInOptionsSearchLocation] =
    React.useState(false);
  const [
    moveInOptionsSearchCheckInAndCheckOut,
    setmoveInOptionsSearcCheckInAndCheckOut,
  ] = React.useState(false);
  const [moveInOptionsSearchGuests, setmoveInOptionsSearchGuests] =
    React.useState(false);
  const moveInOptionsSearchTabsFunc = (CurrentTab) => {
    if (CurrentTab == "Location") {
      setmoveInOptionsSearchLocation(true);
      setmoveInOptionsSearchGuests(false);
      setmoveInOptionsSearcCheckInAndCheckOut(false);
      // handleOpen()
    } else if (CurrentTab == "CheckInAndCheckOut") {
      setmoveInOptionsSearchLocation(false);
      setmoveInOptionsSearchGuests(false);
      setmoveInOptionsSearcCheckInAndCheckOut(true);
    } else if (CurrentTab == "Guests") {
      setmoveInOptionsSearchLocation(false);
      setmoveInOptionsSearchGuests(true);
      setmoveInOptionsSearcCheckInAndCheckOut(false);
    }
  };
  const [FlexibleWeekendOption, setFlexibleWeekendOption] =
    React.useState(false);
  const [FlexibleWeekOption, setFlexibleWeekOption] = React.useState(false);
  const [FlexibleMonthOption, setFlexibleMonthOption] = React.useState(true);
  const moveInFlexibleOptions = (CurrentFlexibleOption) => {
    if (CurrentFlexibleOption == "Month") {
      setFlexibleWeekendOption(false);
      setFlexibleWeekOption(false);
      setFlexibleMonthOption(true);
    } else if (CurrentFlexibleOption == "Week") {
      setFlexibleWeekendOption(false);
      setFlexibleWeekOption(true);
      setFlexibleMonthOption(false);
    } else if (CurrentFlexibleOption == "Weekend") {
      setFlexibleWeekendOption(true);
      setFlexibleWeekOption(false);
      setFlexibleMonthOption(false);
    }
  };
  const [
    moveInOptionsSearchLocationFlexible,
    setmoveInOptionsSearchLocationFlexible,
  ] = React.useState(false);
  const [
    moveInOptionsSearchLocationEurope,
    setmoveInOptionsSearchLocationEurope,
  ] = React.useState(false);
  const [
    moveInOptionsSearchLocationItaly,
    setmoveInOptionsSearchLocationItaly,
  ] = React.useState(false);
  const [
    moveInOptionsSearchLocationUnitedStates,
    setmoveInOptionsSearchLocationUnitedStates,
  ] = React.useState(false);
  const [
    moveInOptionsSearchLocationTurkey,
    setmoveInOptionsSearchLocationTurkey,
  ] = React.useState(false);
  const [
    moveInOptionsSearchLocationAfrica,
    setmoveInOptionsSearchLocationAfrica,
  ] = React.useState(false);

  const SearchByRegion = (CurrentRegion) => {
    if (CurrentRegion == "Flexible") {
      setmoveInOptionsSearchLocationFlexible(
        !moveInOptionsSearchLocationFlexible
      );
      setmoveInOptionsSearchLocationEurope(false);
      setmoveInOptionsSearchLocationItaly(false);
      setmoveInOptionsSearchLocationUnitedStates(false);
      setmoveInOptionsSearchLocationTurkey(false);
      setmoveInOptionsSearchLocationAfrica(false);
      // handleOpen()
    } else if (CurrentRegion == "Europe") {
      setmoveInOptionsSearchLocationFlexible(false);
      setmoveInOptionsSearchLocationEurope(!moveInOptionsSearchLocationEurope);
      setmoveInOptionsSearchLocationItaly(false);
      setmoveInOptionsSearchLocationUnitedStates(false);
      setmoveInOptionsSearchLocationTurkey(false);
      setmoveInOptionsSearchLocationAfrica(false);
    } else if (CurrentRegion == "Italy") {
      setmoveInOptionsSearchLocationFlexible(false);
      setmoveInOptionsSearchLocationEurope(false);
      setmoveInOptionsSearchLocationItaly(!moveInOptionsSearchLocationItaly);
      setmoveInOptionsSearchLocationUnitedStates(false);
      setmoveInOptionsSearchLocationTurkey(false);
      setmoveInOptionsSearchLocationAfrica(false);
    } else if (CurrentRegion == "UnitedStates") {
      setmoveInOptionsSearchLocationFlexible(false);
      setmoveInOptionsSearchLocationEurope(false);
      setmoveInOptionsSearchLocationItaly(false);
      setmoveInOptionsSearchLocationUnitedStates(
        !moveInOptionsSearchLocationUnitedStates
      );
      setmoveInOptionsSearchLocationTurkey(false);
      setmoveInOptionsSearchLocationAfrica(false);
    } else if (CurrentRegion == "Turkey") {
      setmoveInOptionsSearchLocationFlexible(false);
      setmoveInOptionsSearchLocationEurope(false);
      setmoveInOptionsSearchLocationItaly(false);
      setmoveInOptionsSearchLocationUnitedStates(false);
      setmoveInOptionsSearchLocationTurkey(!moveInOptionsSearchLocationTurkey);
      setmoveInOptionsSearchLocationAfrica(false);
    } else if (CurrentRegion == "Africa") {
      setmoveInOptionsSearchLocationFlexible(false);
      setmoveInOptionsSearchLocationEurope(false);
      setmoveInOptionsSearchLocationItaly(false);
      setmoveInOptionsSearchLocationUnitedStates(false);
      setmoveInOptionsSearchLocationTurkey(false);
      setmoveInOptionsSearchLocationAfrica(!moveInOptionsSearchLocationAfrica);
    }
  };
  const [JanuaryMonth, setJanuaryMonth] = React.useState(true);
  const [FebruaryMonth, setFebruaryMonth] = React.useState(false);
  const [MarchMonth, setMarchMonth] = React.useState(false);
  const [AprilMonth, setAprilMonth] = React.useState(false);
  const [MayMonth, setMayMonth] = React.useState(false);
  const [JuneMonth, setJuneMonth] = React.useState(false);
  const [JulyMonth, setJulyMonth] = React.useState(false);
  const [AugustMonth, setAugustMonth] = React.useState(false);
  const [SeptemberMonth, setSeptemberMonth] = React.useState(false);
  const [OctoberMonth, setOctoberMonth] = React.useState(false);
  const [NovemberMonth, setNovemberMonth] = React.useState(false);
  const [DecemberMonth, setDecemberMonth] = React.useState(false);

  const slectMonthsOptionsCarsoul = (CurrentMonth) => {
    if (CurrentMonth == "January") {
      setJanuaryMonth(!JanuaryMonth);
    } else if (CurrentMonth == "February") {
      setFebruaryMonth(!FebruaryMonth);
    } else if (CurrentMonth == "March") {
      setMarchMonth(!MarchMonth);
    } else if (CurrentMonth == "April") {
      setAprilMonth(!AprilMonth);
    } else if (CurrentMonth == "May") {
      setMayMonth(!MayMonth);
    } else if (CurrentMonth == "June") {
      setJuneMonth(!JuneMonth);
    } else if (CurrentMonth == "July") {
      setJulyMonth(!JulyMonth);
    } else if (CurrentMonth == "August") {
      setAugustMonth(!AugustMonth);
    } else if (CurrentMonth == "September") {
      setSeptemberMonth(!SeptemberMonth);
    } else if (CurrentMonth == "October") {
      setOctoberMonth(!OctoberMonth);
    } else if (CurrentMonth == "November") {
      setNovemberMonth(!NovemberMonth);
    } else if (CurrentMonth == "December") {
      setDecemberMonth(!DecemberMonth);
    }
  };
  const [AdultsGuest, setAdultsGuest] = React.useState(0);
  const [ChildrenGuest, setChildrenGuest] = React.useState(0);
  const [InfantsGuest, setInfantsGuest] = React.useState(0);
  const [PetsGuest, setPetsGuest] = React.useState(0);
  const [GuestsPlusBTNAdults, setGuestsPlusBTNAdults] = React.useState(false);
  const [GuestsMinusBTNAdults, setGuestsMinusBTNAdults] = React.useState(true);
  const [GuestsPlusBTNChildren, setGuestsPlusBTNChildren] =
    React.useState(false);
  const [GuestsMinusBTNChildren, setGuestsMinusBTNChildren] =
    React.useState(true);
  const [GuestsPlusBTNInfants, setGuestsPlusBTNInfants] = React.useState(false);
  const [GuestsMinusBTNInfants, setGuestsMinusBTNInfants] =
    React.useState(true);
  const [GuestsPlusBTNPets, setGuestsPlusBTNPets] = React.useState(false);
  const [GuestsMinusBTNPets, setGuestsMinusBTNPets] = React.useState(true);

  const GuestsNumberPlus = (target) => {
    if (target == "Adults") {
      if (AdultsGuest >= 0 && AdultsGuest < 16) {
        setAdultsGuest(AdultsGuest + 1);
        setGuestsPlusBTNAdults(false);
        if (AdultsGuest >= 0) {
          setGuestsMinusBTNAdults(false);
        } else {
          setGuestsMinusBTNAdults(true);
        }
      } else if (AdultsGuest >= 16) {
        setGuestsPlusBTNAdults(true);
      }
    } else if (target == "Children") {
      if (ChildrenGuest >= 0 && ChildrenGuest < 16) {
        setChildrenGuest(ChildrenGuest + 1);
        setGuestsPlusBTNChildren(false);
        if (ChildrenGuest >= 0) {
          setGuestsMinusBTNChildren(false);
        } else {
          setGuestsMinusBTNChildren(true);
        }
      } else if (ChildrenGuest >= 16) {
        setGuestsPlusBTNChildren(true);
      }
    } else if (target == "Infants") {
      if (InfantsGuest >= 0 && InfantsGuest < 5) {
        setInfantsGuest(InfantsGuest + 1);
        setGuestsPlusBTNInfants(false);
        if (InfantsGuest >= 0) {
          setGuestsMinusBTNInfants(false);
        } else {
          setGuestsMinusBTNInfants(true);
        }
      } else if (InfantsGuest >= 5) {
        setGuestsPlusBTNInfants(true);
      }
    } else if (target == "Pets") {
      if (PetsGuest >= 0 && PetsGuest < 5) {
        setPetsGuest(PetsGuest + 1);
        setGuestsPlusBTNPets(false);
        if (PetsGuest >= 0) {
          setGuestsMinusBTNPets(false);
        } else {
          setGuestsMinusBTNPets(true);
        }
      } else if (PetsGuest >= 5) {
        setGuestsPlusBTNPets(true);
      }
    }
  };
  const GuestsNumberMinus = (target) => {
    if (target == "Adults") {
      if (AdultsGuest >= 1 && AdultsGuest <= 16) {
        setAdultsGuest(AdultsGuest - 1);
        setGuestsPlusBTNAdults(false);
        if (AdultsGuest > 1) {
          setGuestsMinusBTNAdults(false);
        } else {
          setGuestsMinusBTNAdults(true);
        }
      } else if (AdultsGuest > 16) {
        setGuestsPlusBTNAdults(true);
      }
    } else if (target == "Children") {
      if (ChildrenGuest >= 1 && ChildrenGuest <= 16) {
        setChildrenGuest(ChildrenGuest - 1);
        setGuestsPlusBTNChildren(false);
        if (ChildrenGuest > 1) {
          setGuestsMinusBTNChildren(false);
        } else {
          setGuestsMinusBTNChildren(true);
        }
      } else if (ChildrenGuest > 16) {
        setGuestsPlusBTNChildren(true);
      }
    } else if (target == "Infants") {
      if (InfantsGuest >= 1 && InfantsGuest <= 5) {
        setInfantsGuest(InfantsGuest - 1);
        setGuestsPlusBTNInfants(false);
        if (InfantsGuest > 1) {
          setGuestsMinusBTNInfants(false);
        } else {
          setGuestsMinusBTNInfants(true);
        }
      } else if (InfantsGuest > 5) {
        setGuestsPlusBTNInfants(true);
      }
    } else if (target == "Pets") {
      if (PetsGuest >= 1 && PetsGuest <= 5) {
        setPetsGuest(PetsGuest - 1);
        setGuestsPlusBTNPets(false);
        if (PetsGuest > 1) {
          setGuestsMinusBTNPets(false);
        } else {
          setGuestsMinusBTNPets(true);
        }
      } else if (PetsGuest > 5) {
        setGuestsPlusBTNPets(true);
      }
    }
  };
  return (
    <>
      <Container
        sx={{
          display: isHiden == true ? "none" : "flex",
          justifyContent: "flex-end",
        }}
      >
        <Paper
          className="pointer shadow-sm"
          sx={{
            border: "1px solid #ebebeb",
            borderRadius: 20,
            ml: "8rem",
            p: 1,
            width: "100%",
          }}
          elevation={3}
        >
          <Stack
            sx={{
              borderRadius: 20,
              pl: 2,
              justifyContent: "space-evenly",
            }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ justifyContent: "space-evenly" }}
              />
            }
          >
            {choices.map((choice) => {
              return (
                <ButtonBase
                  onClick={(e) => {
                    toggleSearchBar(e);
                  }}
                  className="button"
                  key={choice.id}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontWeight: "bold",
                    }}
                  >
                    {choice.text}
                  </Typography>
                  {choice.withIcon && (
                    <Box
                      sx={{
                        pl: 1.2,
                      }}
                    >
                      <IoSearchCircleSharp sx={{}} color="#FF385C" size={32} />
                    </Box>
                  )}
                </ButtonBase>
              );
            })}
          </Stack>
        </Paper>
      </Container>
      <Container
        sx={{
          display: isHiden == false ? "none" : "flex",
          justifyContent: "center",
          p: 0,
          m: 0,
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderColor: "divider", marginLeft: 20 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              style={{ justifyContent: "center" }}
            >
              <Tab label="Stays" {...a11yProps(0)} />
              <Tab label="Experiences" {...a11yProps(1)} />
              <Tab label="Online Experiences" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="bar p-0 m-0" style={{ height: "50%" }}>
              <Dropdown>
                <TriggerButton
                  onClick={() => {
                    moveInOptionsSearchTabsFunc("Location");
                  }}
                  className={`location ${
                    moveInOptionsSearchLocation ? "actv" : ""
                  } rounded-pill border-0 `}
                >
                  <p className="ps-3 BarTitle text-start">Location</p>
                  <input type="text" placeholder="Where are you going?" />
                </TriggerButton>
                <Menu
                  style={{ zIndex: "20" }}
                  slots={{ listbox: StyledListbox }}
                >
                  <div className="p-4">
                    <div>
                      <p style={{ fontWeight: "bold" }}>Search by region</p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Flexible");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationFlexible
                              ? "mapActive"
                              : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                        />
                        <p className="ps-2">I’m flexible</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Europe");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationEurope ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                        />
                        <p className="ps-2">Europe</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Italy");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationItaly ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"
                        />
                        <p className="ps-2">Italy</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("UnitedStates");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationUnitedStates
                              ? "mapActive"
                              : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                        />
                        <p className="ps-2">United States</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Turkey");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationTurkey ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320"
                        />
                        <p className="ps-2">Turkey</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Africa");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationAfrica ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320"
                        />
                        <p className="ps-2">Africa</p>
                      </div>
                    </div>
                  </div>
                </Menu>
              </Dropdown>

              <Dropdown>
                <TriggerButton
                  onClick={() => {
                    moveInOptionsSearchTabsFunc("CheckInAndCheckOut");
                  }}
                  className={`Date ${
                    moveInOptionsSearchCheckInAndCheckOut ? "actv" : ""
                  }  rounded-pill  border-0 `}
                >
                  <p className="px-3 BarTitle text-start">
                    Check in & Check out
                  </p>
                  <input
                    className="px-3"
                    disabled
                    type="text"
                    placeholder="Add dates"
                  />
                </TriggerButton>
                <Menu
                  style={{ zIndex: "20" }}
                  slots={{ listbox: StyledListbox }}
                >
                  <div className="p-3">
                    <div
                      style={{ backgroundColor: "#ebebeb " }}
                      className="p-2 rounded-pill w-50 d-flex mx-auto justify-content-evenly"
                    >
                      <button
                        style={{ backgroundColor: "#ebebeb " }}
                        type="button"
                        className="btn btn-light rounded-pill px-4 border-0 DateType "
                        onClick={() => {
                          toggleDate();
                        }}
                      >
                        Dates
                      </button>
                      <button
                        style={{ backgroundColor: "#ebebeb " }}
                        type="button"
                        className="btn btn-light rounded-pill px-4 border-0 DateType"
                      >
                        Months
                      </button>
                      <button
                        style={{ backgroundColor: "#ebebeb " }}
                        type="button"
                        className="btn btn-light rounded-pill px-4 border-0 DateType"
                        onClick={() => {
                          toggleDate();
                        }}
                      >
                        Flexible
                      </button>
                    </div>
                    <div
                      className="p-0 m-0"
                      style={{
                        display: isFlexible == true ? "none" : "flex",
                        justifyContent: "center",
                      }}
                    >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DateRangeCalendar"]}>
                          <DateRangeCalendar
                            currentMonthCalendarPosition={1}
                            disablePast
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                    <div
                      className="p-0 m-0 d-flex flex-column align-items-center"
                      style={{ display: isFlexible == true ? "flex" : "none" }}
                    >
                      <h6
                        style={{
                          display: isFlexible == true ? "flex" : "none",
                        }}
                        className="mt-5"
                      >
                        How long would you like to stay?
                      </h6>
                      <div
                        style={{
                          display: isFlexible == true ? "flex" : "none",
                        }}
                      >
                        <button
                          onClick={() => {
                            moveInFlexibleOptions("Weekend");
                          }}
                          type="button"
                          className={` ${
                            FlexibleWeekendOption ? "active" : ""
                          } btn btn-outline-dark rounded-pill mx-1 my-2`}
                        >
                          Weekend
                        </button>
                        <button
                          onClick={() => {
                            moveInFlexibleOptions("Week");
                          }}
                          type="button"
                          className={` ${
                            FlexibleWeekOption ? "active" : ""
                          } btn btn-outline-dark rounded-pill mx-1 my-2`}
                        >
                          Week
                        </button>
                        <button
                          onClick={() => {
                            moveInFlexibleOptions("Month");
                          }}
                          type="button"
                          className={` ${
                            FlexibleMonthOption ? "active" : ""
                          } btn btn-outline-dark rounded-pill mx-1 my-2`}
                        >
                          Month
                        </button>
                      </div>
                      <h6
                        style={{
                          display: isFlexible == true ? "flex" : "none",
                        }}
                        className="mt-4"
                      >
                        When do you want to go?
                      </h6>
                      <Box
                        style={{
                          display: isFlexible == true ? "flex" : "none",
                        }}
                        sx={{
                          maxWidth: { sm: 700 },
                          bgcolor: "background.paper",
                          marginBottom: 2,
                        }}
                      >
                        <Tabs
                          value={value2}
                          onChange={handleChange2}
                          variant="scrollable"
                          scrollButtons
                          allowScrollButtonsMobile
                          aria-label="scrollable force tabs example"
                        >
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("January");
                            }}
                            className={` ${JanuaryMonth ? "slectedDate" : ""} `}
                            label="January"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("February");
                            }}
                            className={` ${
                              FebruaryMonth ? "slectedDate" : ""
                            } `}
                            label="February"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("March");
                            }}
                            className={` ${MarchMonth ? "slectedDate" : ""} `}
                            label="March"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("April");
                            }}
                            className={` ${AprilMonth ? "slectedDate" : ""} `}
                            label="April"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("May");
                            }}
                            className={` ${MayMonth ? "slectedDate" : ""} `}
                            label="May"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("June");
                            }}
                            className={` ${JuneMonth ? "slectedDate" : ""} `}
                            label="June"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("July");
                            }}
                            className={` ${JulyMonth ? "slectedDate" : ""} `}
                            label="July"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("August");
                            }}
                            className={` ${AugustMonth ? "slectedDate" : ""} `}
                            label="August"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("September");
                            }}
                            className={` ${
                              SeptemberMonth ? "slectedDate" : ""
                            } `}
                            label="September"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("October");
                            }}
                            className={` ${OctoberMonth ? "slectedDate" : ""} `}
                            label="October"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("November");
                            }}
                            className={` ${
                              NovemberMonth ? "slectedDate" : ""
                            } `}
                            label="November"
                          />
                          <Tab
                            icon={<CalendarTodayIcon />}
                            onClick={() => {
                              slectMonthsOptionsCarsoul("December");
                            }}
                            className={` ${
                              DecemberMonth ? "slectedDate" : ""
                            } `}
                            label="December"
                          />
                        </Tabs>
                      </Box>
                    </div>
                  </div>
                </Menu>
              </Dropdown>
              <Dropdown>
                <TriggerButton
                  onClick={() => {
                    moveInOptionsSearchTabsFunc("Guests");
                  }}
                  className={`guests ${
                    moveInOptionsSearchGuests ? "actv" : ""
                  } rounded-pill border-0 `}
                >
                  <p className="px-3 BarTitle text-start">Guests</p>
                  <input
                    className="px-3"
                    disabled
                    type="text"
                    placeholder="Add guests"
                  />
                  {/* <span onClick={() => { toggleSearchBar() }}  ><i className="fa-solid fa-magnifying-glass"></i></span> */}
                </TriggerButton>
                <Menu
                  style={{ zIndex: "20" }}
                  slots={{ listbox: StyledListbox }}
                >
                  <ol className="list-group list-group-flush p-2">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-start py-3"
                      style={{ width: "350px" }}
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Adults</div>
                        <span className="text-secondary">Ages 13 or above</span>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Adults");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNAdults ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{AdultsGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Adults");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNAdults ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start py-3">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Children</div>
                        <span className="text-secondary">Ages 2–12</span>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Children");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNChildren ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{ChildrenGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Children");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNChildren ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start py-3">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Infants</div>
                        <span className="text-secondary">Under 2</span>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Infants");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNInfants ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{InfantsGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Infants");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNInfants ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start py-3">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold ">Pets</div>
                        <a className="link-secondary">
                          Bringing a service animal?
                        </a>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Pets");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNPets ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{PetsGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Pets");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNPets ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                  </ol>
                </Menu>
              </Dropdown>
              <span
                onClick={() => {
                  moveInOptionsSearchTabsFunc("Guests");
                }}
                className={`guests  rounded-pill border-0 `}
              >
                <span
                  onClick={() => {
                    toggleSearchBar();
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </span>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="bar p-0 m-0" style={{ height: "50%" }}>
              <Dropdown>
                <TriggerButton
                  onClick={() => {
                    moveInOptionsSearchTabsFunc("Location");
                  }}
                  className={`location ${
                    moveInOptionsSearchLocation ? "actv" : ""
                  } rounded-pill border-0 `}
                >
                  <p className="px-3 BarTitle text-start">Location</p>
                  <input
                    className="px-3"
                    type="text"
                    placeholder="Where are you going?"
                  />
                </TriggerButton>
                <Menu
                  style={{ zIndex: "20" }}
                  slots={{ listbox: StyledListbox }}
                >
                  <div className="p-4">
                    <div>
                      <p style={{ fontWeight: "bold" }}>Search by region</p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Flexible");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationFlexible
                              ? "mapActive"
                              : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                        />
                        <p className="ps-2">I’m flexible</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Europe");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationEurope ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                        />
                        <p className="ps-2">Europe</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Italy");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationItaly ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"
                        />
                        <p className="ps-2">Italy</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("UnitedStates");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationUnitedStates
                              ? "mapActive"
                              : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                        />
                        <p className="ps-2">United States</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Turkey");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationTurkey ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320"
                        />
                        <p className="ps-2">Turkey</p>
                      </div>
                      <div>
                        <img
                          onClick={() => {
                            SearchByRegion("Africa");
                          }}
                          width={"100rem"}
                          className={`m-2 ${
                            moveInOptionsSearchLocationAfrica ? "mapActive" : ""
                          }  map rounded`}
                          src="https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320"
                        />
                        <p className="ps-2">Africa</p>
                      </div>
                    </div>
                  </div>
                </Menu>
              </Dropdown>
              <Dropdown>
                <TriggerButton
                  onClick={() => {
                    moveInOptionsSearchTabsFunc("CheckInAndCheckOut");
                  }}
                  className={`Date ${
                    moveInOptionsSearchCheckInAndCheckOut ? "actv" : ""
                  }  rounded-pill  border-0 `}
                >
                  <p className="px-3 BarTitle text-start">Date</p>
                  <input
                    className="px-3"
                    disabled
                    type="text"
                    placeholder="Add dates"
                  />
                </TriggerButton>
                <Menu
                  style={{ zIndex: "20" }}
                  slots={{ listbox: StyledListbox }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangeCalendar"]}>
                      <DateRangeCalendar
                        currentMonthCalendarPosition={1}
                        disablePast
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Menu>
              </Dropdown>

              <Dropdown>
                <TriggerButton
                  onClick={() => {
                    moveInOptionsSearchTabsFunc("Guests");
                  }}
                  className={`guests ${
                    moveInOptionsSearchGuests ? "actv" : ""
                  } rounded-pill border-0 `}
                >
                  <p className="px-2 BarTitle text-start">Guests</p>
                  <input
                    className="px-2"
                    disabled
                    type="text"
                    placeholder="Add guests"
                  />
                  {/* <span onClick={() => { toggleSearchBar() }}  ><i className="fa-solid fa-magnifying-glass"></i></span> */}
                </TriggerButton>
                <Menu
                  style={{ zIndex: "20" }}
                  slots={{ listbox: StyledListbox }}
                >
                  <ol className="list-group list-group-flush p-2">
                    <li
                      className="list-group-item d-flex justify-content-between align-items-start py-3"
                      style={{ width: "350px" }}
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Adults</div>
                        <span className="text-secondary">Ages 13 or above</span>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Adults");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNAdults ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{AdultsGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Adults");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNAdults ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start py-3">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Children</div>
                        <span className="text-secondary">Ages 2–12</span>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Children");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNChildren ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{ChildrenGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Children");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNChildren ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start py-3">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">Infants</div>
                        <span className="text-secondary">Under 2</span>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Infants");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNInfants ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{InfantsGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Infants");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNInfants ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start py-3">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold ">Pets</div>
                        <a className="link-secondary">
                          Bringing a service animal?
                        </a>
                      </div>
                      <span className="rounded-pill d-flex">
                        <button
                          onClick={() => {
                            GuestsNumberMinus("Pets");
                          }}
                          type="button"
                          className={`${
                            GuestsMinusBTNPets ? "disabled" : ""
                          } btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <p className="p-2 m-0">{PetsGuest}</p>
                        <button
                          onClick={() => {
                            GuestsNumberPlus("Pets");
                          }}
                          type="button"
                          className={` ${
                            GuestsPlusBTNPets ? "disabled" : ""
                          }  btn btn-outline-dark rounded-circle btn-sm`}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </span>
                    </li>
                  </ol>
                </Menu>
              </Dropdown>
              <span
                onClick={() => {
                  moveInOptionsSearchTabsFunc("Guests");
                }}
                className={`guests  rounded-pill border-0 `}
              >
                <span
                  onClick={() => {
                    toggleSearchBar();
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </span>
            </div>
          </CustomTabPanel>
        </Box>
      </Container>
    </>
  );
}
const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      padding: 6px;
      margin: 12px 0;
      min-width: 200px;
      border-radius: 12px;
      overflow: auto;
      outline: 0px;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      box-shadow: 0px 4px 30px ${
        theme.palette.mode === "dark" ? grey[900] : grey[200]
      };
      z-index: 1;
      `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
      list-style: none;
      padding: 8px;
      border-radius: 8px;
      cursor: default;
      user-select: none;
    
      &:last-of-type {
        border-bottom: none;
      }
    
      &.${menuItemClasses.focusVisible} {
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
        background-color: ${
          theme.palette.mode === "dark" ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      }
    
      &.${menuItemClasses.disabled} {
        color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
      }
    
      &:hover:not(.${menuItemClasses.disabled}) {
        background-color: ${
          theme.palette.mode === "dark" ? grey[800] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      }
      `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      box-sizing: border-box;
      min-height: calc(1.5em + 22px);
      border-radius: 12px;
      padding: 8px 14px;
      line-height: 1.5;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    
      &:hover {
        background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
      }
    
      &:focus-visible {
        border-color: ${blue[400]};
        outline: 3px solid ${
          theme.palette.mode === "dark" ? blue[500] : blue[200]
        };
      }
      `
);
