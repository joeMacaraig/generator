"use client";

import { Colors } from "@/components/colors";
import { QRCodes } from "@/components/qrcodes";
import { Passwords } from "@/components/passwords";
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState<string>("Colors");
  const tabs = ["Colors", "QRCodes", "Passwords"];
  return (
    <main className="h-screen p-4 flex flex-col items-center justify-center">
      <div className="w-[90%]">
        <div className="flex justify-between">
          {tabs.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setScreen(`${item}`)}
              className="px-4 py-2 bg-black text-white text-sm rounded-t-xl w-1/3 text-center hover:bg-zinc-800"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="bg-white border border-black h-[75vh]">
          {screen === "Colors" && <Colors />}
          {screen === "QRCodes" && <QRCodes />}
          {screen === "Passwords" && <Passwords />}
        </div>
      </div>
    </main>
  );
}
