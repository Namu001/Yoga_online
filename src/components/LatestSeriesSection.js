"use client";

import React from 'react';
import { Play } from 'lucide-react';

export default function LatestSeriesSection({ data, onMovieClick }) {
    if (!data) return null;

    const { featured, list } = data;

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">Latest Series</h2>
                <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Today</span>
            </div>

            {/* Featured Item */}
            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 mb-8 group overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-[180px] h-[250px] shrink-0 overflow-hidden rounded-2xl relative">
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-sm">
                            New Launch
                        </div>
                    </div>
                    <div className="flex-1">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 italic block">
                            {featured.duration},
                        </span>
                        <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                            {featured.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
                            {featured.description}
                        </p>
                        <button
                            onClick={() => onMovieClick && onMovieClick(featured)}
                            className="bg-[#00AEEF] hover:bg-[#00AEEF]/80 text-white font-black text-xs px-8 py-3 rounded-lg transition-all flex items-center gap-2 uppercase tracking-wider"
                        >
                            Watch Now
                            <Play size={14} fill="currentColor" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mini List Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 group cursor-pointer"
                        onClick={() => onMovieClick && onMovieClick(item)}
                    >
                        <div className="w-[60px] h-[80px] shrink-0 rounded-lg overflow-hidden border border-white/10">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[8px] text-gray-500 uppercase tracking-widest mb-1 italic">
                                {item.duration},
                            </span>
                            <h4 className="text-white font-bold text-sm line-clamp-1 group-hover:text-[#00AEEF] transition-colors">
                                {item.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
