import React from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "../../Themes/commonStyles";
import { ButtonBase } from "@mui/material";
import Container from "@mui/material/Container";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { FiGlobe } from "react-icons/fi";
import "./ProfileSettings.css";

export default function ProfileSettings() {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Container>
      <Box sx={{ ...flexCenter, justifyContent: "space-between", gap: 2 }}>
        <ButtonBase>
          <span
            className="m-0 p-2 rounded-pill pointer2"
            style={{ fontWeight: 600 }}
          >
            Airbnb your home
          </span>
        </ButtonBase>
        <ButtonBase>
          <span className="m-0 p-2 rounded-circle pointer2">
            <FiGlobe size={18} />
          </span>
        </ButtonBase>
        <Stack sx={{ paddingRight: 1 }}>
          <Dropdown sx={{ p: 0 }}>
            <TriggerButton
              className="pointer"
              sx={{
                borderRadius: 10,
                border: "1px solid #ddd",
                p: 0,
              }}
            >
              <Stack sx={{ p: 1 }}>
                <AiOutlineMenu size={24} />
                <FaRegUserCircle size={24} />
              </Stack>
            </TriggerButton>
            <Menu style={{ zIndex: "20" }} slots={{ listbox: StyledListbox }}>
              <StyledMenuItem onClick={createHandleMenuClick("Log in")}>
                Log in
              </StyledMenuItem>
              <StyledMenuItem onClick={createHandleMenuClick("Sing up")}>
                Sing up
              </StyledMenuItem>
              <hr class="my-2" />
              <StyledMenuItem
                onClick={createHandleMenuClick("Airbnb your home")}
              >
                Airbnb your home
              </StyledMenuItem>
              <StyledMenuItem onClick={createHandleMenuClick("Help center")}>
                Help center
              </StyledMenuItem>
            </Menu>
          </Dropdown>
        </Stack>
      </Box>
    </Container>
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
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
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
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
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
