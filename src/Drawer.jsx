import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
import Cartcomp from "./Cartcomp";

const Drawercomp = () => {
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
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => Setopenndrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
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
