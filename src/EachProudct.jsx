import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./data";
import { useTheme } from "@mui/material";
import { Transform } from "@mui/icons-material";
import { red } from "@mui/material/colors";
export default function EachProudct() {
  const { id } = useParams();
  const [Product, SetProduct] = useState();
  const theme = useTheme();
  const trigger = () => {
    // Use `find` to get the product with the matching id
    const selectedProduct = API.find((item) => item._id === id);
    SetProduct(selectedProduct); // Set the product state with the selected product
    console.log(Product, "triggers");
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
              flexDirection: { xs: "row", sm: "row", md: "column" },
              gap: "5px",
              justifyContent: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                component="img"
                src={Product?.pd_img}
              />
            </Box>
            <Box
              sx={{
                width: "80px",
                height: "80px",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                component="img"
                src={Product?.pd_img}
              />
            </Box>
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
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
              component="img"
              src={Product?.pd_img}
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
            <Button sx={{ width: "130px" }} variant="contained">
              Add to Cart
            </Button>
            <Button sx={{ width: "130px" }} variant="contained">
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
