import React from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
  return (
    <div className="flex justify-center items-center flex-col w-1/2">
      <div>QR Code Generator</div>
      <div>Link your website to a QR Code.</div>
      <div className="p-2">
        <QRCode value="" />
      </div>
      <input className="w-1/2 p-2" />
    </div>
  );
}
