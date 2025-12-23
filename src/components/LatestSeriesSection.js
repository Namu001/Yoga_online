"use client";

import React from 'react';
import { Play } from 'lucide-react';

export default function LatestSeriesSection({ data, onMovieClick }) {
    if (!data) return null;

    const { featured, list } = data;

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">Latest Series</h2>
                <div className="flex items-center gap-2">
                    <span className="text-[#00AEEF] text-[11px] font-black uppercase tracking-wider">Today</span>
                </div>
            </div>

            {/* Featured Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-12">
                {/* Featured Poster - Mobile: 176x264px, Desktop: Large Portrait */}
                <div
                    className="w-[176px] h-[264px] md:w-[240px] md:h-[360px] shrink-0 rounded-2xl overflow-hidden relative cursor-pointer group shadow-2xl"
                    onClick={() => onMovieClick && onMovieClick(featured)}
                >
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-[9px] font-black text-white px-2 py-0.5 rounded uppercase tracking-wider">
                        New Launch
                    </div>
                </div>

                {/* Featured Content */}
                <div className="flex-1 flex flex-col justify-center">
                    <span className="text-[10px] text-gray-500 font-bold mb-1 block">
                        {featured.duration},
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                        {featured.title}
                    </h3>
                    <p className="hidden md:block text-gray-400 text-sm leading-relaxed mb-8 line-clamp-6">
                        {featured.description}
                    </p>
                    <button
                        onClick={() => onMovieClick && onMovieClick(featured)}
                        className="bg-[#00AEEF] hover:bg-[#00AEEF]/80 text-white font-black text-[10px] md:text-[11px] w-full md:w-fit px-10 py-4 rounded uppercase tracking-widest transition-all shadow-lg"
                    >
                        Watch Now
                    </button>
                </div>
            </div>

            {/* List Grid: All Devices: Portrait Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-4 md:gap-x-12 gap-y-8 md:gap-y-10">
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 border-0 md:border-b border-white/5 cursor-pointer group pb-4"
                        onClick={() => onMovieClick && onMovieClick(item)}
                    >
                        {/* Thumbnail: Unified Portrait (2:3) */}
                        <div className="w-[80px] h-[120px] md:w-[100px] md:h-[150px] shrink-0 rounded-xl overflow-hidden border border-white/5 shadow-xl">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="flex flex-col min-w-0 md:py-2">
                            <span className="text-[10px] md:text-[11px] text-gray-500 font-bold mb-1 opacity-80 uppercase tracking-wide">
                                {item.duration}
                            </span>
                            <h4 className="text-white font-black text-xs md:text-base line-clamp-2 md:line-clamp-1 group-hover:text-[#00AEEF] transition-all tracking-tight leading-tight uppercase">
                                {item.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
