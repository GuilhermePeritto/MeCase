import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const MyComponent = () => {
  const qrCodeData = 'https://www.example.com';

  return (
    <div>
      <h1>My QR Code</h1>
      <QRCodeSVG value={qrCodeData} size={256} level="H" />
    </div>
  );
};

export default MyComponent;

