import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventHighlightsSection } from '../../screens/Home/sections/EventHighlightsSection';

const StallLoginForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [stallNumber, setStallNumber] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone:', phoneNumber);
    console.log('Stall No:', stallNumber);
    // Add your login logic here (e.g. API call)
    try {
      const res = await axios.post(`${baseURL}/api/login`, {
        phone: phoneNumber,
        stall: stallNumber,
        pin: pin,
    });
        if (res.status === 200 && res.data.status === 'success') {
            console.log('Login successful:', res.data);
            localStorage.setItem('stallno', stallNumber);
            localStorage.setItem('auth', 'true');
            // Redirect or show success message
            navigate('/validateQR');
            
        } else {
            console.log('Login failed:', res.data.status);
        }
    } catch (err: any) {
        console.log('Login error:', err);
    }
  };

  return (
    <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          bgcolor="background.default"
          data-model-id="95:44"
          minHeight="100vh"
        >
          {/* Fixed header */}
          <EventHighlightsSection />

          <Box
          position="relative" 
        width="100%" 
        maxWidth="1440px" 
        overflow="hidden" 
        sx={{ 
          mt: { xs: "80px", sm: "109px" },
          display: "flex",
          flexDirection: "column",
          flex: 1,
          margin: "0 auto"
        }}
          >
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleLogin}
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Stall Login</h2>

                    <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your phone number"
                    />
                    </div>

                    <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Pin Number</label>
                    <input
                        type="number"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter Pin"
                    />
                    </div>

                    <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Stall Number</label>
                    <input
                        type="text"
                        value={stallNumber}
                        onChange={(e) => setStallNumber(e.target.value)}
                        required
                        maxLength={4}
                        pattern="\d{4}"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter 4-digit stall number"
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                    Login
                    </button>
                </form>
                </div>
          </Box>
    </Box>
    
  );
};

export default StallLoginForm;
