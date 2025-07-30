import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ASOlogo from "../images/ASOlogo.png";
import ASOpanel from "../images/ASOpanel.png";

export default function Header() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProductsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProductsClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar /*position="fixed"*/ sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}>
     <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

  <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
    <img
      src={ASOlogo}
      alt="Logo ASO"
      style={{ width: 176, height: 42, paddingLeft: 120 }}
    />
  </Box>

 
  <Box
    sx={{
      width: 632,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
  
    <Box>
      <Button
        onClick={handleProductsClick}
        color="inherit"
        sx={{
          textTransform: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        Products <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProductsClose}
      >
        <MenuItem onClick={handleProductsClose}>Product 1</MenuItem>
        <MenuItem onClick={handleProductsClose}>Product 2</MenuItem>
        <MenuItem onClick={handleProductsClose}>Product 3</MenuItem>
      </Menu>
    </Box>

  
    <Button color="inherit" sx={{ textTransform: "none" }}>
      Why ASOagent?
    </Button>
    <Button color="inherit" sx={{ textTransform: "none" }}>
      Docs
    </Button>
    <Button color="inherit" sx={{ textTransform: "none" }}>
      Pricing
    </Button>
    <Button color="inherit" sx={{ textTransform: "none" }}>
      Enterprise
    </Button>

    
    <img
      src={ASOpanel}
      alt="Logo ASO Repetido"
      style={{ width: 176, height: 42 }}
    />
  </Box>

  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      gap: 2,
      pr:"88px"
    }}
  >
    <Button
      sx={{
        width: 62,
        height: 25,
        textTransform: "none",
      }}
      color="inherit"
    >
      Login
    </Button>

    <Button
      variant="outlined"
      sx={{
        width: 114,
        height: 25,
        borderColor: "#370AFF",
        color: "#370AFF",
        textTransform: "none",
        fontSize: 12,
        borderRadius: "6px",
        fontWeight: 600,
        backgroundColor: "#fff",
        "&:hover": {
          backgroundColor: "#f0f0ff",
          borderColor: "#2e08cc",
          color: "#2e08cc",
        },
      }}
    >
      Sign Up
    </Button>

    <Button
      variant="contained"
      sx={{
        width: 114,
        height: 25,
        backgroundColor: "black",
        color: "white",
        fontSize: 12,
        fontWeight: 600,
        borderRadius: "6px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#333",
        },
      }}
    >
      Contact Us
    </Button>
  </Box>
</Toolbar>

    </AppBar>
  );
}
