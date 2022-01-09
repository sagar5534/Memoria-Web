import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import UsersDash from "../UsersDash/UsersDash";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

const Body = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<UsersDash />} />
      </Routes>
    </Box>
  );
};

export default Body;
