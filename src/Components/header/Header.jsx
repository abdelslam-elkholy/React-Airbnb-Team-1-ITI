import React from "react";
// components
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
} from "../../Themes/commonStyles";
import ProfileSettings from "./ProfileSettings";
import MobileSearch from "./MobileSearch";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigator = useNavigate();

  return (
    <>
      <Box
        sx={{
          ...dFlex,
          minHeight: 70,
          borderBottom: "1px solid #ddd",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ ...flexBetweenCenter, minHeight: 90, p: 1 }}>
            <Box sx={displayOnDesktop} onClick={() => navigator("/home")}>
              <Logo sx={{ pr: 2 }} />
            </Box>
            <Box sx={displayOnDesktop}>
              <LocationSearch />
            </Box>
            <Box sx={displayOnDesktop}>
              <ProfileSettings />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MobileSearch />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
