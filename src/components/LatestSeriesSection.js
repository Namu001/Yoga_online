"use client";

import React from 'react';
import { Play } from 'lucide-react';

export default function LatestSeriesSection({ data, onMovieClick }) {
    if (!data) return null;

    const { featured, list } = data;
    // We will combine featured and list into one bento grid array
    // Featured item will be first, tailored for large display
    const bentoItems = list || [];

    return (
        <div className="flex flex-col h-full w-full">
            {/* Editorial Header */}
            <div className="flex justify-between items-center mb-6 pl-2 border-l-4 border-[#00AEEF]">
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                    Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Series</span>
                </h2>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest opacity-60">Live Now</span>
                </div>
            </div>

            {/* BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto md:grid-rows-4 gap-4 h-auto md:h-[600px]">
                
                {/* 1. HERO CELL (2x2) */}
                <div 
                    className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-3xl"
                    onClick={() => onMovieClick && onMovieClick(featured)}
                >
                    <img 
                        src={featured.image} 
                        alt={featured.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Content container ensuring min height on mobile */}
                    <div className="relative h-[300px] md:h-auto"></div>
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <span className="bg-[#00AEEF] text-black text-[10px] font-black uppercase px-2 py-1 mb-2 inline-block">Featured Premiere</span>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase leading-[0.9] mb-4">
                            {featured.title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2 max-w-md hidden md:block">
                            {featured.description}
                        </p>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                </div>

                {/* 2. TALL CELL (1x2) - First List Item */}
                {bentoItems[0] && (
                    <div 
                        className="md:col-span-1 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-3xl"
                        onClick={() => onMovieClick && onMovieClick(bentoItems[0])}
                    >
                         <img 
                            src={bentoItems[0].image} 
                            alt={bentoItems[0].title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                         <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                         <div className="absolute bottom-0 p-4">
                             <h4 className="text-xl font-bold text-white uppercase leading-none">{bentoItems[0].title}</h4>
                             <span className="text-[10px] text-[#00AEEF] font-mono mt-1 block">{bentoItems[0].duration}</span>
                         </div>
                    </div>
                )}

                 {/* 3. STANDARD CELL (1x1) - Second List Item */}
                {bentoItems[1] && (
                     <div 
                        className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-3xl bg-[#1A1A20]"
                         onClick={() => onMovieClick && onMovieClick(bentoItems[1])}
                    >
                        <div className="p-4 flex flex-col h-full justify-between relative z-10">
                            <span className="text-4xl font-black text-white/5 absolute top-0 right-2">02</span>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00AEEF] transition-colors">
                                <Play className="w-4 h-4 text-white ml-0.5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white uppercase leading-tight group-hover:text-[#00AEEF] transition-colors">{bentoItems[1].title}</h4>
                            </div>
                        </div>
                        <img src={bentoItems[1].image} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity blur-sm group-hover:blur-0" alt="" />
                    </div>
                )}

                {/* 4. INFO CELL (1x1) - Decorative */}
                <div className="md:col-span-1 md:row-span-1 bg-[#00AEEF] rounded-3xl p-4 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-[#009acb] transition-colors">
                    <span className="text-black font-black text-4xl leading-none mb-1">20+</span>
                     <span className="text-black text-[10px] font-bold uppercase tracking-widest">New Episodes</span>
                     <div className="w-8 h-1 bg-black mt-2"></div>
                </div>


                {/* 5. WIDE CELL (2x1) - Third List Item */}
                {bentoItems[2] && (
                     <div 
                        className="md:col-span-2 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-3xl"
                         onClick={() => onMovieClick && onMovieClick(bentoItems[2])}
                    >
                         <div className="absolute inset-0 flex">
                            <div className="w-1/2 h-full relative">
                                 <img src={bentoItems[2].image} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="w-1/2 h-full bg-[#1A1A20] p-4 flex flex-col justify-center">
                                 <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Trending</span>
                                  <h4 className="text-lg font-bold text-white uppercase leading-none mb-2">{bentoItems[2].title}</h4>
                                  <div className="flex items-center gap-2 text-[10px] text-white/60">
                                      <Play className="w-3 h-3" />
                                      Watch Now
                                  </div>
                            </div>
                         </div>
                    </div>
                )}

                {/* 6. STANDARD CELL (1x1) - Fourth List Item */}
                 {bentoItems[3] && (
                     <div 
                        className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-3xl"
                         onClick={() => onMovieClick && onMovieClick(bentoItems[3])}
                    >
                         <img 
                            src={bentoItems[3].image} 
                            alt={bentoItems[3].title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                         <div className="absolute bottom-3 left-3">
                             <h4 className="text-xs font-bold text-white uppercase">{bentoItems[3].title}</h4>
                         </div>
                    </div>
                )}

                {/* 7. STANDARD CELL (1x1) - Fifth List Item */}
                 {bentoItems[4] && (
                     <div 
                        className="md:col-span-1 md:row-span-1 relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10 hover:border-[#00AEEF] transition-colors"
                         onClick={() => onMovieClick && onMovieClick(bentoItems[4])}
                    >
                        <div className="absolute inset-0 bg-[#121217]"></div>
                         <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center z-10">
                              <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                  <span className="text-xl">🔥</span>
                              </div>
                              <h4 className="text-[10px] font-bold text-white uppercase line-clamp-2">{bentoItems[4].title}</h4>
                         </div>
                    </div>
                )}

            </div>
        </div>
    );
}
