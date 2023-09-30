import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { locations as cardLocations } from "../header/data/mock-data";
import CarouselCard from "../Components/Home/CarouselCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../Store/slices/houses";
export default function WishList() {
  // const [cards] = useState(cardLocations);
  // if (!cards.length) {
  //   return null;
  // }
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.houses.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} xs={12} sm={6} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
