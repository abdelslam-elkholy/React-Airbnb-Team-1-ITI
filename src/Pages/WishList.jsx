import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { locations as cardLocations } from "../header/data/mock-data";
import CarouselCard from "../Components/Home/CarouselCard";
import instance from "../AxiosConfig/instance";

export default function WishList() {
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    instance.get("/wishlists/me").then((response) => {
      console.log(response.data.data);
      setCards(response.data.data);
    });
  }, []);

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards && cards.length > 0 ? (
          cards.map((location) => {
            return (
              <Grid key={location.id} xs={12} sm={6} md={4} lg={3}>
                <CarouselCard location={location} />
              </Grid>
            );
          })
        ) : (
          <h1 className="m-auto mx-30">No WishList</h1>
        )}
      </Grid>
    </Box>
  );
}
