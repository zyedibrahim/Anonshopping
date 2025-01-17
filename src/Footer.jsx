import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        padding: "40px 20px",
        mt: "auto",
      }}
    >
      {/* Footer Grid */}
      <Grid container spacing={4}>
        {/* Shop Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Annon Shopping
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
            Your one-stop destination for clothes, accessories, shoes, and
            electronics. Shop high-quality products and enjoy amazing offers.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <a
              href="#about"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              About Us
            </a>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contact Us
            </a>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <a href="#faq" style={{ color: "inherit", textDecoration: "none" }}>
              FAQs
            </a>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <a
              href="#privacy"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Privacy Policy
            </a>
          </Typography>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
            Subscribe to our newsletter to get the latest updates and exclusive
            offers.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: "10px" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your Email"
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "4px",
                "& input": { padding: "8px" },
              }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#ff9800", color: "#fff" }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
            Connect with us on social media and stay updated.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: "10px" }}>
            <IconButton
              href="https://facebook.com"
              sx={{ color: "#ffffff", backgroundColor: "#3b5998" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              sx={{ color: "#ffffff", backgroundColor: "#1da1f2" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              sx={{ color: "#ffffff", backgroundColor: "#c13584" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              sx={{ color: "#ffffff", backgroundColor: "#0077b5" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          mt: 5,
          textAlign: "center",
          borderTop: "1px solid #555555",
          pt: 2,
          fontSize: "14px",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Annon Shopping. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
