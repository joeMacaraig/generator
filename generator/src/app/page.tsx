"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Password from "./components/password";
import Qrcode from "./components/qrcode";
import LoremIpsum from "./components/loremipsum";

export default function Home() {
  const [display, setDisplay] = useState("Passwords");
  const type = ["Passwords", "QRCodes", "Lorem Ipsum"];
  return (
    <main className="max-w-6xl h-screen grid grid-cols-2 px-10 pt-10 m-auto">
      <div className="flex flex-col gap-2 w-3/4">
        <div className="w-full flex gap-2">
          <h1 className="text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
            Generate
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Passwords",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Qrcodes",
              1000,
              "Lorem ipsums",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="inline-block text-4xl"
            repeat={Infinity}
          />
        </div>
        <p className="font-medium">
          Empower your digital journey with our all-in-one toolkit.
        </p>
        <p className="text-sm text-gray-500 w-3/4 text-justify">
          Craft secure passwords, unlock seamless connections with QR codes, and
          elevate your design with Lorem Ipsum placeholder text.
        </p>
        <div className="flex flex-col gap-4 items-start my-10">
          <button
            className="pl-4 pr-2 py-1 hover:translate-x-10 focus:translate-x-10 duration-300 ease-in-out bg-black text-white"
            onClick={() => setDisplay("Passwords")}
          >
            Password
          </button>
          <button
            className="pl-4 pr-2 py-1 hover:translate-x-10 focus:translate-x-10 duration-300 flex items-center ease-in-out bg-black text-white"
            onClick={() => setDisplay("QRCodes")}
          >
            QRCode
          </button>
          <button
            className="pl-4 pr-2 py-1 hover:translate-x-10 focus:translate-x-10 duration-300 ease-in-out bg-black text-white"
            onClick={() => setDisplay("Lorem Ipsum")}
          >
            Lorem Ipsum
          </button>
        </div>
      </div>
      <div className="w-full h-full p-4 bg-gray-200 flex justify-center">
        {display === "Passwords" && <Password />}
        {display === "QRCodes" && <Qrcode />}
        {display === "Lorem Ipsum" && <LoremIpsum />}
      </div>
    </main>
  );
}
