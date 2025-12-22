"use client";

import React from 'react';

export default function Top9Section({ items }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">Top 9 this Week</h2>
                <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
                    <span className="text-[#00AEEF] cursor-pointer">Latest</span>
                    <span className="text-gray-500 hover:text-white cursor-pointer transition-colors">Most Watched</span>
                </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
                {items.slice(0, 9).map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-6 group cursor-pointer border-b border-white/5 pb-4 last:border-0"
                    >
                        <span className="text-4xl font-black text-gray-700 group-hover:text-[#00AEEF] transition-colors duration-300 w-8">
                            {index + 1}
                        </span>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 italic">
                                {item.duration},
                            </span>
                            <span className="text-white font-bold group-hover:text-[#00AEEF] transition-colors">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
