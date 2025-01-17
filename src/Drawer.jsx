import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Home", "About", "Products", "ContactUs"];
import Cartcomp from "./Cartcomp";
import { useNavigate } from "react-router-dom";

const Drawercomp = () => {
  const navigate = useNavigate();
  const [opnedrawer, Setopenndrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: "50%", // Set the drawer's width
          },
        }}
        open={opnedrawer}
        onClose={() => Setopenndrawer(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          AnnonShopping
        </Box>
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              onClick={() => {
                Setopenndrawer(false);
                navigate(page); // Navigate to the corresponding page when clicked
              }}
              key={index}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "black" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => Setopenndrawer(!opnedrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>{" "}
    </React.Fragment>
  );
};
export default Drawercomp;
