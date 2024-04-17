import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export const Navbar = () => {
  return (
    <header className="border-b-2 border-black w-screen bg-white">
      <nav className="flex items-center justify-between px-8 max-w-6xl mx-auto">
        <h1 className="text-center py-4 text-4xl font-bold tracking-tighter hover:cursor-pointer">
          GENERATOR
        </h1>
        <div className="flex items-center gap-8">
          <Link href="https://github.com/joeMacaraig/generator" className="text-4xl">
            <BsGithub />
          </Link>
        </div>
      </nav>
    </header>
  );
};
