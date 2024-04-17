"use client";

import { useState, ChangeEvent } from "react";
import QRCode from "react-qr-code";
import { BsStars } from "react-icons/bs";

export const QRCodes = () => {
  const [value, setValue] = useState<string>("");
  const [generate, setGenerate] = useState<boolean>(false);
  const onClick = () => {
    setGenerate(true);
  };
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setGenerate(false);
  };
  return (
    <section className="flex flex-col gap-8 items-center p-4">
      <h1 className="text-2xl font-medium">QRCodes</h1>
      <p className="font-medium">
        Generate your own QRCode by typing in a valid url ✨
      </p>

      <QRCode value={generate ? value : ""} className="" />
      <input
        className="p-2 w-full border"
        placeholder="url"
        onChange={handleValue}
      />
      <button className="px-6 py-2 bg-black text-white flex items-center justify-center gap-1 rounded-full w-full group duration-400" onClick={onClick}>
        <BsStars className="group-hover:animate-bounce group-hover:text-yellow-300"/>
        Generate
      </button>
    </section>
  );
};
