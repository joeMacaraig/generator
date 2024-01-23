"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const type = ["Passwords", "QRCodes", "Lorem Ipsum"];
  return (
    <main className="max-w-7xl h-screen grid grid-cols-2 p-10">
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
          <button className="pl-4 pr-2 py-1 hover:translate-x-10 focus:translate-x-10 duration-300 ease-in-out bg-black text-white">
            Password
          </button>
          <button className="pl-4 pr-2 py-1 hover:translate-x-10 focus:translate-x-10 duration-300 flex items-center ease-in-out bg-black text-white">
            QRCode
          </button>
          <button className="pl-4 pr-2 py-1 hover:translate-x-10 focus:translate-x-10 duration-300 ease-in-out bg-black text-white">
            Lorem Ipsum
          </button>
        </div>
      </div>
      <div className="w-full h-full p-4 bg-gray-200">
        <div className="">
          <div className="text-3xl font-medium">Password Generator</div>
          <div className="bg-white p-4 rounded-xl grid grid-cols-3 gap-10 w-full">
            <div>
              <h1>Password Length</h1>
              <input
                type="number"
                min="1"
                max="100"
                placeholder="6"
                className="border p-2 w-full"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-1">
                <input id="Token" type="radio" className="w-4 h-4" />
                <label htmlFor="Token">Token</label>
              </div>
              <div className="flex items-center gap-1">
                <input id="StrongPassword" type="radio" className="w-4 h-4" />
                <label htmlFor="StrongPassword">Strong Password</label>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <input id="Uppercase" type="checkbox" className="w-4 h-4" />
                <label htmlFor="Uppercase">Uppercase</label>
              </div>
              <div className="flex items-center gap-1">
                <input id="Lowercase" type="checkbox" className="w-4 h-4" />
                <label htmlFor="Lowercase">Lowercase</label>
              </div>
              <div className="flex items-center gap-1">
                <input id="Numbers" type="checkbox" className="w-4 h-4" />
                <label htmlFor="Numbers">Numbers</label>
              </div>
              <div className="flex items-center gap-1">
                <input id="Symbols" type="checkbox" className="w-4 h-4" />
                <label htmlFor="Symbols">Symbols</label>
              </div>
            </div>
          </div>
          <div>Password</div>
          <div>Password</div>
        </div>
      </div>
    </main>
  );
}
