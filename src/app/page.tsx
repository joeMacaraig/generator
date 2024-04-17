"use client";

import { Colors } from "@/components/colors";
import { QRCodes } from "@/components/qrcodes";
import { Passwords } from "@/components/passwords";
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState<string>("Colors");
  const tabs = ["Colors", "QRCodes", "Passwords"];
  return (
    <main className="min-h-[90vh] p-8 flex flex-col items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="w-[85%]">
        <div className="flex justify-between">
          {tabs.map((item) => (
            <button
              onClick={() => setScreen(`${item}`)}
              className="px-4 py-2 bg-black text-white rounded-t-xl w-1/3 text-center hover:bg-zinc-800"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="bg-white border border-black h-[75vh] p-4">
          {screen === "Colors" && <Colors />}
          {screen === "QRCodes" && <QRCodes />}
          {screen === "Passwords" && <Passwords />}
        </div>
      </div>
    </main>
  );
}
