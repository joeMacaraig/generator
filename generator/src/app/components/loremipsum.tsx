"use client";
import React, { useState } from "react";
export default function LoremIpsum() {
  const [selectValue, setSelectValue] = useState("");

  const handleValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };
  return (
    <div className="h-full p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Lorem Ipsum</h1>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-xl">What is Lorem Ipsum?</h1>
        <p className="text-justify w-4/5">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
      </div>
      <div className="bg-black w-[90%] py-[1px]"></div>
      <div>
        {/* options */}
        <div className="flex flex-row justify-between items-center pt-2 pb-6">
          <input
            type="number"
            className="w-[50px] h-[40px] text-center shadow-xl"
          />
          <select
            id=""
            value={selectValue}
            onChange={handleValue}
            className="text-center shadow-xl font-medium h-[40px] px-2"
          >
            <option value=""></option>
            <option value="sentences">sentences</option>
            <option value="paragraphs">paragraphs</option>
            <option value="words">words</option>
          </select>
          <button className="font-medium px-4 py-2 bg-black text-white shadow-xl hover:bg-green-600 hover:rounded-lg hover:-translate-y-1 duration-500">
            Generate
          </button>
          <button className="font-medium px-4 py-2 bg-black text-white shadow-xl hover:bg-blue-600 hover:rounded-lg hover:-translate-y-1 duration-500">
            Copy
          </button>
        </div>
        {/* display generated text */}
        <div className="bg-slate-50 w-full h-[60vh]"></div>
      </div>
    </div>
  );
}
