import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { locations as cardLocations } from "../header/data/mock-data";
import CarouselCard from "./CarouselCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../../Store/slices/houses";
import { fetchWishlist } from "../../Store/slices/wishlist";

export default function LocationCards() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.houses.houses);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchWishlist());
  }, []);

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3} key={cards}>
        {cards.map((location) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3}>
              <CarouselCard
                key={location._id}
                location={location}
                wishlist={wishlist}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
