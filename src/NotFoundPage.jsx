import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full screen height
        textAlign: "center",
        backgroundColor: "#f5f5f5", // Light gray background
        padding: "16px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "80px", sm: "120px" },
          fontWeight: "bold",
          color: "#ff6b6b",
          marginBottom: "16px",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "20px", sm: "28px" },
          color: "#333",
          marginBottom: "24px",
        }}
      >
        Oops! The page you are looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          padding: { xs: "8px 16px", sm: "12px 24px" },
          fontSize: { xs: "14px", sm: "16px" },
          borderRadius: "8px",
        }}
        onClick={() => navigate(-1)} // Navigates to the previous route
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
