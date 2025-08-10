import React from "react";
import Button from "@mui/material/Button";

export default function RoundedButton({ children, onClick, ...props }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      {...props}
      sx={{
        borderRadius: "50px",         // Rounded pill shape
        backgroundColor: "white",     // White background
        color: "black",               // Black text
        padding: "8px 20px",
        textTransform: "none",        // Keep normal text case
        boxShadow: "none",            // Remove default shadow
        transition: "all 0.3s ease",  // Smooth hover effect
        "&:hover": {
          backgroundColor: "black",   // Black background on hover
          color: "white",             // White text on hover
        },
        ...props.sx, // Allow style overrides
      }}
    >
      {children}
    </Button>
  );
}
