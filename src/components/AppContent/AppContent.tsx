import React from "react";
import AppBar from "../AppBar/AppBar";
import Body from "../Body/Body";
import { Box } from "@mui/material";

function AppContent() {

  return (
      <Box sx={{ display: "flex" }}>
        <AppBar />
        <Body />
      </Box>
  );
}

export default AppContent;
