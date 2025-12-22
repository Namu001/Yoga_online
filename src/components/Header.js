"use client";

import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="relative flex items-center justify-between px-4 md:px-12 py-6 sticky top-0 z-50">

      <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
        <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <img
            src="/logo/logo.png"
            alt="Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex max-w-[200px] lg:max-w-[250px]">
          <div className="glass rounded-full flex items-center px-4 py-2.5 gap-2 w-full focus-within:bg-white/10">
            <Search size={18} className="text-gray-400 flex-shrink-0" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full text-sm"
            />

            <span className="text-xs text-gray-500 border border-gray-600 px-2 py-1 rounded flex-shrink-0">
              ⌘K
            </span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-1.5 glass px-2.5 py-1.5 rounded-full absolute left-1/2 -translate-x-1/2 pointer-events-none">
        {["Movie", "TV Series", "Animation", "Mystery"].map((cat, i) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap pointer-events-auto ${i === 0
              ? "bg-white/20 text-white"
              : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>



    </header>
  );
}