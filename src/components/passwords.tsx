import { useState, ChangeEvent } from "react";
import { BsCopy, BsStars } from "react-icons/bs";

export const Passwords = () => {
  const [password, setPassword] = useState<string>("");
  const [sym, setSym] = useState<boolean>(false);
  const [upper, setUpper] = useState<boolean>(false);
  const [lower, setLower] = useState<boolean>(false);
  const [num, setNum] = useState<boolean>(false);
  const [length, setLength] = useState<number>(7);

  const copy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password Copied ✅");
    }
  };
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(event.target.value));
  };
  const generatePassword = () => {
    let newPassword = "";
    let temp = "";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const symbols = "!@#$%^&*()-_=+";
    const numbers = "0123456789";

    console.log(upper, lower, num, sym, length);
    if (lower) {
      temp += lowercase;
    }
    if (upper) {
      temp += uppercase;
    }
    if (sym) {
      temp += symbols;
    }
    if (num) {
      temp += numbers;
    }

    if (length < 6) {
      alert("Password length needs to be over 6 ❌");
    }
    if (length > 125) {
      alert("Password length needs to be under 125 ❌");
    }
    if (length > 6 && length <= 125) {
      for (let i = 0; i < length; i++) {
        const randomIndex = temp.charAt(
          Math.floor(Math.random() * temp.length)
        );
        newPassword += randomIndex;
      }
    }
    setPassword(newPassword);
  };
  return (
    <section className="flex flex-col gap-8 items-center p-4 h-full">
      <h1 className="font-medium text-2xl">Passwords</h1>
      <p className="font-medium">
        Generate a password, the longer and more complex the more secure. 🔒
      </p>
      <div className="h-full border-2 w-full items-center flex flex-col">
        <div className="flex flex-col p-4 gap-4">
          <div className="flex items-center gap-2 font-medium">
            <input
              type="number"
              min={7}
              max={125}
              onChange={handleValue}
              placeholder="length of password #"
              className="border border-black pl-6 pr-1 py-2 w-[225px]"
            />
          </div>
          <div className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              onClick={() => {
                setUpper(!upper);
              }}
            />
            <p>UpperCase</p>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              onClick={() => {
                setLower(!lower);
              }}
            />
            <p>LowerCase</p>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              onClick={() => {
                setSym(!sym);
              }}
            />
            <p>Symbols</p>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              onClick={() => {
                setNum(!num);
              }}
            />
            <p>Numbers</p>
          </div>
        </div>
        <div className="w-full p-4">Generated:</div>
        <p className="w-full h-full p-4 truncate">
          {password ? password : "generate a password!"}
        </p>
      </div>
      <div className="w-full flex gap-2 items-center">
        <button
          className="px-6 py-2 bg-black text-white flex items-center justify-center gap-1 rounded-full w-full group duration-400 hover:bg-zinc-800"
          onClick={generatePassword}
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
