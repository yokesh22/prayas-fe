import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";

// Data for stall prices to enable mapping
const stallPrices = [
  {
    id: 1,
    size: "3m x 3m",
    price: "₹21,000",
    tax: "+ GST (18%)",
  },
  {
    id: 2,
    size: "4m x 3m",
    price: "₹28,000",
    tax: "+ GST (18%)",
  },
];

export const StallPricesSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 10 },
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.73) 0%, rgba(0,0,0,0.73) 100%), url(https://c.animaapp.com/mcwvg0grSIsRNR/img/frame-85.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"
        sx={{ width: "100%", maxWidth: "1280px" }}
      >
        <Typography
          variant="h1"
          color="text.secondary"
          align="center"
          sx={{
            fontFamily: "var(--heading-font-family)",
            fontSize: "var(--heading-font-size)",
            fontWeight: "var(--heading-font-weight)",
            letterSpacing: "var(--heading-letter-spacing)",
            lineHeight: "var(--heading-line-height)",
            fontStyle: "var(--heading-font-style)",
          }}
        >
          STALL PRICES
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
          flexWrap={{ xs: "nowrap", sm: "wrap" }}
        >
          {stallPrices.map((stall) => (
              <Box
                key={stall.id}
                sx={{
                  width: { xs: "100%", sm: 373 },
                  padding: "29px 21px",
                  backgroundColor: "#ffcb13",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  mb: { xs: 0, sm: 2 }
                }}
              >
              <Stack alignItems="center" spacing={1.5}>
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  color="text.primary"
                  sx={{ mt: "-1px", fontSize: 32 }}
                >
                  {stall.size}
                </Typography>
                <Divider
                  sx={{
                    width: 47,
                    height: 2,
                    backgroundColor: "#7a4f29",
                    borderRadius: 4,
                  }}
                />
              </Stack>

              <Stack alignItems="center">
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ mt: "-1px", textAlign: "center" }}
                >
                  Cost
                </Typography>
                <Stack alignItems="center">
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    color="text.primary"
                    sx={{ mt: "-1px", fontSize: 44, textAlign: "center" }}
                  >
                    {stall.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    sx={{ textAlign: "center" }}
                  >
                    {stall.tax}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
