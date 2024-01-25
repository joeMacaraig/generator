import React from "react";

export default function Password() {
  return (
    <div className="h-full">
      <div className="text-3xl font-medium mb-4">Password Generator</div>
      <div className="bg-white p-4 rounded-xl grid grid-cols-3 gap-10 w-full">
        <div className="w-full">
          <h1 className="mb-2">Password Length</h1>
          <input
            type="number"
            min="1"
            max="100"
            placeholder="6"
            className="border p-2 w-full"
          />
        </div>
        {/* Checkboxes */}
        <div className="w-full">
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
        {/* Password Strength */}
        <div className="w-full">
          <h1>Strengh:</h1>
          <div className="w-full grid grid-cols-3 gap-2">
            <div className="w-full p-1 bg-black"></div>
            <div className="w-full p-1 bg-black"></div>
            <div className="w-full p-1 bg-black"></div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="flex-grow my-4 text-xl font-medium">
          "alkjdjfha;klsjhflkajdsjfhalkjdjf"
        </p>
        <button className="bg-black text-white w-full py-2 rounded-full text-center">
          Copy
        </button>
        <h1 className="font-bold mt-4">What Makes a Strong Password?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed
          adipiscing diam donec adipiscing. Ut tortor pretium viverra
          suspendisse potenti nullam ac tortor vitae. Lacinia at quis risus sed
          vulputate odio. Pretium lectus quam id leo. Scelerisque fermentum dui
          faucibus in ornare. Viverra ipsum nunc aliquet bibendum enim. Quam
          elementum pulvinar etiam non quam lacus suspendisse faucibus.
        </p>
      </div>
      <div></div>
    </div>
  );
}
