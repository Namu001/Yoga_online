"use client";

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function MostSensationalSection({ title, description, items, onMovieClick }) {
    const scrollRef = useRef(null);
    const leftSideItems = items.slice(0, 3); // Small vertical cards
    const rightSideItems = items.slice(3); // Large horizontal cards

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-6">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{title}</h2>
                <p className="text-gray-400 text-base leading-relaxed">
                    {description || "Your personalized selection of premium content"}
                </p>
            </div>

            {/* Two-Column Layout */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Column: Continue Watching - Small Vertical Cards */}
                <div className="w-full md:w-[280px] shrink-0">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">

                        <div className="flex flex-col gap-3">
                            {leftSideItems.map((item, index) => (
                                <div
                                    key={`left-${index}`}
                                    onClick={() => onMovieClick && onMovieClick(item)}
                                    className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Small Thumbnail */}
                                    <div className="relative w-[80px] h-[80px] rounded-xl overflow-hidden shrink-0 bg-gray-800">
                                        <img
                                            src={item.thumbnail || item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        {/* Play Icon Overlay - Bottom Right */}
                                        <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="w-7 h-7 rounded-full bg-[#00AEEF] flex items-center justify-center shadow-[0_0_10px_rgba(0,174,239,0.5)]">
                                                <Play size={12} fill="currentColor" className="text-white translate-x-0.5" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-white truncate mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-gray-400 truncate">
                                            {item.duration || item.subtitle || `Season ${item.season || 1}`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Featured Content - Large Horizontal Cards */}
                <div className="flex-1 min-w-0 relative group/nav">
                    {/* Navigation Buttons - Overlaid on sides */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition-all text-white backdrop-blur-md active:scale-90 opacity-0 group-hover/nav:opacity-100"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 border border-white/10 hover:bg-black/60 transition-all text-white backdrop-blur-md active:scale-90 opacity-0 group-hover/nav:opacity-100"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Scrollable Container with Hidden Scrollbar */}
                    <div
                        ref={scrollRef}
                        className="grid grid-cols-2 md:flex gap-4 md:overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                        style={{
                            msOverflowStyle: 'none',  /* IE and Edge */
                            scrollbarWidth: 'none'   /* Firefox */
                        }}
                    >
                        {rightSideItems.map((item, index) => (
                            <div
                                key={`right-${index}`}
                                className="w-full md:w-[240px] md:shrink-0 group cursor-pointer"
                                onClick={() => onMovieClick && onMovieClick(item)}
                            >
                                {/* Image Container */}
                                <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[2/3] transform group-hover:scale-[1.02] transition-all duration-300 shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,174,239,0.15)]">
                                    <img
                                        src={item.thumbnail || item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Play Button - Bottom Right of Image */}
                                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-[#00AEEF] text-white p-2.5 rounded-full shadow-[0_0_15px_rgba(0,174,239,0.5)] hover:scale-110 transition-transform">
                                            <Play fill="currentColor" size={16} className="translate-x-0.5" />
                                        </div>
                                    </div>

                                    {/* Quality Badge - Top Right */}
                                    <div className="absolute top-3 right-3">
                                        <div className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
                                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">HD</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Info - Below Image */}
                                <div className="mt-4 px-1">
                                    <h3 className="text-sm md:text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-[#00AEEF] transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] md:text-xs text-gray-400">
                                        {item.category && <span className="text-[#00AEEF]/80">{item.category}</span>}
                                        {item.category && item.duration && <span className="opacity-30">•</span>}
                                        {item.duration && <span>{item.duration}</span>}
                                        {(item.duration || item.category) && item.year && <span className="opacity-30">•</span>}
                                        {item.year && <span>{item.year}</span>}
                                        {item.rating && (
                                            <>
                                                <span className="opacity-30">•</span>
                                                <span className="flex items-center gap-1 text-yellow-500/80">
                                                    ★ {item.rating}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Spacer to ensure last card is fully visible */}
                        <div className="hidden md:block shrink-0 w-40 h-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
