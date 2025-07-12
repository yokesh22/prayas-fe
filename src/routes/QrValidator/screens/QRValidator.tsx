import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { EventHighlightsSection } from '../../../screens/Home/sections/EventHighlightsSection';

export const QRScanner: React.FC = () => {
  const [qrResult, setQrResult] = useState('');
  const [validated, setValidated] = useState<any>(null);
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const hasScannedRef = useRef(false);

  const stallno = localStorage.getItem('stallno');
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const validateQR = async (qrText: string) => {
    if (!stallno) {
      setError('Stall number not found in localStorage');
      return;
    }

    try {
      const res = await axios.get(`${baseURL}/api/validateQR`, {
        params: {
          encrypted: encodeURIComponent(qrText),
          stall: stallno,
        },
      });
      console.log('Validation response:', res.data);
      setValidated(res.data);
      setShowDialog(true);
      setError('');
    } catch (err: any) {
      console.error(err);
      setError('Validation failed');
      setValidated(null);
    }
  };

  const initScanner = useCallback(async () => {
    const config = { fps: 10, qrbox: 300 };
    const cameraConfig = { facingMode: 'environment' };

    try {
      const cameras = await Html5Qrcode.getCameras();
      if (!cameras.length) {
        setError('No cameras found');
        return;
      }

      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode('reader');
      }

      await scannerRef.current.start(
        cameraConfig,
        config,
        (decodedText) => {
          if (!hasScannedRef.current) {
            hasScannedRef.current = true;
            setScanning(false);
            setQrResult(decodedText);
            validateQR(decodedText);
          }
        },
        (errorMessage) => {
          console.warn('QR scan error:', errorMessage);
        }
      );
    } catch (err) {
      setError('Camera access failed');
      console.error('Scanner init error:', err);
    }
  }, []);

  useEffect(() => {
    initScanner();
    return () => {
      scannerRef.current?.stop().catch(() => {});
    };
  }, [initScanner]);

  const handleRescan = async () => {
    setQrResult('');
    setValidated(null);
    setError('');
    hasScannedRef.current = false;
    setScanning(true);
    await scannerRef.current?.stop().catch(() => {});
    await initScanner();
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    handleRescan();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      bgcolor="background.default"
      minHeight="100vh"
    >
      {/* Optional fixed header */}
      <EventHighlightsSection />

      <Box
        position="relative"
        width="100%"
        maxWidth="1440px"
        overflow="hidden"
        sx={{
          mt: { xs: '80px', sm: '109px' },
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          margin: '0 auto',
        }}
      >
        <div className="max-w-md mx-auto p-4 space-y-4">
          <h2 className="text-xl font-semibold text-center">Prayaas 2025</h2>

          {scanning && (
            <div className="flex justify-center items-center w-full h-[400px] border rounded bg-white shadow">
              <div id="reader" className="w-full max-w-sm h-full" />
            </div>
          )}

          {!scanning && qrResult && (
            <div className="p-2 bg-gray-100 border rounded">
              <p className="text-sm break-all">
                Scanned QR: <strong>{qrResult}</strong>
              </p>
            </div>
          )}

          {!scanning && (
            <button
              onClick={handleRescan}
              className="bg-gray-300 text-gray-800 w-full p-2 rounded hover:bg-gray-400"
            >
              Scan Again
            </button>
          )}

          {error && <p className="text-red-600 font-bold">{error}</p>}

          {/* ✅ MUI Dialog for success */}
          <Dialog open={showDialog} onClose={handleCloseDialog}>
            <DialogTitle>Thanks for coming</DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <strong>Name:</strong> {validated?.data?.name}
              </Typography>
              <Typography gutterBottom>
                <strong>Phone:</strong> {validated?.data?.phone}
              </Typography>
              <Typography gutterBottom>
                <strong>Village:</strong> {validated?.data?.village}
              </Typography>
              <Typography gutterBottom>
                <strong>Order ID:</strong> {validated?.data?.orderid}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} variant="contained" color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>

          {/* ✅ Video override style */}
          <style>{`
            #reader video {
              width: 100% !important;
              height: auto !important;
              max-width: 100% !important;
              object-fit: cover;
            }
          `}</style>
        </div>
      </Box>
    </Box>
  );
};

export default QRScanner;
