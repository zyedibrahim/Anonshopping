import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTocart } from "./features/CartSlice";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

const Cartcomp = () => {
  const theme = useTheme();
  const [Qut, SetQut] = useState(1);
  const [opnedrawer, Setopenndrawer] = useState(false);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const IncQutChange = (id, increment) => {
    const updatedCart = cart.map((item) =>
      item._id === id
        ? { ...item, pd_tqty: Math.min(9, item.pd_tqty || 0) + increment }
        : item
    );
    dispatch(addTocart(updatedCart)); // Update the Redux state
    console.log(cart);
  };
  const DecQutChange = (id, increment) => {
    const updatedCart = cart.map((item) =>
      item._id === id
        ? { ...item, pd_tqty: Math.max(2, item.pd_tqty || 0) - increment }
        : item
    );
    dispatch(addTocart(updatedCart)); // Update the Redux state
    console.log(cart);
  };

  const deleteitem = (cartdata) => {
    const del = cart?.filter((item) => item?._id !== cartdata?._id);
    dispatch(addTocart(del));
  };
  const location = useLocation();
  const hideCartOnRoutes = ["/AnnonShopping/CheckOut"]; // Add the routes where you want to hide the cart
  const shouldHideCart = hideCartOnRoutes.includes(location.pathname);

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        sx={{
          "& .MuiDrawer-paper": {
            xl: { width: "30%" },
            lg: { width: "30%" },
            md: { width: "40%" },
            sm: { width: "60%" },
            xs: { width: "78%" },
          },
        }}
        open={opnedrawer}
        onClose={() => Setopenndrawer(false)}
      >
        <Box>
          <Typography sx={{ textAlign: "center", margin: "20px 5px" }}>
            Annon Shopping
          </Typography>
        </Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(2),
            gap: "5px",
          }}
        >
          {cart?.length > 0 ? (
            cart.map((item, index) => (
              <ListItem sx={{}} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    height: "inherit",
                    width: "inherit",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={item?.pd_img}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h6">
                        {item?.pd_name}
                      </Typography>

                      <Typography
                        variant="div"
                        component="div"
                        sx={{
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <IconButton
                          onClick={() => DecQutChange(item._id, 1)}
                          sx={{
                            backgroundColor: "rgb(195, 190, 190)",
                            borderRadius: "80%",
                            height: "30px",
                            width: "30px",
                            textAlign: "center",
                            paddingTop: "6px",
                          }}
                        >
                          -
                        </IconButton>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ color: "text.secondary" }}
                        >
                          {item?.pd_tqty}
                        </Typography>

                        <IconButton
                          onClick={() => {
                            IncQutChange(item._id, 1);
                          }}
                          sx={{
                            backgroundColor: "rgb(195, 190, 190)",
                            borderRadius: "80%",
                            height: "30px",
                            width: "30px",
                            textAlign: "center",
                            paddingTop: "11px",
                          }}
                        >
                          +
                        </IconButton>
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: "text.primary" }}
                      >
                        Rs: {item?.pd_price}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <Button
                        onClick={() => {
                          deleteitem(item);
                        }}
                        color="error"
                        variant="contained"
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => {
                          console.log(cart, "current value");
                        }}
                        color="error"
                        variant="contained"
                      >
                        check
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </ListItem>
            ))
          ) : (
            <ListItemText>No items in the cart</ListItemText>
          )}

          {cart.length > 0 ? (
            <div>
              <ListItem>
                <Box
                  sx={{
                    display: "flex",

                    justifyContent: "center",
                    gap: "200px",
                    marginBottom: "10px",
                  }}
                >
                  <Typography variant="h6">Total:</Typography>
                  <Typography variant="h6" sx={{ color: "text.primary" }}>
                    {" "}
                    {cart?.reduce(
                      (acc, item) => acc + item?.pd_price * item?.pd_tqty,
                      0
                    )}{" "}
                    / -
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => navigate("/AnnonShopping/CheckOut")}
                  fullWidth
                  size="large"
                  variant="contained"
                >
                  Checkout
                </Button>
              </ListItem>
            </div>
          ) : null}
        </List>
      </Drawer>

      {!shouldHideCart && (
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => Setopenndrawer(!opnedrawer)}
        >
          <ShoppingCartIcon />
          Cart
        </Button>
      )}
    </React.Fragment>
  );
};
export default Cartcomp;
