import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Drawercomp from "./Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cartcomp from "./Cartcomp";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navdata = ["Home", "About", "Products", "Contact us"];
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <Box>
      <AppBar position="fixed" sx={{}}>
        <Toolbar>
          <Typography>Annonshopping</Typography>
          {isMatch ? (
            <Drawercomp />
          ) : (
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="light"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {navdata.map((ele, index) => (
                <Tab key={index} textcolor="white" label={ele} />
              ))}
            </Tabs>
          )}
          <Cartcomp />
        </Toolbar>
      </AppBar>

      {/* Spacer below AppBar */}
      <Box sx={{ height: "100px" }} />
    </Box>
  );
};

export default Navbar;
