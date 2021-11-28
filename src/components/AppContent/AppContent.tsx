import React from "react";
import AppBar from "../AppBar/AppBar";
import NavBar from "../NavBar/NavBar";
import Body from "../Body/Body";
import { Box, CssBaseline } from "@mui/material";

function AppContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar open={open} setOpen={setOpen} />
      <NavBar open={open} />
      <Body open={open} />
      
    </Box>
  );
}

export default AppContent;
