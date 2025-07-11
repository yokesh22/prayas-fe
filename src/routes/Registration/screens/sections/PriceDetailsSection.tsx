import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PriceDetailsForm from "./PriceDetailsForm"; // adjust path as needed
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegistrationSuccess from "./RegistrationSuccess";




// ------------------- Types -------------------
interface VisitorInfo {
  id: number;
  fullName: string;
  mobileNumber: string;
  email: string;
  village: string;
  pincode: string;
}



// ------------------- PriceDetailsSection -------------------
export const PriceDetailsSection: React.FC = () => {
  const [visitDate, setVisitDate] = useState<string>("28th November");
  const [visitorCount, setVisitorCount] = useState<number>(2);
  const [visitorData, setVisitorData] = useState<VisitorInfo[]>([]);
  const [isRegistrationComplete, setIsRegistrationComplete] = useState<boolean>(false);
  const [registrationResponse, setRegistrationResponse] = useState<any>(null); // to store response data
  const navigate = useNavigate();
//   const registrationResponse = {
//     "status": "success",
//     "message": "All visitors registered successfully",
//     "orderid": "1e868bbb-040a-4113-9c44-0e6b20b1a606",
//     "data": [
//         {
//             "fullName": "Yokeshwaran.S",
//             "mobileNumber": "09677524942",
//             "qrcode": "data:image/png;base64,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"
//         },
//         {
//             "fullName": "Yokeshwaran.S",
//             "mobileNumber": "09677524942",
//             "qrcode": "data:image/png;base64,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"
//         }
//     ]
// }

  // Update visitorData whenever visitorCount changes
  useEffect(() => {
    setVisitorData((prev) => {
      const newData = [...prev];
      while (newData.length < visitorCount) {
        newData.push({
          id: newData.length + 1,
          fullName: "",
          mobileNumber: "",
          email: "",
          village: "",
          pincode: "",
        });
      }
      return newData.slice(0, visitorCount); // trim if needed
    });
  }, [visitorCount]);

  // Handle input change
  const handleChange = (index: number, field: keyof VisitorInfo, value: string) => {
    setVisitorData((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, [field]: value } : item))
    );
  };

  const handleVisitorCountChange = (e: SelectChangeEvent<string>) => {
    setVisitorCount(parseInt(e.target.value, 10));
  };


  const handleSubmit = async () => {
  try {
    const payload = {
      visitDate,
      visitors: visitorData,
    };
    console.log("Payload to be sent:", payload);
    const response = await axios.post("http://localhost:5002/api/register", payload);
    // const response = await axios.post("https://prayas-api.i4ulabs.com/api/register", payload);

    if (response.status === 200) {
      // Navigate on success
      console.log("Booking successful", response.data);
      // Redirect to tickets page
      // navigate("/tickets");
      setIsRegistrationComplete(true);
      setRegistrationResponse(response.data); // Store the response data
    } else {
      // Handle error
      console.error("Booking failed", response.data);
    }
  } catch (error) {
    console.error("Submission error:", error);
  }
};


  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {!isRegistrationComplete && (
        <>
           <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 1.125,
                bgcolor: "secondary.light",
                borderRadius: "0 0 8px 8px",
                width: "100%",
              }}
            >
              <Typography variant="h3" align="center" color="text.primary">
                <Typography component="span" variant="h3" fontWeight={600}>Visit Charges : </Typography>
                <Typography component="span" variant="h3" fontWeight={800}>Rs 200</Typography>
                <Typography component="span" variant="h3">/visitor</Typography>
              </Typography>
            </Paper>

            <Grid container spacing={5.25} sx={{ width: "100%", pb: 4 }}>
              {/* Left Column */}
              <Grid item xs={12} md={8}>
                <Stack spacing={7.25}>
                  {/* Basic Details */}
                  <Card sx={{ p: 3, borderRadius: 2, border: "1px solid #d9d9d9" }}>
                    <Stack spacing={3}>
                      <Typography variant="h5" fontWeight={600}>Enter Visitor Details</Typography>

                      <Stack spacing={1}>
                        <Typography>Date of Visit</Typography>
                        <Select
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          fullWidth
                          IconComponent={KeyboardArrowDownIcon}
                          sx={{ height: "42px", borderRadius: 1 }}
                        >
                          <MenuItem value="28th November">28th November</MenuItem>
                          <MenuItem value="29th November">29th November</MenuItem>
                          <MenuItem value="30th November">30th November</MenuItem>
                        </Select>
                      </Stack>

                      <Stack spacing={1}>
                        <Typography>Number of Visitors</Typography>
                        <Select
                          value={visitorCount.toString()}
                          onChange={handleVisitorCountChange}
                          fullWidth
                          IconComponent={KeyboardArrowDownIcon}
                          sx={{ height: "42px", borderRadius: 1 }}
                        >
                          {[1, 2, 3, 4, 5].map((val) => (
                            <MenuItem key={val} value={val.toString()}>{val}</MenuItem>
                          ))}
                        </Select>
                      </Stack>
                    </Stack>
                  </Card>

                  {/* Visitor Forms */}
                  {visitorData.map((visitor, idx) => (
                    <Paper key={visitor.id} sx={{ p: 5, borderRadius: 2, border: "1px solid grey" }}>
                      <Stack spacing={3}>
                        <Typography variant="h2">Visitor {idx + 1}</Typography>
                        <Divider />

                        <TextField
                          fullWidth
                          placeholder="Enter Full Name"
                          required
                          helperText="Maximum 50 characters"
                          value={visitor.fullName}
                          onChange={(e) => handleChange(idx, "fullName", e.target.value)}
                        />

                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              placeholder="Enter Mobile Number"
                              type="tel"
                              helperText="10 digit mobile number"
                              required
                            
                              value={visitor.mobileNumber}
                              onChange={(e) => handleChange(idx, "mobileNumber", e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              placeholder="Enter Email"
                              type="email"
                              value={visitor.email}
                              onChange={(e) => handleChange(idx, "email", e.target.value)}
                            />
                          </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              placeholder="Enter Village"
                              value={visitor.village}
                              onChange={(e) => handleChange(idx, "village", e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              fullWidth
                              placeholder="Enter Pincode"
                              type="number"
                              helperText="6 digit pincode"
                              required
                              value={visitor.pincode}
                              onChange={(e) => handleChange(idx, "pincode", e.target.value)}
                            />
                          </Grid>
                        </Grid>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </Grid>

              {/* Right Column */}
              <Grid item xs={12} md={4}>
                <PriceDetailsForm
                  visitorCount={visitorCount}
                  pricePerVisitor={200} // default price per visitor
                  onSubmit={handleSubmit}
                />
              </Grid>
            </Grid>
        </>
      )}

      {isRegistrationComplete && (
        <>
        <RegistrationSuccess {...registrationResponse} />
        </>
      )}
    </Box>
  );
};
