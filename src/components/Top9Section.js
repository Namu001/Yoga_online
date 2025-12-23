"use client";

import React, { useState } from 'react';

export default function Top9Section({ items }) {
    const [activeTab, setActiveTab] = useState('latest');

    return (
        <div className="bg-[#121217] border border-white/5 rounded-[24px] p-6 h-full flex flex-col shadow-xl">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-white tracking-tight">Top 9 this Week</h2>
                <div className="flex gap-4">
                    <button
                        onClick={() => setActiveTab('latest')}
                        className={`text-[11px] font-black uppercase tracking-widest transition-colors ${activeTab === 'latest' ? 'text-[#00AEEF]' : 'text-gray-500 hover:text-white'}`}
                    >
                        Latest
                    </button>
                    <button
                        onClick={() => setActiveTab('watched')}
                        className={`text-[11px] font-black uppercase tracking-widest transition-colors ${activeTab === 'watched' ? 'text-[#00AEEF]' : 'text-gray-500 hover:text-white'}`}
                    >
                        Most Watched
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                {items.slice(0, 9).map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-6 group cursor-pointer py-4 border-b border-white/5 last:border-0"
                    >
                        <span className="text-4xl font-black text-white group-hover:text-[#00AEEF] transition-colors w-8">
                            {index + 1}
                        </span>

                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 font-bold mb-1 opacity-80">
                                {item.duration},
                            </span>
                            <span className="text-white text-sm font-bold group-hover:text-[#00AEEF] transition-colors">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
