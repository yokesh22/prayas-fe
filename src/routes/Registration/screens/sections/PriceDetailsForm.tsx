import React from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface PriceDetailsFormProps {
  visitorCount: number;
  pricePerVisitor?: number; // optional prop for flexibility
  onSubmit: () => void;

}

const PriceDetailsForm: React.FC<PriceDetailsFormProps> = ({
  visitorCount,
  pricePerVisitor = 200, // default price per visitor
    onSubmit,
}) => {
  const totalPrice = visitorCount * pricePerVisitor;
  const itemName = `Visitor Pass x ${visitorCount}`;
  const priceString = `Rs. ${totalPrice}`;

  return (
    <Paper
      elevation={0}
      sx={{
        width: "499px",
        padding: 3,
        backgroundColor: "#f2f2f2",
        borderRadius: 2,
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight={600} color="#1e1e1e">
          Price Details
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography>{itemName}</Typography>
          <Typography>{priceString}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1.5}>
          <Box
            sx={{
              width: 16,
              height: 16,
              backgroundColor: "#006731",
              borderRadius: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckIcon sx={{ width: 16, height: 16, color: "white" }} />
          </Box>
          <Typography variant="body1">
            I accept the{" "}
            <Typography
              component="span"
              fontWeight="bold"
              color="#006731"
              sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
              onClick={() => window.open("/terms-conditions", "_blank")}
            >
              Terms & Conditions
            </Typography>{" "}
            and{" "}
            <Typography
              component="span"
              fontWeight="bold"
              color="#006731"
              sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
              onClick={() => window.open("/privacy-policy", "_blank")}
            >
              Privacy Policy
            </Typography>
          </Typography>
        </Box>

        <Button
            onClick={onSubmit}
            variant="contained"
            fullWidth
            sx={{
                backgroundColor: "#ffcb13",
                color: "#12462d",
                borderRadius: 2,
                padding: 1.5,
                "&:hover": {
                backgroundColor: "#e6b700",
                },
            }}
            >
            <Typography fontWeight="bold" fontSize="18px">
                PROCEED TO PAYMENT
            </Typography>
            </Button>
      </Stack>
    </Paper>
  );
};

export default PriceDetailsForm;
