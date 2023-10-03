import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { locations as cardLocations } from "../header/data/mock-data";
import CarouselCard from "../Components/Home/CarouselCard";
import { useDispatch, useSelector } from "react-redux";

import { fetchWishlist } from "../Store/slices/wishlist";
export default function WishList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards && cards.length > 0 ? (
          cards.map((location) => {
            return (
              <Grid key={location._id} xs={12} sm={6} md={4} lg={3}>
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
