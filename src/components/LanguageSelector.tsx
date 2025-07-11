import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, ClickAwayListener, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

export const LanguageSelector = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    handleClose();
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          width: { xs: "90px", sm: "104px" },
          height: { xs: "40px", sm: "52px" },
          padding: "8px 12px",
          borderRadius: "10px",
          border: "1px solid #12462d",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textTransform: "none",
          color: "#006731",
          "&:hover": {
            backgroundColor: "transparent",
            border: "1px solid #12462d",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "0.875rem", sm: "1.125rem" },
            color: "#006731",
            fontFamily: "'Funnel_Sans-Bold', Helvetica",
          }}
        >
          {language}
        </Typography>
        <KeyboardArrowDownIcon 
          sx={{ 
            color: "#006731", 
            fontSize: "1.125rem",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out"
          }} 
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px",
            marginTop: "4px",
            minWidth: "104px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }
        }}
      >
        <MenuItem 
          onClick={() => handleLanguageChange("English")}
          selected={language === "English"}
          sx={{ 
            fontWeight: language === "English" ? 700 : 400,
            color: "#006731",
            "&:hover": {
              backgroundColor: "rgba(0, 103, 49, 0.04)",
            }
          }}
        >
          English
        </MenuItem>
        <MenuItem 
          onClick={() => handleLanguageChange("Hindi")}
          selected={language === "Hindi"}
          sx={{ 
            fontWeight: language === "Hindi" ? 700 : 400,
            color: "#006731",
            "&:hover": {
              backgroundColor: "rgba(0, 103, 49, 0.04)",
            }
          }}
        >
          Hindi
        </MenuItem>
      </Menu>
    </Box>
  );
};
