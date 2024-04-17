"use client";

import { useEffect, useState } from "react";
import { BsStars, BsCopy } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
export const Colors = () => {
  const [type, setType] = useState<string>("hex");
  const [color, setColor] = useState<string>("#000000");

  const copy = () => {
    navigator.clipboard.writeText(color);
    alert("Copied Color ✅")
  }

  //random color
  const randomColor = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const randomHex = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  };

  const randomRGB = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (type === "rgb") {
      randomRGB();
    } else {
      randomHex();
    }
  }, [type]);

  return (
    <section className="flex flex-col gap-4 items-center p-4">
      <h1 className="text-2xl font-medium">Colors</h1>
      <p>Generate colors with hex values or rgb values ✨</p>
      <div className="w-full grid grid-cols-2 gap-4 place-items-center">
        <button
          onClick={() => setType("hex")}
          className="border-black border-2 py-2 px-8 bg-black text-white font-medium rounded-lg"
        >
          HEX
        </button>
        <button
          onClick={() => setType("rgb")}
          className="border-black border-2 py-2 px-8 bg-black text-white font-medium rounded-lg"
        >
          RGB
        </button>
      </div>
      <div className="h-[45vh] border w-full">
        <div
          className="w-full h-full flex items-center justify-center font-medium"
          style={{ background: color }}
        >
          {color}
        </div>
      </div>
      <div className="w-full flex gap-2 items-center">
        <button
          className="px-6 py-2 bg-black text-white flex items-center justify-center gap-1 rounded-full w-full group duration-400 hover:bg-zinc-800"
          onClick={type === "hex" ? randomHex : randomRGB}
        >
          <BsStars className="group-hover:animate-bounce group-hover:text-yellow-300" />
          Generate
        </button>
        <button className="px-2 rounded text-2xl" onClick={copy}>
          <BsCopy />
        </button>
      </div>
    </section>
  );
};
