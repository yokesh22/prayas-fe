import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { EventHighlightsSection } from "../../PrivacyPolicy/screens/sections/EventHighlightsSection";
import { VisitorDetailsSection } from "../../Registration/screens/sections/VisitorDetailsSection";

export const TermsConditions = (): JSX.Element => {
  // Terms and conditions sections
  const sections = [
    {
      id: 1,
      title: "Eligibility",
      content: [
        "• Participants must be 4-Year-old or have parental/guardian consent.",
        "• Registration is open to individuals, farmers, agricultural businesses, and institutions.",
      ],
    },
    {
      id: 2,
      title: "Registration",
      content: [
        "• All participants must complete the registration form accurately and truthfully.",
        "• Registration is confirmed only upon receipt of a confirmation email or message.",
        "• The organizers reserve the right to reject or cancel any registration at their discretion.",
      ],
    },
    {
      id: 3,
      title: "Event Participation",
      content: [
        "• Participants must comply with all event rules, safety protocols, and instructions from organizers.",
        "• Any form of misconduct, misrepresentation, or violation of rules may result in disqualification or removal from the event.",
      ],
    },
    {
      id: 4,
      title: "Fees & Refunds",
      content: [
        "• Registration fees must be paid in full before the event.",
        "• Fees are non-refundable unless the event is cancelled by the organizers.",
        "• Fee will be refunded to source account in 10 days.",
      ],
    },
    {
      id: 5,
      title: "Intellectual Property",
      content: [
        "• By participating, you grant the organizers the right to use photographs, videos, and other media captured during the event for promotional purposes.",
        "• Any materials submitted (e.g., crop samples, presentations) remain the intellectual property of the participant, unless otherwise agreed.",
      ],
    },
    {
      id: 6,
      title: "Liability",
      content: [
        "• The organizers are not responsible for any personal injury, loss, or damage to property during the event.",
        "• Participants attend and participate at their own risk.",
      ],
    },
    {
      id: 7,
      title: "Modifications",
      content: [
        "• The organizers reserve the right to modify the event schedule, rules, or terms at any time. Updates will be communicated via official channels.",
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
      }}
    >
      <EventHighlightsSection />

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
          <Box sx={{ mb: 4, position:"relative" ,top:"50px" }}>
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
                TERMS & CONDITIONS
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
              By registering for the CB Crop Show ("PRAYASH"), you agree to abide
              by the following Terms and Conditions. Please read them carefully.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, pt: 5 }}>
            {sections.map((section) => (
              <Box key={section.id}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  {section.id}. {section.title}
                </Typography>
                {section.content.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ mb: 1, pl: 2 }}
                  >
                    {item}
                  </Typography>
                ))}
                {section.id < sections.length && (
                  <Divider sx={{ mt: 2 }} />
                )}
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>

      <Box sx={{ mt: "auto" }}>
        <VisitorDetailsSection />
      </Box>
    </Box>
  );
};