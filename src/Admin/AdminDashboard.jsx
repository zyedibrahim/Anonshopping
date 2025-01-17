import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu,
  Dashboard,
  ShoppingCart,
  People,
  Settings,
} from "@mui/icons-material";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminOrder from "./AdminOrder";
import NotFoundPage from "../NotFoundPage";
const AdminDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const menuItems = [
    {
      text: "Dashboard",
      path: "/AnnonShopping/Admin/Dashboard",
      icon: <Dashboard />,
    },
    {
      text: "Orders",
      path: "/AnnonShopping/Admin/Dashboard/Orders",
      icon: <ShoppingCart />,
    },
    {
      text: "Users",
      path: "/AnnonShopping/Admin/Dashboard/Users",
      icon: <People />,
    },
    {
      text: "Settings",
      path: "/AnnonShopping/Admin/Dashboard/Settings",
      icon: <Settings />,
    },
  ];

  return (
    <Box sx={{ display: "flex", padding: "100px 20px" }}>
      <CssBaseline />
      {/* App Bar */}
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
          )}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, marginLeft: { xs: "0px", sm: "250px" } }}
          >
            Admin Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Drawer) */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main,
            color: "white",
          },
        }}
        variant={isMobile ? "temporary" : "permanent"} // For mobile, it's temporary
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(2),
            height: 64,
            cursor: "pointer",
          }}
        >
          Admin Dashboard
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <Button
              onClick={() => {
                console.log("Navigating to", item.path); // Debug to confirm the path
                navigate(item.path); // Use the correct path
              }}
              key={index}
            >
              <ListItem>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "white" }} />
              </ListItem>
            </Button>
          ))}
        </List>
      </Drawer>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/Dashboard" element={<AdminHome />} />
        <Route path="/Dashboard/Orders" element={<AdminOrder />} />
        <Route path="/Dashboard/Users" element={<div>Users Page</div>} />
        <Route path="/Dashboard/Settings" element={<div>Settings Page</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
};

export default AdminDashboard;
