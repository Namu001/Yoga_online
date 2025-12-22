"use client";

import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

export default function DirtyDiscovery({ data }) {
    if (!data) return null;

    const { badge, title, subtitle, description, videoUrl, poster } = data;

    return (
        <section className="relative w-full h-[500px] md:h-[600px] rounded-[30px] md:rounded-[50px] overflow-hidden group">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={poster}
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>

            {/* Dynamic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-4 md:space-y-6">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium animate-pulse">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                            {badge}
                        </div>

                        {/* Main Heading with Gradient Text */}
                        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                            {title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                {subtitle}
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-xl text-gray-300 max-w-xl leading-relaxed line-clamp-3 md:line-clamp-none">
                            {description}
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                            <button className="group/btn relative px-6 py-3 md:px-8 md:py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm md:text-base rounded-xl md:rounded-2xl transition-all duration-300 flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                                <span className="relative z-10 uppercase">Watch Now</span>
                                <Play className="relative z-10 w-4 h-4 md:w-5 md:h-5 fill-current" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                            </button>

                            <button className="px-6 py-3 md:px-8 md:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-sm md:text-base rounded-xl md:rounded-2xl transition-all duration-300 flex items-center gap-2 group/more">
                                See More
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/more:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute bottom-12 right-12 hidden md:block z-20">
                <div className="flex items-center gap-4 text-white/40 text-sm tracking-widest uppercase">
                    <span className="w-12 h-px bg-white/40" />
                    Premium Content
                </div>
            </div>
        </section>
    );
}
