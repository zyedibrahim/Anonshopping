import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, TextField, Typography } from "@mui/material";
function CheckOutPage() {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart, "checked out");
  return (
    <Box sx={{ padding: { xs: "0px 0px", md: "0px 80px" } }}>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <Box>Cart</Box>

        <Box>Information</Box>
        <Box>Shopping</Box>
        <Box>Payment</Box>
      </Box>

      <Grid
        sx={{
          justifyContent: { xs: "center", md: "start", lg: "start" },
          gap: { xs: "50px", md: "0px", lg: "0px" },
        }}
        container
      >
        <Grid sx={{}} item xs={11} md={6}>
          <Box>
            <Typography>Contact Information</Typography>
            <Box sx={{}}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Box>
            <Typography>Shipping Address</Typography>
            <Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  defaultValue="India"
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Pincode"
                  variant="outlined"
                />
              </Box>
              <Button variant="contained" fullWidth>
                Add
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid sx={{}} item xs={11} md={6}>
          <Box sx={{ padding: "0px 50px" }}>
            <Box sx={{ marginBottom: "50px" }}>
              {cart?.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    display: "flex",
                    height: "100px",
                    width: "inherit",
                    marginBottom: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 100,
                      backgroundAttachment: "center",
                      height: "200px",
                    }}
                    image={item?.pd_img}
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h6">
                        {item?.pd_name}
                      </Typography>

                      <Typography variant="div" component="div">
                        Quantity {item?.pd_tqty}{" "}
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
                    ></Box>
                  </Box>
                </Card>
              ))}
            </Box>

            <Box display="flex" flexDirection="column" gap="20px">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="secondary" sx={{ fontSize: "18px" }}>
                  SubTotal:
                </Typography>
                <Typography color="secondary" sx={{ fontSize: "18px" }}>
                  {" "}
                  {cart?.reduce(
                    (acc, item) => acc + item?.pd_price * item?.pd_tqty,
                    0
                  )}{" "}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="secondary" sx={{ fontSize: "18px" }}>
                  Shipping
                </Typography>
                <Typography color="secondary" sx={{ fontSize: "18px" }}>
                  70
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="secondary" sx={{ fontSize: "18px" }}>
                  Total:
                </Typography>
                <Typography color="secondary" sx={{ fontSize: "18px" }}>
                  {" "}
                  {cart?.reduce(
                    (acc, item) => acc + item?.pd_price * item?.pd_tqty,
                    0
                  )}{" "}
                  /-
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckOutPage;
