import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";

// Contact information data
const contactInfo = {
  name: "Deeshant Rathod",
  phone: "7974493573",
  email: "cbinternational91@gmail.com",
};

// Note information data
const noteInfo = [
  "Note:",
  "",
  "Stall allocation on first-come",
  "First-served basis",
  "Full payment required to confirm booking",
  "Limited stalls available",
];

export const ExhibitorsSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: "60px" },
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.77) 0%, rgba(0,0,0,0.77) 100%), url(https://c.animaapp.com/mcwvg0grSIsRNR/img/frame-87.png)`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
      }}
    >
      <Stack width="100%" maxWidth="1440px" alignItems="center" spacing={4}>
        <Typography
          variant="h1"
          color="text.secondary"
          textAlign="center"
          sx={{
            fontFamily: "var(--heading-font-family)",
            fontSize: "var(--heading-font-size)",
            fontWeight: "var(--heading-font-weight)",
            letterSpacing: "var(--heading-letter-spacing)",
            lineHeight: "var(--heading-line-height)",
            fontStyle: "var(--heading-font-style)",
          }}
        >
          FOR BOOKINGS
        </Typography>

        <Stack width="100%" maxWidth="900px" alignItems="center" spacing={6}>
          <Stack
            width="100%"
            maxWidth="336px"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{
                fontFamily: "var(--body-font-family)",
                fontSize: "var(--body-font-size)",
                fontWeight: "var(--body-font-weight)",
                letterSpacing: "var(--body-letter-spacing)",
                lineHeight: "var(--body-line-height)",
                fontStyle: "var(--body-font-style)",
              }}
            >
              {contactInfo.name}
              <br />
              Phone/WhatsApp: {contactInfo.phone}
              <br />
              Email: {contactInfo.email}
            </Typography>

            <Button
              variant="outlined"
              startIcon={<FileDownloadOutlinedIcon />}
              sx={{
                height: "40px",
                borderRadius: "8px",
                border: "1px solid #ffcb13",
                color: "#ffcb13",
                fontWeight: 800,
                padding: "9px 16px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              EXHIBITOR BROCHURE
            </Button>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: "360px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{
                fontFamily: "var(--body-font-family)",
                fontSize: "var(--body-font-size)",
                fontWeight: "var(--body-font-weight)",
                letterSpacing: "var(--body-letter-spacing)",
                lineHeight: "var(--body-line-height)",
                fontStyle: "var(--body-font-style)",
              }}
            >
              {noteInfo.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
};
