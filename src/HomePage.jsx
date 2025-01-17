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
import { addTocart } from "./features/CartSlice.jsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./ImageSlider.jsx";
// import { filterdata } from "./Navbar.jsx";
const HomePage = () => {
  // const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();

  const validation = (cartdata) => {
    const isItemInCart = cart.some((item) => item._id === cartdata._id);
    if (!isItemInCart) {
      const newCartItem = { ...cartdata, pd_tqty: Number(1) };
      dispatch(addTocart([...cart, newCartItem]));
    } else {
      const updatedCart = cart.map((item) =>
        item._id === cartdata._id
          ? { ...item, pd_price: item.pd_price + cartdata.pd_price }
          : item
      );
      dispatch(addTocart(updatedCart));
    }
  };
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input

  const filterdata = API.filter(
    (item) =>
      item.pd_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pd_description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ImageSlider />

      {/* <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for anything..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Ensures the container takes the full height of the viewport
          backgroundColor: "red", // Optional background
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 3,
            backgroundColor: "yellow",
            padding: "16px 100px 16px 100px ",
            borderRadius: 10,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            width: "80%",
            justifyContent: "center",
          }}
        >
          {filterdata.length > 0 ? (
            filterdata.map((ele, index) => (
              <Card
                sx={{
                  maxWidth: 250,
                  maxHeight: 300,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <CardMedia
                  onClick={() => navigate(`/AnnonShopping/Product/${ele._id}`)}
                  sx={{
                    height: 180,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    margin: "0 auto", // Centers the box horizontally

                    width: "125px",
                    backgroundPosition: "center", // Centers the image
                    backgroundSize: "cover", // Ensures the image covers the entire box
                    backgroundRepeat: "no-repeat", // Prevents repetition of the image
                    backgroundAttachment: "center", // Fixes the background image while scrolling
                  }}
                  image={ele?.pd_img[0]}
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
                    onClick={() => validation(ele)}
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
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
