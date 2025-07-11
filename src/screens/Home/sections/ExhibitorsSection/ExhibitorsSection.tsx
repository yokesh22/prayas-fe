import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export const ExhibitorsSection = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Testimonial data
  const testimonial = {
    quote:
      '"Prayas gave us access to thousands of serious farmers we had 100+ leads in just 3 days"',
    author: "— Amit Verma",
    position: "Senior Manager | ",
    company: "AgriCo Seed",
    image: "https://c.animaapp.com/JdgpojVL/img/ellipse-5@2x.png",
  };

  // Pagination dots data
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "40px 20px", md: "60px 231px" },
        backgroundImage:
          "url(https://c.animaapp.com/JdgpojVL/img/frame-34.png)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        width: "100%",
        height: { xs: "auto", md: "427px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "36px",
          maxWidth: { xs: "372px", md: "963px" },
          width: "100%",
        }}
      >
        {isMobile ? (
          // Mobile layout
          <Stack alignItems="center" justifyContent="center" spacing={7.5}>
            <FormatQuoteIcon
              sx={{
                color: "#FFCC00",
                fontSize: 60,
                transform: "scaleX(1.5)",
              }}
            />

            <Stack width="100%" alignItems="center" spacing={3}>
              <Box
                component="img"
                src={testimonial.image}
                alt="Profile"
                sx={{
                  width: 153,
                  height: 153,
                  borderRadius: "50%",
                }}
              />

              <Stack width="100%" spacing={2} alignItems="center">
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    fontFamily: "'Funnel Sans', Helvetica",
                    fontSize: "1.25rem",
                    lineHeight: "normal",
                    textAlign: "center",
                    maxWidth: "268px",
                  }}
                >
                  {testimonial.quote}
                </Typography>

                <Stack spacing={1} alignItems="center">
                  <Typography
                    variant="h6"
                    color="white"
                    sx={{
                      fontFamily: "'Funnel Sans', Helvetica",
                      fontSize: "1.125rem",
                      lineHeight: "normal",
                    }}
                  >
                    {testimonial.author}
                  </Typography>

                  <Typography
                    color="white"
                    sx={{
                      fontFamily: "'Funnel Sans', Helvetica",
                      fontSize: "1rem",
                      lineHeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    <Box component="span">{testimonial.position}</Box>
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.company}
                    </Box>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          // Desktop layout
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={7.5}
            sx={{ width: "100%" }}
          >
            <Box
              component="img"
              src="https://c.animaapp.com/JdgpojVL/img/-.svg"
              alt="Quote icon"
              sx={{ width: "58.53px", height: "39.96px" }}
            />

            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="center"
              spacing={9.375}
              sx={{ width: "100%" }}
            >
              <Box
                component="img"
                src={testimonial.image}
                alt="Profile"
                sx={{ width: "153px", height: "153px" }}
              />

              <Stack spacing={4} sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "'Funnel_Sans', Helvetica",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "32px",
                    lineHeight: "normal",
                  }}
                >
                  {testimonial.quote}
                </Typography>

                <Stack spacing={2} sx={{ width: "224px" }}>
                  <Typography
                    sx={{
                      fontFamily: "'Funnel_Sans', Helvetica",
                      fontWeight: 400,
                      color: "white",
                      fontSize: "18px",
                      lineHeight: "normal",
                    }}
                  >
                    {testimonial.author}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'Funnel_Sans', Helvetica",
                      fontWeight: 400,
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "normal",
                    }}
                  >
                    <span>{testimonial.position}</span>
                    <span style={{ fontWeight: 700 }}>{testimonial.company}</span>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        )}

        <Stack direction="row" spacing={3} alignItems="center">
          {paginationDots.map((dot, index) => (
            <Box
              key={index}
              sx={{
                width: dot.active ? "19px" : "13px",
                height: dot.active ? "19px" : "13px",
                backgroundColor: "#d9d9d9",
                borderRadius: "50%",
                opacity: dot.active ? 1 : 0.3,
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
