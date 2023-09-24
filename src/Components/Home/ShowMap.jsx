import React from "react";
import { ButtonBase } from "@mui/material";
import { FaMap } from "react-icons/fa";
import Box from "@mui/material/Box";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Button } from '@mui/material';

export default function ShowMap() {
  // const theme = createTheme({
  //     components: {
  //       MuiButton: {
  //         variants: [
  //           {
  //             props: { variant: 'dashed' },
  //             style: {
  //               textTransform: 'none',
  //               border: `2px dashed`,
  //             },
  //           },
  //           {
  //             props: { variant: 'dashed', color: 'secondary' },
  //             style: {
  //               border: `4px dashed `,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  return (
    <>
      {/* <ThemeProvider theme={theme}>
  <Button variant="dashed" sx={{ m: 1 }}>
    Dashed
  </Button>
  <Button variant="dashed" color="secondary" sx={{ m: 1 }}>
    Secondary
  </Button>
  <Button variant="dashed" size="large" sx={{ m: 1 }}>
    Large
  </Button>
  <Button variant="dashed" color="secondary" size="large" sx={{ m: 1 }}>
    Secondary large
  </Button>
</ThemeProvider> */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }}
      >
        <ButtonBase
          style={{ backgroundColor: "#444" }}
          sx={{
            // display: { xs: 'none', md: 'block' },
            border: "1px solid #222",
            minWidth: 90,
            justifyContent: "space-between",
            borderRadius: 10,
            textTransform: "capitalize",
            p: 1.5,
            color: "white",
            position: "fixed",
            bottom: 0,
            backgroundColor: "#222",
            marginX: "auto",
            marginBottom: "2rem",
            zIndex: 20,
            fontWeight: "bold",
            variant: "black",
          }}
        >
          Show map <FaMap style={{ marginLeft: "3px" }} />
        </ButtonBase>
      </Box>
    </>
  );
}
