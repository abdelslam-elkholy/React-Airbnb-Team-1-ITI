import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { locations as cardLocations } from "../header/data/mock-data";
import CarouselCard from "./CarouselCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../../Store/slices/houses";
import {
  fetchWishlist,
  addWishlist,
  deleteWishlist,
} from "../../Store/slices/wishlist";

export default function LocationCards() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.houses.houses);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const isInWishlist = (id) => {
    console.log("isInWishlist", id, wishlist);
    // return wishlist.map(item includes(id);
  };

  const addToWishlist = (id) => {
    dispatch(addWishlist(id));
  };

  const deleteFromWishlist = (id) => {
    dispatch(deleteWishlist(id));
  };

  useEffect(() => {
    dispatch(fetchHouses());
    console.log(cards);
  }, []);

  useEffect(() => {
    dispatch(fetchWishlist());
    console.log(wishlist);
  }, []);

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3}>
              <CarouselCard
                key={location._id}
                location={location}
                addItem={addToWishlist}
                deleteItem={deleteFromWishlist}
                isInWishlist={isInWishlist(location._id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
