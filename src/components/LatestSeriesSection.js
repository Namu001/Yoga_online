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

                {/* 2. FEATURED CARD (Ancient Art) - Right Side Anchor - Fixed 176x264 */}
                {featured && (
                    <div
                        className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] shrink-0 w-[176px] h-[264px] hover:shadow-[0_0_20px_rgba(0,174,239,0.3)] transition-all duration-500"
                        onClick={() => onMovieClick && onMovieClick(featured)}
                    >
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-full object-cover will-change-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                        {/* Featured Tag */}
                        <div className="absolute top-0 right-0 p-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#00AEEF] group-hover:text-black transition-colors">
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-5 w-full">
                            <span className="text-[#00AEEF] text-[10px] font-black uppercase tracking-widest mb-1 block">
                                Premiering Now
                            </span>
                            <h3 className="font-black text-white uppercase text-2xl leading-[0.85] mb-2 drop-shadow-xl">
                                {featured.title}
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="h-[2px] w-8 bg-[#00AEEF]"></div>
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
