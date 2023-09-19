import React, { useState } from 'react';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import Modal from '@mui/material/Modal';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { ButtonBase, Tab, Tabs } from '@mui/material';
import Container from '@mui/material/Container';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import './LocationSearch.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
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
        'aria-controls': `simple-tabpanel-${index}`,
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
                        props: { variant: 'dashed' },
                        style: {
                            textTransform: 'none',
                            border: `2px dashed`,
                        },
                    },
                    {
                        props: { variant: 'dashed', color: 'secondary' },
                        style: {
                            border: `4px dashed `,
                        },
                    },
                ],
            },
        },
    });
    const choices = [
        { id: 1, text: 'Anywhere' },
        { id: 2, text: 'Any week' },
        { id: 3, text: 'Add guest', withIcon: true },
    ];
    const [isHiden, setIsHiden] = useState(false)
    const [isFlexible, setIsFlexible] = useState(false)
    const toggleSearchBar = () => {
        setIsHiden(!isHiden)
        console.log(isHiden);
    }
    const toggleDate = () => {
        setIsFlexible(!isFlexible)
        console.log(isFlexible);
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const createHandleMenuClick = (menuItem) => {
        return () => {
            console.log(`Clicked on ${menuItem}`);
        };
    };
    return (
        <>
            <Container sx={{ display: (isHiden == true) ? 'none' : 'flex', justifyContent: 'flex-end' }}>
                <Paper
                    className='pointer shadow-sm'
                    sx={{
                        border: '1px solid #ebebeb',
                        borderRadius: 20,
                        ml: "8rem",
                        p: 1,
                        width: "100%"
                    }}
                    elevation={3}>
                    <Stack
                        sx={{
                            borderRadius: 20,
                            pl: 2,
                            justifyContent: 'space-evenly'
                        }} divider={<Divider orientation="vertical" flexItem sx={{ justifyContent: 'space-evenly' }} />}>
                        {
                            choices.map((choice) => {
                                return (
                                    <ButtonBase onClick={(e) => { toggleSearchBar(e) }} className='button' key={choice.id}>
                                        <Typography sx={{
                                            color: theme => theme.palette.text.primary,
                                            fontWeight: 'bold',
                                        }}>
                                            {choice.text}
                                        </Typography>
                                        {
                                            choice.withIcon && (
                                                <Box sx={{
                                                    pl: 1.2
                                                }}>
                                                    <IoSearchCircleSharp sx={{}} color='#FF385C' size={32} />
                                                </Box>
                                            )
                                        }
                                    </ButtonBase>
                                )
                            })
                        }
                    </Stack>
                </Paper>
            </Container>
            <Container sx={{ display: (isHiden == false) ? 'none' : 'flex', justifyContent: 'center', p: 0, m: 0, flexDirection: 'column', alignContent: 'center' }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ justifyContent: 'center' }}>
                            <Tab label="Stays" {...a11yProps(0)} />
                            <Tab label="Experiences" {...a11yProps(1)} />
                            <Tab label="Online Experiences" />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div class="bar p-0 m-0" style={{ height: '50%' }}>

                            <Dropdown sx={{ p: 0 }}>
                                <TriggerButton   onClick={handleOpen} className="location actv rounded-pill border-0 " >
                                    <p  className='ps-3 BarTitle text-start'>Location</p>
                                    <input type="text" placeholder="Where are you going?" />
                                </TriggerButton>
                                <Menu   style={{ zIndex: "20" }} slots={{ listbox: StyledListbox }}>
                                    <div className='p-4'>
                                        <div><p style={{ fontWeight: 'bold' }}>Search by region</p></div>
                                        <div className='d-flex'>
                                            <div>
                                                <img width={'100rem'} className='m-2 map rounded' src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' />
                                                <p className='ps-2'>I’m flexible</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 map rounded' src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' />
                                                <p className='ps-2'>Europe</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 map rounded' src='https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320' />
                                                <p className='ps-2'>Italy</p>
                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <div>
                                                <img width={'100rem'} className='m-2 map rounded' src='https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320' />
                                                <p className='ps-2'>United States</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 map rounded' src='https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320' />
                                                <p className='ps-2'>Turkey</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 map rounded' src='https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320' />
                                                <p className='ps-2'>Africa</p>
                                            </div>
                                        </div>

                                    </div>
                                </Menu>
                            </Dropdown>

                            <Dropdown sx={{ p: 0 }}>
                                <TriggerButton className="Date rounded-pill  border-0 " >
                                    <p className='ps-5 BarTitle text-start'>Check in & Check out</p>
                                    <input disabled type="text" placeholder="Add dates" />
                                </TriggerButton>
                                <Menu style={{ zIndex: "20" }} slots={{ listbox: StyledListbox }}>
                                    <div className='p-3'>
                                        <div style={{ backgroundColor: '#ebebeb ' }} className='p-2 rounded-pill w-50 d-flex mx-auto justify-content-evenly'>
                                            <button style={{ backgroundColor: '#ebebeb ' }} type="button" class="btn btn-light rounded-pill px-4 border-0 DateType" onClick={() => { toggleDate() }}>Dates</button>
                                            <button style={{ backgroundColor: '#ebebeb ' }} type="button" class="btn btn-light rounded-pill px-4 border-0 DateType">Months</button>
                                            <button style={{ backgroundColor: '#ebebeb ' }} type="button" class="btn btn-light rounded-pill px-4 border-0 DateType" onClick={() => { toggleDate() }}>Flexible</button>
                                        </div>
                                        <div className='p-0 m-0' style={{ display: (isFlexible == true) ? 'none' : 'flex', justifyContent: 'center' }}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DateRangeCalendar']}>
                                                    <DateRangeCalendar currentMonthCalendarPosition={1} disablePast />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>
                                        <div className='p-0 m-0 d-flex flex-column align-items-center' style={{ display: (isFlexible == true) ? 'flex' : 'none' }}>
                                            <h6 className='mt-5'>How long would you like to stay?</h6>
                                            <div>
                                                <button type="button" class="btn btn-outline-dark rounded-pill mx-1 my-2">Weekend</button>
                                                <button type="button" class="btn btn-outline-dark rounded-pill mx-1 my-2">Week</button>
                                                <button type="button" class="btn btn-outline-dark rounded-pill mx-1 my-2">Month</button>
                                            </div>
                                            <h6 className='mt-4'>When do you want to go?</h6>
                                            <Box sx={{ maxWidth: {  sm: 700 }, bgcolor: 'background.paper' ,marginBottom:2}}>
                                                <Tabs
                                                    value={value2}
                                                    onChange={handleChange2}
                                                    variant="scrollable"
                                                    scrollButtons
                                                    allowScrollButtonsMobile
                                                    aria-label="scrollable force tabs example"
                                                >
                                                    <Tab label="January " />
                                                    <Tab label="January " />
                                                    <Tab icon={<CalendarTodayIcon />} />
                                                    <Tab icon={<CalendarTodayIcon />} />
                                                    <Tab icon={<CalendarTodayIcon />} />
                                                    <Tab icon={<CalendarTodayIcon />} />
                                                    <Tab icon={<CalendarTodayIcon />} className='slectedDate' label="January" />
                                                    <Tab icon={<CalendarTodayIcon />} label="February" />
                                                    <Tab icon={<CalendarTodayIcon />} label="March" />
                                                    <Tab icon={<CalendarTodayIcon />} label="April" />
                                                    <Tab icon={<CalendarTodayIcon />} label="May" />
                                                    <Tab icon={<CalendarTodayIcon />} label="June " />
                                                    <Tab icon={<CalendarTodayIcon />} label="July  " />
                                                    <Tab icon={<CalendarTodayIcon />} label="August  " />
                                                    <Tab icon={<CalendarTodayIcon />} label="September " />
                                                    <Tab icon={<CalendarTodayIcon />} label="October  " />
                                                    <Tab icon={<CalendarTodayIcon />} label="November " />
                                                    <Tab icon={<CalendarTodayIcon />} label="December  " />

                                                </Tabs>
                                            </Box>
                                        </div>

                                    </div>

                                </Menu>
                            </Dropdown>
                            <Dropdown sx={{ p: 0 }}>
                                <TriggerButton className="guests rounded-pill  border-0" >
                                    <p className='BarTitle text-start'>Guests</p>
                                    <input disabled type="text" placeholder="Add guests" />
                                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                </TriggerButton>
                                <Menu style={{ zIndex: "20" }} slots={{ listbox: StyledListbox }}>
                                    <ol class="list-group list-group-flush p-2" >
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3" style={{ width: '350px' }}>
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Adults</div>
                                                <span className='text-secondary'>Ages 13 or above</span>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Children</div>
                                                <span className='text-secondary'>Ages 2–12</span>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Infants</div>
                                                <span className='text-secondary'>Under 2</span>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold ">Pets</div>
                                                <a className='link-secondary'>Bringing a service animal?</a>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="disabled  btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                    </ol>
                                </Menu>
                            </Dropdown>
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <div class="bar p-0 m-0" style={{ height: '50%' }}>
                            <Dropdown sx={{ p: 0 }}>
                                <TriggerButton className="location actv rounded-pill border-0 " >
                                    <p className='ps-3 BarTitle text-start'>Location</p>
                                    <input type="text" placeholder="Where are you going?" />
                                </TriggerButton>
                                <Menu style={{ zIndex: "20" }} slots={{ listbox: StyledListbox }}>
                                    <div className='p-4'>
                                        <div><p style={{ fontWeight: 'bold' }}>Search by region</p></div>
                                        <div className='d-flex'>
                                            <div>
                                                <img width={'100rem'} className='m-2  rounded map' src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' />
                                                <p className='ps-2'>I’m flexible</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 rounded map' src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' />
                                                <p className='ps-2'>Europe</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 rounded map' src='https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320' />
                                                <p className='ps-2'>Italy</p>
                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <div>
                                                <img width={'100rem'} className='m-2  rounded map' src='https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320' />
                                                <p className='ps-2'>United States</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 rounded map' src='https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320' />
                                                <p className='ps-2'>Turkey</p>
                                            </div>
                                            <div>
                                                <img width={'100rem'} className='m-2 rounded map' src='https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320' />
                                                <p className='ps-2'>Africa</p>
                                            </div>
                                        </div>

                                    </div>
                                </Menu>
                            </Dropdown>
                            <Dropdown sx={{ p: 0 }}>
                                <TriggerButton className="Date rounded-pill  border-0 " >
                                    <p className='ps-5 BarTitle text-start'>Date</p>
                                    <input disabled type="text" placeholder="Add dates" />
                                </TriggerButton>
                                <Menu style={{ zIndex: "20" }} slots={{ listbox: StyledListbox }}>

                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateRangeCalendar']}>
                                            <DateRangeCalendar currentMonthCalendarPosition={1} disablePast />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Menu>
                            </Dropdown>

                            <Dropdown sx={{ p: 0 }}>
                                <TriggerButton className="guests rounded-pill  border-0" >
                                    <p className='BarTitle text-start'>Guests</p>
                                    <input disabled type="text" placeholder="Add guests" />
                                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                </TriggerButton>
                                <Menu style={{ zIndex: "20" }} slots={{ listbox: StyledListbox }}>
                                    <ol class="list-group list-group-flush p-2" >
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3" style={{ width: '350px' }}>
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Adults</div>
                                                <span className='text-secondary'>Ages 13 or above</span>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Children</div>
                                                <span className='text-secondary'>Ages 2–12</span>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold">Infants</div>
                                                <span className='text-secondary'>Under 2</span>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-start py-3">
                                            <div class="ms-2 me-auto">
                                                <div class="fw-bold ">Pets</div>
                                                <a className='link-secondary'>Bringing a service animal?</a>
                                            </div>
                                            <span class="rounded-pill d-flex">
                                                <button type="button" class="btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <p className='p-2 m-0'>0</p>
                                                <button type="button" class="disabled  btn btn-outline-dark rounded-circle btn-sm">
                                                    <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </span>
                                        </li>
                                    </ol>
                                </Menu>
                            </Dropdown>
                        </div>
                    </CustomTabPanel>
                </Box>

            </Container>
        </>
    );
}
const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledListbox = styled('ul')(
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
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
      z-index: 1;
      `,
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
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      }
    
      &.${menuItemClasses.disabled} {
        color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
      }
    
      &:hover:not(.${menuItemClasses.disabled}) {
        background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      }
      `,
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
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
    
      &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }
    
      &:focus-visible {
        border-color: ${blue[400]};
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
      }
      `,
);