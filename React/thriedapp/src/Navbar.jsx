import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        boxShadow: 4,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo + App Name */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <RocketLaunchIcon sx={{ fontSize: 32, color: "#38bdf8" }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#fff",
            }}
          >
            Reactify
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <NavButton to="/">Home</NavButton>
          <NavButton to="/about">About</NavButton>

          {/* Dropdown */}
          <Button
            onMouseEnter={handleOpen}
            onClick={handleOpen}
            endIcon={<KeyboardArrowDownIcon />}
            sx={navBtnStyle}
          >
            Services
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            PaperProps={{
              sx: {
                backgroundColor: "#1e293b",
                borderRadius: 2,
                mt: 1,
                animation: "fadeIn 0.3s ease-in-out",
              },
            }}
          >
            <MenuItem component={Link} to="/services/web" sx={menuItemStyle}>
              Web Development
            </MenuItem>
            <MenuItem component={Link} to="/services/react" sx={menuItemStyle}>
              React Development
            </MenuItem>
            <MenuItem component={Link} to="/services/uiux" sx={menuItemStyle}>
              UI / UX Design
            </MenuItem>
          </Menu>

          <NavButton to="/products">Products</NavButton>
          <NavButton to="/blog">Blog</NavButton>
          <NavButton to="/contact">Contact</NavButton>

          {/* Login Button */}
          <Button
            component={Link}
            to="/login"
            sx={{
              ml: 2,
              backgroundColor: "#38bdf8",
              color: "#0f172a",
              fontWeight: "bold",
              px: 3,
              borderRadius: 2,
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#0ea5e9",
                transform: "scale(1.05)",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

/* Reusable Nav Button */
function NavButton({ to, children }) {
  return (
    <Button
      component={Link}
      to={to}
      sx={navBtnStyle}
    >
      {children}
    </Button>
  );
}

const navBtnStyle = {
  color: "#e5e7eb",
  fontSize: "15px",
  textTransform: "none",
  position: "relative",
  transition: "0.3s",
  "&:hover": {
    color: "#38bdf8",
    transform: "translateY(-2px)",
  },
};

const menuItemStyle = {
  color: "#e5e7eb",
  "&:hover": {
    backgroundColor: "#334155",
    color: "#38bdf8",
  },
};

export default Navbar;
