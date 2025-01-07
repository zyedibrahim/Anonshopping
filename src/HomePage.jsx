import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import API from "./data";
import ImageSlider from "./ImageSlider";
import { addTocart } from "./features/CartSlice.jsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();
  const validation = (cartdata) => {
    const isItemInCart = cart.some((item) => item._id === cartdata._id); // Check if the item is already in the cart
    if (!isItemInCart) {
      // Add `pd_tqty: 1` to the new item and update the cart
      const newCartItem = { ...cartdata, pd_tqty: Number(1) };
      dispatch(addTocart([...cart, newCartItem]));

      console.log(cart, "cartitem triggers form homepage");
    } else {
      // If the item already exists in the cart, update its price
      const updatedCart = cart.map((item) =>
        item._id === cartdata._id
          ? { ...item, pd_price: item.pd_price + cartdata.pd_price }
          : item
      );
      dispatch(addTocart(updatedCart));
      console.log("Updated item price in cart:", updatedCart);
    }
  };

  const filterdata = API.filter(
    (item) =>
      item.pd_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pd_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        sx={{}}
        fullWidth
        variant="outlined"
        placeholder="Search for anything..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state with input value
      />
      <div className="grid-container">
        {filterdata.length > 0 ? (
          filterdata.map((ele, index) => (
            <Card className="grid-item " sx={{ maxWidth: 250 }} key={index}>
              <CardMedia
                onClick={() => navigate(`/AnnonShopping/Product/${ele._id}`)}
                sx={{
                  height: 300,
                  transition: "transform 0.3s ease-in-out", // Smooth transition for the zoom effect
                  "&:hover": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                }}
                image={ele?.pd_img}
                title={ele?.pd_name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {ele?.pd_name}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Rs {ele?.pd_price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    validation(ele);
                    console.log(cart, "cart triggers form homepageBUTTON");
                  }}
                  variant="contained"
                  size="small"
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography>No items match your search!</Typography>
        )}
      </div>
    </div>
  );
};

export default HomePage;
