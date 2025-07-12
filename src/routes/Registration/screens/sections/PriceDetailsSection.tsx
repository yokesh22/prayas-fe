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
  const baseURL = import.meta.env.VITE_API_BASE_URL;


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
    const response = await axios.post(`${baseURL}/api/register`, payload);
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
