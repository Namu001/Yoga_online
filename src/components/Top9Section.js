"use client";

import React, { useState } from 'react';
import { Trophy, Play, TrendingUp } from 'lucide-react';

export default function Top9Section({ items, onMovieClick }) {
    const [activeTab, setActiveTab] = useState('latest');

    // Sort logic placeholder (currently just passing through or reversing for demo)
    const displayItems = activeTab === 'latest' ? items : [...(items || [])].reverse();

    if (!items) return null;

    return (
        <div className="w-full flex flex-col gap-8">
            {/* Header with Tabs */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-[#FFD700]" />
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
                        Leaderboard
                    </h2>
                </div>

                {/* Minimal Tabs */}
                <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
                    <button
                        onClick={() => setActiveTab('latest')}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === 'latest' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        Latest
                    </button>
                    <button
                        onClick={() => setActiveTab('watched')}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === 'watched' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                        Most Watched
                    </button>
                </div>
            </div>

            {/* LIST LAYOUT (No Big Cards) */}
            <div className="flex flex-col gap-2">
                {displayItems?.map((item, index) => {
                    const rank = index + 1;
                    const isTop1 = rank === 1;
                    const isTop3 = rank <= 3;

                    // Color Schemes for Ranks
                    let rankColor = "text-gray-500";
                    let glowColor = "";
                    let icon = null;

                    if (rank === 1) {
                        rankColor = "text-[#FFD700]"; // Gold
                        glowColor = "shadow-[0_0_15px_rgba(255,215,0,0.15)] border-[#FFD700]/30";
                        icon = <Trophy className="w-4 h-4 text-[#FFD700]" />;
                    } else if (rank === 2) {
                        rankColor = "text-[#C0C0C0]"; // Silver
                        glowColor = "border-white/20";
                    } else if (rank === 3) {
                        rankColor = "text-[#CD7F32]"; // Bronze
                        glowColor = "border-[#CD7F32]/20";
                    } else {
                        glowColor = "border-white/5 hover:border-white/10";
                    }

                    return (
                        <div
                            key={index}
                            onClick={() => onMovieClick && onMovieClick(item)}
                            className={`group relative flex items-center justify-between p-4 rounded-xl border bg-[#15151A] cursor-pointer transition-all duration-300 hover:bg-[#1E1E24] hover:scale-[1.01] hover:shadow-lg ${glowColor}`}
                        >
                            <div className="flex items-center gap-6">
                                {/* Rank Number */}
                                <div className={`text-2xl font-black italic w-8 text-center ${rankColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                    {rank}
                                </div>

                                {/* Title & Duration */}
                                <div className="flex flex-col">
                                    <h3 className={`font-bold text-white uppercase text-sm md:text-base tracking-wide flex items-center gap-2 group-hover:text-[#00AEEF] transition-colors ${isTop1 ? 'text-lg' : ''}`}>
                                        {item.title}
                                        {icon}
                                    </h3>
                                    <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                                        {item.duration}
                                        {isTop3 && <span className="w-1 h-1 rounded-full bg-white/30 ml-2"></span>}
                                        {isTop3 && <span className="text-[#00AEEF] text-[9px] uppercase">Trending</span>}
                                    </span>
                                </div>
                            </div>

                            {/* Play Action */}
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-black group-hover:bg-white group-hover:border-white transition-all">
                                <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
