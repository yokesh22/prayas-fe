import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import axios from 'axios';

export const QRScanner: React.FC = () => {
  const [mobile, setMobile] = useState('');
  const [qrResult, setQrResult] = useState('');
  const [validated, setValidated] = useState<any>(null);
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(true);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const hasScannedRef = useRef(false);

  // 👇 useCallback to reuse the function reference
  const initScanner = useCallback(async () => {
    const config = { fps: 10, qrbox: 250 };
    const cameraConfig = { facingMode: 'environment' };

    try {
      const cameras = await Html5Qrcode.getCameras();
      if (!cameras.length) {
        setError('No cameras found');
        return;
      }

      if (!scannerRef.current) {
        const scanner = new Html5Qrcode('reader');
        scannerRef.current = scanner;
      }

      await scannerRef.current.start(
        cameraConfig,
        config,
        (decodedText) => {
          if (!hasScannedRef.current) {
            setQrResult(decodedText);
            hasScannedRef.current = true;
            setScanning(false);
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

  const handleSubmit = async () => {
    scannerRef.current?.stop().catch(() => {});
    if (!qrResult || !mobile) {
      setError('Please scan a QR code and enter mobile number');
      return;
    }

    try {
    //   const res = await axios.get('http://localhost:5002/api/validateQR', {
    //     params: {
    //       encrypted: encodeURIComponent(qrResult),
    //       mobile,
    //     },
    //   });

    const res = await axios.get('https://prayas-api.i4ulabs.com/api/validateQR', {
        params: {
          encrypted: encodeURIComponent(qrResult),
          mobile,
        },
      });

      setValidated(res.data);
      setError('');
    } catch (err: any) {
      setError('Validation failed');
      setValidated(null);
    }
  };

  const handleRescan = async () => {
    setQrResult('');
    setValidated(null);
    setError('');
    hasScannedRef.current = false;
    setScanning(true);
    await scannerRef.current?.stop().catch(() => {});
    await initScanner(); // now safe to reuse
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold text-center">QR Validator</h2>

      {scanning && (
        <div id="reader" className="w-full rounded border" style={{ minHeight: '280px' }} />
      )}

      {!scanning && qrResult && (
        <div className="p-2 bg-gray-100 border rounded">
          <p className="text-sm break-all">Scanned QR: <strong>{qrResult}</strong></p>
        </div>
      )}

      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter registered mobile number"
        className="border p-2 rounded w-full"
      />

      <button
        onClick={handleSubmit}
        disabled={!qrResult || !mobile}
        className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Validate QR
      </button>

      {!scanning && (
        <button
          onClick={handleRescan}
          className="bg-gray-300 text-gray-800 w-full p-2 rounded hover:bg-gray-400"
        >
          Scan Again
        </button>
      )}

      {error && <p className="text-red-600 font-bold">{error}</p>}

      {validated && (
        <div className="bg-green-100 p-3 rounded">
          <h3 className="text-green-500 font-bold text-center">QR Code Verified</h3>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
