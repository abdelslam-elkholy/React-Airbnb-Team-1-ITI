import React from "react";
import Header from "../Components/header/Header";
import { CssBaseline } from "@mui/material";
import OptionsTabs from "../Components/header/OptionsTab";
import LocationCards from "../Components/Home/LocationCards";
import Container from "@mui/material/Container";
import { StyledEngineProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DisplayTotalPrice from "../Components/Home/DisplayTotalPrice";
import ShowMap from "../Components/Home/ShowMap";
import MapViwe from "../Components/Home/Map";
import "maplibre-gl/dist/maplibre-gl.css";

const Home = () => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <OptionsTabs />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              height: 100,
            }}
          >
            <Container maxWidth="xl" sx={{ mb: 3 }}>
              <DisplayTotalPrice />

              <LocationCards />
              <ShowMap />
            </Container>
          </Box>
        </Box>
        <MapViwe />
      </StyledEngineProvider>
    </>
  );
};

export default Home;
