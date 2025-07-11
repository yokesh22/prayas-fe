import { Box } from "@mui/material";
import React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

export const ImageComponent = ({ 
  src, 
  alt, 
  width, 
  height, 
  onClick 
}: ImageComponentProps): JSX.Element => {
  return (
    <Box 
      sx={{ 
        width: width || 281, 
        height: height || 167,
        overflow: "hidden",
        borderRadius: "4px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
        }
      }}
      onClick={onClick}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)"
          }
        }}
      />
    </Box>
  );
};
