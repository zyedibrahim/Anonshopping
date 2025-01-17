import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawercomp from "./Drawer";
import Cartcomp from "./Cartcomp";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const Navbar = () => {
  const navdata = ["Home", "About", "Products", "Contactus"];
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"]; // Example categories

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null); // State for controlling the dropdown menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to reset value when navigating to a different page not in navdata
  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    if (!navdata.includes(currentPath)) {
      setValue(null); // Reset the value if not in navdata
    }
  }, [location.pathname]);

  // Handle mouse hover over Products tab to show the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor element when hovering over Products
  };

  // Handle closing the dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>Annonshopping</Typography>

          {isMatch ? (
            <Drawercomp />
          ) : (
            <Tabs
              sx={{
                marginLeft: "auto",
                "& .MuiTabs-indicator": {
                  backgroundColor: "rgb(75, 50, 237)", // Custom indicator color
                },
              }}
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {navdata.map((ele, index) => (
                <Tab
                  onClick={() => navigate(`AnnonShopping/${ele}`)}
                  key={index}
                  sx={{ color: "white" }}
                  label={ele}
                  value={index}
                  onMouseEnter={ele === "Products" ? handleMenuOpen : undefined} // Show dropdown on hover over Products
                />
              ))}
            </Tabs>
          )}
          <Cartcomp />
        </Toolbar>
      </AppBar>

      {/* Dropdown Menu for Products */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          onMouseLeave: handleMenuClose, // Close the dropdown if mouse leaves the menu
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#fff", // Customize dropdown background color
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Dropdown shadow
          },
        }}
      >
        {categories.map((category, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              // Navigate to category-specific route or handle category action
              navigate(`/AnnonShopping/Products/${category}`);
              handleMenuClose(); // Close the dropdown after selecting a category
            }}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Navbar;
