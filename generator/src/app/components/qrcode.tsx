"use client";
import { useState, ChangeEvent } from "react";
import QRCode from "react-qr-code";

export default function Qrcode() {
  const [value, setValue] = useState("");
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <div className="flex flex-col w-full p-4">
      <h1 className="text-3xl font-medium">QR Codes</h1>
      <div>Link a website and generate your QR code.</div>
      <div className="p-4 flex items-center justify-center">
        <QRCode value={value} className="p-2 bg-blue-500 " />
      </div>
      <input
        className="w-1/2 p-2"
        onChange={handleValue}
      />
    </div>
  );
}
