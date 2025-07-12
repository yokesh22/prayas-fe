import { Box, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { EventHighlightsSection } from "./sections/EventHighlightsSection";

import { VisitorDetailsSection } from "../../Registration/screens/sections/VisitorDetailsSection";

export const PrivacyPolicy = (): JSX.Element => {
  // Privacy policy sections
  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      content: [
        "We may collect the following information:",
        "• Full name, contact details (phone, email)",
        "• Address and location",
        "• Payment information",
      ],
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: [
        "Your data is used to:",
        "• Process and confirm your registration",
        "• Communicate event updates and logistics",
        "• Organize event logistics and competition categories",
        "• Improve future events and services",
      ],
    },
    {
      id: 3,
      title: "Data Sharing",
      content: [
        "We do not sell or rent your personal data. We may share your information with:",
        "• Event partners (only as necessary)",
        "• Service providers (e.g., payment processors, communication platforms)",
        "• Government authorities if legally required",
      ],
    },
    {
      id: 4,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.",
      ],
    },
    {
      id: 5,
      title: "Your Rights",
      content: [
        "You have the right to:",
        "• Access your personal data",
        "• Request correction or deletion",
        "• Withdraw consent at any time",
        "To exercise these rights, contact us at: cbinternational91@gmail.com",
      ],
    },
    {
      id: 6,
      title: "Retention",
      content: [
        "We retain your data only as long as necessary for the purposes stated above or as required by law.",
      ],
    },
    {
      id: 7,
      title: "Contact Us",
      content: [
        "For any questions about this policy or your data, please contact:",
        "📧 cbinternational91@gmail.com",
        "📞 +917974493573",
        "🏢 Chawda bagh nandanvan road chandanidih tatibandh Raipur C.g. 492099",
      ],
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        position:"relative"
      }}
    >
      <EventHighlightsSection />

      <Container   maxWidth="lg" sx={{ py: { xs: 3, md: 5 },paddingTop:"200px" }}>
        <Paper elevation={0}  sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 , paddingTop:"150px"}} >
          <Box sx={{ mb: 4, 
            position:"relative" ,top:"50px"
           }  }>
            <Box sx={{ width: "100%", height: 50, mb: 1 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  width: "100%",
                  position: "sticky",
                  top: 0,
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "primary.main",
                }}
              >
                PRIVACY POLICY
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: "black", mb: 2 }}
            >
              Effective Date: 01/07/2025
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              This Privacy Policy outlines how we collect, use, and protect your personal information during the Crop Show registration process.
            </Typography>
          </Box>

          <Stack spacing={3} sx={{ pt: 5 }}>
            {sections.map((section) => (
              <Box key={section.id}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "primary.main",
                    mb: 1.5,
                  }}
                >
                  {section.id}. {section.title}
                </Typography>
                {section.content.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ 
                      mb: 1,
                      pl: item.startsWith('•') ? 2 : 0,
                      fontWeight: index === 0 && !item.startsWith('•') ? 500 : 400
                    }}
                  >
                    {item}
                  </Typography>
                ))}
                {section.id < sections.length && (
                  <Divider sx={{ mt: 2 }} />
                )}
              </Box>
            ))}
          </Stack>
        </Paper>
      </Container>

      <Box sx={{ mt: "auto" }}>
        <VisitorDetailsSection />
      </Box>
    </Box>
  );
};