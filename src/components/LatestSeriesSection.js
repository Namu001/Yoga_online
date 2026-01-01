"use client";

import React from 'react';
import { Play, Award } from 'lucide-react';

export default function LatestSeriesSection({ data, onMovieClick }) {
    if (!data) return null;

    const { featured, list } = data;
    // Combine all items effectively
    const allItems = [featured, ...(list || [])].filter(Boolean);

    return (
        <div className="flex flex-col h-full w-full py-8 gap-6">
            {/* Minimal Header */}
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                    <div className="w-1.5 h-12 bg-[#00AEEF] rounded-full"></div>
                    <div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-cyan-300">Series</span>
                        </h2>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Fresh from the studio</p>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-80">Live Updates</span>
                </div>
            </div>

            {/* COLLAGE LAYOUT V2 - Flipped Showcase */}
            <div className="flex flex-col-reverse md:flex-row gap-8 items-start justify-end">

                {/* 1. STANDARD CARDS GRID (64x95) - Left Side Grid */}
                {/* Visual Style: initially dimmed for depth, pops on hover */}
                <div className="flex flex-wrap gap-x-3 gap-y-4 content-start justify-end flex-1 max-w-2xl">
                    {list && list.map((item, index) => {
                        const isNaughtyAnna = item.title?.toLowerCase().includes("naughty anna");
                        const borderClass = isNaughtyAnna
                            ? 'border-[#ff0055] ring-1 ring-[#ff0055]/50 shadow-[0_0_10px_#ff0055]'
                            : 'border-white/5 hover:border-white/30';

                        return (
                            <div
                                key={index}
                                className={`relative group cursor-pointer overflow-hidden rounded-md border shrink-0 w-[64px] h-[95px] transition-all duration-500 ease-out hover:z-20 hover:scale-125 hover:shadow-2xl ${borderClass} opacity-70 grayscale hover:opacity-100 hover:grayscale-0`}
                                onClick={() => onMovieClick && onMovieClick(item)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />

                                {/* Naughty Anna Indicator */}
                                {isNaughtyAnna && (
                                    <div className="absolute top-0 right-0 p-0.5">
                                        <div className="w-1.5 h-1.5 bg-[#ff0055] rounded-full animate-ping" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* 2. FEATURED CARD - Right Side Anchor */}
                {featured && (
                    <div
                        className="group cursor-pointer shrink-0 w-[176px]"
                        onClick={() => onMovieClick && onMovieClick(featured)}
                    >
                        {/* Image Container */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] h-[264px] group-hover:shadow-[0_0_20px_rgba(0,174,239,0.3)] group-hover:scale-[1.02] transition-all duration-500">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Play Button - Bottom Right of Image */}
                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-[#00AEEF] text-white p-2.5 rounded-full shadow-[0_0_15px_rgba(0,174,239,0.5)] hover:scale-110 transition-transform">
                                    <Play fill="currentColor" size={16} className="translate-x-0.5" />
                                </div>
                            </div>

                            {/* Featured Tag Overlay - Top Left */}
                            <div className="absolute top-3 left-3">
                                <div className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
                                    <span className="text-[8px] font-black text-white uppercase tracking-widest opacity-80">Featured</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Below Image */}
                        <div className="mt-4 px-1">
                            <span className="text-[#00AEEF] text-[10px] font-black uppercase tracking-widest mb-1 block">
                                Premiering Now
                            </span>
                            <h3 className="font-black text-white uppercase text-xl leading-tight mb-2 group-hover:text-[#00AEEF] transition-colors duration-300">
                                {featured.title}
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="h-[2px] w-6 bg-[#00AEEF]"></div>
                                <p className="text-white/60 text-[9px] uppercase tracking-wider font-bold">
                                    {featured.duration}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
