import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./data";
import { useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTocart } from "./features/CartSlice";
export default function EachProudct() {
  const { id } = useParams();
  const [Product, SetProduct] = useState();
  const theme = useTheme();
  const [ImageSel, SetImageSel] = useState();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();
  const Addtocart = (cartdata) => {
    const isItemInCart = cart.some((item) => item._id === cartdata._id); // Check if the item is already in the cart
    if (!isItemInCart) {
      // Add `pd_tqty: 1` to the new item and update the cart
      const newCartItem = { ...cartdata, pd_tqty: Number(1) };
      dispatch(addTocart([...cart, newCartItem]));

      console.log(cart, "cartitem triggers form homepage");
    } else {
      // If the item already exists in the cart, update its price
      const updatedCart = cart.map((item) =>
        item._id === id
          ? { ...item, pd_tqty: Math.min(9, item.pd_tqty || 1) + 1 }
          : item
      );
      dispatch(addTocart(updatedCart));
      console.log("Updated item price in cart:", updatedCart);
    }
  };

  const CheckOut = (cartdata) => {
    const isItemInCart = cart.some((item) => item._id === cartdata._id); // Check if the item is already in the cart
    if (!isItemInCart) {
      // Add `pd_tqty: 1` to the new item and update the cart
      const newCartItem = { ...cartdata, pd_tqty: Number(1) };
      dispatch(addTocart([...cart, newCartItem]));
      navigate("/AnnonShopping/CheckOut");
      console.log(cart, "eachproduct triggers form homepage");
    } else {
      // If the item already exists in the cart, update its price
      const updatedCart = cart.map((item) =>
        item._id === id
          ? { ...item, pd_tqty: Math.min(9, item.pd_tqty || 1) + 1 }
          : item
      );
      dispatch(addTocart(updatedCart));
      navigate("/AnnonShopping/CheckOut");
    }
  };

  const trigger = () => {
    // Use `find` to get the product with the matching id
    const selectedProduct = API.find((item) => item._id === id);
    SetProduct(selectedProduct); // Set the product state with the selected product
    SetImageSel(selectedProduct?.pd_img[0]); // Update ImageSel when Product is set

    console.log(Product?.pd_img, "triggers");
  };

  useEffect(() => {
    trigger(); // Trigger data fetching when the component mounts or when `id` changes
  }, [id]); // Add `id` as a dependency so it triggers when the `id` changes

  if (!Product) {
    return <div>Loading...</div>; // Show loading state while the product is being fetched
  }

  return (
    <Box
      sx={{
        marginTop: "100px",
      }}
    >
      {/* container for Each product  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          // backgroundColor: "red",
          margin: "0 30px",
        }}
      >
        {/* image box */}
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            },
            justifyContent: { md: "center" },

            // backgroundColor: "black",
          }}
        >
          {/* Preview image */}
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexDirection: {
                xs: "row",
                sm: "row",
                md: "column",
              },
              justifyContent: { xs: "center", md: "start" },

              // backgroundColor: "black",
            }}
          >
            {Product?.pd_img?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "80px",
                  height: "80px",
                  border: "2px solid rgb(155, 151, 142) ",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {},
                }}
              >
                <Box
                  onClick={() => {
                    SetImageSel(item);
                  }}
                  sx={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  component="img"
                  src={item}
                />
              </Box>
            ))}
          </Box>

          {/* main image box */}
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "500px" },
              height: "500px",
              textAlign: "center",
              // width: "500px",
              // height: "500px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "70%", md: "500px" },
                height: "500px",
                objectFit: "cover",
                backgroundPosition: "center", // Centers the image
                backgroundSize: "cover", // Ensures the image covers the entire box
                backgroundRepeat: "no-repeat", // Prevents repetition of the image
                backgroundAttachment: "fixed", // Fixes the background image while scrolling
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              component="img"
              src={ImageSel}
            />
          </Box>
        </Box>

        {/* content box */}
        <Box sx={{ marginLeft: "20px" }}>
          <Box component="h2">{Product?.pd_name}</Box>
          <Box component="h1">Price {Product?.pd_price} </Box>

          {/* product description */}
          <Box component="h3">{Product?.pd_description}</Box>

          {/* product button */}
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button
              onClick={() => Addtocart(Product)}
              sx={{ width: "130px" }}
              variant="contained"
            >
              Add to Cart
            </Button>
            <Button
              onClick={() => CheckOut(Product)}
              sx={{ width: "130px" }}
              variant="contained"
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
