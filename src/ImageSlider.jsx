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
    arrows: true, // Show prev/next arrows,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px", // Adjust the vertical position
          width: "100%", // Center the dots horizontally
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px", padding: "0px", color: "red" }}>{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots", // Optional: Add a custom class for further styling
  };

  // Sample images
  const images = [
    {
      src: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",

      alt: "Slide 1",
      caption: "This is the first slide.",
    },
    {
      src: "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 2",
      caption: "This is the second slide.",
    },
    {
      src: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Slide 3",
      caption: "This is the third slide.",
    },
  ];

  return (
    <Box
      sx={{
        padding: "0px",
        position: "relative",
        top: { xs: "55px" },
        marginBottom: "55px",
        overflow: "hidden", // Prevent horizontal overflow
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: "relative", textAlign: "center" }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                // borderRadius: "8px",
                height: "450px",
                backgroundPosition: "center", // Centers the image
                backgroundSize: "cover", // Ensures the image covers the entire box
                backgroundRepeat: "no-repeat", // Prevents repetition of the image
                backgroundAttachment: "fixed", // Fixes the background image while scrolling
                objectFit: "cover", // Fixes the
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                position: "absolute",
                bottom: "50px",
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
