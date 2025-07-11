import React from 'react';

interface Visitor {
  fullName: string;
  mobileNumber: string;
  qrcode: string;
}

interface RegistrationSuccessProps {
  status: string;
  message: string;
  orderid: string;
  data: Visitor[];
}

const RegistrationSuccess: React.FC<RegistrationSuccessProps> = ({ status, message, orderid, data }) => {
  return (
    <div className="bg-yellow-100 min-h-screen p-6 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Header */}
        <div className="bg-transparent p-4 rounded-lg mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-black flex items-center gap-2">
              ✅ Your Registration is Successful
            </h2>
            <p className="text-sm text-black text-left">
              Thank you for registering for Prayas 2025!<br />
              We're excited to welcome you to Central India's largest agri-tech gathering.
            </p>
          </div>
          <button className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-200 text-sm">
            ⬇️ Download All Tickets
          </button>
        </div>

        {/* ✅ Tickets */}
        <div className="flex flex-wrap gap-6 justify-center">
          {data.map((visitor, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center relative">
              <img src="https://c.animaapp.com/JdgpojVL/img/group-12.svg" alt="Prayas Logo" className="w-16 mb-2" />

              <h3 className="text-lg font-bold text-green-700">{visitor.fullName}</h3>
              <p className="text-sm text-gray-500 mt-1 mb-2">30 Nov 2025<br />10am to 6pm</p>

              <p className="text-xs text-gray-500 mb-1">Scan the QR code during entry</p>
              <img src={visitor.qrcode} alt="QR Code" className="w-40 h-40 my-2" />

              <p className="text-xs text-gray-500">Registration ID</p>
              <p className="text-sm font-bold text-gray-800 mb-2">{orderid.slice(0, 6).toUpperCase()}</p>

              <div className="flex justify-between gap-5 mt-5 bg-gray-200 text-xs text-black p-2">
                <button>⬇️ Download Ticket</button>
                <button>🔗 Share Ticket</button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Important Info */}
        <div className="bg-white p-4 mt-10 rounded-lg shadow text-sm">
          <h4 className="font-semibold mb-2 text-left">Important Info</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-left">
            <li>Please carry your ticket (digital or printed) and present the QR code at entry.</li>
            <li>Entry is allowed only on your selected visit date.</li>
            <li>For queries, contact us at <strong>support@prayas.in</strong> or call <strong>1800-XXX-XXX</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
