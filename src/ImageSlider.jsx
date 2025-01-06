import React from "react";
import Slider from "react-slick"; // Import react-slick
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Optional: slick-carousel theme

const ImageSlider = () => {
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed (ms)
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // Auto-scroll speed (ms)
    arrows: true, // Show prev/next arrows
  };

  // Sample images
  const images = [
    {
      src: "https://via.placeholder.com/800x400?text=Slide+1",
      alt: "Slide 1",
      caption: "This is the first slide.",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+2",
      alt: "Slide 2",
      caption: "This is the second slide.",
    },
    {
      src: "https://via.placeholder.com/800x400?text=Slide+3",
      alt: "Slide 3",
      caption: "This is the third slide.",
    },
  ];

  return (
    <Box sx={{ height: "200px", padding: "0px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Image Slider
      </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: "relative", textAlign: "center" }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              {image.caption}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
