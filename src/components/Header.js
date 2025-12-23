"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    { name: "Home", id: "home" },
    { name: "Sensational", id: "sensational" },
    { name: "Models", id: "models" },
    { name: "Discovery", id: "discovery" },
    { name: "Moments", id: "moments" },
    { name: "Spicy", id: "spicy" },
    { name: "Series", id: "series" },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative flex flex-col gap-4 px-4 md:px-12 py-4 md:py-6 sticky top-0 z-50 bg-[#0f0f13]/80 backdrop-blur-xl border-b border-white/5">

      {/* Top Row: Logo, Search (Desktop), Profile */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
          <div
            onClick={() => {
              setSearchValue("");
              if (onSearch) onSearch("");
              scrollToSection("home");
            }}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo/logo.png"
              alt="Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex max-w-[200px] lg:max-w-[280px]">
            <div className="bg-white/5 border border-white/10 rounded-full flex items-center px-4 py-2.5 gap-2 w-full focus-within:bg-white/10 focus-within:border-[#00AEEF]/50 transition-all">
              <Search size={18} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full text-sm"
              />
              <span className="text-[10px] text-gray-500 border border-white/10 px-1.5 py-0.5 rounded flex-shrink-0 font-bold">
                ⌘K
              </span>
            </div>
          </div>
        </div>

        {/* Categories (Desktop Center) */}
        <div className="hidden lg:flex items-center gap-1.5 bg-white/5 border border-white/10 px-2 rounded-full absolute left-1/2 -translate-x-1/2 shadow-xl backdrop-blur-md">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className="px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all whitespace-nowrap text-gray-400 hover:text-white hover:bg-white/5 active:scale-95"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Profile/Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          <div
            className={`md:hidden flex items-center justify-center transition-colors cursor-pointer p-2 rounded-full ${isSearchOpen ? 'text-[#00AEEF] bg-[#00AEEF]/10' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={22} />
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00AEEF]/20 border border-[#00AEEF]/30 flex items-center justify-center text-[#00AEEF] cursor-pointer hover:bg-[#00AEEF]/30 transition-colors">
            <span className="font-black text-xs md:text-sm">NB</span>
          </div>
        </div>
      </div>

      {/* Mobile Row: Search Bar (Full Width) */}
      {isSearchOpen && (
        <div className="md:hidden w-full animate-fadeInDown">
          <div className="bg-white/5 border border-white/10 rounded-2xl flex items-center px-4 py-3 gap-3 w-full focus-within:bg-white/10 focus-within:border-[#00AEEF]/50 transition-all">
            <Search size={18} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search favorite yoga series..."
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full text-[13px] font-medium"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Row: Category Scroller */}
      <div className="lg:hidden w-full -mx-4 px-4 overflow-x-auto scrollbar-hide select-none flex items-center gap-2 pb-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToSection(cat.id)}
            className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:bg-white/10 active:scale-90"
          >
            {cat.name}
          </button>
        ))}
      </div>

    </header>
  );
}