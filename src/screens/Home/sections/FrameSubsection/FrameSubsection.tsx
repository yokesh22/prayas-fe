import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

// Data for the cards to enable mapping
const expectationCards = [
  {
    id: 1,
    image: "https://c.animaapp.com/JdgpojVL/img/image@2x.png",
    title: "Live Crop Demonstrations",
    description:
      "See over 200 varieties of crops growing live under structured conditions.",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/JdgpojVL/img/image-1@2x.png",
    title: "Meet the\nExperts",
    description:
      "Agronomists and seed scientists sharing practical insights on the field.",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/JdgpojVL/img/image-2@2x.png",
    title: "Product\nLaunches",
    description: "Unveil and discover the newest agricultural innovations.",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/JdgpojVL/img/image-3@2x.png",
    title: "Curated Exhibition Zones",
    description: "Segmented domes showcasing optimized hybrid varieties.",
  },
  {
    id: 5,
    image: "https://c.animaapp.com/JdgpojVL/img/image-4@2x.png",
    title: "Networking Opportunities",
    description:
      "With over 5,000 farmers and 50+ agri-brands expected to attend.",
  },
];

export const FrameSubsection = (): JSX.Element => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'));

  // Determine number of columns based on screen size
  const getColumnCount = () => {
    if (isExtraSmall) return 1;
    if (isSmall) return 2;
    if (isMedium) return 3;
    return 5; // Default to 5 columns on large screens
  };

  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (isExtraSmall) return "100%";
    if (isSmall) return "232px";
    return "232px";
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffcb13",
        py: { xs: 5, md: 7.5 },
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Stack spacing={{ xs: 3, md: 5 }} alignItems="center">
          <Typography
            variant="h1"
            align="center"
            color="text.primary"
            sx={{
              fontFamily: "var(--heading-font-family)",
              fontSize: { xs: "32px", md: "var(--heading-font-size)" },
              fontWeight: "var(--heading-font-weight)",
              letterSpacing: "var(--heading-letter-spacing)",
              lineHeight: "var(--heading-line-height)",
              fontStyle: "var(--heading-font-style)",
              mb: { xs: 1, md: 2 },
            }}
          >
            WHAT TO EXPECT
          </Typography>

          <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            {expectationCards.map((card) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                lg={12 / getColumnCount()} 
                key={card.id}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Card
                  sx={{
                    width: getCardWidth(),
                    maxWidth: { xs: "100%", sm: 232 },
                    height: { xs: 300, sm: 340 },
                    position: "relative",
                    borderRadius: "7.73px",
                    boxShadow: "none",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "7.73px",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: "7.73px",
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                      },
                    }}
                  />
                  <CardContent
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 2.25,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "var(--subheading-font-family)",
                          fontSize: { xs: "18px", sm: "var(--subheading-font-size)" },
                          fontWeight: "var(--subheading-font-weight)",
                          letterSpacing: "var(--subheading-letter-spacing)",
                          lineHeight: "var(--subheading-line-height)",
                          fontStyle: "var(--subheading-font-style)",
                          color: "var(--variable-collection-content-light)",
                          whiteSpace: "pre-line",
                          height: { xs: "auto", sm: "50.27px" },
                          mt: "-0.77px",
                          mb: { xs: 1, sm: 0 },
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "var(--body-font-family)",
                          fontSize: { xs: "14px", sm: "var(--body-font-size)" },
                          fontWeight: "var(--body-font-weight)",
                          letterSpacing: "var(--body-letter-spacing)",
                          lineHeight: "var(--body-line-height)",
                          fontStyle: "var(--body-font-style)",
                          color: "var(--variable-collection-content-light)",
                          height: { xs: "auto", sm: "80px" },
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};
