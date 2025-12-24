"use client";

import React, { useState } from 'react';

export default function Top9Section({ items }) {
    const [activeTab, setActiveTab] = useState('latest');

    // Split top 3 and the rest
    const podiumItems = items.slice(0, 3);
    const runnerUps = items.slice(3, 9);

    return (
        <div className="w-full h-full flex flex-col gap-6">
            {/* Header Rail */}
            <div className="flex justify-between items-end px-2">
                <div>
                     <h2 className="text-3xl md:text-6xl font-black text-white italic tracking-tighter transform -skew-x-6">
                        LEADERBOARD
                    </h2>
                     <div className="h-1 w-full bg-[#00AEEF] mt-2 transform -skew-x-12"></div>
                </div>
               
                <div className="flex gap-2">
                    {['Latest', 'Most Watched'].map((tab) => {
                        const id = tab.toLowerCase().replace(' ', '');
                        const isActive = activeTab === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border border-white/10 transition-all clip-path-slant ${
                                    isActive 
                                    ? 'bg-[#00AEEF] text-black border-[#00AEEF]' 
                                    : 'bg-black/40 text-gray-500 hover:text-white hover:border-white/30'
                                }`}
                                style={{
                                    clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)'
                                }}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex-1 w-full overflow-x-auto pb-8 scrollbar-hide">
                <div className="flex gap-4 md:gap-8 min-w-max px-4">
                    
                    {/* PODIUM (Top 3) */}
                    <div className="flex gap-4">
                        {podiumItems.map((item, index) => (
                            <div 
                                key={index} 
                                className={`relative group cursor-pointer transition-all duration-300 hover:-translate-y-2
                                    ${index === 0 ? 'w-[240px] h-[340px] md:w-[280px] md:h-[380px]' : 'w-[200px] h-[280px] md:w-[240px] md:h-[320px] mt-auto'}
                                `}
                            >
                                {/* Card Frame */}
                                <div className="absolute inset-0 bg-[#1A1A20] border border-white/10 skew-y-1 rounded-sm overflow-hidden group-hover:border-[#00AEEF]/50 transition-colors shadow-2xl">
                                    {/* Image */}
                                    <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity">
                                         {/* Placeholder for actual image if available in 'item' later, using gradient for now */}
                                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black relative">
                                             {/* If item has image, we would use it here. Assuming text-only for now based on previous code */}
                                        </div>
                                    </div>
                                    
                                    {/* Big Rank Number */}
                                    <span className="absolute -bottom-10 -right-4 text-[180px] font-black leading-none text-white/5 z-0 select-none group-hover:text-[#00AEEF]/10 transition-colors">
                                        {index + 1}
                                    </span>

                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2 z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-[#00AEEF] text-black text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider transform -skew-x-12">
                                                Rank {index + 1}
                                            </span>
                                            <span className="text-gray-400 text-[10px] font-mono">{item.duration}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white uppercase leading-none group-hover:text-[#00AEEF] transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                {/* Crown for #1 */}
                                {index === 0 && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-500 animate-bounce">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11h-14zm14 1v2H5v-2h14z"/></svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] bg-white/10 mx-4 h-full self-center"></div>

                    {/* RUNNER UPS (Rolling Horizontal List) */}
                    <div className="flex gap-3 items-center">
                        {runnerUps.map((item, i) => {
                            const rank = i + 4;
                            return (
                                <div 
                                    key={rank}
                                    className="w-[200px] h-[140px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer relative overflow-hidden flex flex-col justify-between p-4"
                                >
                                     <span className="absolute top-[-10px] right-[-10px] text-[80px] font-black text-white/5 leading-none group-hover:text-white/10 transition-colors">
                                        {rank}
                                    </span>
                                    
                                    <div className="relative z-10">
                                         <h4 className="text-sm font-bold text-white line-clamp-2 uppercase group-hover:text-[#00AEEF] transition-colors">
                                            {item.title}
                                        </h4>
                                    </div>

                                    <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-2">
                                        <span className="text-[9px] text-gray-500 font-mono">{item.duration}</span>
                                        <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:border-[#00AEEF] transition-all">
                                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}
